



import React, { useState, useEffect } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const industries = [
    "Hospital",
    "School",
    "College",
    "Restaurant",
    "Office",
    "Retail Shop",
    "Construction",
    "Logistics",
    "IT Company",
    "E-commerce",
    "Clinic / Lab",
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsLanguageOpen(false);
    setIsIndustriesOpen(false);
  };

  // ✅ Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsLanguageOpen(false);
        setIsIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#0c121d] shadow-md fixed w-full top-0 z-50 border-b-[0.5px]">
      {/* Navbar Top */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 md:px-10">
        {/* Logo Section */}
        <div className="flex items-start">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
            <span className="text-2xl">🐢</span>
          </div>
          <div className="flex flex-col justify-start leading-tight ml-[8px]">
            <p className="text-white text-start font-bold text-lg">MS Tech Hive</p>
            <p className="text-yellow-400 text-start text-xs font-medium">
              Automate Work. Accelerate Growth.
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium gap-4">
          <a
            href="#home"
            onClick={handleLinkClick}
            className="text-gray-200 hover:text-yellow-400 text-[14px] font-normal"
          >
            Home
          </a>

          {/* Industries Dropdown */}
          <div
            className="relative dropdown"
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <button
              onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              className="text-gray-200 hover:text-yellow-400 text-[14px] font-normal flex items-center transition-all duration-300"
            >
              Industries{" "}
              <span
                className={`ml-1 inline-block transform transition-transform duration-300 ${
                  isIndustriesOpen ? "rotate-180 text-yellow-400" : "rotate-0"
                }`}
              >
                ^
              </span>
            </button>

            <div
              className={`absolute left-0 mt-2 w-44 bg-[#1c1f26] border border-gray-700 rounded-md shadow-lg transition-all duration-200 z-10 ${
                isIndustriesOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {industries.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="block px-4 py-1 text-start text-gray-200 font-normal hover:text-amber-400 text-[14px]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#services"
            onClick={handleLinkClick}
            className="text-gray-200 hover:text-yellow-400 text-[14px] font-normal"
          >
            Services
          </a>

          <a
            href="#about"
            onClick={handleLinkClick}
            className="text-gray-200 hover:text-yellow-400 text-[14px] font-normal"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="text-gray-200 font-semibold text-[14px] font-normal"
          >
            Contact
          </a>

          {/* 🌐 Language Dropdown */}
          <div
            className="relative dropdown"
            onMouseEnter={() => setIsLanguageOpen(true)}
            onMouseLeave={() => setIsLanguageOpen(false)}
          >
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center text-[14px] font-normal border-0 text-gray-200 hover:text-yellow-400 px-3 py-2 border border-gray-600 rounded-lg transition-colors duration-200"
            >
              <FaGlobe className="mr-2" /> us
            </button>

            <div
              className={`absolute right-0 mt-2 w-40 bg-[#1c1f26] border border-gray-700 rounded-md shadow-lg z-10 transition-all duration-200 ${
                isLanguageOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {["English", "తెలుగు", "हिन्दी", "தமிழ்", "ಕನ್ನಡ"].map((lang) => (
                <button
                  key={lang}
                  onClick={handleLinkClick}
                  className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-yellow-500 hover:text-black"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex flex-col items-center space-y-2">
          {/* Language Button */}
          <div className="relative dropdown">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="text-gray-200 hover:text-yellow-400 text-lg"
            >
              <FaGlobe className="text-[13px]" />
            </button>

            <div
              className={`absolute right-0 mt-2 w-40 bg-[#1c1f26] border border-gray-700 rounded-md shadow-lg z-10 transition-all duration-200 ${
                isLanguageOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {["English", "తెలుగు", "हिन्दी", "தமிழ்", "ಕನ್ನಡ"].map((lang) => (
                <button
                  key={lang}
                  onClick={handleLinkClick}
                  className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-yellow-500 hover:text-black"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 hover:text-yellow-400 text-2xl transition-transform duration-300"
          >
            {isMenuOpen ? (
              <FaTimes className="rotate-180 transition-transform duration-300 text-[17px]" />
            ) : (
              <FaBars className="text-[17px]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-full w-full h-[calc(100vh-60px)] bg-[#0c121d] bg-opacity-95 backdrop-blur-sm shadow-2xl border-t border-gray-700 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <div className="p-5 space-y-4 text-gray-200 text-start">
          <a
            href="#home"
            onClick={handleLinkClick}
            className="block font-normal hover:text-yellow-400"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={handleLinkClick}
            className="block font-normal hover:text-yellow-400"
          >
            Services
          </a>

          <div>
            <p className="font-normal mb-2">Industries</p>
            <div className="ml-3 space-y-1 flex flex-col gap-3">
              {industries.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="block text-gray-400 text-sm hover:text-yellow-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#about"
            onClick={handleLinkClick}
            className="block font-normal hover:text-yellow-400"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block font-normal hover:text-yellow-500"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
