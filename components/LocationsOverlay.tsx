
import React from 'react';

interface LocationsOverlayProps {
  onClose: () => void;
}

const LocationsOverlay: React.FC<LocationsOverlayProps> = ({ onClose }) => {
  const regions = ["All", "Europe", "Latin America", "United States", "Africa", "Asia"];

  const countries = [
    {
      name: "Austria",
      cities: [{ name: "Vienna", type: "C", img: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=200&auto=format" }]
    },
    {
      name: "Bulgaria",
      cities: [{ name: "Sofia", type: "C", img: "https://images.unsplash.com/photo-1563289053-5296062f8d42?q=80&w=200&auto=format" }]
    },
    {
      name: "Colombia",
      cities: [
        { name: "Medellin - El Poblado", type: "S", img: "https://images.unsplash.com/photo-1596440590003-8d023363f707?q=80&w=200&auto=format" },
        { name: "Medellin - Manila", type: "S", img: "https://images.unsplash.com/photo-1595180175510-eb55845c05c7?q=80&w=200&auto=format" }
      ]
    },
    {
      name: "Costa Rica",
      cities: [
        { name: "Playa Grande", type: "C", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=200&auto=format" },
        { name: "Santa Teresa - Maramar", type: "S", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=200&auto=format" },
        { name: "Santa Teresa - Playa", type: "S", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=200&auto=format" }
      ]
    },
    {
      name: "Denmark",
      cities: [{ name: "Copenhagen", type: "C", img: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=200&auto=format" }]
    },
    {
      name: "France",
      cities: [
        { name: "Bordeaux", type: "S", img: "https://images.unsplash.com/photo-1549918830-b1fea31ba050?q=80&w=200&auto=format" },
        { name: "Paris", type: "C", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=200&auto=format" }
      ]
    },
    {
      name: "Indonesia",
      cities: [
        { name: "Bali - Pererenan", type: "S", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=200&auto=format" },
        { name: "Bali - Ubud", type: "C", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=200&auto=format" }
      ]
    },
    {
      name: "Mexico",
      cities: [
        { name: "Los Cabos", type: "S", img: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=200&auto=format" },
        { name: "Mexico City - Roma Sur", type: "S", img: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=200&auto=format" },
        { name: "Oaxaca City", type: "S", img: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?q=80&w=200&auto=format" }
      ]
    },
    {
      name: "Morocco",
      cities: [{ name: "Marrakesh", type: "S", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=200&auto=format" }]
    }
  ];

  return (
    <div className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-[2px] flex justify-center items-start pt-24 px-4 overflow-hidden" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-7xl flex overflow-hidden h-[80vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Sidebar */}
        <div className="w-[300px] bg-[#F9F7F2] p-10 flex flex-col shrink-0">
          <div className="flex-1">
            <div className="space-y-6">
              {regions.map((region) => (
                <button 
                  key={region}
                  className={`block text-[15px] font-medium text-left transition-colors ${region === 'All' ? 'text-primary border-b-2 border-primary w-fit pb-0.5 font-bold' : 'text-primary/60 hover:text-primary'}`}
                >
                  {region}
                </button>
              ))}
            </div>
            
            <button className="mt-12 bg-[#1A1A1A] text-white rounded-full px-10 py-3.5 text-sm font-bold tracking-tight hover:scale-[1.02] active:scale-95 transition-all">
              Explore on map
            </button>
          </div>

          {/* Legend */}
          <div className="pt-8 border-t border-primary/5 space-y-4">
            <div className="flex items-start gap-4">
              <span className="w-5 h-5 rounded-full bg-[#E6B48F] text-white text-[9px] font-black flex items-center justify-center shrink-0 mt-0.5">S</span>
              <div>
                <p className="text-[14px] font-bold text-primary leading-tight">Signature</p>
                <p className="text-[12px] text-primary/50 leading-tight">Operated by Outsite</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-5 h-5 rounded-full bg-[#BCECE0] text-primary text-[9px] font-black flex items-center justify-center shrink-0 mt-0.5">C</span>
              <div>
                <p className="text-[14px] font-bold text-primary leading-tight">Curated</p>
                <p className="text-[12px] text-primary/50 leading-tight">Operated by trusted partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Grid */}
        <div className="flex-1 bg-white p-12 overflow-y-auto no-scrollbar relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-primary/30 hover:text-primary p-2 rounded-full hover:bg-ace-gray transition-all z-10"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <div key={country.name} className="bg-[#F9F7F2] rounded-md p-8 min-h-[180px]">
                <h4 className="text-[17px] font-bold text-primary mb-6">{country.name}</h4>
                <div className="space-y-4">
                  {country.cities.map((city) => (
                    <div key={city.name} className="flex items-center justify-between group cursor-pointer hover:bg-white p-2 rounded-md transition-colors">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
                            <img src={city.img} alt={city.name} className="w-full h-full object-cover" />
                         </div>
                         <span className="text-[14px] text-primary/70 group-hover:text-primary transition-colors font-medium">{city.name}</span>
                      </div>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black shrink-0 ${city.type === 'S' ? 'bg-[#E6B48F] text-white' : 'bg-[#BCECE0] text-primary'}`}>
                        {city.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Padding */}
          <div className="h-12"></div>
        </div>
      </div>
    </div>
  );
};

export default LocationsOverlay;
