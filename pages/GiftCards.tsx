
import React, { useState } from 'react';

const GiftCards: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const giftCards = [
    { value: '$50', color: 'bg-[#E8E6E1]', textColor: 'text-primary' },
    { value: '$150', color: 'bg-[#95C2B9]', textColor: 'text-primary' },
    { value: '$250', color: 'bg-[#F2D96F]', textColor: 'text-primary' },
    { value: '$500', color: 'bg-[#D1A65E]', textColor: 'text-primary' },
  ];

  const faqs = [
    "Are Outsite Gift Cards physical or digital?",
    "How can I buy an Outsite Gift Card?",
    "How can I redeem an Outsite Gift Card?",
    "What can gift cards be used for?",
    "How can I check my Gift Credit balance?",
    "What's the difference between Outsite Gift Credit and Outsite Rewards Credit?",
    "Does gift credit expire?"
  ];

  return (
    <div className="fade-in bg-background-light min-h-screen">
      {/* Gift Cards Hero */}
      <section className="flex flex-col md:flex-row min-h-[70vh] items-center border-b border-gray-200">
        <div className="flex-1 px-8 md:px-24 py-20 bg-[#F2EFE6] flex items-center h-full">
          <div className="max-w-md">
            <h1 className="text-6xl md:text-8xl font-display text-primary mb-10 leading-[0.9] tracking-tight">
              Outsite Gift Cards
            </h1>
            <p className="text-gray-600 font-light text-[15px] leading-relaxed mb-12">
              Buy now, stay later. Outsite Gift Cards are redeemable for any booking at Outsite, or Outsite Membership.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3.5 rounded-full border border-gray-300 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shadow-sm">
                Redeem Gift Card
              </button>
              <button className="px-8 py-3.5 rounded-full bg-primary text-white text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-lg">
                Buy Gift Card
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full min-h-[500px] relative border-l border-gray-200">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnO9vbL7Wx3XJIZ-M7TmnGW7VThPWOHyaGUtR3I5XdOeh490EMma38tbFXGGHb4scNOEbcboalVlrKnD8_MFaD1m5Q_AKnHXRyj3lkMzweA3AIrAMFpisbe2AXFxtOhdPJHjOwIt1pPiW3-dU7tNo9WplWatRz11AYTAgPk19u2PUe4l1_x8rYwjTkezycLVQPnNiQN6M9UBVyl_Ga-qmivZb-YyA2y6s52nlZtwHfI15wClUoYMFPX7SlNNLqZeIrNHjU4UOcHWs" 
            alt="Friends laughing around a table" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-10 right-10">
            <button className="bg-primary text-white rounded-full px-5 py-2.5 shadow-lg flex items-center gap-2 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">chat_bubble</span> Help
            </button>
          </div>
        </div>
      </section>

      {/* The Perfect Gift Section */}
      <section className="py-32 px-6 text-center bg-background-light">
        <h2 className="text-4xl font-display text-primary mb-16 leading-tight">
          The perfect gift for the nomad<br />in your life.
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {giftCards.map((card, i) => (
            <div key={i} className={`${card.color} aspect-[1.6/1] rounded-sm flex overflow-hidden border border-black/5 shadow-sm group cursor-pointer hover:shadow-md transition-shadow`}>
              <div className="w-12 h-full border-r border-black/10 flex items-center justify-center">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 rotate-180 [writing-mode:vertical-lr]">OUTSITE</span>
              </div>
              <div className="flex-1 relative flex flex-col items-center justify-center">
                <div className="absolute top-0 right-0 bg-primary/10 px-4 py-1.5 text-[10px] font-bold text-primary">
                  {card.value}
                </div>
                <div className="text-center">
                  <h3 className="text-6xl font-display text-primary/80 leading-none mb-1">gift</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/60">CARD</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-background-light">
        <h2 className="text-4xl font-display text-primary text-center mb-20">Frequently Asked Questions</h2>
        
        <div className="max-w-2xl mx-auto divide-y divide-gray-300 border-t border-b border-gray-300">
          {faqs.map((faq, i) => (
            <div key={i} className="group">
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full py-6 flex items-center justify-between text-left hover:bg-black/5 transition-colors px-4"
              >
                <span className="text-[13px] font-medium text-gray-700 leading-snug">{faq}</span>
                <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center shrink-0 ml-4 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xs">
                    {openFaq === i ? 'remove' : 'add'}
                  </span>
                </div>
              </button>
              {openFaq === i && (
                <div className="px-4 pb-8 text-xs text-gray-500 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  Outsite gift cards are primarily digital and delivered instantly via email. You can purchase them directly through our website and send them to your chosen recipient with a custom message. They are valid for both accommodation bookings and membership fees.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Padding for footer visibility */}
      <div className="h-20 bg-background-light"></div>
    </div>
  );
};

export default GiftCards;
