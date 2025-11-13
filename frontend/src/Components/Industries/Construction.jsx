import React from 'react'
import { FiCheckCircle } from "react-icons/fi";
import ServiceHero from '../ServiceHero';
import { CgCap } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { PiToolboxLight } from "react-icons/pi";
import { CgSignal } from "react-icons/cg";
import { GrDocumentText } from "react-icons/gr";
import { LuClock } from "react-icons/lu";
import InfoCard2 from '../InfoCard2';

const Construction = () => {


  const points = [
    "Reduce project delays by 35%",
    "Improve worker productivity tracking",
    "Automate compliance and safety reporting",
    "Streamline equipment and material management",
    "Real-time project progress visibility",
    "Optimize resource allocation and costs",
  ];
  const points2 = [
    "Custom solution for your project types",
    "Team training and system implementation",
    "Field support and mobile access",
  ];
  return (
    <>
               
                <ServiceHero
        logo="🏗️"
        logo2={<CgCap/>}
        title="Construction"
        subtitle="Project Management Solutions"
        description="Revolutionize your construction projects with comprehensive tracking systems, worker management, progress monitoring, and resource planning automation."
        primaryButton="Get Started Today"
        secondaryButton="View All Services"
        image="building.png"
        text1='smart'
        text2='projects'
      />

             
       <div className="bg-gradient-to-br  from-gray-800 to-gray-900">
          <div className="flex  flex-col gap-2 pt-10 pb-20">
          <div className="text-[36px] font-bold text-white max-sm:text-[22px]">
          Construction Management Platform
          </div>
          <div className="text-[20px] text-white max-sm:text-[16px]">
         Build better projects with intelligent tracking, resource management, and real-time progress monitoring
          </div>
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 max-sm:pl-4" >
          <InfoCard2
            icon={<CgCap   className="text-yellow-500" />}
            title=" Project Tracking"
            description1="Comprehensive project management with milestone tracking,"
            description2="progress monitoring, and deadline management."
          />

          <InfoCard2
            icon={<FiUsers  className="text-yellow-500"/>}
            title="Worker Management"
            description1="Digital worker logs, attendance tracking, and,"
            description2="skill-based task assignment systems."
          />

          <InfoCard2
            icon={< PiToolboxLight  className="text-yellow-500" />}
            title="Resource Planning"
            description1="Equipment scheduling, material tracking, and "
            description2=" resource allocation optimization."
          />
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 pt-8 max-sm:pl-4">
          <InfoCard2
            icon={<CgSignal   className="text-yellow-500"   />}
            title="Progress Monitoring"
            description1="Real-time project dashboards with visual"
            description2="progress tracking and performance analytics."
          />

          <InfoCard2
            icon={<GrDocumentText  className="text-yellow-500" />}
            title="Documentation Management"
            description1="Digital blueprints, permits, inspection reports," 
            description2="and compliance documentation."
          /> 
          <InfoCard2
            icon={<LuClock    className="text-yellow-500" />}
            title="Time & Cost Tracking"
            description1="Automated time tracking, cost management,"
            description2="and budget monitoring systems."
          />

         
        </div>


         <div className="flex flex-row  max-sm:flex-col p-10  bg-[#0b132b] gap-6">
                       <div className=" text-white p-8  mx-auto">
                  <h2 className="text-[30px] font-bold mb-6 max-sm:text-[20px]">
                Build Smarter, Not Harder
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
                         <div className="bg-[#d79c00] text-[#0b132b] p-8 rounded-2xl w-[600px] max-sm:w-[340px] mx-auto">
                  <h2 className="text-2xl font-bold mb-3 text-start">
              Ready to Modernize Your Projects?
                  </h2>
                  <p className="mb-6 text-base text-start">
               Join construction companies that have improved project efficiency and reduced delays with our management solutions.
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

export default Construction