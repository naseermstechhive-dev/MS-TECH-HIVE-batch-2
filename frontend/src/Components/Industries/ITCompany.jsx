import React from 'react'
import ServiceHero from '../ServiceHero'
import { RiComputerLine } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";
import InfoCard2 from '../InfoCard2';
import { PiToolboxLight } from "react-icons/pi";

import { FiUsers } from "react-icons/fi";
import { CgSignal } from "react-icons/cg";
import { GoClock } from "react-icons/go";

import { GrDocumentText } from "react-icons/gr";

const ITCompany = () => {
  const points = [
    "Improve project delivery times by 40%",
    "Enhance client communication and satisfaction",
    "Automate time tracking and billing processes",
    "Optimize team resource allocation",
    "Streamline development workflows",
    "Increase team productivity by 35%",
  ];
  const points2 = [
    "Custom setup for your development methodology",
    "Team training and integration support",
    "API integrations with existing tools",
  ];
  return (
    <>
         <ServiceHero
        logo="💻"
        logo2={<RiComputerLine />}
        title="IT Company "
        subtitle="Tech Project Solutions"
        description="Enhance your IT operations with comprehensive project dashboards, client communication portals, team collaboration tools, and resource management systems."
        primaryButton="Get Started Today"
        secondaryButton="View All Services"
        image="itservice.png"
        text1='smart'
        text2='projects'
      />    



                   <div className="bg-gradient-to-br  from-gray-800 to-gray-900">
          <div className="flex  flex-col gap-2 pt-10 pb-20">
          <div className="text-[36px] font-bold text-white max-sm:text-[22px]">
        Complete IT Project Management Platform
          </div>
          <div className="text-[20px] text-white max-sm:text-[16px]">
          Streamline development workflows, enhance client relationships, and optimize team productivity
          </div>
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 max-sm:pl-4">
          <InfoCard2
            icon={<RiComputerLine  className="text-yellow-500" />}
            title=" Project Dashboards"
            description1="Comprehensive project management dashboards "
            description2="with real-time progress tracking and team collaboration."
          />

          <InfoCard2
            icon={<FiUsers  className="text-yellow-500"/>}
            title="Client Portals"
            description1="Dedicated client communication portals with project updates,, "
            description2="document sharing, and feedback systems."
          />

          <InfoCard2
            icon={< CgSignal className="text-yellow-500" />}
            title="Resource Management"
            description1="Team allocation, skill tracking, and resource"
            description2="optimization for maximum project efficiency."
          />
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 pt-8 max-sm:pl-4">
          

          <InfoCard2
            icon={<GrDocumentText   className="text-yellow-500" />}
            title="Documentation Systems"
            description1="Automated documentation generation, version"
            description2="control, and knowledge base management."
          />

          <InfoCard2
            icon={<PiToolboxLight  className="text-yellow-500" />}
            title="Sprint Planning"
            description1="Agile project management with sprint planning," 
            description2="backlog management, and velocity tracking."
          />

          <InfoCard2
            icon={<GoClock  className="text-yellow-500"   />}
            title="Time Tracking"
            description1="Automated time tracking, billing integration,"
            description2="and productivity analytics for teams."
          />
        </div>


         <div className="flex flex-row  max-sm:flex-col p-10  bg-[#0b132b] gap-6">
                       <div className=" text-white p-8  mx-auto">
                  <h2 className="text-[30px] font-bold mb-6 max-sm:text-[20px]">
                Code Better, Deliver Faster
                  </h2>
                  <ul className="space-y-4">
                    {points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-lg max-sm:text-start ">
                        <FiCheckCircle  className="text-yellow-400 mt-1 text-[26px]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                       </div>
                         <div className="bg-[#d79c00] text-[#0b132b] p-8 rounded-2xl w-[600px] max-sm:w-[340px]  mx-auto">
                  <h2 className="text-2xl font-bold mb-3 text-start">
           Ready to Scale Your IT Operations?
                  </h2>
                  <p className="mb-6 text-base text-start">
             join successful IT companies that have improved project delivery and client satisfaction with our management solutions.
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

export default ITCompany