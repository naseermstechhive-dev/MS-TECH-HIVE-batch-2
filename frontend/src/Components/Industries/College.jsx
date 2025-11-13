import React from 'react'
import ServiceHero from '../ServiceHero'
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import InfoCard2 from '../InfoCard2';
import { FiCheckCircle } from "react-icons/fi";

import { FaGraduationCap } from "react-icons/fa";
import { PiToolboxLight } from "react-icons/pi";
import { PiNoteDuotone } from "react-icons/pi"; 
import { FiCreditCard } from "react-icons/fi";


const College = () => {


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
        logo="🏦"
        logo2={<MdOutlineSignalCellularAlt/>}
        title="colleege"
        subtitle="Higher Education Solutions"
        description="Modernize your college operations with comprehensive admission management, student dashboards, analytics, and automated administrative processes."
        primaryButton="Get Started Today"
        secondaryButton="View All Services"
        image="college.png"
        text1='smart'
        text2='Analytics'
      />



   <div className="bg-gradient-to-br  from-gray-800 to-gray-900">
          <div className="flex  flex-col gap-2 pt-10 pb-20">
          <div className="text-[36px] font-bold text-white max-sm:text-[22px]">
            Comprehensive College Management Platform
          </div>
          <div className="text-[20px] text-white max-sm:text-[16px]">
           From admissions to graduation, manage every aspect of your institution with intelligent automation
          </div>
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 max-sm:pl-4">
          <InfoCard2
            icon={<FiUsers className="text-yellow-500" />}
            title=" Admission Management"
            description1="Streamlined application processing, document"
            description2="verification, and enrollment workflows."
          />

          <InfoCard2
            icon={<FaGraduationCap  className="text-yellow-500"/>}
            title="Student Dashboards"
            description1="Comprehensive student portals for course,"
            description2="registration, grades, and academic progress."
          />

          <InfoCard2
            icon={< MdOutlineSignalCellularAlt className="text-yellow-500" />}
            title="Analytics & Reporting"
            description1="Advanced analytics for student performance,"
            description2="enrollment trends, and institutional metrics."
          />
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 pt-8 max-sm:pl-4">
          <InfoCard2
            icon={<PiToolboxLight  className="text-yellow-500"   />}
            title="Course Management"
            description1="Automated scheduling, faculty assignment, and"
            description2="classroom resource management."
          />

          <InfoCard2
            icon={<PiNoteDuotone   className="text-yellow-500" />}
            title="Academic Records"
            description1="Digital transcripts, degree verification, and"
            description2="academic history management."
          />

          <InfoCard2
            icon={<FiCreditCard  className="text-yellow-500" />}
            title="Fee Management"
            description1="Automated fee collection, scholarship" 
            description2="processing, and financial aid distribution."
          />
        </div>


         <div className="flex flex-row  max-sm:flex-col p-10  bg-[#0b132b] gap-6">
                       <div className=" text-white p-8  mx-auto">
                  <h2 className="text-[30px] font-bold mb-6 max-sm:text-[20px]">
                   Elevate Higher Education Standards
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
                 Ready for Digital Transformation?
                  </h2>
                  <p className="mb-6 text-base text-start">
                  Join leading colleges that have revolutionized their operations with our comprehensive management solutions.
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

export default College