import React from "react";
import { FaClock } from "react-icons/fa";

export default function HospitalsMain() {
  return (
    <section className="bg-gray-50 dark:bg-[#0c121d] py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Healthcare Automation Solution
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
              Streamline patient management, appointments, and medical records with our
              cutting-edge healthcare automation solution. Designed to improve efficiency, reduce
              manual work, and provide 24/7 support for all healthcare operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
                Get Started Today
              </button>
              <button className="px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white transition">
                View All Services
              </button>
            </div>
          </div>

          {/* Right Image with Timer Icon */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Healthcare"
              className="w-full h-full rounded-2xl object-cover shadow-lg"
            />

            {/* Timer Icon Overlay */}
            <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-lg flex flex-col items-start shadow-lg">
              <div className="flex items-center gap-2">
                <FaClock className="text-white text-lg" />
                <span className="font-semibold">24/7</span>
              </div>
              <span className="text-sm">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
