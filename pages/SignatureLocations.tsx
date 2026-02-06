
import React from 'react';

const SignatureLocations: React.FC = () => {
  const locations = [
    { city: 'Bali', name: 'Pererenan', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop' },
    { city: 'Lisbon', name: 'Cais do Sodré', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop' },
    { city: 'San Francisco', name: 'Mission', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop' },
    { city: 'New York', name: 'Chelsea', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop' }
  ];

  return (
    <div className="fade-in bg-background-light min-h-screen">
      <section className="py-32 px-12 border-b border-ace-border">
        <div className="max-w-6xl mx-auto text-center">
          <span className="font-condensed font-black uppercase tracking-ace-wide text-[16px] md:text-[22px] mb-8 block text-primary/40">Exclusive Houses</span>
          <h1 className="editorial-heading mb-12 tracking-tighter">Signature.</h1>
          <p className="text-2xl md:text-3xl font-display font-light text-primary/60 max-w-3xl mx-auto leading-relaxed italic">
            Outsite-designed and operated locations for consistent comfort, community, and workspace quality across the globe.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x border-b border-ace-border divide-ace-border">
        {locations.map((loc, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-gray-100">
              <img src={loc.img} className="w-full h-full object-cover" alt={loc.name} />
            </div>
            <div className="p-12 border-t border-ace-border bg-white group-hover:bg-ace-gray transition-colors min-h-[220px]">
              <span className="font-condensed font-black uppercase tracking-widest text-[11px] text-primary/40 mb-4 block">{loc.city}</span>
              <h3 className="text-4xl font-display group-hover:italic transition-all leading-none">{loc.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <section className="py-48 px-12 flex flex-col md:flex-row gap-24 items-center max-w-[1600px] mx-auto">
        <div className="md:w-1/2">
          <h2 className="editorial-heading leading-none tracking-tighter">The Standard of Stay.</h2>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 gap-12">
          {[
            { icon: 'star', text: 'CURATED BY DESIGN PROFESSIONALS' },
            { icon: 'wifi', text: '400MBPS ENTERPRISE GRADE WIFI' },
            { icon: 'groups', text: 'WEEKLY HOUSE DINNERS' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-8 group">
              <span className="material-symbols-outlined text-gray-400 text-4xl group-hover:text-primary transition-colors">{item.icon}</span>
              <span className="font-condensed font-black uppercase tracking-ace-wide text-gray-600 text-[18px] md:text-[24px] group-hover:text-primary transition-colors">{item.text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SignatureLocations;
