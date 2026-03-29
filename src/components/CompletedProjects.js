import React from 'react';
import img1 from '../assets/Installing power.png';
import img2 from '../assets/Construction of high-voltage.png';
import img3 from '../assets/Electrical transformer.png'

const CompletedProjects = () => {
  const softSlate = '#475569';
  const faintGold = '#e5ba73';
  const lightBg = '#ffffff'; 

  const majorProjects = [
    {
      assignment: "Mutundwe – Entebbe 132kV Transmission Line",
      client: "Uganda Electricity Transmission Company Limited (UETCL)",
      role: "Sub-contractor",
      value: "USD 98,500",
      period: "Oct 2021",
      description: "Construction of tower foundations for major transmission infrastructure.",
      img: img2 
    },
    {
      assignment: "SCADA Installation",
      client: "Rural Electrification Program (REP) - PACMECS Network",
      role: "Sub-contractor",
      value: "USD 310,442",
      period: "Nov 2021 - April 2022",
      description: "Northern Service Territory network enhancement and protection installation.",
      img: img1 
    },
    {
      assignment: "Upgrade of Low Voltage Power Supply & Cables",
      client: "Uganda National Examinations Board (UNEB) - Kyambogo",
      role: "Contractor",
      value: "USD 385,756",
      period: "Oct 2023 - April 2024",
      description: "Full supply equipment and cable upgrades for national factory facilities.",
      img: img3 
    }
  ];

  return (
    <section style={{ backgroundColor: lightBg }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: softSlate }}>
              Major Completed Projects
            </h2>
            <p className="text-gray-500 text-lg">
              A track record of high-value infrastructure delivery for Uganda's leading public and private sectors.
            </p>
          </div>
          <div className="h-1 w-24 rounded-full hidden md:block" style={{ backgroundColor: faintGold }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {majorProjects.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.assignment} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: softSlate }}>
                    Value: {item.value}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2" style={{ color: faintGold }}>
                  {item.period}
                </p>
                <h3 className="text-xl font-bold mb-3 leading-tight" style={{ color: softSlate }}>
                  {item.assignment}
                </h3>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Client</p>
                  <p className="text-sm text-gray-700 font-medium mb-2">{item.client}</p>
                  
                  {/* Role Display Added Here */}
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Role</p>
                  <p className="text-sm font-semibold" style={{ color: softSlate }}>{item.role}</p>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mt-auto border-t border-gray-200 pt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;