import React from 'react';
import aboutImage from '../assets/gwengtar-dp.jpg'; 

const About = () => {
  const softSlate = '#475569';
  const faintGold = '#e5ba73';
  const lightBg = '#f7f7f7';

  return (
    <div className="w-full">
      <section id="about"
        style={{ backgroundColor: lightBg }} 
        className="relative py-24 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Image Section */}
            <div className="relative group">
              <div 
                className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl"
                style={{ backgroundColor: faintGold, opacity: '15%' }}
              ></div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={aboutImage} 
                  alt="Gwengtar Technology Team at Work on Site" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 text-left">
              <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: faintGold }}>
                  Established 2013
                </p>
              </div>
              
              <h2 
                className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter leading-tight"
                style={{ color: softSlate }}
              >
                Gwengtar Technologies: Your Integrated Contracting Partner
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Founded in 2013, Gwengtar Technologies is a wholly owned private limited company specializing 
                  in Electrical and Mechanical Engineering consultancy and infrastructure development. 
                  We have built a nationwide reputation for delivering diverse commercial, industrial, 
                  and residential projects on time, within budget, and to total client satisfaction.
                </p>
                
                <p>
                The principals of the firm are all fully qualified and highly experienced professional 
                  engineers registered with the Engineers Registration Board (ERB) and other relevant 
                  engineering institutions and are capable of managing large projects.
                </p>

                <p>
                  Whether executing pre-designed schemes or complex design-and-build projects, we prioritize 
                  clear communication between design and construction teams. Our project management 
                  expertise transforms client requirements into environmentally sound, workable solutions 
                  for both the private and government sectors across East Africa.
                </p>
              </div>

              {/* Call to Action or Signature */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p 
                  className="font-bold text-lg mb-2"
                  style={{ color: softSlate }}
                >
                  &ldquo;Get it right first time every time!&rdquo;
                </p>
                <p className="text-sm text-gray-500 italic">
                  Engineering excellence complying with international standards.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;