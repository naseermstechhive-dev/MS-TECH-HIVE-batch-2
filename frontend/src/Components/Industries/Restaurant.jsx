import React from 'react'
import ServiceHero from '../ServiceHero'
import { CiShoppingCart } from "react-icons/ci";
import { CiForkAndKnife } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { CgSignal } from "react-icons/cg";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { GoClock } from "react-icons/go";
import InfoCard2 from '../InfoCard2';
import { FiCheckCircle } from "react-icons/fi";

const Restaurant = () => {
  const points = [
    "Reduce admission processing time by 60%",
    "Automate course registration and schedulin",
    "Improve student engagement with digital portals",
    "Streamline fee collection and financial aid",
    "Generate comprehensive academic reports",
    "Enhance institutional decision-making with analytics",
  ];
  const points2 = [
    "Tailored solution for your institution",
    "Faculty and staff training programs",
    "Phased implementation approach",
  ];
  return (
    <>
      <ServiceHero
             logo="🍽️"
              logo2="🍴"
              title="Restaurant"
              subtitle="Food Service Automation"
              description="Optimize your restaurant operations with comprehensive order management, billing systems, table tracking, and kitchen automation solutions."
              primaryButton="Get Started Today"
              secondaryButton="View All Services"
              image="resturant.png"
              text1='Smart'
              text2='Kitchen' />




              <div className="bg-gradient-to-br  from-gray-800 to-gray-900">
          <div className="flex  flex-col gap-2 pt-10 pb-20">
          <div className="text-[36px] font-bold text-white max-sm:text-[22px]">
          Complete Restaurant Management Suite
          </div>
          <div className="text-[20px] text-white max-sm:text-[16px]">
           From order taking to customer satisfaction, automate every aspect of your restaurant operations
          </div>
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 max-sm:pl-4">
          <InfoCard2
            icon={<CiShoppingCart  className="text-yellow-500" />}
            title=" Order Management System"
            description1="Streamlined order processing from dine-in,"
            description2="takeout, and delivery with real-time kitchen coordination."
          />

          <InfoCard2
            icon={<CiForkAndKnife  className="text-yellow-500"/>}
            title="Kitchen Automation"
            description1="Digital kitchen displays, prep time tracking, and automated ,"
            description2="order prioritization for optimal efficiency."
          />

          <InfoCard2
            icon={< FiUsers className="text-yellow-500" />}
            title="Table Management"
            description1="Smart table tracking, reservation management, and "
            description2="seating optimization with waitlist automation."
          />
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 pt-8 max-sm:pl-4">
          <InfoCard2
            icon={<CgSignal  className="text-yellow-500"   />}
            title="POS & Billing Systems"
            description1="Integrated point-of-sale with inventory tracking,"
            description2="payment processing, and automated billing."
          />

          <InfoCard2
            icon={<BiBriefcaseAlt2   className="text-yellow-500" />}
            title="Staff Scheduling"
            description1="Automated staff scheduling, shift management"
            description2="and performance tracking systems."
          />

          <InfoCard2
            icon={<GoClock  className="text-yellow-500" />}
            title="Delivery Tracking"
            description1="Real-time delivery management with driver" 
            description2="tracking and customer notifications."
          />
        </div>


         <div className="flex flex-row  max-sm:flex-col p-10  bg-[#0b132b] gap-6">
                       <div className=" text-white p-8  mx-auto">
                  <h2 className="text-[30px] font-bold mb-6 max-sm:text-[20px]">
                   Serve Success, Not Just Food
                  </h2>
                  <ul className="space-y-4">
                    {points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-lg max-sm:text-start">
                        <FiCheckCircle  className="text-yellow-400 mt-1 text-[26px]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                       </div>
                         <div className="bg-[#d79c00] text-[#0b132b] p-8 rounded-2xl w-[600px] mx-auto max-sm:w-[340px]" >
                  <h2 className="text-2xl font-bold mb-3 text-start">
                Ready to Transform Your Restaurant?
                  </h2>
                  <p className="mb-6 text-base text-start">
                 Join successful restaurants that have increased efficiency and customer satisfaction with our automation solutions.
                </p>
                  <ul className="space-y-3 mb-6">
                    {points2.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-base max-sm:text-start">
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

export default Restaurant