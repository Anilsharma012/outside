
import React from 'react';

const WhatIsOutsite: React.FC = () => {
  const spaceTypes = [
    {
      id: 's1',
      title: 'APARTMENTS',
      desc: 'Enjoy private living quarters with a private bedroom, bathroom, lounge, kitchen, and workspace.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNt223DnUYV20ozE97UR0ZZJZf5QLe-LSsLG39zfDe4cCnVhPIGbhCX9ieZc677JJl1n-ObKvIIr3Fx-xWOQ1HAr1-xlJnDK2QISyRGOihnUQ41W2u42Nz1WoFfDEiz3nEdqyQYqbYFE-mkGEgTeFeka9_7Ns8ppnFmpk_xBn1IpUh6IqMg3B3V1-zG0g3P-_3e3vQgHL7nuKa_UXX9IqFisecR8C8bxQzm93YsxmutXo6uCqZgqGjZtcMcyW7Lrl0YOGxy0tb4LQ'
    },
    {
      id: 's2',
      title: 'STUDIOS',
      desc: 'Our Studios are private rooms with en suites, kitchenettes, and access to common areas in shared houses.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnO9vbL7Wx3XJIZ-M7TmnGW7VThPWOHyaGUtR3I5XdOeh490EMma38tbFXGGHb4scNOEbcboalVlrKnD8_MFaD1m5Q_AKnHXRyj3lkMzweA3AIrAMFpisbe2AXFxtOhdPJHjOwIt1pPiW3-dU7tNo9WplWatRz11AYTAgPk19u2PUe4l1_x8rYwjTkezycLVQPnNiQN6M9UBVyl_Ga-qmivZb-YyA2y6s52nlZtwHfI15wClUoYMFPX7SlNNLqZeIrNHjU4UOcHWs'
    },
    {
      id: 's3',
      title: 'PRIVATE ROOMS',
      desc: 'You\'ll have your own private room, and share the lounge, workspace, and kitchens. Private bathrooms are available in selected spaces.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtCILCLOC3MlYcuQDFpZl3gFnAy0moVwPbtUe8vKFZZkownWYP7Bk58iD9q3j9mU83cbriBf-lfkkn3wg64RHdQ4vf6wcyUOKqMOTYoTyqNFGTWEddICDNyfSvkDP06LHF23b4-3qGrjUYvYPfeRuZvR6GGOPCmqTkRW6izhL7xNpFGCLtZAT466dpQbwN67cixAuUzx0HqPFPFzoDIyqr6wMd3WL96o4Q1c2gHFcbeuj9MBlU4xgJSwUlI74adrq_7IgbiADTRUM'
    }
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row min-h-[500px] md:h-[65vh] items-stretch border-b border-gray-100">
        <div className="flex-1 px-8 md:px-24 py-20 flex flex-col justify-center">
          <div className="max-w-md">
            <h1 className="text-5xl md:text-7xl font-display text-primary mb-8 leading-[0.9] tracking-tighter italic">Stay with United Strangers</h1>
            <p className="text-gray-500 font-sans font-light text-base leading-relaxed mb-12 max-w-xs">
              Accommodation built for work, life, and everything in between.
            </p>
            <button className="bg-primary text-white px-10 py-3 rounded-full font-condensed font-black uppercase tracking-ace-wide text-[11px] hover:bg-black transition-all shadow-lg">
              Become a Member
            </button>
          </div>
        </div>
        <div className="flex-1 h-full min-h-[400px] relative overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoX7QIALsO_Ps0HPiyU64p7doGTnay6ng7yiVvFAttWBivkpzzk3fimWJht8vp9De0JV2r2vrh0HxqNn8ZBEhNHq8kpMMTvE753wO-5tv77MmT8yLaGZQqx41PnVH116-hWxn6ArrlT3yKAH0HaPI3FWvNygDK3eE4Y_2NhM4m2LAclaadG-lD3YbF-auVZ4EBLpwTn7hMhqKL3vv6yP72y75ewtPGnXBzLU9wYRkb-tPlItdzEMGIMEU5NibDYMFitllAOoXUqHI" 
            alt="Outsite lifestyle social" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6">
             <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-sm shadow-sm">
                <span className="material-symbols-outlined text-primary text-xl">grid_view</span>
             </div>
          </div>
        </div>
      </section>

      {/* Space Types Section */}
      <section className="py-32 px-6 md:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {spaceTypes.map(space => (
            <div key={space.id} className="flex flex-col group space-y-6">
              <h3 className="font-condensed font-black text-[15px] uppercase tracking-ace-wide text-primary">
                {space.title}
              </h3>
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-md bg-gray-100">
                <img 
                  src={space.image} 
                  alt={space.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <p className="text-[13px] text-gray-400 font-sans font-medium leading-relaxed max-w-sm">
                {space.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Padding */}
      <div className="h-48 bg-[#FAF9F6]"></div>
    </div>
  );
};

export default WhatIsOutsite;
