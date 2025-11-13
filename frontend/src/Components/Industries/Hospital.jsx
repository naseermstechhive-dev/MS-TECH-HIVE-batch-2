import React from "react";
import ServiceHero from "../ServiceHero";

import { CiClock2 } from "react-icons/ci";

import InfoCard2 from "../InfoCard2";
import { FiUsers } from "react-icons/fi";

import { FiCheckCircle } from "react-icons/fi";
import { PiBagFill } from "react-icons/pi";
import { MdOutlineNoteAdd } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu"
import { LuShield } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";

const Hospital = () => {

  
  const points = [
    "Reduce admission processing time by 60%",
    "Automate course registration and scheduling",
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
        logo="🏥"
        logo2={<CiClock2 />}
        title="Hospital"
        subtitle="Healthcare Automation Solutions"
        description="Transform your hospital operations with comprehensive automation solutions for patient management, appointments, medical records, and billing systems."
        primaryButton="Get Started Today"
        secondaryButton="View All Services"
        image="hospital.png"
        text1="24/7"
        text2="support"
      />

      <div className="bg-gradient-to-br  from-gray-800 to-gray-900">
        <div className="flex  flex-col  gap-2 pt-10 pb-20">
          <div className="text-[36px] font-bold text-white max-sm:text-[22px]">
            Comprehensive Hospital Solutions
          </div>
          <div className="text-[20px] text-white max-sm:text-[16px]">
            Our hospital automation platform covers every aspect of healthcare
            operations
          </div>
        </div>

        <div className="flex  flex-row   max-sm:flex-col  justify-center gap-6 max-sm:pl-4">
          <InfoCard2
            icon={<FiUsers className="text-yellow-500" />}
            title="Patient Management System"
            description1="Comprehensive patient registration, medical history "
            description2="Ctracking, and profile management with automated workflows."
          />

          <InfoCard2
            icon={<PiBagFill className="text-yellow-500"/>}
            title="Appointment Scheduling"
            description1="Intelligent scheduling system with automated reminders,"
            description2="  doctor availability, and conflict resolution."
          />

          <InfoCard2
            icon={<MdOutlineNoteAdd className="text-yellow-500" />}
            title="Electronic Medical Records"
            description1="Secure, searchable EMR system with real-time"
            description2="updates and multi-device accessibility."
          />
        </div>

        <div className="flex  flex-row  max-sm:flex-col justify-center gap-6 pt-8 max-sm:pl-4">
          <InfoCard2
            icon={<LuCreditCard className="text-yellow-500"   />}
            title="Billing & Insurance"
            description1="Automated billing processes, insurance claim"
            description2="management, and payment tracking systems."
          />

          <InfoCard2
            icon={<LuShield className="text-yellow-500" />}
            title="HIPAA Compliance"
            description1="Full compliance with healthcare regulations and"
            description2="secure data handling protocols."
          />

          <InfoCard2
            icon={<BsGraphUpArrow className="text-yellow-500" />}
            title="Analytics Dashboard"
            description1="Real-time insights into patient flow, revenue"
            description2="metrics, and operational efficiency."
          />
        </div>
      </div>

      <div className="flex flex-row  max-sm:flex-col p-10  bg-[#0b132b] gap-6">
               <div className=" text-white p-8  mx-auto">
          <h2 className="text-[30px] font-bold mb-6 max-sm:text-[20px]">
            Elevate Higher Education Standards
          </h2>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-lg max-sm:text-[18px] max-sm:text-start">
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
            Join leading colleges that have revolutionized their operations with
            our comprehensive management solutions.
          </p>

          <ul className="space-y-3 mb-6 max-sm:space-y-2 max-sm:text-start">
            {points2.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-base">
                <FiCheckCircle  className="text-[#0b132b] mt-1 text-[26px]  "   />
                <span className="max-sm:text-[16px]">{point}</span>
              </li>
            ))}
          </ul>

          <div className=' text-start'> <button className="bg-[#0b132b] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#1c2541] transition  ">
                    Schedule Demo
                  </button></div>
                  </div>
      </div> 

           
 
    </>
  );
};

export default Hospital;
