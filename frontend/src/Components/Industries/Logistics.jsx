import React from 'react'

import { FiCheckCircle } from "react-icons/fi";
import ServiceHero from '../ServiceHero';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { HiOutlineCube } from "react-icons/hi2";

import { FiUsers } from "react-icons/fi";
import { CgSignal } from "react-icons/cg";
import { GoClock } from "react-icons/go";
import InfoCard2 from '../InfoCard2';


const Logistics = () => {

  const points = [
    "Reduce delivery times by 40%",
    "Optimize fuel consumption and routes",
    "Improve customer satisfaction scores",
    "Automate dispatch and scheduling",
    "Real-time package and fleet tracking",
    "Reduce operational costs by 25%",
  ];
  const points2 = [
    "Custom solution for your fleet size",
    "Driver training and mobile app support",
    "24/7 monitoring and support",
  ];
  return (
    <>
                      <ServiceHero
        logo="🚛"
        logo2={<CiLocationOn />}
        title="Logistics "
        subtitle="Transportation Solutions"
        description="Optimize your logistics operations with comprehensive fleet management, route optimization, delivery tracking, and warehouse management systems."
        primaryButton="Get Started Today"
        secondaryButton="View All Services"
        image="logistics.png"
        text1='smart'
        text2='routes'
      />   
               


                 <div className="bg-gradient-to-br  from-gray-800 to-gray-900">
          <div className="flex  flex-col gap-2 pt-10 pb-20">
          <div className="text-[36px] font-bold text-white max-sm:text-[22px]">
          Complete Logistics Management Suite
          </div>
          <div className="text-[20px] text-white max-sm:text-[16px]">
          From fleet management to last-mile delivery, optimize every aspect of your logistics operations
          </div>
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6">
          <InfoCard2
            icon={<MdOutlineLocalShipping  className="text-yellow-500" />}
            title=" Fleet Management"
            description1="Comprehensive vehicle tracking, maintenance"
            description2="scheduling, and driver management systems."
          />

          <InfoCard2
            icon={<CiLocationOn  className="text-yellow-500"/>}
            title="Route Optimization"
            description1="AI-powered route planning for maximum efficiency, "
            description2="reduced fuel costs, and faster deliveries."
          />

          <InfoCard2
            icon={< HiOutlineCube className="text-yellow-500" />}
            title="Shipment Tracking"
            description1="Real-time package tracking with customer"
            description2="notifications and delivery confirmations."
          />
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 pt-8">
          <InfoCard2
            icon={<CgSignal  className="text-yellow-500"   />}
            title="Analytics Dashboard"
            description1="Performance metrics, delivery analytics, and"
            description2="operational efficiency reporting."
          />

          <InfoCard2
            icon={<FiUsers   className="text-yellow-500" />}
            title="Driver Management"
            description1="Driver scheduling, performance tracking, and"
            description2="communication systems."
          />

          <InfoCard2
            icon={<GoClock  className="text-yellow-500" />}
            title="Delivery Automation"
            description1="Automated delivery scheduling, dispatch" 
            description2="management, and customer communication"
          />
        </div>


         <div className="flex flex-row  max-sm:flex-col p-10  bg-[#0b132b] gap-6">
                       <div className=" text-white p-8  mx-auto">
                  <h2 className="text-[30px] font-bold mb-6">
                 Deliver Excellence Every Mile
                  </h2>
                  <ul className="space-y-4">
                    {points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-lg">
                        <FiCheckCircle  className="text-yellow-400 mt-1 text-[26px]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                       </div>
                         <div className="bg-[#d79c00] text-[#0b132b] p-8 rounded-2xl w-[600px] mx-auto">
                  <h2 className="text-2xl font-bold mb-3 text-start">
             Ready to Optimize Your Fleet?
                  </h2>
                  <p className="mb-6 text-base text-start">
              Join logistics companies that have reduced costs and improved delivery times with our comprehensive solutions.
        </p>
                  <ul className="space-y-3 mb-6">
                    {points2.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-base">
                        <FiCheckCircle  className="text-[#0b132b] mt-1 text-[26px]"   />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
        
                 <div className=' text-start'> <button className="bg-[#0b132b] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#1c2541] transition  ">
                    Schedule Demo
                  </button></div>
                          </div>
              </div> 
      </div>
    </>
  )
}

export default Logistics