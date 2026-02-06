
import React from 'react';

const Business: React.FC = () => {
  return (
    <div className="fade-in bg-background-light min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row min-h-[70vh] items-center border-b border-gray-200">
        <div className="flex-1 px-8 md:px-20 py-24 bg-[#F2EFE6] flex items-center justify-end">
          <div className="max-w-md w-full">
            <h1 className="text-5xl md:text-7xl font-display text-primary mb-8 leading-[1.1]">
              Business Memberships
            </h1>
            <p className="text-gray-600 font-light text-base leading-relaxed mb-12">
              An employee perk for the remote work era. Give everyone at your company Outsite Membership, at a discounted price.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-3 rounded-full border border-gray-300 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all">
                Book a Call
              </button>
              <button className="px-10 py-3 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full w-full min-h-[500px] bg-[#EAE7DD]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnpprcvnRm6VJ4iLe4tJqfm2g-c1wkWsDbxH1YpQ5qdDcW-RzGCqcoELKUIiLTUqzLFLOnaEKGKiNX0-STD9a5rYAH-6_7aaAXJGI5lAVerWwVq5ahKhrn0lN3BUWpmK9gisWFZ5QT9iRB-6SPhKj9rw54InleZ3As-9WsO98ReGMbbyE1zQ-PoKJFweP7jEyz8QOmiK-rF1ENv6Xf-ebupSULYCDzmnQKlABswojpZ9enhOsGJa0Q6G-5PeliGkmPkg6lkZklBXA" 
            alt="Person working at a wooden table" 
            className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
          />
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-24 leading-tight">
            A new team solution for the<br/>remote work era
          </h2>
          
          <div className="flex flex-col md:flex-row border border-gray-200 shadow-sm rounded-sm overflow-hidden bg-white">
            <div className="flex-1 p-12 md:p-16 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-8">format_quote</span>
                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6">
                  As a remote company, we had a super fun and productive time at Outsite Biarritz! We loved the flexibility and we actually want to do a multi-company workation next time with other fellow companies from Y Combinator.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-10">
                  I discovered Outsite individually as I spent a month at Outsite Santa Teresa. I immediately shared the concept to the team. Also as a CEO I wanted to make sure the team could also access the right spaces and the relevant community when they work remotely. We can keep organizing 'company workations', or now that they have a membership, they can also plan trips organically as they wish.
                </p>
              </div>
              <div>
                <p className="font-bold text-xs text-primary mb-1">Anh-Tho Chuong</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Co-founder & CEO of Get Lago</p>
              </div>
            </div>
            
            <div className="flex-1 bg-[#EAE7DD] min-h-[400px] relative flex items-center justify-center p-12">
               <div className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-gray-400">chevron_left</span>
               </div>
               <div className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                  <span className="material-symbols-outlined text-gray-400">chevron_right</span>
               </div>
               
               <div className="w-full aspect-square bg-white shadow-xl flex items-center justify-center p-8">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT1NVmG52bXFNeQoUca-TT6yE2rca1H_8mHX798Np2AtjozY_0vPoyg5wvc5OaBzdgSLGgipQ4jLJJCbAPn0I1GvbXPnOBdXU1fSbqgJYGmHLLJp4wpb3q0-JiIWTS3dtiWZPAoiQqRNU_GFca4VN7KlF5hhJO55LT2tSVRSL7h4KfLHv4Zi6sa7np749CUY-q94Cw0dBTx_4IxIJGep0lIKF4oaufKVUAuahOVhWJoUBEGwebyRjafKITzygppNE33OS1m9ZJF4k" 
                    alt="Get Lago Logo Space" 
                    className="w-full h-full object-contain grayscale"
                  />
               </div>
            </div>
          </div>
          
          <div className="bg-[#EAE7DD] border-x border-b border-gray-200 py-4 px-12 text-[10px] text-gray-500 font-bold text-center uppercase tracking-widest">
            Open Source Billing API for product-led SaaS, backed by Y Combinator.
          </div>
        </div>
      </section>

      {/* Spacer to allow for footer visibility in preview */}
      <div className="h-32"></div>
    </div>
  );
};

export default Business;
