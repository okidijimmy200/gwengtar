import React from 'react';

const Footer = () => {
  const faintGold = '#e5ba73';
  const darkBg = '#1e293b'; // A deeper version of the slate for the footer background

  return (
    <section id="contact">
    <footer style={{ backgroundColor: darkBg }} className="text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Ethos */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">
              Gwengtar<span style={{ color: faintGold }}>Technologies</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              "Infinite Innovations" — Delivering high-standard Electrical and Mechanical 
              engineering solutions with a focus on Zero Harm and professional excellence.
            </p>
          </div>

          {/* Column 2: Navigation (Clean Architecture) */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#objectives" className="hover:text-white transition-colors">Our Objectives</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#completed" className="hover:text-white transition-colors">Completed Projects</a></li>
              <li><a href="#partnerships" className="hover:text-white transition-colors">Partnerships</a></li>
            </ul>
          </div>

          {/* Column 3: Registered Office */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Registered Office</h4>
            <div className="text-sm space-y-2 text-gray-400">
              <p className="font-bold text-gray-200">Plot 56 Acholi Road</p>
              <p>P.O Box 1293 Gulu – Uganda</p>
              <p className="pt-2">
                <span className="block text-white font-semibold">Working Hours:</span>
                Mon — Sat: 8:00 AM - 6:00 PM<br />
                Emergency: 24/7 Response
              </p>
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span style={{ color: faintGold }} className="mr-3">📞</span>
                <span>+256 712 399 037<br />+256 783 250 227</span>
              </li>
              <li className="flex items-center">
                <span style={{ color: faintGold }} className="mr-3">✉️</span>
                <a href="mailto:info@gwengtartechnologies.com" className="hover:text-white">info@gwengtartechnologies.com</a>
              </li>
              <li className="flex items-center">
                <span style={{ color: faintGold }} className="mr-3">🌐</span>
                <a href="http://www.gwengtartechnologies.com" className="hover:text-white">www.gwengtartechnologies.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Gwengtar Technologies Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <span style={{ color: faintGold }}>Infinite Innovations 24</span>
          </div>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;