import React from 'react';
import img1 from '../assets/Logos/UTECL.png';
import img2 from '../assets/Logos/MENM.png';
import img3 from '../assets/Logos/UPF.png';

const Partnerships = () => {
  const softSlate = '#475569';
  const faintGold = '#e5ba73';

  // These represent your core clients from the project list
  const partners = [
    { name: "UETCL", role: "Transmission Partner", logo: img1 },
    { name: "MEMD", role: "Ministry of Energy", logo: img2 },
    { name: "UPF", role: "Uganda Police Force", logo: img3 }, // Uncomment if you want to include REP
    { name: "UNEB", role: "UNEB", logo: "	https://uneb.ac.ug/wp-content/uploads/2021/05/UNEB-EMBLEM-COLOUR.png" }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100" id='partners'>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: faintGold }}>
            Strategic Alliances
          </p>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: softSlate }}>
            Trusted by National Infrastructure Partners
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500"
            >
              <div className="h-16 md:h-20 flex items-center justify-center mb-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-[140px] object-contain transform group-hover:scale-110 transition-transform"
                  // Handling broken links if logos change
                  onError={(e) => { e.target.src = "https://via.placeholder.com/150x80?text=" + partner.name }} 
                />
              </div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-slate-600 transition-colors">
                {partner.role}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Trust Statement */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 italic max-w-2xl mx-auto">
            "Our partnerships are built on a shared commitment to international engineering standards 
            and the sustainable development of Uganda's power sector."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;