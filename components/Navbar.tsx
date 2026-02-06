
import React, { useState, useRef, useEffect } from 'react';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  onLocationsClick: () => void;
  onTripsClick: () => void;
  onDealsClick: () => void;
  onWhatIsOutsiteClick: () => void;
  onMobileAppClick: () => void;
  onBusinessClick: () => void;
  onRealEstatePartnersClick: () => void;
  onMembershipClick: () => void;
  onSignatureLocationsClick: () => void;
  onCuratedLocationsClick: () => void;
  onPlacesToStayClick: () => void;
  onHomeClick: () => void;
  isHome: boolean;
}

const BOOKING_CITIES = [
  'Athens',
  'Brooklyn',
  'Kyoto',
  'New York',
  'Palm Springs',
  'Seattle',
  'Seibu',
  'Sydney',
  'Toronto'
];

const Navbar: React.FC<NavbarProps> = ({ 
  onLocationsClick, 
  onTripsClick, 
  onDealsClick, 
  onWhatIsOutsiteClick,
  onMobileAppClick,
  onBusinessClick,
  onRealEstatePartnersClick,
  onMembershipClick,
  onSignatureLocationsClick,
  onCuratedLocationsClick,
  onPlacesToStayClick,
  onHomeClick,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [checkInDate, setCheckInDate] = useState<string>('February 6, 2026');
  const [checkOutDate, setCheckOutDate] = useState<string>('February 7, 2026');
  
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleAction = (action: () => void) => {
    action();
    setActiveDropdown(null);
  };

  const selectBookingLocation = (city: string) => {
    setSelectedLocation(city);
    setActiveDropdown(null);
  };

  const handleDateSelect = (day: number, target: 'in' | 'out') => {
    const formattedDate = `February ${day}, 2026`;
    if (target === 'in') setCheckInDate(formattedDate);
    else setCheckOutDate(formattedDate);
    setActiveDropdown(null);
  };

  // Simple calendar generator for Feb 2026 (Starts on Sunday)
  const renderCalendar = (target: 'in' | 'out') => {
    const days = Array.from({ length: 28 }, (_, i) => i + 1);
    const prevMonthDays = [1]; // Mock for visual
    const nextMonthDays = Array.from({ length: 14 }, (_, i) => i + 1);
    const selectedDay = parseInt((target === 'in' ? checkInDate : checkOutDate).match(/\d+/)?.[0] || '0');

    return (
      <div className="absolute top-full left-[-1px] w-[320px] bg-white border border-black shadow-2xl z-[150] animate-in fade-in slide-in-from-top-1 duration-200 overflow-hidden">
        {/* Calendar Header */}
        <div className="bg-[#231F20] text-white p-4 flex items-center justify-center relative">
          <h4 className="font-condensed font-black text-3xl uppercase tracking-tighter">February 2026</h4>
          <button className="absolute right-4 text-white">
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
        
        {/* Days of week */}
        <div className="grid grid-cols-7 text-center py-4 border-b border-black/5">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
            <span key={d} className="text-[14px] font-black text-black">{d}</span>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 text-center p-2">
          {/* Previous Month */}
          <span className="h-10 flex items-center justify-center text-gray-200 text-[14px]">1</span>
          
          {/* Current Month */}
          {days.map(d => (
            <button 
              key={d} 
              onClick={(e) => { e.stopPropagation(); handleDateSelect(d, target); }}
              className={`h-10 flex items-center justify-center text-[14px] transition-colors relative
                ${d === selectedDay ? 'bg-[#231F20] text-white font-bold' : 'text-black hover:bg-gray-100'}
              `}
            >
              {d}
            </button>
          ))}

          {/* Next Month */}
          {nextMonthDays.map(d => (
            <span key={`next-${d}`} className="h-10 flex items-center justify-center text-gray-200 text-[14px]">{d}</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <nav className="relative w-full z-[100] bg-white border-b border-black text-black" ref={navRef}>
      {/* Top Tier: Logo, Locations Search, and Booking Widget */}
      <div className="flex h-[90px] items-stretch border-b border-black">
        {/* Logo Section */}
        <div 
          onClick={onHomeClick} 
          className="w-[180px] shrink-0 border-r border-black flex items-center justify-center cursor-pointer p-4"
        >
          <div className="border-[3px] border-black p-1">
            <h2 className="font-condensed font-black text-xl leading-none text-center tracking-tighter text-black">UNITED<br/>STRANGERS</h2>
          </div>
        </div>

        {/* Locations and Language Section */}
        <div className="flex-1 flex items-center px-8 gap-8">
          <div className="flex items-center gap-3 cursor-pointer group text-black" onClick={() => toggleDropdown('locations-tier')}>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
            <span className="font-serif text-[24px]">Locations</span>
          </div>
          <div className="ml-auto flex items-center gap-1 cursor-pointer text-black">
            <span className="text-[12px] font-bold">EN</span>
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </div>
        </div>

        {/* Booking Widget Section */}
        <div className="hidden xl:flex items-stretch bg-ace-gray-bg border-l border-black">
          {/* Location Selection */}
          <div 
            onClick={() => toggleDropdown('booking-location')}
            className={`px-6 flex flex-col justify-center border-r border-black cursor-pointer transition-colors relative w-[200px] ${activeDropdown === 'booking-location' ? 'bg-white' : 'hover:bg-white/50'}`}
          >
            <span className="booking-label !text-black">Location</span>
            <div className="flex items-center gap-2">
               <span className="booking-value !text-black truncate">{selectedLocation || 'Choose Location *'}</span>
               <span className="material-symbols-outlined text-[16px] text-black" style={{ transform: activeDropdown === 'booking-location' ? 'rotate(180deg)' : 'none' }}>expand_more</span>
            </div>

            {activeDropdown === 'booking-location' && (
              <div className="absolute top-full left-[-1px] w-[calc(100%+2px)] bg-white border-x border-b border-black shadow-2xl z-[150] animate-in fade-in slide-in-from-top-1 duration-200">
                {BOOKING_CITIES.map((city, idx) => (
                  <button 
                    key={city}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectBookingLocation(city);
                    }}
                    className={`w-full px-6 py-4 text-left text-[15px] font-sans hover:bg-ace-gray-bg/30 transition-colors ${idx !== BOOKING_CITIES.length - 1 ? 'border-b border-black/10' : ''}`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Check In Selection */}
          <div 
            onClick={() => toggleDropdown('check-in')}
            className={`px-6 flex flex-col justify-center border-r border-black cursor-pointer transition-colors relative w-[180px] ${activeDropdown === 'check-in' ? 'bg-white' : 'hover:bg-white/50'}`}
          >
            <span className="booking-label !text-black">Check In</span>
            <span className="booking-value !text-black">{checkInDate}</span>
            {activeDropdown === 'check-in' && renderCalendar('in')}
          </div>

          {/* Check Out Selection */}
          <div 
            onClick={() => toggleDropdown('check-out')}
            className={`px-6 flex flex-col justify-center border-r border-black cursor-pointer transition-colors relative w-[180px] ${activeDropdown === 'check-out' ? 'bg-white' : 'hover:bg-white/50'}`}
          >
            <span className="booking-label !text-black">Check Out</span>
            <span className="booking-value !text-black">{checkOutDate}</span>
            {activeDropdown === 'check-out' && renderCalendar('out')}
          </div>

          <div className="px-6 flex flex-col justify-center border-r border-black cursor-pointer hover:bg-white/50 transition-colors w-[160px]">
            <span className="booking-label !text-black">Guests</span>
            <span className="booking-value !text-black">1 Adult, 0 Children</span>
          </div>
          <div className="px-6 flex flex-col justify-center border-r border-black cursor-pointer hover:bg-white/50 transition-colors">
            <span className="booking-label !text-black">Have a code?</span>
            <div className="flex items-center gap-2">
               <span className="booking-value !text-black">Select Code Type</span>
               <span className="material-symbols-outlined text-[16px] text-black">expand_more</span>
            </div>
          </div>
          <button className="bg-ace-orange px-8 flex items-center justify-center hover:bg-orange-500 transition-colors">
            <span className="font-condensed font-black text-2xl uppercase tracking-tighter text-black">Book Now</span>
          </button>
        </div>
      </div>

      {/* Bottom Tier: Menu Items */}
      <div className="bg-white flex h-[48px] items-center px-12 gap-10">
        <button onClick={() => toggleDropdown('locations')} className="nav-item-bottom !text-black">
          LOCATIONS <span className="material-symbols-outlined text-[16px] text-black" style={{ transform: activeDropdown === 'locations' ? 'rotate(180deg)' : 'none' }}>expand_more</span>
        </button>
        <button onClick={onTripsClick} className="nav-item-bottom !text-black">TRIPS</button>
        <button onClick={onDealsClick} className="nav-item-bottom !text-black">DEALS</button>
        <button onClick={() => toggleDropdown('outsite')} className="nav-item-bottom !text-black">
          WHAT IS OUTSITE <span className="material-symbols-outlined text-[16px] text-black" style={{ transform: activeDropdown === 'outsite' ? 'rotate(180deg)' : 'none' }}>expand_more</span>
        </button>
        <button onClick={() => toggleDropdown('business')} className="nav-item-bottom !text-black">
          FOR BUSINESS <span className="material-symbols-outlined text-[16px] text-black" style={{ transform: activeDropdown === 'business' ? 'rotate(180deg)' : 'none' }}>expand_more</span>
        </button>
        <button onClick={onMembershipClick} className="nav-item-bottom border-b border-black/20 !text-black">BECOME A MEMBER</button>
      </div>

      {/* Dropdown Containers for Bottom Menu */}
      {activeDropdown === 'locations' && (
        <div className="absolute top-full left-[12px] w-[240px] bg-white border-x border-b border-black shadow-2xl z-[150] animate-in fade-in slide-in-from-top-1 duration-200">
          <button onClick={() => handleAction(onSignatureLocationsClick)} className="w-full px-6 py-4 hover:bg-ace-gray-bg/30 text-left text-[13px] font-sans font-medium border-b border-black/10">Signature Locations</button>
          <button onClick={() => handleAction(onCuratedLocationsClick)} className="w-full px-6 py-4 hover:bg-ace-gray-bg/30 text-left text-[13px] font-sans font-medium border-b border-black/10">Curated Locations</button>
          <button onClick={() => handleAction(onPlacesToStayClick)} className="w-full px-6 py-4 hover:bg-ace-gray-bg/30 text-left text-[13px] font-sans font-medium">Places to Stay</button>
        </div>
      )}

      {activeDropdown === 'outsite' && (
        <div className="absolute top-full left-[380px] w-[220px] bg-white border-x border-b border-black shadow-2xl z-[150] animate-in fade-in slide-in-from-top-1 duration-200">
          <button onClick={() => handleAction(onWhatIsOutsiteClick)} className="w-full px-6 py-4 hover:bg-ace-gray-bg/30 text-left text-[13px] font-sans font-medium border-b border-black/10">About Us</button>
          <button onClick={() => handleAction(onMobileAppClick)} className="w-full px-6 py-4 hover:bg-ace-gray-bg/30 text-left text-[13px] font-sans font-medium">Mobile App</button>
        </div>
      )}

      {activeDropdown === 'business' && (
        <div className="absolute top-full left-[550px] w-[220px] bg-white border-x border-b border-black shadow-2xl z-[150] animate-in fade-in slide-in-from-top-1 duration-200">
          <button onClick={() => handleAction(onBusinessClick)} className="w-full px-6 py-4 hover:bg-ace-gray-bg/30 text-left text-[13px] font-sans font-medium border-b border-black/10">Team Retreats</button>
          <button onClick={() => handleAction(onRealEstatePartnersClick)} className="w-full px-6 py-4 hover:bg-ace-gray-bg/30 text-left text-[13px] font-sans font-medium">Real Estate Partners</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
