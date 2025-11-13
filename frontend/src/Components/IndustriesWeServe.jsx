
import React from "react";
import { FaHospital, FaGraduationCap, FaUtensils, FaShoppingBag, FaBuilding, FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const industries = [
  { id: 1, icon: <FaHospital size={40} className="text-[#00BFFF]" />, title: "Healthcare" },
  { id: 2, icon: <FaGraduationCap size={40} className="text-yellow-400" />, title: "Education" },
  { id: 3, icon: <FaUtensils size={40} className="text-pink-400" />, title: "Restaurant" },
  { id: 4, icon: <FaShoppingBag size={40} className="text-green-400" />, title: "Retail" },
  { id: 5, icon: <FaBuilding size={40} className="text-orange-400" />, title: "Construction" },
  { id: 6, icon: <FaLaptop size={40} className="text-gray-300" />, title: "IT Company" },
];

const IndustriesWeServe = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`py-16 px-6 text-center transition-colors duration-300
        ${theme === "dark" ? "bg-[#0B1221] text-white" : "bg-gray-50 text-gray-900"}
      `}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        Industries We Serve
      </h2>
      <p className={`mb-12 text-lg transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
        Specialized automation solutions across multiple industries
      </p>

      <div className="md:w-[90%] mx-auto">
        <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-6 justify-items-center">
          {industries.map((item) => (
            <div
              key={item.id}
              className={`w-44 md:w-full md:max-w-none h-32 flex flex-col items-center justify-center rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105
                ${theme === "dark" ? "bg-[#1B2333]" : "bg-white"}
              `}
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className={`text-lg font-semibold transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link to="/industrieSection">
          <button
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 mx-auto
              ${theme === "dark" ? "bg-yellow-400 text-black hover:bg-yellow-500" : "bg-yellow-400 text-black hover:bg-yellow-500"}
            `}
          >
            View All Industries <span className="text-xl">→</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
