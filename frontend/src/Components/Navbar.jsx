
import React, { useState, useEffect } from "react";
import {
  FaGlobe,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const industries = [
    { key: t("Hospital"), path: "/hospital" },
    { key: t("School"), path: "/school" },
    { key: t("College"), path: "/college" },
    { key: t("Restaurant"), path: "/restaurant" },
    { key: t("Office"), path: "/office" },
    { key: t("Retail"), path: "/retail" },
    { key: t("Construction"), path: "/construction" },
    { key: t("Logistics"), path: "/logistics" },
    { key: t("IT Company"), path: "/it-company" },
    { key: t("E-commerce"), path: "/ecommerce" },
    { key: t("Clinic & Lab"), path: "/clinic-lab" },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "te", label: "తెలుగు" },
    { code: "hi", label: "हिन्दी" },
    { code: "ta", label: "தமிழ்" },
    { code: "kn", label: "ಕನ್ನಡ" },
  ];

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsIndustriesOpen(false);
    setIsLanguageOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsIndustriesOpen(false);
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChangeLanguage = (code) => {
    i18n.changeLanguage(code);
    closeAll();
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 shadow-md transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0c121d] text-gray-200 border-b border-gray-800"
          : "bg-white text-gray-900 border-b border-gray-200"
      }`}
    >
      <div className="mx-auto flex items-center md:w-[91%] justify-between py-2 px-4 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl">🐢</span>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-left text-lg">MS Tech Hive</p>
            <p className="text-yellow-500 text-xs font-medium">
              {t("Empowering Digital Growth")}
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link
            to="/"
            onClick={closeAll}
            className="hover:text-yellow-500 transition"
          >
            {t("Home")}
          </Link>

          {/* Industries Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              className="flex items-center hover:text-yellow-500 transition"
            >
              {t("Industries")}
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  isIndustriesOpen ? "rotate-180 text-yellow-400" : "rotate-0"
                }`}
              />
            </button>
            {isIndustriesOpen && (
              <div
                className={`absolute left-0 mt-2 w-44 rounded-md shadow-lg z-20 ${
                  theme === "dark"
                    ? "bg-[#1c1f26]  text-gray-200"
                    : "bg-white text-gray-800"
                }`}
              >
                {industries.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={closeAll}
                    className={`block px-4 py-2 hover:bg-yellow-500 hover:text-black transition`}
                  >
                    {item.key}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/service"
            onClick={closeAll}
            className="hover:text-yellow-500"
          >
            {t("Services")}
          </Link>
          <Link to="/about" onClick={closeAll} className="hover:text-yellow-500">
            {t("About")}
          </Link>
          <Link
            to="/contact"
            onClick={closeAll}
            className="hover:text-yellow-500"
          >
            {t("Contact")}
          </Link>

          {/* Language Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className={`flex items-center rounded-lg px-3 py-2 hover:text-yellow-500 transition`}
            >
              <FaGlobe className="mr-2" />
              <span>{t("US")}</span>
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  isLanguageOpen ? "rotate-180 text-yellow-400" : "rotate-0"
                }`}
              />
            </button>

            {isLanguageOpen && (
              <div
                className={`absolute right-0 mt-2 w-40 border rounded-md shadow-lg z-20 ${
                  theme === "dark"
                    ? "bg-[#1c1f26] border-gray-700 text-gray-200"
                    : "bg-white border-gray-200 text-gray-800"
                }`}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleChangeLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full hover:scale-110 transition"
          >
            {theme === "light" ? (
              <FaMoon className="text-gray-700" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className="text-xl">
            {theme === "light" ? (
              <FaMoon />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div
          className={`absolute left-0 top-full w-full h-[calc(100vh-60px)] border-t backdrop-blur-sm shadow-2xl z-10 transition-colors duration-300 ${
            theme === "dark"
              ? "bg-[#0c121d] border-gray-700 text-gray-200"
              : "bg-white border-gray-200 text-gray-800"
          }`}
        >
          <div className="p-5 space-y-4">
            <Link to="/" onClick={closeAll}>
              {t("Home")}
            </Link>
            <Link to="/service" onClick={closeAll}>
              {t("Services")}
            </Link>
            <div>
              <p className="font-medium mb-1">{t("Industries")}</p>
              <div className="ml-3 flex flex-col gap-2">
                {industries.map((item) => (
                  <Link key={item.key} to={item.path} onClick={closeAll}>
                    {item.key}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/about" onClick={closeAll}>
              {t("About")}
            </Link>
            <Link to="/contact" onClick={closeAll}>
              {t("Contact")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

