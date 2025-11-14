import React, { useState, useEffect } from "react";
import FeaturesSection from "../Components/FeaturesSection";
import IndustriesWeServe from "../Components/IndustriesWeServe";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className="w-full h-max-content font-poppinsRegular">
        <div className="bg-gray-50 dark:bg-[#0e1621] text-gray-900 dark:text-white w-full md:py-28 py-10 px-6 md:px-20 flex flex-col md:flex-row items-start justify-between transition-colors duration-300">
          {/* Left Side Content */}
          <div
            className="md:w-[55%] w-full flex flex-col md:px-10 mt-8 items-start justify-start space-y-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h1
              className="text-4xl md:text-5xl font-bold leading-snug text-left"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Automate Work.
              <br />
              <span className="text-yellow-400">Accelerate Growth.</span>
            </h1>

            <div
              className="md:w-[450px]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left">
                Transform your business operations with intelligent automation
                solutions tailored for your industry.
              </p>
            </div>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:gap-5 gap-3 pt-4 w-full"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Link to="/service">
                <button className="bg-yellow-400 dark:bg-yellow-500 text-black dark:text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 dark:hover:bg-yellow-600 transition flex items-center justify-center gap-2 w-full sm:w-auto">
                  Explore Services →
                </button>
              </Link>

              <Link to="/contact">
                <button className="border-2 border-yellow-400 dark:border-yellow-500 text-yellow-400 dark:text-yellow-500 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 hover:text-black dark:hover:bg-yellow-600 dark:hover:text-white transition w-full sm:w-auto">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side Animated Box */}
          <div
            className="md:w-[50%] w-full flex justify-center md:justify-end mt-10 md:mt-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative w-[90%] md:w-[900px] rounded-2xl overflow-visible p-[3px] bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 animate-borderMove">
              <div
                className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl h-[380px] flex items-center justify-center shadow-xl relative z-10"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <span className="text-7xl">🐢</span>
              </div>

              {/* Rounded Corner Circles */}
              <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 opacity-95 animate-rotateGlow z-20"></div>
              <div className="absolute -bottom-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 opacity-95 animate-rotateGlow [animation-delay:3s] z-20"></div>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <div data-aos="fade-up" data-aos-delay="200">
          <FeaturesSection />
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <IndustriesWeServe />
        </div>

        {/* CTA Section */}
        <div
          className="py-16 px-6 text-center flex flex-col items-center justify-center space-y-6 transition-colors duration-500 bg-yellow-400 dark:bg-yellow-600"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Ready to Transform Your Business?
          </h2>

          <p
            className="text-gray-800 dark:text-gray-200 max-w-2xl text-base md:text-lg transition-colors duration-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Join hundreds of businesses that have accelerated their growth with
            our automation solution.
          </p>

          <Link to="/contact">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-gray-900 dark:bg-gray-800 text-white dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Start Your Journey
              <BsArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
