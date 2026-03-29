import React from 'react';

const Objectives = () => {
  const softSlate = '#475569';
  const faintGold = '#e5ba73';
  const lightBg = '#f8f9fa';

  return (
    <div className="w-full">
      <section 
        style={{ backgroundColor: lightBg }} 
        className="relative pt-20 pb-32 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 
            className="text-3xl sm:text-4xl font-extrabold mb-16 tracking-tight"
            style={{ color: softSlate }}
          >
            Our Core
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Our Mission', desc: 'To transform ideas into real-world digital experiences.', icon: <path d="M12 6v6l4 2" /> },
              { title: 'Our Vision', desc: 'To be a leading tech innovator bridging gaps across industries.', icon: <path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" /> },
              { title: 'Our Values', desc: 'Integrity, Excellence, Collaboration, and Continuous Learning.', icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" /> }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border-b-4"
                style={{ borderBottomColor: faintGold }}
              >
                <div 
                  className="flex items-center justify-center w-14 h-14 mx-auto mb-6 rounded-xl"
                  style={{ backgroundColor: '#f1f5f9', color: softSlate }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: softSlate }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Separator: The Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C51.17,113.84,149.21,118.44,220,110.15,264.44,105,291.56,87.6,321.39,56.44Z" 
                fill="#ffffff" 
                opacity="0.5"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Objectives;