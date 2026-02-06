
import React from 'react';

interface BecomeAMemberProps {
  onApplyClick: () => void;
}

const BecomeAMember: React.FC<BecomeAMemberProps> = ({ onApplyClick }) => {
  return (
    <div className="fade-in bg-background-beige min-h-screen">
      {/* Page Header - Matched to Screenshot */}
      <header className="pt-24 pb-12 px-6 md:px-24 max-w-[1400px] mx-auto">
        <h1 className="text-[64px] md:text-[88px] font-display text-primary mb-6 leading-[0.9] tracking-tight">Outsite Membership</h1>
        <p className="text-[20px] md:text-[24px] font-serif font-light text-primary/80 max-w-3xl leading-snug">
          The membership that connects you to people, not just places.
        </p>
      </header>

      {/* Gallery Section */}
      <section className="px-6 md:px-24 max-w-[1400px] mx-auto mb-32">
        <div className="flex flex-col lg:flex-row gap-2 h-auto lg:h-[450px]">
          {/* Main Large Image */}
          <div className="flex-[2.5] relative overflow-hidden rounded-sm group">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Membership Balcony" 
            />
            <button className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-primary shadow-sm hover:bg-white transition-colors">
               <span className="material-symbols-outlined text-sm">grid_view</span> See all photos
            </button>
          </div>

          {/* Right Grid Column 1 */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex-1 overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=600&auto=format" className="w-full h-full object-cover" alt="Walking with board" />
            </div>
            <div className="flex-1 overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format" className="w-full h-full object-cover" alt="Indoor Lounge" />
            </div>
          </div>

          {/* Right Grid Column 2 */}
          <div className="flex-1 flex flex-col gap-2 relative">
            <div className="flex-1 overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1582719478237-c26ad0d60c41?q=80&w=600&auto=format" className="w-full h-full object-cover" alt="Pool" />
            </div>
            <div className="flex-1 overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format" className="w-full h-full object-cover" alt="Street View" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-24 px-6 md:px-24 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <p className="text-[11px] font-bold text-gray-400 mb-4 tracking-[0.2em] uppercase">COMING WITH? JOIN THE CLUB</p>
              <h2 className="text-[48px] md:text-[72px] font-display text-primary leading-[1] mb-8 tracking-tight">For people who live everywhere</h2>
              <p className="text-lg text-gray-500 font-serif font-light leading-relaxed">
                The only Membership for remote workers around the world, whether you’re travelling or in your home city.
              </p>
            </div>

            <div className="space-y-8 pt-8">
              {[
                { icon: 'lock', text: 'ACCESS MEMBERS ONLY LOCATIONS' },
                { icon: 'star', text: '1 WEEK FREE IN NEW DESTINATIONS' },
                { icon: 'percent', text: '50% OFF IN FLASH SALES' },
                { icon: 'account_balance_wallet', text: 'EARN CREDITS WITH EVERY STAY' },
                { icon: 'flight', text: '40% OFF EXTENDED STAYS' },
                { icon: 'calendar_today', text: 'NEW MEMBER MIXER EVERY MONTH' },
                { icon: 'work', text: 'JOB & SUBLETS BOARD' },
                { icon: 'stars', text: 'EXCLUSIVE LIFESTYLE PERKS' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                   <span className="material-symbols-outlined text-gray-300 text-2xl group-hover:text-primary transition-colors">{item.icon}</span>
                   <span className="text-[12px] md:text-[14px] font-bold text-primary uppercase tracking-[0.15em] font-sans">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-background-beige border border-gray-200 p-12 rounded-sm shadow-sm space-y-8">
               <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm">
                        <span className="text-white font-condensed font-black text-2xl">U</span>
                     </div>
                     <div>
                        <h4 className="text-[12px] font-black uppercase tracking-widest text-primary font-sans">YEARLY</h4>
                        <p className="text-[11px] text-gray-400 font-medium font-sans">Membership</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-3xl font-display">$199</p>
                     <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest font-sans">Per year</p>
                  </div>
               </div>
               <p className="text-[14px] text-gray-500 font-serif font-light leading-relaxed">
                 A flexible way to join United Strangers. Perfect for trying the lifestyle or planning a year of travel — renew only when you’re ready.
               </p>
               <button onClick={onApplyClick} className="w-full bg-primary text-white py-5 rounded-full font-sans font-bold uppercase tracking-widest text-[13px] hover:bg-black transition-all">
                 Apply now
               </button>
            </div>

            <div className="bg-[#F2D96F]/30 border border-[#F2D96F]/60 p-12 rounded-sm shadow-sm space-y-8">
               <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#F2D96F] flex items-center justify-center rounded-sm">
                        <span className="text-primary font-condensed font-black text-2xl">U</span>
                     </div>
                     <div>
                        <h4 className="text-[12px] font-black uppercase tracking-widest text-primary font-sans">LIFETIME</h4>
                        <p className="text-[11px] text-gray-400 font-medium font-sans">Membership</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-3xl font-display">$999</p>
                     <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest font-sans">Billed once</p>
                  </div>
               </div>
               <p className="text-[14px] text-gray-500 font-serif font-light leading-relaxed">
                 One payment, forever access. Built for committed remote workers and travelers who want United Strangers to always be part of their journey.
               </p>
               <button onClick={onApplyClick} className="w-full bg-primary text-white py-5 rounded-full font-sans font-bold uppercase tracking-widest text-[13px] hover:bg-black transition-all">
                 Apply now
               </button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-48 bg-background-beige"></div>
    </div>
  );
};

export default BecomeAMember;
