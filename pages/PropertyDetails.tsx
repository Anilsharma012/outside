
import React, { useState } from 'react';
import AmenitiesModal from '../components/AmenitiesModal';

const PropertyDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('SPACE');
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);

  const galleryImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBJQsj-6JFvGVX1RsYgYp6v2ryRTQv3hQRRl1aIM7AddFXsC2PvgdRlPUghS-26nNo4wdI2eFhb4F0xzx-NqSlRYz_QbOUvjgYG6omqiu6XmATFCdRAvh00XDz1A0uU0chIAuxslcTMY6YRng43kUAwaUPwbGyLS6RFZZAFrJEzbCUi3_uLYq50htA1-r_33D3GFdncoBPHTO1i2W7aE1RQvOoa3CO04nUQOVlLg0zz74KfTYVWTsGo64mYawnntUjGl2NzQcTTvfM',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format',
    'https://images.unsplash.com/photo-1582719478237-c26ad0d60c41?q=80&w=800&auto=format'
  ];

  const rooms = [
    { name: 'STUDIO', specs: 'King • 37 sq m • Sleeps 2', desc: 'Spacious private room with a king-size bed and ensuite bathroom. These rooms include a lounge area, kitchenette, desk, wardrobe, minibar and A/C.', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format' },
    { name: 'LARGE KING', specs: 'King • 25 sq m • Sleeps 2', desc: 'Large private room with a king-size bed, ensuite bathroom, desk, wardrobe, minibar and A/C.', img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format' },
    { name: 'LARGE FULL', specs: 'Full • 24 sq m • Sleeps 2', desc: 'Private room with a full-size bed, ensuite bathroom, and added space for comfort. Includes a double workstation, walk-in closet, minibar, and A/C.', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format' },
    { name: 'STANDARD DOUBLE', specs: 'Double • 19 sq m • Sleeps 2', desc: 'Spacious and comfortable private room with a queen or king-size bed, ensuite bathroom, desk, wardrobe, minibar, and A/C.', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format' },
    { name: 'STANDARD FULL', specs: 'Full • 14 sq m • Sleeps 2', desc: 'Private room with a full bed and ensuite bathroom, featuring a dedicated desk, minibar, wardrobe and A/C.', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format' },
    { name: 'STANDARD SINGLE', specs: 'Twin • 13 sq m • Sleeps 1', desc: 'Private room with a single bed and ensuite bathroom, featuring a dedicated desk, minibar, wardrobe and A/C.', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format' }
  ];

  const experiences = [
    { title: 'TERRACE', desc: 'Coffee and our moccamaster at...', img: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=600&auto=format' },
    { title: 'PINTXOS AND TAPAS', desc: 'Take a walk and find your new favourite dinner spot', img: 'https://images.unsplash.com/photo-1512100356132-d3220389324a?q=80&w=600&auto=format' },
    { title: 'PADEL AT CUCHILLA', desc: 'Your local padel court - bring a fi...', img: 'https://images.unsplash.com/photo-1626224580195-817ad992a7c8?q=80&w=600&auto=format' }
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Property Header */}
      <header className="py-10 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="mb-4">
          <p className="font-condensed font-black text-[13px] tracking-widest text-primary/40 uppercase">BY UNITED STRANGERS</p>
          <h1 className="text-5xl md:text-7xl font-display text-primary leading-none tracking-tight">Barcelona - Gothic Quarter</h1>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[13px] font-sans font-medium text-gray-500">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-primary FILL">star</span>
            <span className="font-bold text-primary">4.5</span>
            <span className="opacity-60">(23 reviews)</span>
          </div>
          <span className="opacity-20">•</span>
          <span className="uppercase tracking-widest text-[11px] font-bold">Slow City Living • Creative Old Town • Workspace</span>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[500px] md:h-[600px]">
          <div className="relative overflow-hidden rounded-sm bg-gray-100 group">
            <img src={galleryImages[0]} alt="Gothic Quarter Main" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
               <span className="bg-primary/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">SIGNATURE</span>
            </div>
            <div className="absolute bottom-6 left-6">
              <button className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 text-primary shadow-sm hover:bg-white transition-colors">
                 <span className="material-symbols-outlined text-sm">grid_view</span> See all photos
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {galleryImages.slice(1).map((img, i) => (
              <div key={i} className="overflow-hidden rounded-sm bg-gray-100">
                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Bar */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16">
        <div className="bg-white border border-gray-200 rounded-full flex items-center w-full max-w-[1000px] h-[72px] shadow-sm overflow-hidden mx-auto">
          <div className="flex-1 px-8 flex flex-col justify-center cursor-pointer hover:bg-gray-50 transition-colors">
            <label className="text-[10px] font-condensed font-black text-gray-400 uppercase tracking-widest mb-1">Location</label>
            <span className="text-[14px] font-sans font-bold text-primary truncate">Barcelona - Gothic Quart...</span>
          </div>
          <div className="h-10 w-[1px] bg-gray-100" />
          <div className="flex-1 px-8 flex flex-col justify-center cursor-pointer hover:bg-gray-50 transition-colors">
            <label className="text-[10px] font-condensed font-black text-gray-400 uppercase tracking-widest mb-1">Check-in</label>
            <span className="text-[14px] font-sans font-bold text-gray-300">Add dates</span>
          </div>
          <div className="h-10 w-[1px] bg-gray-100" />
          <div className="flex-1 px-8 flex flex-col justify-center cursor-pointer hover:bg-gray-50 transition-colors">
            <label className="text-[10px] font-condensed font-black text-gray-400 uppercase tracking-widest mb-1">Check-out</label>
            <span className="text-[14px] font-sans font-bold text-gray-300">Add dates</span>
          </div>
          <div className="h-10 w-[1px] bg-gray-100" />
          <div className="flex-[0.8] px-8 flex flex-col justify-center cursor-pointer hover:bg-gray-50 transition-colors">
            <label className="text-[10px] font-condensed font-black text-gray-400 uppercase tracking-widest mb-1">Guests</label>
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-sans font-bold text-primary">One guest</span>
              <span className="material-symbols-outlined text-gray-300 text-base">expand_more</span>
            </div>
          </div>
          <div className="pr-2 pl-4">
            <button className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md">
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <nav className="border-b border-gray-200 mb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex gap-10 overflow-x-auto no-scrollbar">
           {['SPACE', 'ROOMS & PRICES', 'EXPERIENCE', 'LOCATION', 'REVIEWS', 'THINGS TO KNOW'].map(tab => (
             <button 
               key={tab} 
               onClick={() => setActiveTab(tab)}
               className={`text-[12px] font-condensed font-black uppercase tracking-[0.2em] py-8 border-b-2 transition-all whitespace-nowrap ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
             >
               {tab}
             </button>
           ))}
        </div>
      </nav>

      {/* Space Info */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        <div className="space-y-10">
          <div>
            <p className="font-condensed font-black text-[13px] tracking-widest text-primary/40 uppercase mb-6">THE SPACE</p>
            <h2 className="text-5xl md:text-6xl font-display text-primary leading-none mb-10 tracking-tight">Your new home in Barcelona's Gothic Quarter.</h2>
            <p className="text-[16px] text-gray-500 font-sans font-light leading-relaxed max-w-xl">
              Once a classic Barcelona pension, Outsite Barcelona has been thoughtfully renovated into a bright, modern coliving space for remote workers. Rooms come with high ceilings, large windows, ample storage, ergonomic work setups, and in select rooms, private living areas.
            </p>
          </div>
        </div>

        <div className="bg-white p-2">
          <h3 className="text-[18px] font-bold text-primary mb-10">What's included</h3>
          <div className="grid grid-cols-1 gap-10">
             {[
               { icon: 'wifi', title: 'High-Speed Wi-Fi - 800 Mbps', desc: 'Reliable, fast internet throughout the house — perfect for calls, coworking, and streaming.' },
               { icon: 'desk', title: 'Dedicated Workspaces', desc: 'Comfortable desks and cowork-friendly areas designed to help you stay productive during your stay.' },
               { icon: 'vpn_key', title: 'Self check-in', desc: 'Flexible, easy arrivals with secure self check-in at all Outsite locations.' },
               { icon: 'groups', title: 'Community Events', desc: 'Join weekly activities, meet fellow members, and connect with new people wherever you are.' }
             ].map((item, i) => (
               <div key={i} className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-gray-400 text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="text-[14px] font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-[13px] text-gray-400 font-sans font-medium leading-relaxed">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
          <button 
            onClick={() => setIsAmenitiesOpen(true)}
            className="mt-12 bg-black text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-primary transition-colors shadow-lg"
          >
            Show all 17 amenities
          </button>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-40">
        <div className="mb-12">
          <h2 className="text-5xl font-display text-primary mb-4">Rooms</h2>
          <div className="flex items-center gap-2 text-gray-400 text-[13px] font-medium">
             <span className="material-symbols-outlined text-[18px]">meeting_room</span>
             <span>16 Private Rooms with Private Bathroom</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
           <button className="bg-white border border-gray-200 px-6 py-3 rounded-md flex items-center gap-3 text-[13px] font-medium text-gray-600 shadow-sm">
             <span className="material-symbols-outlined text-base">calendar_month</span> Add dates <span className="material-symbols-outlined text-base">arrow_forward</span> Add dates
           </button>
           <button className="bg-white border border-gray-200 px-6 py-3 rounded-md flex items-center gap-3 text-[13px] font-medium text-gray-600 shadow-sm">
             <span className="material-symbols-outlined text-base">person</span> One guest <span className="material-symbols-outlined text-base">expand_more</span>
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
           {rooms.map((room, i) => (
             <div key={i} className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-gray-100">
                  <img src={room.img} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-y-0 left-0 w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white/90 rounded-full p-2"><span className="material-symbols-outlined">chevron_left</span></button>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white/90 rounded-full p-2"><span className="material-symbols-outlined">chevron_right</span></button>
                  </div>
                  <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1.5">
                     {[1,2,3,4,5].map(dot => <div key={dot} className={`w-1.5 h-1.5 rounded-full ${dot === 1 ? 'bg-white' : 'bg-white/30'}`} />)}
                  </div>
                </div>
                <div className="space-y-4">
                   <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-display">{room.name}</h3>
                      <span className="material-symbols-outlined text-gray-300">work</span>
                   </div>
                   <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Private Room with Private Bathroom</p>
                   <div className="flex gap-6 text-[13px] text-gray-400 font-medium">
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">bed</span> {room.specs.split(' • ')[0]}</span>
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">crop_square</span> {room.specs.split(' • ')[1]}</span>
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">person</span> {room.specs.split(' • ')[2]}</span>
                   </div>
                   <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed min-h-[60px]">{room.desc}</p>
                   <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pt-6 border-t border-gray-100">
                      <button className="bg-white border border-primary text-primary px-8 py-3 rounded-md text-[13px] font-bold hover:bg-primary hover:text-white transition-all uppercase tracking-wider">Select Dates</button>
                      <p className="text-[12px] text-gray-400 font-medium italic">Select dates to see availability and detailed pricing</p>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Promo Message */}
        <div className="mt-32 bg-[#EAE7DD]/50 p-12 text-center rounded-sm">
           <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-primary/40 mb-4">STAY LONGER, SAVE MORE</h4>
           <p className="text-[15px] font-medium text-primary">Members save 15% on trips of 7+ nights, 20% on 30+ night trips and 25% on 60+ night trips.</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-40 bg-white">
        <div className="px-6 md:px-24 max-w-[1400px] mx-auto text-center">
           <p className="font-condensed font-black text-[13px] tracking-widest text-primary/40 uppercase mb-8">EXPERIENCE</p>
           <h2 className="text-6xl md:text-8xl font-display text-primary leading-none mb-6 tracking-tight">Travel slowly in Barcelona</h2>
           <p className="text-xl md:text-2xl font-display italic text-gray-400 mb-24">Take your time, get to know the city</p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              {experiences.map((exp, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm mb-8 bg-gray-100 shadow-sm">
                    <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">{i === 0 ? 'COMMUNITY' : (i === 1 ? 'EAT + DRINK' : 'MOVE + PLAY')}</p>
                    <h4 className="text-2xl font-display group-hover:italic transition-all uppercase">{exp.title}</h4>
                    <p className="text-[14px] text-gray-500 font-sans font-light">{exp.desc}</p>
                  </div>
                </div>
              ))}
           </div>

           <div className="flex justify-center gap-4 mt-20">
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
           </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-40 px-6 md:px-24 bg-[#FAF9F6] text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="font-condensed font-black text-[13px] tracking-widest text-primary/40 uppercase">LOCATION</p>
          <h2 className="text-6xl md:text-[6rem] font-display text-primary leading-none tracking-tighter">In the Heart of the Gothic Quarter</h2>
          <p className="text-lg md:text-xl text-gray-500 font-sans font-light leading-relaxed">
            Outsite Barcelona is located just a few minutes' walk from Las Ramblas, Plaça Reial, and the waterfront promenade. You're steps from indie cafes, pintxos bars, and centuries-old alleyways, while still having a quiet riad-style retreat to return to.
          </p>
          <button className="flex items-center gap-2 text-[13px] font-bold text-primary mx-auto border-b border-primary pb-1 group">
             Read more <span className="material-symbols-outlined text-[18px] group-hover:translate-y-1 transition-transform">expand_more</span>
          </button>
        </div>
      </section>

      {/* Map Section Mockup */}
      <section className="w-full h-[600px] relative overflow-hidden bg-gray-200">
         <img 
           src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format" 
           alt="Map Mockup" 
           className="w-full h-full object-cover grayscale opacity-50"
         />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
               <span className="material-symbols-outlined">location_on</span>
            </div>
         </div>
      </section>

      <div className="h-40"></div>
      
      {/* Amenities Modal */}
      <AmenitiesModal 
        isOpen={isAmenitiesOpen} 
        onClose={() => setIsAmenitiesOpen(false)} 
      />
    </div>
  );
};

export default PropertyDetails;
