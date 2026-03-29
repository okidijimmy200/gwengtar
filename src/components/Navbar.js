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

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* 🔥 Logo Section (Aligned to Edge) */}
          <div className="flex items-center space-x-3">
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

            <a href="#about" className="hover:text-blue-600 transition">
              About Us
            </a>

            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>

            <a href="#contact" className="hover:text-blue-600 transition">
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
                  <a href="#objectives" className="block px-4 py-2 hover:bg-gray-100">
                    Our Cores
                  </a>
                  <a href="#completed" className="block px-4 py-2 hover:bg-gray-100">
                    Completed Projects
                  </a>
                                    <a href="#completed" className="block px-4 py-2 hover:bg-gray-100">
                    Tools
                  </a>
                                    <a href="#completed" className="block px-4 py-2 hover:bg-gray-100">
                    Partners
                  </a>
                                    <a href="#completed" className="block px-4 py-2 hover:bg-gray-100">
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

          <a href="#about" className="block">About Us</a>
          <a href="#services" className="block">Services</a>
          <a href="#contact" className="block">Contacts</a>

          {/* Mobile Dropdown simplified */}
          <div className="border-t pt-3">
            <p className="text-gray-500 text-sm mb-2">More</p>
            <a href="#objectives" className="block py-1">Our Objectives</a>
            <a href="#completed" className="block py-1">Completed Projects</a>
          </div>
        </div>
      )}
    </nav>
  );
}