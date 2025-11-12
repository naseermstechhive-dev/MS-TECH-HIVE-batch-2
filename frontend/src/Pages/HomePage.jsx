
import React from 'react'
import FeaturesSection from '../Components/FeaturesSection'
import IndustriesWeServe from '../Components/IndustriesWeServe'
import { BsArrowRight } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
    <div className="w-[100%] h-max-content font-poppinsRegular">
   <div className="bg-[#0e1621] text-white w-full py-20 px-6 md:px-20 flex flex-col md:flex-row items-start justify-between">
      {/* Left Side Content */}
      <div className="md:w-[55%] w-full flex flex-col md:px-10 mt-8 items-start justify-start space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug text-left">
          Automate Work.
          <br />
          <span className="text-yellow-400">Accelerate Growth.</span>
        </h1>
         
         <div className='md:w-[450px]'>
          <p className="text-gray-300 text-lg leading-relaxed text-left">
          Transform your business operations with intelligent automation
          solutions tailored for your industry.
        </p>
         </div>
       

        {/* Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 gap-3 pt-4 w-full">
  <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition flex items-center justify-center gap-2 w-full sm:w-auto">
    Explore Services →
  </button>

  <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 hover:text-black transition w-full sm:w-auto">
    Get Started
  </button>
</div>


      </div>





<div className="md:w-[50%] w-full flex justify-center md:justify-end mt-10 md:mt-0">
  {/* Animated Gradient Border Wrapper */}
  <div className="relative w-[90%] md:w-[900px] rounded-2xl overflow-visible p-[3px] bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 animate-borderMove">

    {/* Inner Box */}
    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl h-[380px] flex items-center justify-center shadow-xl relative z-10">
      <span className="text-7xl">🐢</span>
    </div>

    {/* --- Rounded Corner Circles --- */}
    {/* Top-right */}
    <div className="absolute -top-5 -right-5  w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 opacity-95 animate-rotateGlow z-20"></div>

    {/* Bottom-left */}
    <div className="absolute -bottom-5 -left-5  w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 opacity-95   animate-rotateGlow [animation-delay:3s] z-20"></div>
  </div>
</div>






    </div>

    </div>

    <FeaturesSection/>
    <IndustriesWeServe/>
    <div className="bg-yellow-400 py-16 px-6 text-center flex flex-col items-center justify-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Ready to Transform Your Business?
      </h2>
      <p className="text-gray-800 max-w-2xl text-base md:text-lg">
        Join hundreds of businesses that have accelerated their growth with our automation solution.
      </p>
      <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300">
        Start Your Journey
        <BsArrowRight className="text-xl" />
      </button>
    </div>
    </>
  )
}

export default HomePage