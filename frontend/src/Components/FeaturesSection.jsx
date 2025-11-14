import React from "react";
import { FaBolt, FaChartLine, FaUsers, FaAward } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

const features = [
  {
    id: 1,
    icon: <FaBolt />,
    title: "Automation Excellence",
    desc: "Streamline your workflows with cutting-edge automation solutions",
  },
  {
    id: 2,
    icon: <FaChartLine />,
    title: "Growth Acceleration",
    desc: "Scale your business operations with intelligent technology",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "Industry Expertise",
    desc: "Specialized solutions for 12+ different industries",
  },
  {
    id: 4,
    icon: <FaAward />,
    title: "Proven Results",
    desc: "Delivering measurable outcomes for our clients",
  },
];

const FeaturesSection = () => {
  const { theme } = useTheme(); 

  return (
    <section
      className={`py-8 px-6  md:px-8 lg:px-24 font-poppins transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-[#1c2839] text-white"
            : "bg-gray-50 text-gray-900"
        }
      `}
    >
      <div className="w-full m-auto  pt-7">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-9">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-colors duration-300
              ${theme === "dark" ? "text-white" : "text-gray-900"}
            `}
          >
            Why Choose MS Tech Hive?
          </h2>
          <p
            className={`mt-4 text-base md:text-lg transition-colors duration-300
              ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
            `}
          >
            We combine cutting-edge technology with industry expertise to
            deliver solutions that drive real results.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <article
              key={f.id}
              className={`rounded-2xl p-8 shadow-xl border border-transparent hover:-translate-y-2 transition-all duration-300
                ${theme === "dark" ? "bg-[#1c2630]" : "bg-white"}
              `}
            >
              {/* Icon and Text */}
              <div className="flex flex-col items-start">
                {/* Icon */}
                <div className="w-14 h-14 rounded-md bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center text-black dark:text-black text-2xl md:text-3xl mb-5">
                  {f.icon}
                </div>

                {/* Text */}
                <h3
                  className={`text-lg md:text-xl font-semibold mb-2 transition-colors duration-300
                    ${theme === "dark" ? "text-white" : "text-gray-900"}
                  `}
                >
                  {f.title}
                </h3>
                <p
                  className={`text-sm md:text-base leading-relaxed transition-colors duration-300
                    ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
                  `}
                >
                  {f.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
