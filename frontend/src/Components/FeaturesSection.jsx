import React from "react";
import { FaBolt, FaChartLine, FaUsers, FaAward } from "react-icons/fa";

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
  return (
    <section className="bg-[#1c2839] text-white py-20 px-6 md:px-12 lg:px-24 font-poppins">
      <div className="w-[100%]  m-auto pt-[2rem]">
        {/* Heading */}
        <div className="text-center max-w-3xl  mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Why Choose MS Tech Hive?
          </h2>
          <p className="mt-4 text-gray-300 text-base md:text-lg">
            We combine cutting-edge technology with industry expertise to deliver
            solutions that drive real results.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <article
              key={f.id}
              className="bg-[#1c2630] rounded-2xl p-8 shadow-xl border border-transparent hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon and Text both start from left */}
              <div className="flex flex-col items-start">
                {/* Icon */}
                <div className="w-14 h-14 rounded-md bg-[#FFC300] flex items-center justify-center text-[#0b0b0b] text-2xl md:text-3xl mb-5">
                  {f.icon}
                </div>

                {/* Text */}
                <h3 className="text-lg  text-left md:text-xl font-semibold mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base text-left leading-relaxed">
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
