import React from "react";
import { FaHospital, FaGraduationCap, FaUtensils, FaShoppingBag, FaBuilding, FaLaptop } from "react-icons/fa";

const industries = [
  { id: 1, icon: <FaHospital size={40} className="text-[#00BFFF]" />, title: "Healthcare" },
  { id: 2, icon: <FaGraduationCap size={40} className="text-yellow-400" />, title: "Education" },
  { id: 3, icon: <FaUtensils size={40} className="text-pink-400" />, title: "Restaurant" },
  { id: 4, icon: <FaShoppingBag size={40} className="text-green-400" />, title: "Retail" },
  { id: 5, icon: <FaBuilding size={40} className="text-orange-400" />, title: "Construction" },
  { id: 6, icon: <FaLaptop size={40} className="text-gray-300" />, title: "IT Company" },
];

const IndustriesWeServe = () => {
  return (
    <section className="bg-[#0B1221] text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
      <p className="text-gray-400 mb-12 text-lg">
        Specialized automation solutions across multiple industries
      </p>

      <div className="md:w-[90%] mx-auto">
        {/* Mobile: 2 columns; md and up: all items on one row (6 columns) */}
        <div className="w-[100%] m-auto pt-8 grid grid-cols-2 md:grid-cols-6 gap-6 justify-items-center">
          {industries.map((item) => (
            <div
              key={item.id}
              /* card fills the grid cell on md so items align in a single row */
              className="bg-[#1B2333] w-44 md:w-full md:max-w-none h-32 flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all flex items-center gap-2 mx-auto">
          View All Industries <span className="text-xl">→</span>
        </button>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
