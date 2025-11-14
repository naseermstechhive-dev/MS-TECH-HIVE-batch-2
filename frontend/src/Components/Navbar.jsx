
// import React, { useState, useEffect } from "react";
// import {
//   FaGlobe,
//   FaBars,
//   FaTimes,
//   FaChevronDown,
//   FaMoon,
//   FaSun,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useTheme } from "../Context/ThemeContext";
// import { useTranslation } from "react-i18next";

// const Navbar = () => {
//   const { theme, toggleTheme } = useTheme();
//   const { t, i18n } = useTranslation();

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);

//   const industries = [
//     { key: t("Hospital"), path: "/hospital" },
//     { key: t("School"), path: "/school" },
//     { key: t("College"), path: "/college" },
//     { key: t("Restaurant"), path: "/restaurant" },
//     { key: t("Office"), path: "/office" },
//     { key: t("Retail"), path: "/retaileShop" },
//     { key: t("Construction"), path: "/construction" },
//     { key: t("Logistics"), path: "/logistics" },
//     { key: t("IT Company"), path: "/itCompany" },
//     { key: t("E-commerce"), path: "/ecommerce" },
//     { key: t("Clinic & Lab"), path: "/clinicLab" },
//   ];

//   const languages = [
//     { code: "en", label: "English" },
//     { code: "te", label: "తెలుగు" },
//     { code: "hi", label: "हिन्दी" },
//     { code: "ta", label: "தமிழ்" },
//     { code: "kn", label: "ಕನ್ನಡ" },
//   ];

//   const closeAll = () => {
//     setIsMenuOpen(false);
//     setIsIndustriesOpen(false);
//     setIsLanguageOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest(".dropdown")) {
//         setIsIndustriesOpen(false);
//         setIsLanguageOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleChangeLanguage = (code) => {
//     i18n.changeLanguage(code);
//     closeAll();
//   };

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 shadow-md transition-colors duration-300 ${
//         theme === "dark"
//           ? "bg-[#0c121d] text-gray-200 border-b border-gray-800"
//           : "bg-white text-gray-900 border-b border-gray-200"
//       }`}
//     >
//       <div className="mx-auto flex items-center md:w-[91%] justify-between py-2 px-4 md:px-12">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
//             <span className="text-2xl">🐢</span>
//           </div>
//           <div className="flex flex-col">
//             <p className="font-bold text-left text-lg">MS Tech Hive</p>
//             <p className="text-yellow-500 text-xs font-medium">
//               {t("Empowering Digital Growth")}
//             </p>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 font-medium">
//           <Link
//             to="/"
//             onClick={closeAll}
//             className="hover:text-yellow-500 transition"
//           >
//             {t("Home")}
//           </Link>

//           {/* Industries Dropdown */}
//           <div className="relative dropdown">
//             <button
//               onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
//               className="flex items-center hover:text-yellow-500 transition"
//             >
//               {t("Industries")}
//               <FaChevronDown
//                 className={`ml-1 transition-transform duration-300 ${
//                   isIndustriesOpen ? "rotate-180 text-yellow-400" : "rotate-0"
//                 }`}
//               />
//             </button>
//             {isIndustriesOpen && (
//               <div
//                 className={`absolute left-0 mt-2 w-44 rounded-md shadow-lg z-20 ${
//                   theme === "dark"
//                     ? "bg-[#1c1f26]  text-gray-200"
//                     : "bg-white text-gray-800"
//                 }`}
//               >
//                 {industries.map((item) => (
//                   <Link
//                     key={item.key}
//                     to={item.path}
//                     onClick={closeAll}
//                     className={`block px-4 py-2 hover:bg-yellow-500 hover:text-black transition`}
//                   >
//                     {item.key}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link
//             to="/service"
//             onClick={closeAll}
//             className="hover:text-yellow-500"
//           >
//             {t("Services")}
//           </Link>
//           <Link to="/about" onClick={closeAll} className="hover:text-yellow-500">
//             {t("About")}
//           </Link>
//           <Link
//             to="/contact"
//             onClick={closeAll}
//             className="hover:text-yellow-500"
//           >
//             {t("Contact")}
//           </Link>

//           {/* Language Dropdown */}
//           <div className="relative dropdown">
//             <button
//               onClick={() => setIsLanguageOpen(!isLanguageOpen)}
//               className={`flex items-center rounded-lg px-3 py-2 hover:text-yellow-500 transition`}
//             >
//               <FaGlobe className="mr-2" />
//               <span>{t("US")}</span>
//               <FaChevronDown
//                 className={`ml-1 transition-transform duration-300 ${
//                   isLanguageOpen ? "rotate-180 text-yellow-400" : "rotate-0"
//                 }`}
//               />
//             </button>

//             {isLanguageOpen && (
//               <div
//                 className={`absolute right-0 mt-2 w-40 border rounded-md shadow-lg z-20 ${
//                   theme === "dark"
//                     ? "bg-[#1c1f26] border-gray-700 text-gray-200"
//                     : "bg-white border-gray-200 text-gray-800"
//                 }`}
//               >
//                 {languages.map((lang) => (
//                   <button
//                     key={lang.code}
//                     onClick={() => handleChangeLanguage(lang.code)}
//                     className={`block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition`}
//                   >
//                     {lang.label}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Theme Toggle */}
//           <button
//             onClick={toggleTheme}
//             className="ml-2 p-2 rounded-full hover:scale-110 transition"
//           >
//             {theme === "light" ? (
//               <FaMoon className="text-gray-700" />
//             ) : (
//               <FaSun className="text-yellow-400" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden flex items-center gap-3">
//           <button onClick={toggleTheme} className="text-xl">
//             {theme === "light" ? (
//               <FaMoon />
//             ) : (
//               <FaSun className="text-yellow-400" />
//             )}
//           </button>
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-2xl"
//           >
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Content */}
//       {isMenuOpen && (
//         <div
//           className={`absolute left-0 top-full w-full h-[calc(100vh-60px)] border-t backdrop-blur-sm shadow-2xl z-10 transition-colors duration-300 ${
//             theme === "dark"
//               ? "bg-[#0c121d] border-gray-700 text-gray-200"
//               : "bg-white border-gray-200 text-gray-800"
//           }`}
//         >
//           <div className="p-5 space-y-4">
//             <Link to="/" onClick={closeAll}>
//               {t("Home")}
//             </Link>
//             <Link to="/service" onClick={closeAll}>
//               {t("Services")}
//             </Link>
//             <div>
//               <p className="font-medium mb-1">{t("Industries")}</p>
//               <div className="ml-3 flex flex-col gap-2">
//                 {industries.map((item) => (
//                   <Link key={item.key} to={item.path} onClick={closeAll}>
//                     {item.key}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <Link to="/about" onClick={closeAll}>
//               {t("About")}
//             </Link>
//             <Link to="/contact" onClick={closeAll}>
//               {t("Contact")}
//             </Link></div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import {
  FaGlobe,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaMoon,
  FaSun,
  FaSearch,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const industries = [
    { key: t("Hospital"), path: "/hospital" },
    { key: t("School"), path: "/school" },
    { key: t("College"), path: "/college" },
    { key: t("Restaurant"), path: "/restaurant" },
    { key: t("Office"), path: "/office" },
    { key: t("Retail"), path: "/retaileShop" },
    { key: t("Construction"), path: "/construction" },
    { key: t("Logistics"), path: "/logistics" },
    { key: t("IT Company"), path: "/itCompany" },
    { key: t("E-commerce"), path: "/ecommerce" },
    { key: t("Clinic & Lab"), path: "/clinicLab" },
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
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredResults = industries.filter(item =>
      item.key.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleSearchResultClick = (path) => {
    navigate(path);
    closeAll();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchResults.length > 0) {
      handleSearchResultClick(searchResults[0].path);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsIndustriesOpen(false);
        setIsLanguageOpen(false);
      }
      if (!e.target.closest(".search-container")) {
        setIsSearchOpen(false);
        setSearchResults([]);
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
        <div className="hidden md:flex items-center gap-6 font-medium">
          {/* Search Bar */}
          <div className="relative search-container">
            <div className="flex items-center">
              <input
                type="text"
                placeholder={t("Search industries...")}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onKeyPress={handleKeyPress}
                className={`px-4 py-2 pl-10 rounded-lg border transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-[#1c1f26] border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
                } w-48 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              />
              <FaSearch 
                className={`absolute left-3 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              />
            </div>

            {/* Search Results Dropdown */}
            {isSearchOpen && searchResults.length > 0 && (
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-30 max-h-60 overflow-y-auto ${
                  theme === "dark"
                    ? "bg-[#1c1f26] border border-gray-700 text-gray-200"
                    : "bg-white border border-gray-200 text-gray-800"
                }`}
              >
                {searchResults.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearchResultClick(item.path)}
                    className={`block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition ${
                      index !== searchResults.length - 1 ? "border-b border-gray-600" : ""
                    }`}
                  >
                    {item.key}
                  </button>
                ))}
              </div>
            )}

            {/* No Results Message */}
            {isSearchOpen && searchQuery && searchResults.length === 0 && (
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-30 p-4 ${
                  theme === "dark"
                    ? "bg-[#1c1f26] border border-gray-700 text-gray-400"
                    : "bg-white border border-gray-200 text-gray-500"
                }`}
              >
                {t("No industries found")}
              </div>
            )}
          </div>

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
                    ? "bg-[#1c1f26] text-gray-200"
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
          {/* Mobile Search Button */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-xl p-2"
          >
            <FaSearch />
          </button>
          
          <button onClick={toggleTheme} className="text-xl p-2">
            {theme === "light" ? (
              <FaMoon />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl p-2"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className={`md:hidden p-4 border-t ${
          theme === "dark" ? "border-gray-700 bg-[#0c121d]" : "border-gray-200 bg-white"
        }`}>
          <div className="relative">
            <input
              type="text"
              placeholder={t("Search industries...")}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyPress={handleKeyPress}
              className={`w-full px-4 py-3 pl-12 rounded-lg border transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-[#1c1f26] border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
            />
            <FaSearch 
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            />
          </div>

          {/* Mobile Search Results */}
          {searchResults.length > 0 && (
            <div className={`mt-2 rounded-md shadow-lg ${
              theme === "dark"
                ? "bg-[#1c1f26] border border-gray-700"
                : "bg-white border border-gray-200"
            }`}>
              {searchResults.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleSearchResultClick(item.path)}
                  className={`block w-full text-left px-4 py-3 hover:bg-yellow-500 hover:text-black transition ${
                    index !== searchResults.length - 1 ? "border-b border-gray-600" : ""
                  }`}
                >
                  {item.key}
                </button>
              ))}
            </div>
          )}

          {/* Mobile No Results Message */}
          {searchQuery && searchResults.length === 0 && (
            <div className={`mt-2 p-4 rounded-md text-center ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}>
              {t("No industries found")}
            </div>
          )}
        </div>
      )}

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
            <Link to="/" onClick={closeAll} className="block py-2">
              {t("Home")}
            </Link>
            <Link to="/service" onClick={closeAll} className="block py-2">
              {t("Services")}
            </Link>
            <div>
              <p className="font-medium mb-1 py-2">{t("Industries")}</p>
              <div className="ml-3 flex flex-col gap-2">
                {industries.map((item) => (
                  <Link 
                    key={item.key} 
                    to={item.path} 
                    onClick={closeAll}
                    className="block py-2"
                  >
                    {item.key}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <Link to="/about" onClick={closeAll} className="block py-2">
                {t("About")}
              </Link>
              <Link to="/contact" onClick={closeAll} className="block py-2">
                {t("Contact")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;