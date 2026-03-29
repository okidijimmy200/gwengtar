import React from 'react';

const Equipment = () => {
  const softSlate = '#475569';
  const faintGold = '#e5ba73';

  const inventory = [
    { category: "Heavy Lifting & Transport", items: ["6T Mobile Crane", "3T Boom Trucks (Self-loader)", "2 Ton Pick-ups (x4)", "3T Pulley Lifts"] },
    { category: "Precision Testing & GPS", items: ["RTK GPS Leica AX1202", "Fluke 1664 FC Multifunction Testers", "SF6 Gas Cart"] },
    { category: "Utility & Line Work", items: ["Pole Pikes & Operating Rods", "Wooden Pole Climbers", "Lagging Machines", "Drum Jerks & Cummalongs"] }
  ];

  return (
    <section className="py-20 bg-white" id="equipment">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: softSlate }}>
            Our Fleet & Professional Infrastructure
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Gwengtar Technology maintains a 100% owned inventory of specialized machinery 
            and precision tools to ensure rapid deployment and "Zero Harm" execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inventory.map((group, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-bold mb-6 flex items-center" style={{ color: softSlate }}>
                <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: faintGold }}></span>
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex justify-between border-b border-gray-200 pb-2 italic">
                    {item}
                    <span className="text-[10px] font-bold text-green-600 uppercase">● Owned</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;