
import React from 'react';

interface CuratedLocationsProps {
  onExploreClick: () => void;
}

const CuratedLocations: React.FC<CuratedLocationsProps> = ({ onExploreClick }) => {
  const row1 = [
    { city: 'Cape Town', name: 'Green Point', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcLFHq2tzHmXvrFGjWB6YWW_4JubzjThcEMk9Gn8ldk6dFa9iWWBZZ5BVVyqZE1WvloT1F12K45v5w18M7p8xjFcN1v2BVX3qRGpoNsPHHeipF1duN2g5nOAiHgqjecbIc3u65QxZLyf_9IZhYJSFwEZGahDVFLvAjp64rYaCUu2wdOX1u9Ejr8ImReIgCvAT3rWucdWxzAACB90g76rWKi20QYBOknwHbjQYCuZp7nmM_ufOju0TYKz_PUEvNw7rSbpBWls6kMXI' },
    { city: 'Sri Lanka', name: 'Weligama', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT1NVmG52bXFNeQoUca-TT6yE2rca1H_8mHX798Np2AtjozY_0vPoyg5wvc5OaBzdgSLGgipQ4jLJJCbAPn0I1GvbXPnOBdXU1fSbqgJYGmHLLJp4wpb3q0-JiIWTS3dtiWZPAoiQqRNU_GFca4VN7KlF5hhJO55LT2tSVRSL7h4KfLHv4Zi6sa7np749CUY-q94Cw0dBTx_4IxIJGep0lIKF4oaufKVUAuahOVhWJoUBEGwebyRjafKITzygppNE33OS1m9ZJF4k' },
    { city: 'Cape Town', name: 'Camps Bay', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJdJ_PU88EPO5aauGl440dQwwo9CMekofq0K1uD1HPpdiUbVDmxUlxdbKzyTAtPohrZEKELdCSPvuFAkBJzAgBXomSpx-zlsRG9CvtSrZL2b-GkhX0INXAAZUT8z58VxaNvqqrn5pfaEhF_MPJla-q8GzDTlIBeukoqg2uy1bXBSwcLFIhHG9s9civVusqth8exHSJDgtdV8ocCHSYPm0jWxkCl6EoA7g8sL-hFNHxPTdc0tXDP03pQ5ovpdPTYU6aZ0KPjEGJZL4' },
    { city: 'Sofia', name: '', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4tqQtlCZK0EeDggbhvsRZN7NTxsuhSgSXo1Y-sYCBeptWNj1raAY7HbsTxRJXmiUuIf2Rq2WeGkqv6rXZn_0o_n29YC7s1bckpnGzaHWgwR5F_mV4EoKpbizyLqVETY2-6W1F441r8G8B1u_ysr-zLoi8oUegScTXouee89NRJDlbp4bx2aefvsZq71Ab1QVS93cJXuYFAU_1H_DK8IrFCFDozup-p5Rol6fwbwfbqNsG2UXX20A8jEsiHW8n3MJeMrBVVrgmV8I' }
  ];

  const row2 = [
    { city: 'Bali', name: 'Ubud', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNt223DnUYV20ozE97UR0ZZJZf5QLe-LSsLG39zfDe4cCnVhPIGbhCX9ieZc677JJl1n-ObKvIIr3Fx-xWOQ1HAr1-xlJnDK2QISyRGOihnUQ41W2u42Nz1WoFfDEiz3nEdqyQYqbYFE-mkGEgTeFeka9_7Ns8ppnFmpk_xBn1IpUh6IqMg3B3V1-zG0g3P-_3e3vQgHL7nuKa_UXX9IqFisecR8C8bxQzm93YsxmutXo6uCqZgqGjZtcMcyW7Lrl0YOGxy0tb4LQ' },
    { city: 'Playa Grande', name: '', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoX7QIALsO_Ps0HPiyU64p7doGTnay6ng7yiVvFAttWBivkpzzk3fimWJht8vp9De0JV2r2vrh0HxqNn8ZBEhNHq8kpMMTvE753wO-5tv77MmT8yLaGZQqx41PnVH116-hWxn6ArrlT3yKAH0HaPI3FWvNygDK3eE4Y_2NhM4m2LAclaadG-lD3YbF-auVZ4EBLpwTn7hMhqKL3vv6yP72y75ewtPGnXBzLU9wYRkb-tPlItdzEMGIMEU5NibDYMFitllAOoXUqHI' },
    { city: 'Singapore', name: 'Alma House', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg-0m69go0ma4PV-X-nnNBfchm_sQXhR55ETAyFg1O4XlqbAiEYZL-GR0dll0sSV4WMneJQcQj_mUQKBQQPbTD1W_MJoLILN8-Tv3n709AEBPH1ZdYmK4fb3idbAzj3vvmBHifmVnpTdVsVAn0d1jLBprZuayiOPMV583D46JfwoOVd3iZIfKUWmuyiiaWncPTiFJJUqdtYgQ4bHAyuLw9mbf8fg1oMKeW2MfHdW2knxvisHgcBEFjAytLmcSN6e-Ad73yerCCF_U' }
  ];

  return (
    <div className="fade-in bg-background-light min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="mb-4">
          <span className="font-display italic text-gray-500 text-xl tracking-[0.2em] uppercase">Curated</span>
          <h1 className="text-6xl md:text-8xl font-display text-primary mt-2">Locations</h1>
        </div>
        <p className="text-gray-500 text-sm max-w-sm mx-auto mb-10 leading-relaxed font-light">
          Independently operated stays, curated by Outsite for quality, comfort, and remote work.
        </p>
        <button 
          onClick={onExploreClick}
          className="bg-primary text-white px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition shadow-lg"
        >
          Explore Locations
        </button>
      </section>

      {/* Gallery Section Row 1 */}
      <section className="px-6 md:px-12 mb-8 relative">
         <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
            {row1.map((loc, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[380px] snap-start group cursor-pointer">
                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-3 relative">
                  <img src={loc.img} alt={loc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {i === 1 && (
                    <div className="absolute top-4 left-4">
                        <span className="material-symbols-outlined text-white text-xl drop-shadow-md">grid_view</span>
                    </div>
                  )}
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{loc.city} {loc.name ? `— ${loc.name}` : ''}</p>
              </div>
            ))}
         </div>
         <button className="absolute left-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md"><span className="material-symbols-outlined text-gray-400">chevron_left</span></button>
         <button className="absolute right-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md"><span className="material-symbols-outlined text-gray-400">chevron_right</span></button>
      </section>

      {/* Gallery Section Row 2 */}
      <section className="px-6 md:px-12 mb-24 relative">
         <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
            {row2.map((loc, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[380px] snap-start opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0 cursor-pointer">
                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-3">
                  <img src={loc.img} alt={loc.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{loc.city} {loc.name ? `— ${loc.name}` : ''}</p>
              </div>
            ))}
         </div>
         <button className="absolute left-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md"><span className="material-symbols-outlined text-gray-400">chevron_left</span></button>
         <button className="absolute right-16 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md"><span className="material-symbols-outlined text-gray-400">chevron_right</span></button>
      </section>

      {/* Features List Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-display text-primary leading-tight">
            What Makes a Property Curated?
          </h2>
        </div>
        <div className="md:w-1/2 space-y-8">
           {[
             { icon: 'location_on', text: 'LOCATED IN A REMOTE WORK HUB' },
             { icon: 'wifi', text: 'FAST WIFI AND WORKSPACE' },
             { icon: 'bed', text: 'COMFORTABLE PRIVATE ROOMS OR APARTMENTS' },
             { icon: 'groups', text: 'COMMUNITY ACTIVITIES' },
             { icon: 'pool', text: 'SHARED AMENITIES LIKE POOLS, TERRACES OR GYMS' },
             { icon: 'restaurant', text: 'KITCHEN AND/OR F&B ON-SITE' }
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-6">
                <span className="material-symbols-outlined text-gray-400 text-xl">{item.icon}</span>
                <span className="text-[11px] font-bold text-gray-600 uppercase tracking-[0.15em]">{item.text}</span>
             </div>
           ))}
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-display text-center mb-24">
            What You Get with<br/>Outsite Curated
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="px-10 py-10 text-center">
               <h3 className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-6">EVERYTHING IN ONE PLACE</h3>
               <p className="text-[13px] text-gray-500 leading-relaxed font-light max-w-[240px] mx-auto">
                 Manage all your bookings, perks, and payments from a single Outsite account.
               </p>
            </div>
            <div className="px-10 py-10 text-center">
               <h3 className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-6">DISCOUNTED RATES</h3>
               <p className="text-[13px] text-gray-500 leading-relaxed font-light max-w-[240px] mx-auto">
                 Enjoy exclusive rates you won't find on other booking sites or platforms.
               </p>
            </div>
            <div className="px-10 py-10 text-center">
               <h3 className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-6">ACCUMULATE REWARDS</h3>
               <p className="text-[13px] text-gray-500 leading-relaxed font-light max-w-[240px] mx-auto">
                 Earn credits every time you stay and use them toward your next adventure with Outsite.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote Section */}
      <section className="py-24 px-6 bg-background-light">
         <div className="max-w-4xl mx-auto bg-[#EAE7DD]/40 border border-gray-200 p-12 md:p-20 text-center rounded-sm">
            <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed mb-12 italic">
              Outsite has completely changed the way I travel and work. The spaces are beautiful, comfortable, and always in walkable neighbourhoods, but what really makes it special is the community. I've met people from all over the world who actually get the remote-work lifestyle. The WiFi is reliable, the houses are clean, and there's always this perfect balance of productivity and social connection. Every time I stay with Outsite, it feels like coming home in a different part of the world.
            </p>
            <div className="space-y-1">
               <p className="font-bold text-sm text-primary">Devon</p>
               <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Software Engineer</p>
            </div>
         </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-32"></div>
    </div>
  );
};

export default CuratedLocations;
