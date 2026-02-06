
import React, { useState, useRef } from 'react';

const RealEstatePartners: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('ASIA');
  const submitRef = useRef<HTMLDivElement>(null);

  const scrollToSubmit = () => {
    submitRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const regions = ["ASIA", "EUROPE", "LATIN AMERICA", "UNITED STATES", "AFRICA"];

  const properties = {
    'ASIA': [
      { city: 'Weligama Bay', country: 'Sri Lanka', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT1NVmG52bXFNeQoUca-TT6yE2rca1H_8mHX798Np2AtjozY_0vPoyg5wvc5OaBzdgSLGgipQ4jLJJCbAPn0I1GvbXPnOBdXU1fSbqgJYGmHLLJp4wpb3q0-JiIWTS3dtiWZPAoiQqRNU_GFca4VN7KlF5hhJO55LT2tSVRSL7h4KfLHv4Zi6sa7np749CUY-q94Cw0dBTx_4IxIJGep0lIKF4oaufKVUAuahOVhWJoUBEGwebyRjafKITzygppNE33OS1m9ZJF4k' },
      { city: 'Bali', country: 'Indonesia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop', isNew: true },
      { city: 'Singapore', country: 'Singapore', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg-0m69go0ma4PV-X-nnNBfchm_sQXhR55ETAyFg1O4XlqbAiEYZL-GR0dll0sSV4WMneJQcQj_mUQKBQQPbTD1W_MJoLILN8-Tv3n709AEBPH1ZdYmK4fb3idbAzj3vvmBHifmVnpTdVsVAn0d1jLBprZuayiOPMV583D46JfwoOVd3iZIfKUWmuyiiaWncPTiFJJUqdtYgQ4bHAyuLw9mbf8fg1oMKeW2MfHdW2knxvisHgcBEFjAytLmcSN6e-Ad73yerCCF_U' }
    ]
  };

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen pt-[80px]">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="w-full aspect-[21/9] md:aspect-[21/7] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Real Estate Hero" 
          />
        </div>
        
        <div className="py-24 px-6 md:px-24 text-center max-w-4xl mx-auto space-y-10">
          <h1 className="text-5xl md:text-7xl font-display text-primary leading-tight tracking-tight">
            Increase your rental revenue by up to +50%
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Outsite is a coliving brand and operator that designs and manages residential and commercial properties to appeal to the growing market of remote workers and distributed teams. We deliver exceptional performance to our partners through smart design and tech-enabled operations.
          </p>
          <button 
            onClick={scrollToSubmit}
            className="bg-black text-white px-10 py-4 rounded-full font-condensed font-black uppercase tracking-ace-wide text-[13px] hover:scale-105 transition-transform shadow-xl"
          >
            Tell Us About Your Property
          </button>
        </div>
      </section>

      {/* Press Logos Section with Real Images */}
      <section className="py-16 border-y border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale hover:opacity-100 transition-opacity">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Forbes_logo.svg/1280px-Forbes_logo.svg.png" alt="Forbes" className="h-6 md:h-8 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/The_New_York_Times_logo.svg/1280px-The_New_York_Times_logo.svg.png" alt="NYT" className="h-6 md:h-8 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bloomberg_logo.svg/1280px-Bloomberg_logo.svg.png" alt="Bloomberg" className="h-5 md:h-7 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Economist_Logo.svg/1280px-The_Economist_Logo.svg.png" alt="The Economist" className="h-8 md:h-10 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/CNBC_logo.svg/1280px-CNBC_logo.svg.png" alt="CNBC" className="h-6 md:h-8 object-contain" />
        </div>
      </section>

      {/* What is Outsite? */}
      <section className="py-32 px-6 md:px-24 bg-[#FAF9F6] text-center">
        <h2 className="text-5xl md:text-7xl font-display text-primary mb-24 leading-tight italic">What is Outsite?</h2>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-8 text-left">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-md">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format" className="w-full h-full object-cover" alt="Direct Bookings" />
            </div>
            <div className="space-y-4">
               <h4 className="label-bold !text-[16px] text-primary">80% DIRECT BOOKINGS</h4>
               <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">25+ coliving spaces for remote workers, living and working on long term stays.</p>
            </div>
          </div>
          <div className="space-y-8 text-left">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-md">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format" className="w-full h-full object-cover" alt="Average Stay" />
            </div>
            <div className="space-y-4">
               <h4 className="label-bold !text-[16px] text-primary">20 NIGHTS OF AVERAGE STAY</h4>
               <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">A global community of Members, connected digitally.</p>
            </div>
          </div>
          <div className="space-y-8 text-left">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-md">
              <img src="https://images.unsplash.com/photo-1582719478237-c26ad0d60c41?q=80&w=800&auto=format" className="w-full h-full object-cover" alt="NPS Score" />
            </div>
            <div className="space-y-4">
               <h4 className="label-bold !text-[16px] text-primary">77 NPS SCORE</h4>
               <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">A brand trusted by digital nomads since 2015.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Leader Section */}
      <section className="py-40 px-6 md:px-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24">
            <h2 className="text-6xl md:text-8xl font-display text-primary leading-none mb-6 italic opacity-20">A market leader</h2>
            <p className="text-xl md:text-2xl font-sans font-light text-gray-400 max-w-2xl leading-relaxed">
              Outsite is the leader in remote work and travel segment with properties in the USA, EU, Latam, Africa, and Asia.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-8 md:gap-12 mb-16 border-b border-gray-100 pb-4 overflow-x-auto no-scrollbar">
            {regions.map((region) => (
              <button 
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap ${activeRegion === region ? 'text-primary border-b-2 border-primary pb-4' : 'text-gray-300 hover:text-gray-500 pb-4'}`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Property Slider Mockup */}
          <div className="flex gap-8 overflow-x-auto no-scrollbar pb-10 snap-x">
             {(properties[activeRegion as keyof typeof properties] || []).map((prop, i) => (
               <div key={i} className="min-w-[300px] md:min-w-[420px] snap-start group cursor-pointer relative">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-lg mb-4 relative">
                    <img src={prop.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={prop.city} />
                    {prop.isNew && (
                      <div className="absolute top-4 right-4 bg-[#BCECE0] text-primary px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-sm">NEW</div>
                    )}
                    <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
                      <h4 className="text-3xl font-display">{prop.city}</h4>
                      <p className="text-[11px] font-bold uppercase tracking-widest opacity-80">{prop.country}</p>
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-40 px-6 md:px-24 bg-[#FAF9F6] space-y-40">
        <div className="max-w-4xl mx-auto space-y-32">
          {/* Santa Teresa */}
          <div className="space-y-12">
            <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-xl">
               <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format" className="w-full h-full object-cover" alt="Santa Teresa" />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl md:text-6xl font-display leading-tight italic">Santa Teresa</h3>
              <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Costa Rica</p>
              <p className="text-[16px] text-gray-600 font-sans font-light leading-relaxed max-w-2xl">
                Outsite opened an 8 bedroom property in Santa Teresa in 2019. 2 years later, Outsite has expanded this space by 4 bungalows to keep up with demand.
              </p>
            </div>
          </div>

          {/* Biarritz */}
          <div className="space-y-12">
            <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-xl">
               <img src="https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=1600&auto=format" className="w-full h-full object-cover" alt="Biarritz" />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl md:text-6xl font-display leading-tight italic">Outsite Biarritz</h3>
              <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">France</p>
              <p className="text-[16px] text-gray-600 font-sans font-light leading-relaxed max-w-2xl">
                In 2019, Outsite opened a new licensee property in Biarritz in collaboration with a local landlord. Formerly called Hotel Gardenia, converting into an Outsite transcribed for the landlord into more revenue, longer stays, and a younger, more dynamic clientele.
              </p>
            </div>
          </div>

          {/* San Diego */}
          <div className="space-y-12">
            <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-xl">
               <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format" className="w-full h-full object-cover" alt="San Diego" />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl md:text-6xl font-display leading-tight italic">Outsite San Diego</h3>
              <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">California, USA</p>
              <p className="text-[16px] text-gray-600 font-sans font-light leading-relaxed max-w-2xl">
                In 2017, Outsite opened a new licensee property in the seaside town of Encinitas, California. Originally used as a short-term rental property, Outsite helped increase NOI by over 40%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Landlord Testimonial */}
      <section className="py-40 px-6 md:px-24 bg-[#EAE7DD]/30 border-y border-gray-200">
        <div className="max-w-xl mx-auto border border-gray-200 rounded-sm bg-white overflow-hidden shadow-2xl scale-105">
          <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Arthur Queron" 
            />
          </div>
          <div className="p-12 space-y-6 text-left">
            <span className="material-symbols-outlined text-5xl text-primary opacity-20">format_quote</span>
            <div>
              <h3 className="text-3xl font-display text-primary">Arthur Queron</h3>
              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-1">Landlord - Outsite Biarritz</p>
            </div>
            <div className="h-[1px] bg-gray-100 w-full" />
            <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed italic">
              "Overall, my workload & expenses decreased dramatically. The clientele is younger, easy-going & easier to manage. People appreciate (and participate in) the cleanliness & order. Outsite filters in ideal guests - no kids, no large families, mostly singles & couples."
            </p>
          </div>
        </div>
      </section>

      {/* Property Requirements */}
      <section className="py-40 px-6 md:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto text-center space-y-32">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl font-display text-primary italic leading-none">Property Requirements</h2>
            <p className="text-xl md:text-2xl font-sans font-light text-gray-400 max-w-2xl mx-auto">
              Our customers require lively, walkable surroundings, common social space, and quality finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 text-left">
             <div className="space-y-12">
                <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-xl">
                   <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format" className="w-full h-full object-cover" alt="Villas" />
                </div>
                <div className="space-y-6">
                   <h4 className="label-bold !text-2xl">VILLAS</h4>
                   <ul className="space-y-4 text-[15px] text-gray-600 font-sans font-light list-disc pl-5">
                      <li>Medium-sized properties for STR use, typically B&Bs or vacation rentals</li>
                      <li>Minimum 8 bedrooms / 10 beds</li>
                      <li>Bedroom-bathroom ratio: 1:1 / 2:1</li>
                      <li>Potential workspace area</li>
                      <li>Shared communal area and kitchen</li>
                   </ul>
                </div>
             </div>
             <div className="space-y-12">
                <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-xl">
                   <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format" className="w-full h-full object-cover" alt="Commercial" />
                </div>
                <div className="space-y-6">
                   <h4 className="label-bold !text-2xl">COMMERCIAL</h4>
                   <ul className="space-y-4 text-[15px] text-gray-600 font-sans font-light list-disc pl-5">
                      <li>Medium-large properties for STR use, typically boutique hotels or serviced apartment building</li>
                      <li>Minimum 25 bedrooms / 30 beds</li>
                      <li>Bedroom-bathroom ratio: 1:1 / 2:1</li>
                      <li>Potential coworking area</li>
                      <li>Shared communal area and kitchen</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-40 px-6 md:px-24 bg-[#FAF9F6] text-center border-y border-gray-100">
        <div className="max-w-4xl mx-auto space-y-24">
           <div className="space-y-6">
             <h2 className="text-6xl md:text-8xl font-display text-primary italic leading-none">How We Work</h2>
             <p className="text-xl md:text-2xl font-sans font-light text-gray-400">
                This is how we work with Owners and Landlords:
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
              {[
                { title: "MANAGEMENT CONTRACT", desc: "Are you a landlord or an institutional investor and want to outsource operations for a particular asset? We'll manage the space for you, for a fee on revenue and net profit." },
                { title: "LICENCING", desc: "Are you a landlord/operator who wants to keep operating? We licence the Outsite brand to landlords with shared values who want to offer a strong community experience." },
                { title: "PURCHASES", desc: "Do you wish to sell us an asset, or are a real estate broker or consultant? Feel free to send us a proposal." }
              ].map((item, i) => (
                <div key={i} className="space-y-6">
                   <h4 className="label-bold !text-[14px] text-primary">{item.title}</h4>
                   <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Submit a Property Detailed Form Section */}
      <section ref={submitRef} className="py-40 px-6 md:px-24 bg-white text-center">
        <div className="max-w-4xl mx-auto bg-[#F9F7F2] p-10 md:p-16 border border-gray-100 shadow-sm space-y-12 text-left">
           <div>
             <h2 className="text-5xl font-display mb-4">Submit a Property</h2>
             <p className="text-[14px] text-gray-500 font-sans font-light leading-relaxed">
               Have a property we might be interested in? Submit it here. If you'd like to connect with us about working together another way, <a href="#" className="underline font-medium text-primary">contact us here.</a>
             </p>
           </div>

           <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans">First Name*</label>
                  <input type="text" placeholder="First Name*" className="w-full bg-white border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans">Last Name*</label>
                  <input type="text" placeholder="Last Name" className="w-full bg-white border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans">Your Email Address*</label>
                  <input type="email" placeholder="Email" className="w-full bg-white border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans">Your Relation to Property*</label>
                  <select className="w-full bg-white border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm text-gray-400">
                    <option>Select...</option>
                    <option>Owner</option>
                    <option>Broker</option>
                    <option>Consultant</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans">Property Country *</label>
                  <select className="w-full bg-white border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm text-gray-400">
                    <option>Select Country</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans">Property City*</label>
                  <input type="text" placeholder="City" className="w-full bg-white border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans">Property Street Address*</label>
                  <input type="text" placeholder="123 Venture Boulevard" className="w-full bg-white border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans">Property URL (if applicable)</label>
                  <input type="text" placeholder="www.property.com" className="w-full bg-white border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans">Number of Bedrooms*</label>
                  <input type="number" className="w-full bg-white border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-gray-700 font-sans">Number of Bathrooms*</label>
                  <input type="number" className="w-full bg-white border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-medium text-gray-700 font-sans">Why do you think this property would be a good fit?*</label>
                <textarea placeholder="Additional Info" className="w-full bg-white border border-gray-200 py-4 px-4 h-32 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm resize-none"></textarea>
              </div>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-sm p-10 text-center space-y-3 cursor-pointer hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-gray-400 text-3xl">photo_camera</span>
                <p className="text-[12px] text-gray-600 font-medium font-sans">Drag and drop some image files here, or click to select files</p>
                <p className="text-[10px] text-gray-400 font-sans">(Only .jpeg and .png images are accepted)</p>
                <p className="text-[10px] text-gray-400 font-sans">Max 5 files</p>
              </div>

              <button type="button" className="w-full bg-primary text-white py-4 rounded-full font-condensed font-black uppercase tracking-ace-wide text-[14px] hover:bg-black transition-all shadow-xl">
                Send
              </button>
           </form>
        </div>
      </section>

      <div className="h-48 bg-[#FAF9F6]"></div>
    </div>
  );
};

export default RealEstatePartners;
