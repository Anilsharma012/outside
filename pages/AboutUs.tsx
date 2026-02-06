
import React from 'react';

const AboutUs: React.FC = () => {
  const stats = [
    { value: '2015', label: 'Founded in Santa Cruz, California' },
    { value: '5,000+', label: 'Members worldwide' },
    { value: '50+', label: 'Spaces for remote workers' }
  ];

  const peopleCards = [
    { title: 'TRUST & SUPPORT', desc: 'Our community pledges to be part of a safe and inclusive space for everyone.', linkLabel: 'Code of Conduct', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnO9vbL7Wx3XJIZ-M7TmnGW7VThPWOHyaGUtR3I5XdOeh490EMma38tbFXGGHb4scNOEbcboalVlrKnD8_MFaD1m5Q_AKnHXRyj3lkMzweA3AIrAMFpisbe2AXFxtOhdPJHjOwIt1pPiW3-dU7tNo9WplWatRz11AYTAgPk19u2PUe4l1_x8rYwjTkezycLVQPnNiQN6M9UBVyl_Ga-qmivZb-YyA2y6s52nlZtwHfI15wClUoYMFPX7SlNNLqZeIrNHjU4UOcHWs' },
    { title: 'DIVERSITY AT OUTSITE', desc: "We're committed to becoming a place where everyone can feel at home.", linkLabel: 'Letter From Our CEO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNt223DnUYV20ozE97UR0ZZJZf5QLe-LSsLG39zfDe4cCnVhPIGbhCX9ieZc677JJl1n-ObKvIIr3Fx-xWOQ1HAr1-xlJnDK2QISyRGOihnUQ41W2u42Nz1WoFfDEiz3nEdqyQYqbYFE-mkGEgTeFeka9_7Ns8ppnFmpk_xBn1IpUh6IqMg3B3V1-zG0g3P-_3e3vQgHL7nuKa_UXX9IqFisecR8C8bxQzm93YsxmutXo6uCqZgqGjZtcMcyW7Lrl0YOGxy0tb4LQ' },
    { title: 'MEMBER HUB', desc: 'We aim to facilitate authentic connections, online and offline.', linkLabel: 'Meet Our Community', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBugE7TjbNI1Y8XxZVUDK2QkaJfQ4x5KdQGCqQpwdvUuI1rbARmvTR7U6oZP-CgBvcgoY_-V-faKkAd5Eav9Mp36v51-AggMW4ripROU2pxr9x48CAyBMSYsKsZdyefQ9CfrUjxwKsC4DbIQXqhr5VqGjbnHy2kUpeZRe7vnWn5yKB_CAlXUtJhxtWkc8e46KbFyI48f7F6gJ7Y5wNH4chaYv4TitmepjBaWnBpC3nYVyQKmnNmv3pxGjmnxTN04E8ZLObRR7tqm7I' }
  ];

  const placesCards = [
    { title: 'LOCAL EXPERIENCES', desc: 'Outsite stays allow you to form deep connections to the people and places you encounter.', linkLabel: 'View all Locations', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY7KWdzroHupoGXE1-lTDqHUXFwNyamXnde1tdEsMLsrwzrHnbw56CJcX2KrQb6l7aaF4_gmHGBsT2ALlcIWNOVr5k1gETwCwgkMrj_-vye1kSfmBsdjJK4W0HmoIdochhhczMJNmh4wL9J1Lu13O6w2dlwoo41Stj05897sHjJyOJ6IXZe_m4czafdmwAAp479OGbi4uxvaeVXwUV8NbjjmJVD7cHOLhkN9Z8XPrpdmLGBp9s92strfJAB96i_9uuSEG2ETOaOMA' },
    { title: 'SHARED SPACES', desc: 'Outsite creates spaces for long-term travelers and the local community to connect.', linkLabel: 'Outsite Cowork Cafe', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoX7QIALsO_Ps0HPiyU64p7doGTnay6ng7yiVvFAttWBivkpzzk3fimWJht8vp9De0JV2r2vrh0HxqNn8ZBEhNHq8kpMMTvE753wO-5tv77MmT8yLaGZQqx41PnVH116-hWxn6ArrlT3yKAH0HaPI3FWvNygDK3eE4Y_2NhM4m2LAclaadG-lD3YbF-auVZ4EBLpwTn7hMhqKL3vv6yP72y75ewtPGnXBzLU9wYRkb-tPlItdzEMGIMEU5NibDYMFitllAOoXUqHI' },
    { title: 'COMMUNITY INITIATIVES', desc: 'Where possible, we\'ll work with local non-profits to support those who need it the most.', linkLabel: 'Find Out More', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz16L3iGIxF-jXdjXmduiB6EwmddeK1mBvWTgzAMSOnNgwGIfprs4UegpI6v_mh9bkyvnlALOUhu5AofnViJRAwBcBL8bElvK0LlXpHcGhxyeknxSitU3Hth6FhNx5hluBCSDyK6TzMgvm4Xj7pT1V91ZWzcCNyHII8alFm8sEio8jiSf6iL-obGHnR-oYhlpkyouvcSXC-l9HRwvsUzk2BbeDU_gaxZCXBhc-pCqKtooCqJPiwPr-DopnZU1KfYQ6O8tgXbzePes' }
  ];

  const team = [
    { name: 'EMMANUEL BE', role: 'CEO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY7KWdzroHupoGXE1-lTDqHUXFwNyamXnde1tdEsMLsrwzrHnbw56CJcX2KrQb6l7aaF4_gmHGBsT2ALlcIWNOVr5k1gETwCwgkMrj_-vye1kSfmBsdjJK4W0HmoIdochhhczMJNmh4wL9J1Lu13O6w2dlwoo41Stj05897sHjJyOJ6IXZe_m4czafdmwAAp479OGbi4uxvaeVXwUV8NbjjmJVD7cHOLhkN9Z8XPrpdmLGBp9s92strfJAB96i_9uuSEG2ETOaOMA' },
    { name: 'LIZ FR', role: 'COO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkK2gdSMcdC8yta0cBJMg7d5v0MysVyZ0imDccwQQ5dgN-NSuBdkwybc-2cyPvFMi_GxRTz8yGj9UeRKLcmCZIlBHDNbfwpx3lJUuYgmZDCk_HDoE0xxpq_PJTTMumzlqeIPVlsh7meZ1JsafRED_B06osip2FQ7d8KT5NQe5PiyP_x4VuhkmOih3_7LdqLmfHUXtRVZHc_737LBu8Ii4K8BARdPLpj5SEa1R9azAZou3C3qiLl4uZUsMHRxyFt7gT5mP7_0orygE' },
    { name: 'STIJN BE', role: 'CTO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNt223DnUYV20ozE97UR0ZZJZf5QLe-LSsLG39zfDe4cCnVhPIGbhCX9ieZc677JJl1n-ObKvIIr3Fx-xWOQ1HAr1-xlJnDK2QISyRGOihnUQ41W2u42Nz1WoFfDEiz3nEdqyQYqbYFE-mkGEgTeFeka9_7Ns8ppnFmpk_xBn1IpUh6IqMg3B3V1-zG0g3P-_3e3vQgHL7nuKa_UXX9IqFisecR8C8bxQzm93YsxmutXo6uCqZgqGjZtcMcyW7Lrl0YOGxy0tb4LQ' },
    { name: 'STEVEN US', role: 'CFO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoX7QIALsO_Ps0HPiyU64p7doGTnay6ng7yiVvFAttWBivkpzzk3fimWJht8vp9De0JV2r2vrh0HxqNn8ZBEhNHq8kpMMTvE753wO-5tv77MmT8yLaGZQqx41PnVH116-hWxn6ArrlT3yKAH0HaPI3FWvNygDK3eE4Y_2NhM4m2LAclaadG-lD3YbF-auVZ4EBLpwTn7hMhqKL3vv6yP72y75Offset=0' },
    { name: 'DANI CL', role: 'Head of Design', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBugE7TjbNI1Y8XxZVUDK2QkaJfQ4x5KdQGCqQpwdvUuI1rbARmvTR7U6oZP-CgBvcgoY_-V-faKkAd5Eav9Mp36v51-AggMW4ripROU2pxr9x48CAyBMSYsKsZdyefQ9CfrUjxwKsC4DbIQXqhr5VqGjbnHy2kUpeZRe7vnWn5yKB_CAlXUtJhxtWkc8e46KbFyI48f7F6gJ7Y5wNH4chaYv4TitmepjBaWnBpC3nYVyQKmnNmv3pxGjmnxTN04E8ZLObRR7tqm7I' },
    { name: 'REBECCA GB', role: 'Head of Marketing', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnO9vbL7Wx3XJIZ-M7TmnGW7VThPWOHyaGUtR3I5XdOeh490EMma38tbFXGGHb4scNOEbcboalVlrKnD8_MFaD1m5Q_AKnHXRyj3lkMzweA3AIrAMFpisbe2AXFxtOhdPJHjOwIt1pPiW3-dU7tNo9WplWatRz11AYTAgPk19u2PUe4l1_x8rYwjTkezycLVQPnNiQN6M9UBVyl_Ga-qmivZb-YyA2y6s52nlZtwHfI15wClUoYMFPX7SlNNLqZeIrNHjU4UOcHWs' }
  ];

  const bottomTeam = [
    { name: 'LINDSAY US', role: 'Head of Community', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzAJDpOUT5JRPhPVmMvB1w8QMEoZpzT9TdUt78ieqUPEx0kc0J2Men9NWNERvf58oMCnV2Y4uTLUIBSPTWZAnpLvGsTTgFJAMhg0JE6tQUnLHSNhP1aVGUJ_-wYXbPyh7MuOeEqOp8f5yqGlKe4TFByEIWNMkPqYTwzPJT5VJD9LfYkl2SZcMVsqm1LSfHip00RPhiZkDF5dsJDlU2qR7XeL8PCi_dNwtBX9uLgBz-KbUjk6E4qT9cIFmLnok18SK8iz-Zqf8RHmE' },
    { name: 'ANTHONY FR', role: 'Head of Global Development', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJQsj-6JFvGVX1RsYgYp6v2ryRTQv3hQRRl1aIM7AddFXsC2PvgdRlPUghS-26nNo4wdI2eFhb4F0xzx-NqSlRYz_QbOUvjgYG6omqiu6XmATFCdRAvh00XDz1A0uU0chIAuxslcTMY6YRng43kUAwaUPwbGyLS6RFZZAFrJEzbCUi3_uLYq50htA1-r_33D3GFdncoBPHTO1i2W7aE1RQvOoa3CO04nUQOVlLg0zz74KfTYVWTsGo64mYawnntUjGl2NzQcTTvfM' },
    { name: 'JESSICA PT', role: 'Head of Revenue and Reservations', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT1NVmG52bXFNeQoUca-TT6yE2rca1H_8mHX798Np2AtjozY_0vPoyg5wvc5OaBzdgSLGgipQ4jLJJCbAPn0I1GvbXPnOBdXU1fSbqgJYGmHLLJp4wpb3q0-JiIWTS3dtiWZPAoiQqRNU_GFca4VN7KlF5hhJO55LT2tSVRSL7h4KfLHv4Zi6sa7np749CUY-q94Cw0dBTx_4IxIJGep0lIKF4oaufKVUAuahOVhWJoUBEGwebyRjafKITzygppNE33OS1m9ZJF4k' }
  ];

  return (
    <div className="fade-in bg-background-light min-h-screen font-sans">
      {/* Our Story Hero */}
      <section className="flex flex-col md:flex-row min-h-[70vh] items-center border-b border-gray-200">
        <div className="flex-1 px-8 md:px-24 py-20 bg-[#F2EFE6]">
          <div className="max-w-md">
            <h1 className="text-6xl md:text-8xl font-display text-primary mb-10 leading-[0.9] tracking-tight">Our Story</h1>
            <p className="text-gray-600 font-light text-[15px] leading-relaxed mb-6">
              Outsite was founded in 2015 to serve a new segment of location flexible professionals looking to integrate their life and their work. From the simple seed of an idea — to live and work in beautiful locations surrounded by interesting people — Outsite was born.
            </p>
          </div>
        </div>
        <div className="flex-1 h-full min-h-[500px] relative">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCalpKwmhV6hRQqqCHWzAYbn9xWyk2soGbPOb7SRv0jsNmBpA_wUcnfeZ-TS3qO5WjxS-S89jSO6CtK00nsgvGdYgefLQyHxXGe_Ec2mxZ4URPdUXXh1GV3Z4sd50EME-m0wx9OcTIN5mhl_36thoUFnR3Ujf0VS0-KxeSLNEH2qNInHb99twkBMtu0rVprKRbrZjUTvd1J2oDgae569GzXhzq5nmU1yvQaXzdTW7J6mOzwC1cKNvs7C3FI-0f2C8iRzhOmG-NgvoU" 
            alt="Outsite Community Biking" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-10 right-10">
            <button className="bg-primary text-white rounded-full px-5 py-2.5 shadow-lg flex items-center gap-2 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">chat_bubble</span> Help
            </button>
          </div>
        </div>
      </section>

      {/* Mission Text */}
      <section className="py-24 px-6 md:px-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-primary leading-tight font-normal">
          Our mission is to create a world where everyone can design and live their best lives, with the freedom to live and work anywhere.
        </h2>
      </section>

      {/* Stats Section */}
      <section className="pb-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center bg-[#EAE7DD]/40 border border-gray-200 p-12 text-center rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                 <div className="w-[80%] aspect-[2/1] border-[1px] border-primary rounded-full transform rotate-12 group-hover:rotate-45 transition-transform duration-1000"></div>
                 <div className="w-[90%] aspect-[2/1] border-[1px] border-primary rounded-full absolute transform -rotate-12 group-hover:-rotate-45 transition-transform duration-1000"></div>
              </div>
              <h3 className="text-5xl font-display text-primary mb-6 relative z-10">{stat.value}</h3>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest relative z-10">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 mx-20" />

      {/* Our People Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-display text-primary mb-6">Our People</h2>
          <p className="text-gray-500 text-sm max-w-md font-light">
            Outsite is rooted in a diverse and global community, using the remote work revolution to define a new way of life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {peopleCards.map((card, i) => (
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-sm mb-6">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">{card.title}</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium mb-6 flex-1">
                {card.desc}
              </p>
              <a className="text-[10px] font-bold uppercase tracking-widest border-b border-transparent hover:border-primary w-fit pb-1 flex items-center gap-2">
                {card.linkLabel} <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 mx-20" />

      {/* Our Places Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-display text-primary mb-6">Our Places</h2>
          <p className="text-gray-500 text-sm max-w-md font-light">
            We encourage slow travel, so our Members become temporary residents during their stay.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {placesCards.map((card, i) => (
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-sm mb-6">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">{card.title}</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium mb-6 flex-1">
                {card.desc}
              </p>
              <a className="text-[10px] font-bold uppercase tracking-widest border-b border-transparent hover:border-primary w-fit pb-1 flex items-center gap-2">
                {card.linkLabel} <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-200 mx-20" />

      {/* Our Team Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display text-primary mb-4">Our Team</h2>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-10">Our team works everywhere, and lives differently.</p>
          
          <div className="flex justify-center gap-8 mb-20 border-b border-gray-100 pb-4">
             <button className="text-[9px] font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-4">MANAGEMENT</button>
             <button className="text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors pb-4">EXTENDED TEAM</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-16 mb-20">
          {team.map((member, i) => (
            <div key={i} className="text-center group">
               <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border border-gray-100 group-hover:border-primary transition-colors">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
               </div>
               <h5 className="text-[10px] font-bold text-primary mb-1 uppercase tracking-tight">{member.name}</h5>
               <p className="text-[9px] text-gray-400 font-medium">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-x-16 gap-y-16">
          {bottomTeam.map((member, i) => (
            <div key={i} className="text-center group w-32">
               <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border border-gray-100 group-hover:border-primary transition-colors">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
               </div>
               <h5 className="text-[10px] font-bold text-primary mb-1 uppercase tracking-tight leading-tight">{member.name}</h5>
               <p className="text-[9px] text-gray-400 font-medium max-w-[100px] mx-auto">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Padding for footer */}
      <div className="h-32"></div>
    </div>
  );
};

export default AboutUs;
