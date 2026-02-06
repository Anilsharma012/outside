
import React from 'react';

const Deals: React.FC = () => {
  return (
    <div className="fade-in bg-background-light min-h-screen">
      <section className="flex flex-col md:flex-row h-[70vh] items-stretch border-b border-ace-border">
        <div className="flex-1 p-24 bg-ace-gray flex flex-col justify-center border-r border-ace-border">
          <span className="label-bold mb-8 block">Exclusive Access</span>
          <h1 className="text-8xl editorial-heading mb-12">The Deals.</h1>
          <p className="text-xl font-light text-primary/60 max-w-sm mb-12">
            Long-term stays and last-minute openings, curated for members.
          </p>
          <div className="flex gap-6">
            <button className="label-bold border-b-2 border-primary pb-1">Become a Member</button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden grayscale">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Stay" />
        </div>
      </section>

      <section className="py-32 px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-8 border border-ace-border">
                <img src={`https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop&sig=${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Deal" />
              </div>
              <div className="relative">
                <span className="absolute -top-4 left-0 bg-ace-orange text-white px-2 py-1 label-bold !text-[8px] !tracking-wider">10% OFF</span>
                <span className="label-bold text-primary/30 mt-4 block">LAST MINUTE • FEB 2026</span>
                <h3 className="text-3xl font-display group-hover:italic transition-all mt-4">Portugal Stays</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Deals;
