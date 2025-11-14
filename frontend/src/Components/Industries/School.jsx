import React, { useEffect } from 'react'
import ServiceHero from '../ServiceHero'
import { CiClock2 } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import InfoCard2 from '../InfoCard2';
import { FiCheckCircle } from "react-icons/fi";
import { PiBagFill } from "react-icons/pi";
import { LuShield } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';


const School = () => {
  let navigate=useNavigate()
  const points = [
    "Reduce admission processing time by 60%",
    "Improve parent engagement by 75%",
    "Automate attendance and grade reporting",
    "Streamline teacher-parent communication",
    "Real-time academic progress tracking",
    "Enhanced school safety protocols",
  ];
  const points2 = [
    "Personalized demo for your school",
    "Staff training and support",
    "Gradual implementation plan",
  ];
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,     
      mirror: true,   
      easing: "ease-out",
    });
  }, []);
  return (
    <>
       <ServiceHero
        logo="🎓"
        logo2={<CiClock2 />}
        title="School"
        subtitle="Education Management Solutions"
        description="Revolutionize your school's operations with automated attendance tracking, parent communication portals, and comprehensive administrative management systems."
        primaryButton="Get Started Today"
        secondaryButton="View All Services"
        image="school.png"
        text1='RealTime'
        text2='updates'
      />

       <div className="bg-gradient-to-br  from-gray-800 to-gray-900">
         <div className="flex  flex-col gap-2 pt-10 pb-20">
          <div className="text-[36px] font-bold text-white max-sm:text-[20px] text-center">
            Complete School Management System
          </div>
          <div className="text-[20px] text-white max-sm:text-[15px] text-center ">
            Streamline every aspect of school administration with our comprehensive automation platform
          </div>
        </div>

        <div className="flex  flex-row  max-sm:flex-col justify-center gap-6 max-sm:pl-3">
          <InfoCard2
            icon={<FiUsers className="text-yellow-500" />}
            title="Student Management"
            description1="Comprehensive student profiles, enrollment"
            description2="tracking, and academic progress monitoring."
          />

          <InfoCard2
            icon={<PiBagFill className="text-yellow-500"/>}
            title="Attendance Tracking"
            description1="Automated attendance systems with real-time,"
            description2="notifications to parents and administrators."
          />

          <InfoCard2
            icon={<FaRegMessage  className="text-yellow-500" />}
            title="Parent Communication Portal"
            description1="Direct communication channels between"
            description2="teachers, parents, and administrators."
          />
        </div>

        <div className="flex  flex-row  max-sm:flex-col justify-center gap-6 pt-8 max-sm:pl-3">
          <InfoCard2
            icon={<CgNotes  className="text-yellow-500"   />}
            title="Grade Management"
            description1="Digital gradebooks, report card generation, and"
            description2="academic performance tracking."
          />

          <InfoCard2
            icon={<MdOutlineSignalCellularAlt  className="text-yellow-500" />}
            title="Academic Analytics"
            description1="Insights into student performance, attendance"
            description2="patterns, and school metrics."
          />

          <InfoCard2
            icon={<LuShield className="text-yellow-500" />}
            title="Safety & Security"
            description1="Student check-in/out systems and emergency" 
            description2="communication protocols."
          />
        </div>


         <div  className="flex  flex-row max-sm:flex-col p-10  bg-[#0b132b] gap-6 " >
                       <div data-aos="fade-right" className=" text-white p-8  mx-auto">
                  <h2 className="text-[30px] font-bold mb-6  max-sm:text-[20px]">
                   Enhance Educational Excellence
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
                         <div data-aos="fade-left" className="bg-[#d79c00] text-[#0b132b] p-8 max-sm:p-3 rounded-2xl w-[600px] max-sm:w-[340px] mx-auto">
                  <h2 className="text-2xl font-bold mb-3 text-start max-sm:text-[20px]">
                   Transform Your School Today
                  </h2>
                  <p className="mb-6 text-base text-start">
                    Join progressive schools that have modernized their operations with our education management solutions.
                  </p>
        
                  <ul className="space-y-3 mb-6 ">
                    {points2.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-base max-sm:text-start ">
                        <FiCheckCircle  className="text-[#0b132b] mt-1 text-[26px]"   />
                        <span > {point}</span>
                      </li>
                    ))}
                  </ul>
        
                 <div className=' text-start'> <button onClick={()=>{navigate("/contact")}} className="bg-[#0b132b] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#1c2541] transition  ">
                    Schedule Demo
                  </button></div>
                          </div>
              </div> 
          </div>
      
    </>
  )
}

export default School