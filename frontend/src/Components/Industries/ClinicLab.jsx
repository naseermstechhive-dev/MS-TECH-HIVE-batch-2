import React, { useEffect } from 'react'
import { FiCheckCircle } from "react-icons/fi";
import ServiceHero from '../ServiceHero';
import InfoCard2 from '../InfoCard2';
import { FiActivity } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { LuShield } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { CgSignal } from "react-icons/cg";
import { GoClock } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

const ClinicLab = () => {
  let navigate=useNavigate()
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,     
      mirror: true,   
      easing: "ease-out",
    });
  }, []);
  const points = [
    "Reduce sample processing time by 50%",
    "Eliminate manual report generation",
    "Improve result accuracy and reliability",
    "Streamline patient communication",
    "Ensure regulatory compliance",
    "Optimize lab equipment utilization",
  ];
  const points2 = [
    "Reduce sample processing time by 50%",
    "Custom integration with existing equipment",
    "Compliance support and validation",
  ];
  return (
    <>

              <ServiceHero
        logo="🔬"
        logo2={<FiActivity/>}
        title="Clinic / Lab "
        subtitle="Laboratory Management Solutions"
        description="Modernize your clinic and laboratory operations with comprehensive sample tracking, automated lab reports, patient record management, and result processing systems."
        primaryButton="Get Started Today"
        secondaryButton="View All Services"
        image="clinic.png"
        text1='smart'
        text2='Lab'
      />   




         <div className="bg-gradient-to-br  from-gray-800 to-gray-900">
                         <div className="flex  flex-col gap-2 pt-10 pb-20">
                         <div className="text-[36px] font-bold text-white max-sm:text-[22px] text-center ">
                      Advanced Laboratory Information System
                         </div>
                         <div className="text-[20px] text-white max-sm:text-[16px] text-center">
                       Streamline laboratory operations with intelligent sample tracking, automated reporting, and comprehensive quality management
                         </div>
                       </div>
               
                       <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 max-sm:pl-4">
                         <InfoCard2
                           icon={<FiActivity  className="text-yellow-500" />}
                           title=" Sample Tracking"
                           description1="Comprehensive specimen tracking from "
                           description2="collection to analysis with barcode integration."
                         />
               
                         <InfoCard2
                           icon={<GrDocumentText  className="text-yellow-500"/>}
                           title="Lab Reports"
                           description1="Automated report generation, digital delivery,"
                           description2="and result verification systems."
                         />
               
                         <InfoCard2
                           icon={< FiUsers className="text-yellow-500" />}
                           title="Patient Records"
                           description1="Secure patient data management with medical"
                           description2="history and test result integration."
                         />
                       </div>
               
                       <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 pt-8 max-sm:pl-4">
                         <InfoCard2
                           icon={<CgSignal  className="text-yellow-500"   />}
                           title="Result Management"
                           description1="Digital result processing, quality control, and"
                           description2="automated notifications to physicians."
                         />
               
                         <InfoCard2
                           icon={<LuShield   className="text-yellow-500" />}
                           title="Compliance Management"
                           description1="Regulatory compliance tracking, audit trails, and"
                           description2="quality assurance protocols."
                         />
               
                         <InfoCard2
                           icon={< GoClock className="text-yellow-500" />}
                           title="Workflow Automation"
                           description1="Streamlined lab workflows, appointmen" 
                           description2="scheduling, and equipment management."
                         />
                       </div>
               
               
                        <div className="flex flex-row  max-sm:flex-col p-10  bg-[#0b132b] gap-6">
                                      <div data-aos="fade-right" className=" text-white p-8  mx-auto">
                                 <h2 className="text-[30px] font-bold mb-6 max-sm:text-[20px]">
                             Precision in Every Process
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
                                        <div data-aos="fade-left"  className="bg-[#d79c00] text-[#0b132b] p-8 rounded-2xl w-[600px] max-sm:w-[340px] mx-auto">
                                 <h2 className="text-2xl font-bold mb-3 text-start">
                         Ready to Modernize Your Lab?
                                 </h2>
                                 <p className="mb-6 text-base text-start">
                                 Join leading clinics and laboratories that have improved efficiency and accuracy with our comprehensive management solutions.
                       </p>
                                 <ul className="space-y-3 mb-6">
                                   {points2.map((point, index) => (
                                     <li key={index} className="flex items-start gap-3 text-base max-sm:text-start">
                                       <FiCheckCircle  className="text-[#0b132b] mt-1 text-[26px]"   />
                                       <span>{point}</span>
                                     </li>
                                   ))}
                                 </ul>
                       
                                <div className=' text-start'> <button  onClick={()=>{navigate("/contact")}}className="bg-[#0b132b] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#1c2541] transition  ">
                                   Schedule Demo
                                 </button></div>
                                         </div>
                             </div> 
                     </div>

      
    </>
  )
}

export default ClinicLab