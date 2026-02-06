
import React, { useState } from 'react';
import WaitlistModal from '../components/WaitlistModal';

interface TripsProps {
  onTripDetailClick?: (location: string) => void;
  onStoryClick?: () => void;
}

const Trips: React.FC<TripsProps> = ({ onTripDetailClick, onStoryClick }) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tripCalendar = [
    {
      id: 1,
      title: "THE COASTAL RETREAT",
      location: "SAGRES",
      desc: "Go off the beaten path and connect with nature in the Algarve.",
      dates: "Mar 29 → Apr 26, 2026",
      nights: "28 Nights",
      img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1000&auto=format&fit=crop",
      buttonText: "View trip",
      buttonType: "solid"
    },
    {
      id: 2,
      title: "DESERT & DESIGN",
      location: "MARRAKESH",
      desc: "Desert energy meets design-led calm.",
      dates: "Apr 26 → May 24, 2026",
      nights: "28 Nights",
      img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=1000&auto=format&fit=crop",
      buttonText: "View trip",
      buttonType: "solid"
    },
    {
      id: 3,
      title: "SAN JUAN",
      location: "SAN JUAN",
      desc: "Sun, salsa, surf, soul. Explore the colorful streets of the oldest city in the US.",
      dates: "May 31 → Jun 14, 2026",
      nights: "14 Nights",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
      buttonText: "Join waitlist",
      buttonType: "outline"
    },
    {
      id: 4,
      title: "SURF CAMP",
      location: "AGUADILLA",
      desc: "Surf. Sun. Slow mornings by the sea. The ultimate tropical productivity boost.",
      dates: "Jun 14 → Jun 28, 2026",
      nights: "14 Nights",
      img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
      buttonText: "Join waitlist",
      buttonType: "outline"
    }
  ];

  const handleButtonClick = (trip: any) => {
    if (trip.buttonText === "Join waitlist") {
      setIsWaitlistOpen(true);
    } else {
      onTripDetailClick?.(trip.location);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Hero Section - Video Background */}
      <section className="relative h-[80vh] w-full bg-black overflow-hidden">
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.coverr.co/videos/coverr-surfing-the-waves-5627/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-white editorial-heading mb-6 leading-none !text-[12vw] md:!text-[9rem]">Outsite Trips</h1>
          <p className="text-white text-xl md:text-2xl font-light max-w-2xl opacity-90 leading-relaxed font-display italic">
            Curated one-month journeys for remote professionals who work and live - anywhere.
          </p>
        </div>
      </section>

      {/* 2026 Trips Calendar */}
      <section className="py-24 px-6 md:px-24 bg-[#F9F7F2]">
        <h2 className="text-6xl font-display mb-20 tracking-tighter italic">2026 Trips Calendar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-24 max-w-[1400px] mx-auto">
          {tripCalendar.map((trip) => (
            <div key={trip.id} className="group cursor-pointer" onClick={() => handleButtonClick(trip)}>
              <div className="aspect-[1.4/1] overflow-hidden mb-8 relative bg-gray-200 shadow-sm rounded-sm">
                <img src={trip.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={trip.title}/>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <span className="text-white font-condensed font-black text-7xl md:text-9xl tracking-tighter opacity-80 group-hover:opacity-100 transition-all drop-shadow-2xl">{trip.location}</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="label-bold !text-xl tracking-widest">{trip.title}</h3>
                <p className="text-gray-500 font-sans font-light text-[15px] leading-relaxed max-w-lg">{trip.desc}</p>
                <div className="flex flex-col text-[14px] font-condensed font-black text-gray-400">
                  <span>{trip.dates}</span>
                  <span>{trip.nights}</span>
                </div>
                <div className="pt-4">
                  <button className={`w-full py-4 font-condensed font-black uppercase tracking-[0.2em] text-[11px] transition-all rounded-full ${trip.buttonType === 'solid' ? 'bg-primary text-white hover:bg-black' : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50'}`}>{trip.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-white">
        {/* Quote Overlay */}
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Community"/>
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="bg-white p-12 md:p-16 max-w-2xl shadow-2xl rounded-sm border border-gray-100 text-center relative">
               <div className="flex justify-center mb-10">
                 <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl -mt-24 md:-mt-32" alt="Lane"/>
               </div>
               <p className="text-[15px] md:text-[18px] text-gray-600 leading-relaxed font-display italic mb-10">
                 "I booked a month in Lisbon with Outsite because I was tired of being alone — and somehow found the opposite of loneliness. I went from working in silence to sharing dinners, boat rides, and spontaneous beach days with people from all over the world. Outsite didn't just give me a place to stay — it reminded me how good it feels to make community wherever you are."
               </p>
               <h5 className="label-bold !text-sm mb-1">LANE</h5>
               <p className="text-[11px] text-gray-400 font-condensed font-bold uppercase tracking-widest">Head of Content, Zapier</p>
            </div>
          </div>
        </div>

        {/* Stories Section */}
        <div className="py-40 px-6 md:px-24 bg-[#F9F7F2]">
          <h2 className="text-center text-5xl md:text-7xl font-display text-primary mb-32 leading-tight">Meet the people who made<br/>the world their office.</h2>
          
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
               <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Jakob"/>
            </div>
            <div className="flex-1 space-y-10">
               <div className="space-y-2">
                 <h4 className="label-bold !text-lg text-primary">JAKOB</h4>
                 <p className="text-[12px] text-gray-400 font-condensed font-bold uppercase tracking-widest">Quantitative Trader from London</p>
               </div>
               <div className="h-[1px] bg-gray-200 w-full" />
               <h3 className="text-3xl md:text-4xl font-display leading-tight italic">"I started working remotely in 2017 - the work I do can be done anywhere"</h3>
               <p className="text-[16px] text-gray-500 font-sans font-light leading-relaxed">
                 I started working remotely in 2017 when I decided to escape the London corporate life that was slowly draining my soul. I realized the kind of work I do can be done from anywhere with an internet connection. Initially, I relocated to Bali and later Australia, but over time I've returned closer to Europe and developed a bit of a migration pattern approach to nomading.
               </p>
               <button 
                onClick={onStoryClick}
                className="label-bold !text-[12px] border border-primary px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all"
               >
                 Read full story
               </button>
               <div className="flex items-center gap-6 pt-6">
                  <span className="material-symbols-outlined text-gray-300 cursor-pointer hover:text-primary transition-colors">arrow_back_ios</span>
                  <span className="text-[12px] font-condensed font-black text-gray-400">01/03</span>
                  <span className="material-symbols-outlined text-gray-300 cursor-pointer hover:text-primary transition-colors">arrow_forward_ios</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book / FAQ */}
      <section className="py-40 px-6 md:px-24 bg-white border-y border-gray-100">
         <div className="max-w-[1400px] mx-auto">
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
               {[
                 { step: "STEP 1", icon: "public", title: "Check out our Trips and fill out the form - we'll be in touch with more details!", btn: "View Trips" },
                 { step: "STEP 2", icon: "calendar_month", title: "Schedule a call with our Head of Community, and secure your place on the trip.", btn: "Go to Form" },
                 { step: "STEP 3", icon: "flight_takeoff", title: "That's it - book your flights!", btn: null }
               ].map((item, i) => (
                 <div key={i} className="space-y-8 text-center md:text-left">
                    <div className="flex flex-col gap-6">
                      <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                      <h4 className="label-bold !text-base">{item.step}</h4>
                    </div>
                    <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed min-h-[60px]">{item.title}</p>
                    {item.btn && (
                      <button className="bg-primary text-white font-condensed font-black uppercase tracking-widest text-[11px] px-8 py-3 rounded-full hover:bg-black transition-all">
                        {item.btn}
                      </button>
                    )}
                 </div>
               ))}
            </div>

            {/* FAQ */}
            <div className="pt-32 border-t border-gray-100">
               <h2 className="text-center text-5xl md:text-7xl font-display text-primary mb-24 leading-tight italic">Frequently Asked Questions</h2>
               <div className="max-w-3xl mx-auto divide-y divide-gray-200">
                 {[
                   "Do I need to have a remote job to join?",
                   "How reliable is the WiFi?",
                   "Do I have to be a Member to join a Trip?",
                   "Who's going?",
                   "Whats included?",
                   "Whats not included?",
                   "Can I pick my room?",
                   "Do I need travel insurance?"
                 ].map((q, i) => (
                   <div key={i}>
                      <button 
                        onClick={() => toggleFaq(i)}
                        className="w-full py-8 flex items-center justify-between text-left group"
                      >
                        <span className="text-[15px] text-gray-700 font-sans font-medium">{q}</span>
                        <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">
                          {openFaq === i ? 'remove_circle' : 'add_circle'}
                        </span>
                      </button>
                      {openFaq === i && (
                        <div className="pb-10 text-[14px] text-gray-500 font-sans font-light leading-relaxed animate-in fade-in duration-300">
                          Yes, Outsite Trips are designed specifically for working professionals. We ensure consistent workspace and high-speed WiFi at every location so you can maintain your productivity while exploring the local culture and meeting like-minded people.
                        </div>
                      )}
                   </div>
                 ))}
               </div>
               <div className="text-center mt-16">
                  <button className="bg-primary text-white font-condensed font-black uppercase tracking-widest text-[12px] px-12 py-4 rounded-full shadow-lg">Show more</button>
               </div>
            </div>
         </div>
      </section>

      {/* Get in Touch Form */}
      <section className="py-40 px-6 md:px-24 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto text-center space-y-20">
          <div className="space-y-10">
            <h2 className="text-6xl md:text-[6rem] font-display tracking-tighter italic">Get in Touch</h2>
            <p className="text-xl md:text-2xl font-display italic text-gray-400">Need more info? Fill out the form below or schedule a call with us.</p>
            <button className="bg-black text-white px-12 py-5 rounded-full font-condensed font-black uppercase tracking-ace-wide text-[13px] shadow-xl hover:scale-105 transition-transform">
              Schedule a Call
            </button>
          </div>

          <form className="text-left space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="label-bold !text-[11px] !text-gray-400">Name*</label>
                <input type="text" className="w-full bg-white border border-gray-200 py-5 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans" />
              </div>
              <div className="space-y-4">
                <label className="label-bold !text-[11px] !text-gray-400">Email*</label>
                <input type="email" className="w-full bg-white border border-gray-200 py-5 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="label-bold !text-[11px] !text-gray-400">Select Trip(s)*</label>
              <select className="w-full bg-white border border-gray-200 py-5 px-6 appearance-none focus:ring-1 focus:ring-primary rounded-sm text-gray-400 font-sans outline-none">
                <option>Select...</option>
                <option>The Coastal Retreat - Sagres</option>
                <option>Desert & Design - Marrakesh</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="label-bold !text-[11px] !text-gray-400">Select Room Tier(s)*</label>
              <select className="w-full bg-white border border-gray-200 py-5 px-6 appearance-none focus:ring-1 focus:ring-primary rounded-sm text-gray-400 font-sans outline-none">
                <option>Select...</option>
                <option>Plus</option>
                <option>Signature</option>
                <option>Essential</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="label-bold !text-[11px] !text-gray-400">Where are you based?*</label>
              <input type="text" className="w-full bg-white border border-gray-200 py-5 px-6 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans" />
            </div>

            <button type="button" className="w-full bg-primary text-white py-8 rounded-full font-condensed font-black uppercase tracking-ace-wide text-[16px] hover:bg-black transition-colors shadow-2xl">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <div className="h-48 bg-[#FAF9F6]"></div>
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
};

export default Trips;
