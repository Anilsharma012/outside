
import React, { useState, useEffect, useRef } from 'react';
import { SIGNATURE_LOCATIONS, CURATED_LOCATIONS, TRIPS } from '../constants';

interface HomeProps {
  onPropertyClick: () => void;
  onBecomeMemberClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onPropertyClick, onBecomeMemberClick }) => {
  const [curatedIndex, setCuratedIndex] = useState(0);
  const [tripsIndex, setTripsIndex] = useState(0);
  
  // Auto-slide logic
  useEffect(() => {
    const curatedInterval = setInterval(() => {
      setCuratedIndex((prev) => (prev + 1) % CURATED_LOCATIONS.length);
    }, 5000);
    
    const tripsInterval = setInterval(() => {
      setTripsIndex((prev) => (prev + 1) % TRIPS.length);
    }, 5500);

    return () => {
      clearInterval(curatedInterval);
      clearInterval(tripsInterval);
    };
  }, []);

  const nextCurated = () => setCuratedIndex((prev) => (prev + 1) % CURATED_LOCATIONS.length);
  const prevCurated = () => setCuratedIndex((prev) => (prev - 1 + CURATED_LOCATIONS.length) % CURATED_LOCATIONS.length);

  const nextTrips = () => setTripsIndex((prev) => (prev + 1) % TRIPS.length);
  const prevTrips = () => setTripsIndex((prev) => (prev - 1 + TRIPS.length) % TRIPS.length);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full bg-black overflow-hidden cursor-pointer" onClick={onPropertyClick}>
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="https://cdn.coverr.co/videos/coverr-walking-around-the-city-7679/1080p.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-[1400px]">
            <h1 className="text-white font-display italic tracking-tighter leading-[0.8] drop-shadow-2xl mb-10 text-[8vw]">
              Work anywhere.<br/><span className="not-italic">Live differently.</span>
            </h1>
            <p className="font-condensed font-black uppercase tracking-[0.3em] text-xl text-white opacity-90 mx-auto">
              EDITORIAL HOSPITALITY FOR THE GLOBAL CREATIVE CLASS.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Content: Our Houses */}
      <section className="py-32 border-b border-ace-border">
        <div className="px-12 mb-20 flex flex-col md:flex-row justify-between items-baseline gap-8">
          <div>
            <span className="font-condensed font-black uppercase tracking-widest text-2xl mb-6 block text-primary/60">Our Houses</span>
            <h2 className="font-display italic tracking-tighter leading-[0.85] text-primary text-6xl">Around the world.</h2>
          </div>
          <button className="font-condensed font-black uppercase tracking-widest text-xl border-b-[3px] border-primary pb-2 hover:opacity-50 transition-opacity">
            Explore All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x border-y border-ace-border divide-ace-border">
          {SIGNATURE_LOCATIONS.map((loc) => (
            <div key={loc.id} onClick={onPropertyClick} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="p-12 bg-white group-hover:bg-ace-gray-bg/20 transition-colors border-t border-ace-border min-h-[220px]">
                <span className="font-condensed font-black uppercase tracking-widest text-[11px] text-primary/40 mb-4 block">{loc.city}</span>
                <h3 className="font-display tracking-tighter group-hover:italic transition-all leading-none text-4xl">{loc.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: CURATED CAROUSEL SECTION */}
      <section className="py-32 bg-background-beige border-b border-ace-border overflow-hidden">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6 tracking-widest uppercase">CURATED</h2>
          <p className="text-lg md:text-xl font-sans font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
            See more of the world with Outsite Curated, a selection of the best-in-class independent stays.
          </p>
        </div>

        <div className="relative px-6 md:px-12 group">
          <div 
            className="flex gap-4 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${curatedIndex * 25}%)` }}
          >
            {[...CURATED_LOCATIONS, ...CURATED_LOCATIONS].map((loc, idx) => (
              <div key={idx} className="min-w-[45%] md:min-w-[24%] shrink-0 group/card cursor-pointer relative" onClick={onPropertyClick}>
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-200 shadow-lg">
                  <img src={loc.image} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105" alt={loc.city} />
                  <div className="absolute bottom-6 left-6 text-white drop-shadow-xl">
                    <h4 className="text-xl md:text-2xl font-sans font-bold">{loc.city} {loc.name ? `- ${loc.name}` : ''}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevCurated}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-20"
          >
            <span className="material-symbols-outlined text-gray-400">chevron_left</span>
          </button>
          <button 
            onClick={nextCurated}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-20"
          >
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>
        </div>
      </section>

      {/* NEW: OUTSITE TRIPS POSTER CAROUSEL */}
      <section className="py-32 bg-background-beige border-b border-ace-border overflow-hidden">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6 tracking-widest uppercase">OUTSITE TRIPS</h2>
          <p className="text-lg md:text-xl font-sans font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Curated one-month journeys for remote professionals who work - and live - anywhere.
          </p>
        </div>

        <div className="relative px-6 md:px-12 group">
          <div 
            className="flex gap-1 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${tripsIndex * 20}%)` }}
          >
            {/* Stamp Card 1: Marrakesh */}
            <div className="min-w-[80%] md:min-w-[20%] aspect-square bg-[#0047AB] p-8 flex flex-col relative shrink-0">
               <div className="h-full border-l-[20px] border-yellow-400/30 pl-4">
                 <h3 className="text-white font-condensed font-black text-[12vw] md:text-[8rem] leading-none opacity-80 rotate-180 [writing-mode:vertical-rl] uppercase">MARRAKESH</h3>
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 aspect-square border-4 border-white shadow-2xl overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=400" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>

            {/* Stamp Card 2: Ericeira */}
            <div className="min-w-[80%] md:min-w-[20%] aspect-square bg-[#ADD8E6] flex flex-col items-center justify-center p-8 shrink-0 relative">
               <div className="w-1/2 aspect-square border-4 border-white shadow-2xl overflow-hidden mb-4">
                  <img src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=400" className="w-full h-full object-cover" />
               </div>
               <h3 className="font-serif italic text-white text-5xl md:text-7xl tracking-tighter mt-4">ERICEIRA</h3>
            </div>

            {/* Stamp Card 3: Medellin */}
            <div className="min-w-[80%] md:min-w-[20%] aspect-square bg-[#000080] p-8 flex flex-col shrink-0">
               <h3 className="text-yellow-500 font-condensed font-black text-6xl md:text-8xl mb-4 tracking-tighter uppercase">MEDELLIN</h3>
               <div className="flex-1 flex items-end justify-center">
                  <div className="w-3/5 aspect-square border-4 border-white shadow-2xl overflow-hidden mb-10">
                     <img src="https://images.unsplash.com/photo-1596440590003-8d023363f707?q=80&w=400" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>

            {/* Stamp Card 4: Los Cabos */}
            <div className="min-w-[80%] md:min-w-[20%] aspect-square bg-[#808000] flex flex-col items-center justify-center p-8 shrink-0 relative">
               <div className="w-1/2 aspect-square border-4 border-white shadow-2xl overflow-hidden mb-4">
                  <img src="https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=400" className="w-full h-full object-cover" />
               </div>
               <h3 className="font-serif italic text-white text-4xl md:text-6xl tracking-tighter uppercase text-center mt-4">LOS CABOS</h3>
            </div>

            {/* Stamp Card 5: Sagres */}
            <div className="min-w-[80%] md:min-w-[20%] aspect-square bg-[#3D2B1F] p-8 flex items-center justify-between shrink-0">
               <div className="w-1/2 aspect-square border-4 border-white shadow-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=400" className="w-full h-full object-cover" />
               </div>
               <h3 className="text-orange-500 font-condensed font-black text-7xl md:text-[8rem] rotate-180 [writing-mode:vertical-rl] leading-none uppercase">SAGRES</h3>
            </div>
            
            {/* Clone first card for loop feel */}
            <div className="min-w-[80%] md:min-w-[20%] aspect-square bg-[#0047AB] p-8 flex flex-col relative shrink-0 opacity-50">
               <div className="h-full border-l-[20px] border-yellow-400/30 pl-4">
                 <h3 className="text-white font-condensed font-black text-[12vw] md:text-[8rem] rotate-180 [writing-mode:vertical-rl] uppercase">MARRAKESH</h3>
               </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTrips}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-20"
          >
            <span className="material-symbols-outlined text-gray-400">chevron_left</span>
          </button>
          <button 
            onClick={nextTrips}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-20"
          >
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>
        </div>
      </section>

      {/* Featured Block */}
      <section className="flex flex-col md:flex-row items-stretch border-b border-ace-border">
        <div className="flex-1 p-12 md:p-32 border-r border-ace-border flex flex-col justify-center">
          <span className="font-condensed font-black uppercase tracking-widest text-2xl mb-12 block text-primary/60">Experience</span>
          <h2 className="font-display italic tracking-tighter leading-[0.85] text-primary mb-16 text-7xl">
            Built for<br/>connection,<br/>tuned for focus.
          </h2>
          <p className="text-2xl text-primary/80 leading-relaxed font-serif font-light max-w-xl">
            United Strangers creates spaces for independent travelers and the local community to connect in meaningful ways.
          </p>
          <div className="mt-20">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onBecomeMemberClick();
              }}
              className="px-16 py-8 bg-primary text-white font-condensed font-black uppercase tracking-widest text-2xl hover:bg-primary/90 transition-all shadow-2xl"
            >
              Become a Member
            </button>
          </div>
        </div>
        <div className="flex-1 bg-ace-gray-bg grayscale group cursor-pointer" onClick={onPropertyClick}>
           <img 
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop" 
            alt="Lifestyle" 
            className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </section>

      {/* Help Button (Corner Chat) */}
      <div className="fixed bottom-10 right-10 z-[500]">
        <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center gap-3 hover:scale-105 transition-transform">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="font-sans font-bold text-sm">Help</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
