import React from 'react'
import ServiceHero from '../ServiceHero'
import { CgSignal } from "react-icons/cg";
import InfoCard2 from '../InfoCard2';
import { FiCheckCircle } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { PiToolbox } from "react-icons/pi";

import { LuShield } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
const Office = () => {
   const points = [
    "Reduce administrative overhead by 60%",
    "Automate repetitive office tasks",
    "Improve employee productivity tracking",
    "Streamline HR processes and payroll",
    "Enhance document security and access",
    "Create better workplace collaboration",
  ];
  const points2 = [
    "Customized solution for your office size",
    "Employee training and change management ",
    "Ongoing support and system updates",
  ];
  return (
    <>
        <ServiceHero

        logo="🏢"
        logo2={<CgSignal />}
        title="Office"
        subtitle="Corporate Automation Solutions"
        description="Transform your office operations with comprehensive HR systems, document management, task automation, and employee productivity tools."
        primaryButton="Get Started Today"
        secondaryButton="View All Services"
        image="office.png"
        text1='smart'
        text2='Workflows'
      />


       <div className="bg-gradient-to-br  from-gray-800 to-gray-900">
          <div className="flex  flex-col gap-2 pt-10 pb-20">
          <div className="text-[36px] font-bold text-white max-sm:text-[22px]">
         Modern Office Management Platform
          </div>
          <div className="text-[20px] text-white max-sm:text-[16px]">
          Digitize and automate your office operations for maximum efficiency and productivity
          </div>
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6">
          <InfoCard2
            icon={<FiUsers   className="text-yellow-500" />}
            title=" HR Management System"
            description1="Comprehensive employee management, payroll processing,"
            description2=" and performance tracking automation."
          />

          <InfoCard2
            icon={<GrDocumentText  className="text-yellow-500"/>}
            title="Document Management"
            description1="Digital document storage, automated,"
            description2="workflows, and secure file sharing systems."
          />

          <InfoCard2
            icon={< PiToolbox className="text-yellow-500" />}
            title="Task Automation"
            description1="Streamlined project management, automated "
            description2="task assignment, and progress tracking."
          />
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 pt-8">
          <InfoCard2
            icon={<CgSignal  className="text-yellow-500"   />}
            title="Analytics Dashboard"
            description1="Real-time insights into productivity metrics, employee"
            description2="performance, and operational efficiency."
          />

          <InfoCard2
            icon={<LuShield   className="text-yellow-500" />}
            title="Employee Portals"
            description1="Self-service portals for leave management,"
            description2="expense reporting, and benefits administration."
          />

          <InfoCard2
            icon={<GoClock  className="text-yellow-500" />}
            title="Time Tracking"
            description1="Automated time and attendance tracking with" 
            description2="integrated payroll processing."
          />
        </div>


         <div className="flex flex-row  max-sm:flex-col p-10  bg-[#0b132b] gap-6">
                       <div className=" text-white p-8  mx-auto">
                  <h2 className="text-[30px] font-bold mb-6">
                  Build a Smarter Workplace
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
              Ready to Go Digital?
                  </h2>
                  <p className="mb-6 text-base text-start">
               Join forward-thinking companies that have transformed their office operations with intelligent automation.
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

export default Office