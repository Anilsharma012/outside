
import React from 'react';

const MobileApp: React.FC = () => {
  return (
    <div className="fade-in bg-background-light min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row min-h-[75vh] items-center border-b border-gray-200">
        <div className="flex-1 px-8 md:px-24 py-20 bg-[#F2EFE6] flex items-center h-full">
          <div className="max-w-md">
            <h1 className="text-6xl md:text-7xl font-display text-primary mb-10 leading-[1] tracking-tight">
              Download the Outsite Mobile App
            </h1>
            <p className="text-gray-600 font-light text-[15px] leading-relaxed mb-12">
              Explore new locations, plan your next trip, find your check-in details and meet your housemates with the Outsite App.
            </p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-2.5 rounded-sm flex items-center gap-3 transition hover:opacity-80">
                <span className="material-symbols-outlined text-2xl">apple</span>
                <div className="text-left leading-none uppercase">
                  <div className="text-[7px] font-bold opacity-60">Download on the</div>
                  <div className="text-[12px] font-bold">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-6 py-2.5 rounded-sm flex items-center gap-3 transition hover:opacity-80">
                <span className="material-symbols-outlined text-2xl">play_arrow</span>
                <div className="text-left leading-none uppercase">
                  <div className="text-[7px] font-bold opacity-60">Get it on</div>
                  <div className="text-[12px] font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full min-h-[500px] relative bg-[#BCECE0] flex items-center justify-center border-l border-gray-200 overflow-hidden">
          {/* Main Floating Phone Mockup */}
          <div className="relative w-72 md:w-80 h-[580px] bg-white rounded-[40px] shadow-2xl border-[8px] border-primary overflow-hidden transform translate-y-20">
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT1NVmG52bXFNeQoUca-TT6yE2rca1H_8mHX798Np2AtjozY_0vPoyg5wvc5OaBzdgSLGgipQ4jLJJCbAPn0I1GvbXPnOBdXU1fSbqgJYGmHLLJp4wpb3q0-JiIWTS3dtiWZPAoiQqRNU_GFca4VN7KlF5hhJO55LT2tSVRSL7h4KfLHv4Zi6sa7np749CUY-q94Cw0dBTx_4IxIJGep0lIKF4oaufKVUAuahOVhWJoUBEGwebyRjafKITzygppNE33OS1m9ZJF4k" 
               alt="App Screen" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="absolute top-10 right-10">
            <button className="bg-primary text-white rounded-full px-5 py-2.5 shadow-lg flex items-center gap-2 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">chat_bubble</span> Help
            </button>
          </div>
        </div>
      </section>

      {/* Explore & Plan Section */}
      <section className="flex flex-col md:flex-row items-center border-b border-gray-200 bg-white overflow-hidden">
        <div className="flex-1 h-full min-h-[600px] bg-[#FDF6D0] flex items-center justify-center p-12 relative">
           <div className="w-64 md:w-72 h-[520px] bg-white rounded-[35px] shadow-2xl border-[6px] border-primary overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnO9vbL7Wx3XJIZ-M7TmnGW7VThPWOHyaGUtR3I5XdOeh490EMma38tbFXGGHb4scNOEbcboalVlrKnD8_MFaD1m5Q_AKnHXRyj3lkMzweA3AIrAMFpisbe2AXFxtOhdPJHjOwIt1pPiW3-dU7tNo9WplWatRz11AYTAgPk19u2PUe4l1_x8rYwjTkezycLVQPnNiQN6M9UBVyl_Ga-qmivZb-YyA2y6s52nlZtwHfI15wClUoYMFPX7SlNNLqZeIrNHjU4UOcHWs" 
                alt="Explore Screen" 
                className="w-full h-full object-cover"
              />
           </div>
        </div>
        <div className="flex-1 px-8 md:px-24 py-20">
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-8">Explore & Plan</h2>
          <ul className="space-y-6">
            {[
              "Discover Outsite Spaces in urban, coastal, or alpine locations around the world.",
              "Get all the details you need about each location and the neighborhood.",
              "Use our new filters to find the perfect destination for your next adventure."
            ].map((text, i) => (
              <li key={i} className="flex gap-4">
                <span className="material-symbols-outlined text-gray-300">check_circle</span>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Manage Your Trips Section */}
      <section className="flex flex-col md:flex-row-reverse items-center border-b border-gray-200 bg-white overflow-hidden">
        <div className="flex-1 h-full min-h-[600px] bg-[#E6B48F] flex items-center justify-center p-12 relative">
           <div className="w-64 md:w-72 h-[520px] bg-white rounded-[35px] shadow-2xl border-[6px] border-primary overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoX7QIALsO_Ps0HPiyU64p7doGTnay6ng7yiVvFAttWBivkpzzk3fimWJht8vp9De0JV2r2vrh0HxqNn8ZBEhNHq8kpMMTvE753wO-5tv77MmT8yLaGZQqx41PnVH116-hWxn6ArrlT3yKAH0HaPI3FWvNygDK3eE4Y_2NhM4m2LAclaadG-lD3YbF-auVZ4EBLpwTn7hMhqKL3vv6yP72y75ewtPGnXBzLU9wYRkb-tPlItdzEMGIMEU5NibDYMFitllAOoXUqHI" 
                alt="Trips Screen" 
                className="w-full h-full object-cover"
              />
           </div>
        </div>
        <div className="flex-1 px-8 md:px-24 py-20">
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-8">Manage Your Trips</h2>
          <ul className="space-y-6">
            {[
              "Easily manage your trips, make reservation requests, and report any issue you have during your stay.",
              "Find all the details you need to ensure a smooth check-in, such as directions, door codes, wifi details, and room navigation.",
              "Find out who else is staying in the same property during your stay.",
              "Have access to local recommendations provided by our community managers for each one of your stays."
            ].map((text, i) => (
              <li key={i} className="flex gap-4">
                <span className="material-symbols-outlined text-gray-300">check_circle</span>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Connect Section */}
      <section className="flex flex-col md:flex-row items-center border-b border-gray-200 bg-white overflow-hidden">
        <div className="flex-1 h-full min-h-[600px] bg-[#C2D6A4] flex items-center justify-center p-12 relative">
           <div className="w-64 md:w-72 h-[520px] bg-white rounded-[35px] shadow-2xl border-[6px] border-primary overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnO9vbL7Wx3XJIZ-M7TmnGW7VThPWOHyaGUtR3I5XdOeh490EMma38tbFXGGHb4scNOEbcboalVlrKnD8_MFaD1m5Q_AKnHXRyj3lkMzweA3AIrAMFpisbe2AXFxtOhdPJHjOwIt1pPiW3-dU7tNo9WplWatRz11AYTAgPk19u2PUe4l1_x8rYwjTkezycLVQPnNiQN6M9UBVyl_Ga-qmivZb-YyA2y6s52nlZtwHfI15wClUoYMFPX7SlNNLqZeIrNHjU4UOcHWs" 
                alt="Connect Screen" 
                className="w-full h-full object-cover"
              />
           </div>
        </div>
        <div className="flex-1 px-8 md:px-24 py-20">
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-8">Connect</h2>
          <ul className="space-y-6">
            {[
              "Connect with other Outsite Members.",
              "Share networking opportunities.",
              "RSVP for Events.",
              "Access Outsite Deals and Perks."
            ].map((text, i) => (
              <li key={i} className="flex gap-4">
                <span className="material-symbols-outlined text-gray-300">check_circle</span>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Available on Section */}
      <section className="py-32 px-6 bg-[#FAF9F6] text-center">
         <div className="max-w-2xl mx-auto">
            <div className="w-12 h-12 bg-accent-mint rounded-full flex items-center justify-center mx-auto mb-10">
               <span className="material-symbols-outlined text-primary">smartphone</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display text-primary mb-12">Available on iOS & Android.</h2>
            <div className="flex justify-center gap-6">
              <button className="bg-black text-white px-8 py-3 rounded-sm flex items-center gap-3 transition hover:opacity-80">
                <span className="material-symbols-outlined text-2xl">apple</span>
                <div className="text-left leading-none uppercase">
                  <div className="text-[7px] font-bold opacity-60">Download on the</div>
                  <div className="text-[12px] font-bold">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-8 py-3 rounded-sm flex items-center gap-3 transition hover:opacity-80">
                <span className="material-symbols-outlined text-2xl">play_arrow</span>
                <div className="text-left leading-none uppercase">
                  <div className="text-[7px] font-bold opacity-60">Get it on</div>
                  <div className="text-[12px] font-bold">Google Play</div>
                </div>
              </button>
            </div>
         </div>
      </section>

      {/* Footer Padding */}
      <div className="h-32 bg-background-light"></div>
    </div>
  );
};

export default MobileApp;
