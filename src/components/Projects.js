import React, { useState } from 'react';
import img1 from '../assets/gwengtar-dp.jpg';
import img2 from '../assets/Installing power.png';
import img3 from '../assets/Electrical transformer.png';
import img4 from '../assets/overhead-line-refurbishment-national-grid-2.jpg';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const softSlate = '#475569';
  const faintGold = '#e5ba73';
  const lightBg = '#f7f7f7';

  const projects = [
    { 
      title: 'Electrical Installation', 
      desc: 'Professional setup of electrical wiring and fixtures for residential and commercial spaces.',
      category: 'Infrastructure',
      img: img2,
      details: [
        "Full design and installation for Industrial, Commercial, and Domestic networks.",
        "Electrical Infrastructure: Transmission & Distribution networks.",
        "Specialized Solutions: Street lighting, special area lighting, and surge protection.",
        "Safety Systems: Access Control, CCTV, Fire Detection, and Alarm systems.",
        "Renewable Energy: Professional Solar Power (PV) design and installation.",
        "Cost Efficiency: We provide full specs and layout drawings to reduce third-party engineering fees."
      ]
    },
    { 
      title: 'Industrial Installation', 
      desc: 'Ensuring optimal server performance with regular monitoring and maintenance.',
      category: 'Industrial',
      img: img1,
      details: [
        "24/7 Server monitoring and performance optimization.",
        "Hardware health checks and preventive maintenance.",
        "Voice & Data Infrastructure management.",
        "Server room cooling and environmental monitoring.",
        "Secure backup systems and data recovery protocols."
      ]
    },
    { 
      title: 'Grid Powerline Construction', 
      desc: 'Installation and alignment of electric poles with safety and compliance.',
      category: 'Energy',
      img: img4,
      details: [
        "Safe installation and alignment of high-tension utility poles.",
        "Compliance with national safety and infrastructure standards.",
        "Transformer mounting and distribution line connectivity.",
        "Emergency pole replacement and structural reinforcements."
      ]
    },
    { 
      title: 'Solar Power Solutions', 
      desc: 'Eco-friendly solar solutions for sustainable energy supply.',
      category: 'Renewables',
      img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600',
      details: [
        "Custom PV (Photovoltaic) system design for maximum efficiency.",
        "Grid-tied and Off-grid solar storage solutions.",
        "Long-term energy cost reduction strategies.",
        "Post-installation monitoring and panel cleaning services."
      ]
    },
    { 
      title: 'Data Cabling', 
      desc: 'Structured cabling for reliable and high-speed connectivity.',
      category: 'Networking',
      img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600',
      details: [
        "Fiber optic and Cat6/Cat7 structured cabling setup.",
        "High-speed networking for corporate and industrial hubs.",
        "Organized rack management and cable labeling.",
        "System testing and bandwidth certification."
      ]
    },
    { 
      title: 'Electromechanical Solutions', 
      desc: 'Expert mechanical solutions including HVAC systems, industrial refrigeration, and specialized fluid and gas infrastructure.',
      category: 'Electromechanical',
      img: img3,
      details: [
        "HVAC & Climate Control: Professional design and installation of Heating, Ventilation, and Air Conditioning systems.",
        "Mechanical Power & Control: Comprehensive management of mechanical power systems and precision control units.",
        "Industrial Refrigeration: Specialized cooling and refrigeration systems for commercial and industrial applications.",
        "Renewable Heating: Advanced Solar Water and Heating system designs for sustainable energy usage.",
        "Safety & Infrastructure: Expert installation of Fire Protection systems and professional Piped Gas infrastructure."
      ]
    }
  ];

  return (
    <section id="services"
      style={{ backgroundColor: lightBg }} 
      className="relative py-24 shadow-[inner_0_10px_20px_rgba(0,0,0,0.02)]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: softSlate }}>
            Services
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: faintGold }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative h-52 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/90 backdrop-blur-sm shadow-sm" style={{ color: softSlate }}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#e5ba73]" style={{ color: softSlate }}>
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                <div className="flex items-center text-xs font-bold uppercase tracking-wider transition-all duration-300 group-hover:gap-2" style={{ color: faintGold }}>
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL POPUP */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300" onClick={() => setActiveProject(null)}>
          <div 
            className="bg-white rounded-[2.5rem] max-w-2xl w-full p-8 md:p-12 shadow-2xl relative overflow-y-auto max-h-[90vh]" 
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setActiveProject(null)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gray-100 mb-4 inline-block" style={{ color: faintGold }}>
              {activeProject.category}
            </span>
            
            <h3 className="text-3xl font-extrabold mb-6" style={{ color: softSlate }}>
              {activeProject.title}
            </h3>

            <div className="space-y-4 mb-8">
              {activeProject.details.map((point, i) => (
                <div key={i} className="flex items-start text-gray-600">
                  <span className="mr-3 mt-1 text-lg font-bold" style={{ color: faintGold }}>•</span>
                  <p className="leading-relaxed text-sm md:text-base">{point}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setActiveProject(null)}
              className="w-full py-4 rounded-2xl font-bold text-white transition-all active:scale-95 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: softSlate }}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;