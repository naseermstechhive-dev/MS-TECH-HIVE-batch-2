

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceHero = ({
  logo = "", // Can be emoji or React icon
  logo2 = "", // Second logo for the yellow box
  title = "",
  subtitle = "",
  description = "",
  primaryButton = "",
  secondaryButton = "",
  image = "/api/placeholder/600/400",
  text1="",
  text2=""
}) => {
  return (
    <section className="bg-[#0c121d] py-12 md:py-16 px-6 md:px-10 ">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content Section */}
          <div className="space-y-6 md:space-y-8">
            {/* Logo and Title Section */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-5xl max-sm:text-[30px]">
                  {typeof logo === 'string' ? logo : React.cloneElement(logo, { className: "text-5xl" })}
                </span>
              </div>
              <div className="space-y-2">
                <h1 className="text-[44px] md:text-[44px] lg:text-[48px] font-bold text-white text-start leading-tight max-sm:text-[30px]">
                  {title}
                </h1>
                <p className="text-xl md:text-2xl text-yellow-400 font-normal max-sm:text-[15px]">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl text-justify max-sm:text-[20px]">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>{primaryButton}</span>
                <FaArrowRight className="text-sm" />
              </button>
              
              <button className="border-2 border-yellow-500 text-yellow-400 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                {secondaryButton}
              </button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-6"></div>

           
            
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt={title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              
              {/* Yellow Info Box Overlay */}
              <div className="absolute -bottom-7 h-39 w-20 -left-5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-3 shadow-lg">
                <div className="flex flex-col gap-2  h-full">
                  <span className="text-black  text-2xl">
                    {typeof logo2 === 'string' ? logo2 : React.cloneElement(logo2, { className: "text-4xl text-black text-start" })}
                  </span>
                  <div className="">
                    <h3 className="text-black text-sm font-bold leading-none text-start">{text1}</h3>
                    <p className="text-black/80 text-xs leading-none mt-1 text-start">{text2}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-500/5 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;




