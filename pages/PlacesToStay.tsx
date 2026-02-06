
import React from 'react';

interface Property {
  id: number;
  location: string;
  name: string;
  rating: string;
  details: string[];
  priceNightly: string;
  priceMonthly: string;
  image: string;
  hasOffer?: boolean;
  isNew?: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    location: "INDONESIA",
    name: "BALI - PERERENAN",
    rating: "4.5",
    details: ["11 bedrooms", "1 apartment"],
    priceNightly: "$75",
    priceMonthly: "$1,485",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    hasOffer: true
  },
  {
    id: 2,
    location: "UNITED STATES",
    name: "SAN FRANCISCO - PACIFIC HEIGHTS",
    rating: "4.5",
    details: ["9 bedrooms"],
    priceNightly: "$130",
    priceMonthly: "$2,730",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    location: "MEXICO",
    name: "MEXICO CITY - ROMA SUR",
    rating: "4.3",
    details: ["23 apartments", "7 bedrooms", "8 studios"],
    priceNightly: "$137",
    priceMonthly: "$2,308",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    location: "PORTUGAL",
    name: "LISBON - INTENDENTE",
    rating: "4.3",
    details: ["8 bedrooms"],
    priceNightly: "$60",
    priceMonthly: "$1,199",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    location: "UNITED STATES",
    name: "NEW YORK - CHELSEA",
    rating: "4.3",
    details: ["19 bedrooms"],
    priceNightly: "$140",
    priceMonthly: "$2,787",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
    hasOffer: true
  },
  {
    id: 6,
    location: "UNITED STATES",
    name: "SAN FRANCISCO - MISSION",
    rating: "4.6",
    details: ["8 bedrooms"],
    priceNightly: "$195",
    priceMonthly: "$3,410",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    location: "PORTUGAL",
    name: "ALGARVE - VILAMOURA",
    rating: "4.8",
    details: ["4 studios", "15 apartments", "19 bedrooms"],
    priceNightly: "$53",
    priceMonthly: "$1,255",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    location: "UNITED STATES",
    name: "NEW YORK - MANHATTAN MIDTOWN",
    rating: "4.0",
    details: ["8 bedrooms", "1 studio"],
    priceNightly: "$75",
    priceMonthly: "$2,056",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
    hasOffer: true
  },
  {
    id: 9,
    location: "PORTUGAL",
    name: "MADEIRA - PONTA DO SOL",
    rating: "4.8",
    details: ["15 bedrooms"],
    priceNightly: "$89",
    priceMonthly: "$1,827",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    location: "SPAIN",
    name: "BARCELONA - GOTHIC QUARTER",
    rating: "4.5",
    details: ["16 bedrooms"],
    priceNightly: "$107",
    priceMonthly: "$4,144",
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=800&auto=format&fit=crop"
  }
];

const PlacesToStay: React.FC = () => {
  return (
    <div className="fade-in bg-white min-h-screen">
      {/* Top Offer Banner */}
      <div className="bg-[#BCECE0] text-primary text-[10px] md:text-xs font-condensed font-black py-3 text-center uppercase tracking-wider flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-sm">local_offer</span>
        10% OFF - FEBRUARY LAST MINUTE DEALS <a className="underline ml-1 cursor-pointer font-black">LEARN MORE</a>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-display text-primary leading-tight tracking-tighter">Anywhere <span className="text-gray-400 font-sans text-sm font-medium ml-2">(61 properties)</span></h1>
            <p className="text-gray-400 text-xs font-sans font-medium mt-1 uppercase tracking-widest">Select your travel dates to see live availability and pricing across the collection.</p>
          </div>
          <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2 text-sm font-sans font-bold hover:bg-gray-50 transition-all uppercase tracking-widest">
            <span className="material-symbols-outlined text-lg">tune</span> Filters
          </button>
        </div>

        {/* Content Area */}
        <div className="relative">
          {/* Main Integrated Search Bar */}
          <div className="mb-12">
            <div className="bg-white border border-gray-200 rounded-full flex items-center w-full max-w-[900px] h-[64px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] mx-auto">
              <div className="flex-1 h-full px-8 flex flex-col justify-center cursor-pointer hover:bg-gray-50 rounded-l-full">
                <label className="text-[10px] font-condensed font-black text-gray-900 uppercase tracking-widest leading-none mb-1">Location</label>
                <span className="text-[14px] font-sans font-semibold text-gray-800">Anywhere</span>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div className="flex-1 h-full px-8 flex flex-col justify-center cursor-pointer hover:bg-gray-50">
                <label className="text-[10px] font-condensed font-black text-gray-900 uppercase tracking-widest leading-none mb-1">Check-in</label>
                <span className="text-[14px] font-sans font-medium text-gray-300">Add dates</span>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div className="flex-1 h-full px-8 flex flex-col justify-center cursor-pointer hover:bg-gray-50">
                <label className="text-[10px] font-condensed font-black text-gray-900 uppercase tracking-widest leading-none mb-1">Check-out</label>
                <span className="text-[14px] font-sans font-medium text-gray-300">Add dates</span>
              </div>
              <div className="h-8 w-[1px] bg-gray-200" />
              <div className="flex-[0.8] h-full px-8 flex flex-col justify-center cursor-pointer hover:bg-gray-50">
                <label className="text-[10px] font-condensed font-black text-gray-900 uppercase tracking-widest leading-none mb-1">Guests</label>
                <span className="text-[14px] font-sans font-semibold text-gray-800">One guest</span>
              </div>
              <div className="pr-2">
                <button className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md">
                  <span className="material-symbols-outlined">search</span>
                </button>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 pb-32">
            {properties.map((prop) => (
              <div key={prop.id} className="group cursor-pointer">
                {/* Image Area */}
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4 bg-gray-100">
                  <img src={prop.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={prop.name} />
                  {prop.hasOffer && (
                    <div className="absolute top-4 left-4 bg-[#BCECE0] text-primary px-3 py-1 text-[9px] font-condensed font-black uppercase tracking-widest shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[10px]">local_offer</span> 10% OFF
                    </div>
                  )}
                  {/* Pagination Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] font-condensed font-black text-gray-400 uppercase tracking-widest leading-none mb-1 flex items-center gap-1 italic">BY UNITED STRANGERS</p>
                      <h3 className="text-[20px] font-display text-primary tracking-tight leading-snug">{prop.name}</h3>
                      <p className="text-[11px] font-sans font-bold text-gray-400 uppercase tracking-widest">{prop.location}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary text-[14px] FILL">star</span>
                      <span className="text-[13px] font-sans font-bold">{prop.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-3 text-[12px] text-gray-400 font-sans font-medium py-1">
                    {prop.details.map((detail, idx) => (
                      <span key={idx} className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">{idx === 0 ? 'bed' : 'apartment'}</span> {detail}
                      </span>
                    ))}
                  </div>

                  <div className="pt-1 flex gap-2 items-baseline">
                    <span className="text-[13px] font-sans font-bold text-primary">From <span className="text-[15px] font-condensed font-black">{prop.priceNightly}</span>/night</span>
                    <span className="text-gray-300 font-sans">•</span>
                    <span className="text-[13px] font-sans font-bold text-primary font-condensed font-black">{prop.priceMonthly}</span>
                    <span className="text-[11px] font-sans font-bold text-gray-400 uppercase tracking-widest">/month</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesToStay;
