import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/Gwengtarr Technology logo design.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setDropdown(false);
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // navbar height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false);
    setDropdown(false);
  }
};

  return (
    <section id="home"> 
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* 🔥 Logo Section (Aligned to Edge) */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleScroll("home")} >
            <img
              src={logo}
              alt="Gwengtar Technologies Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <span className="text-xl sm:text-2xl font-semibold text-gray-800 tracking-tight">
              Gwengtar Technologies
            </span>
          </div>

          {/* 🔥 Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-[16px] font-medium text-gray-700">

            <a  onClick={() => handleScroll("about")} className="hover:text-blue-600 transition cursor-pointer">
              About Us
            </a>

            <a  onClick={() => handleScroll("services")} className="hover:text-blue-600 transition cursor-pointer">
              Services
            </a>

            <a  onClick={() => handleScroll("contact")} className="hover:text-blue-600 transition cursor-pointer">
              Contacts
            </a>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdown((prev) => !prev)}
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                More <ChevronDown size={18} />
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-3 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                  <a onClick={() => handleScroll("objectives")} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Our Cores
                  </a>
                  <a onClick={() => handleScroll("completed")} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Completed Projects
                  </a>
                                    <a onClick={() => handleScroll("tools")} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Tools
                  </a>
                                    <a onClick={() => handleScroll("partners")} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Partners
                  </a>
                                    <a onClick={() => handleScroll("esg")} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    ESG
                  </a>
                </div>
              )}
            </div>

          </div>

          {/* 🔥 Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">

          <a onClick={() => handleScroll("objectives")} className="block">About Us</a>
          <a onClick={() => handleScroll("services")} className="block">Services</a>
          <a onClick={() => handleScroll("contact")} className="block">Contacts</a>

          {/* Mobile Dropdown simplified */}
          <div className="border-t pt-3">
            <p className="text-gray-500 text-sm mb-2">More</p>
            <a onClick={() => handleScroll("objectives")} className="block py-1">Our Objectives</a>
            <a onClick={() => handleScroll("completed")} className="block py-1">Completed Projects</a>
          </div>
        </div>
      )}
    </nav>
    </section>
  );
}