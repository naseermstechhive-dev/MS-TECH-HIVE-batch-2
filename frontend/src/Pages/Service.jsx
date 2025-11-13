import React from "react";
import { FaPalette } from "react-icons/fa";
import InfoCard from "../Components/InfoCard";

const Service = () => {
  return (
    <div>
      {/* first block */}
      <section className="bg-[#0c121d] text-center py-20 px-4 ">
        <div className="max-w-3xl mx-auto mt-4">
          <h2 className="text-[45px] md:text-[45px] font-bold text-white mb- p-4">
            Our Services
          </h2>
          <p className="text-gray-300 text-[15px] md:text-base leading-relaxed font-sans">
            Comprehensive technology solutions designed to automate your work
            and accelerate your growth across all business functions.
          </p>
        </div>
      </section>

      {/* second block */}
      <div className="flex  flex-col justify-center items-center gap-5  bg-[#0c121d] ">
        <div className="bg-blue-600 p-3.5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-palette w-8 h-8 text-yellow-400"
            aria-hidden="true"
          >
            <path
              d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"
              class=""
            ></path>
            <circle
              cx="13.5"
              cy="6.5"
              r=".5"
              fill="currentColor"
              class=""
            ></circle>
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </svg>{" "}
        </div>
        {/* <div className='text-center bg-blue-600 p-5 w-19 h-19 rounded-[50%]'><FaPalette className='text-[30px] text-amber-400 ' />  </div>    */}
        <div className="text-[30px] text-white">Design & Branding</div>
      </div>
      {/* cards */}

      <div className="bg-[#0c121d]">
        <div className="flex  flex-row max-sm:flex-col gap-5 justify-center pt-3  ">
          <InfoCard
            number="1"
            boxColor="#2563EB"
            title="Web Designing"
            description1="Modern, responsive websites that convert "
            description2="visitors into customers"
          ></InfoCard>

          <InfoCard
            number="2"
            boxColor="#2563EB"
            title="Web Designing"
            description1="Modern, responsive websites that convert "
            description2="visitors into customers"
          ></InfoCard>

          <InfoCard
            number="3"
            boxColor="#2563EB"
            title="Web Designing"
            description1="Modern, responsive websites that convert "
            description2="visitors into customers"
          ></InfoCard>
        </div>
      </div>
    </div>
  );
};

export default Service;
