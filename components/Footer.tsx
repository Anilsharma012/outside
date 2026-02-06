
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 px-6 md:px-24 border-t border-white/20">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section: Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="space-y-8">
            {/* Boxed Logo matching Header style */}
            <div className="inline-block border-[3px] border-white p-1">
              <h2 className="font-condensed font-black text-2xl leading-none text-center tracking-tighter text-white">UNITED<br/>STRANGERS</h2>
            </div>
            <p className="text-gray-400 text-[16px] font-serif italic leading-relaxed max-w-sm">
              Work anywhere. Live differently. Editorial hospitality for the global creative class.
            </p>
          </div>

          <div className="w-full max-w-md space-y-6">
            <h4 className="font-condensed font-black text-[13px] tracking-[0.2em] uppercase text-white/50">NEWSLETTER</h4>
            <h5 className="text-2xl font-display italic">Keep up with location openings.</h5>
            <div className="flex border-b-2 border-white/30 focus-within:border-white transition-colors pb-3 group">
               <input 
                 type="email" 
                 placeholder="your@email.com" 
                 className="bg-transparent border-none p-0 flex-1 text-lg outline-none focus:ring-0 placeholder-gray-700 font-sans font-light"
               />
               <button className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors">arrow_forward</button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 w-full mb-32">
          <div className="space-y-8">
            <h4 className="font-condensed font-black text-[14px] tracking-[0.2em] uppercase text-white">THE HOUSES</h4>
            <ul className="space-y-4">
              {['Signature Locations', 'Curated Stays', 'Places to Stay', 'New Openings', 'Real Estate Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-[14px] font-sans hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-condensed font-black text-[14px] tracking-[0.2em] uppercase text-white">COMMUNITY</h4>
            <ul className="space-y-4">
              {['Become a Member', 'Outsite Trips', 'The Journal', 'Member Perks', 'Business Stays'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-[14px] font-sans hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-condensed font-black text-[14px] tracking-[0.2em] uppercase text-white">SUPPORT</h4>
            <ul className="space-y-4">
              {['Contact Us', 'Help Center', 'Gift Cards', 'Mobile App', 'Sustainability'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-[14px] font-sans hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-condensed font-black text-[14px] tracking-[0.2em] uppercase text-white">FOLLOW</h4>
            <div className="flex flex-wrap gap-4">
               {['facebook', 'instagram', 'linkedin', 'twitter'].map((social) => (
                 <a key={social} href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:border-white hover:bg-white/10 transition-all">
                    <span className="material-symbols-outlined text-[18px]">{social === 'instagram' ? 'photo_camera' : (social === 'twitter' ? 'poker_chip' : social)}</span>
                 </a>
               ))}
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
          <p className="text-[11px] font-condensed font-black uppercase tracking-widest text-gray-500">
            © 2026 UNITED STRANGERS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[11px] font-condensed font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="text-[11px] font-condensed font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">TERMS & CONDITIONS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
