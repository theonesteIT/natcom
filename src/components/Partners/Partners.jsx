import React from 'react';

const Partners = () => {
  const logos = [
    { name: 'TVET Rwanda', src: '/tvet.jpg' },
    { name: 'NESA ', src: '/nesa.png' },
    { name: 'NGO Partner', src: '/owsd.jpg' },
    { name: 'University Partner', src: '/ulk.png' },
   
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="mb-2">Partners & Accreditations</h2>
          <p className="text-muted-foreground">We collaborate with leading institutions and industry partners.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center p-4 rounded-xl border bg-gray-50 hover:bg-white transition">
              <img src={logo.src} alt={logo.name} className="h-10 object-contain opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;


