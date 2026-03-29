import React from 'react';

const ESGSection = () => {
  const softSlate = '#475569';
  const faintGold = '#e5ba73';
  const lightBg = '#fcfcfc';

  const commitments = [
    {
      title: "Environmental Stewardship",
      description: "Committed to preserving the environment by eliminating CFCs and minimizing ecological footprints through cleaner technologies.",
      details: ["Pollution Prevention", "Sustainable Resource Use", "Climate Change Mitigation"],
      icon: "🌿"
    },
    {
      title: "Social Responsibility",
      description: "Upholding human rights and fair labor conditions across our entire supply chain, ensuring safe and respectful workplaces.",
      details: ["Fair Wages", "Freedom of Association", "Zero Child Labour"],
      icon: "🤝"
    },
    {
      title: "Health & Safety (Zero Harm)",
      description: "Our 'Zero Harm' target ensures a safe workplace through continuous training and strict adherence to Construction Regulations 2006.",
      details: ["Continuous Safety Training", "Hygiene Maintenance", "Incident Prevention"],
      icon: "🛡️"
    },
    {
      title: "Code of Conduct",
      description: "A genuine passion for service excellence, requiring our engineers to maintain polite, professional, and methodical standards.",
      details: ["Punctuality", "Professional Attire", "Customer Satisfaction"],
      icon: "⚖️"
    },
    {
      title: "Inclusion & Diversity",
      description: "Creating an inclusive workplace culture where all genders feel valued, respected, and supported in leadership roles.",
      details: ["Gender Equality", "Equal Opportunities", "Non-discrimination"],
      icon: "🌍"
    }
  ];

  return (
    <section id="esg" style={{ backgroundColor: lightBg }} className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: faintGold }}>
              Sustainability & Ethics
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 tracking-tight" style={{ color: softSlate }}>
              Our ESG Framework
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Gwengtar Technologies operates on a foundation of ethical integrity. We align our operations with global environmental, social, and governance standards to ensure sustainable growth for Uganda.
            </p>
          </div>
          <div className="hidden lg:block w-32 h-32 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center p-4">
             <p className="text-[10px] text-center font-bold text-gray-400">ZERO HARM CULTURE</p>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: softSlate }}>{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              
              <ul className="space-y-2">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full mr-3" style={{ backgroundColor: faintGold }}></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Corporate Commitment Statement */}
        <div className="mt-20 p-8 rounded-3xl text-center border-t border-gray-100 bg-gray-50/50">
           <p className="italic text-gray-400 text-sm">
             "We identify and manage our environmental risks to ensure that our operations do not compromise the well-being of future generations."
           </p>
        </div>

      </div>
    </section>
  );
};

export default ESGSection;