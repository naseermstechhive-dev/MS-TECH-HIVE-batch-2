import React, { useEffect } from 'react'
import ServiceHero from '../ServiceHero';
import { BsCart2 } from "react-icons/bs";

import { FiUsers } from "react-icons/fi";
import { CgSignal } from "react-icons/cg";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FiCreditCard } from "react-icons/fi";
import InfoCard2 from '../InfoCard2';
import { BiCube } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

const Ecommerce = () => {
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
        logo="🛒"
        logo2={<BsCart2  />}
        title="E-commerce "
        subtitle="Online Business Solutions"
        description="Supercharge your e-commerce operations with integrated CRM systems, AI-powered chatbots, comprehensive analytics, and automated order management platforms."
        primaryButton="Get Started Today"
        secondaryButton="View All Services"
        image="ecommerce.png"
        text1='smart'
        text2='Commerce'
      />       
                 <div className="bg-gradient-to-br  from-gray-800 to-gray-900">
                         <div className="flex  flex-col gap-2 pt-10 pb-20">
                         <div className="text-[36px] font-bold text-white max-sm:text-[22px] text-center">
                        Complete E-commerce Automation Suite
                         </div>
                         <div className="text-[20px] text-white max-sm:text-[16px] text-center">
                        From customer acquisition to order fulfillment, optimize every aspect of your online business
                         </div>
                       </div>
               
                       <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 max-sm:pl-4">
                         <InfoCard2
                           icon={<FiUsers  className="text-yellow-500" />}
                           title=" Customer CRM"
                           description1="Comprehensive customer relationship management "
                           description2="with purchase history, preferences, and segmentation."
                         />
               
                         <InfoCard2
                           icon={<MdOutlineChatBubbleOutline  className="text-yellow-500"/>}
                           title="AI Chatbots"
                           description1="Intelligent chatbots for customer support, order tracking,"
                           description2="and personalized product recommendations."
                         />
               
                         <InfoCard2
                           icon={< CgSignal className="text-yellow-500" />}
                           title="Sales Analytics"
                           description1="Advanced analytics dashboard with sales metrics"
                           description2="onversion tracking, and customer insights.."
                         />
                       </div>
               
                       <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 pt-8 max-sm:pl-4">
                         <InfoCard2
                           icon={<BsCart2  className="text-yellow-500"   />}
                           title="Order Management"
                           description1="Automated order processing, inventory synchronization,"
                           description2="and fulfillment tracking systems."
                         />
               
                         <InfoCard2
                           icon={<BiCube   className="text-yellow-500" />}
                           title="Inventory Integration"
                           description1="Real-time inventory management with automatic "
                           description2="restocking alerts and supplier integration."
                         />
               
                         <InfoCard2
                           icon={<FiCreditCard  className="text-yellow-500" />}
                           title="Payment Automation"
                           description1="Secure payment processing, subscription" 
                           description2="management, and automated billing systems"
                         />
                       </div>
               
               
                        <div className="flex flex-row  max-sm:flex-col p-10  bg-[#0b132b] gap-6">
                                      <div data-aos="fade-right"  className=" text-white p-8  mx-auto">
                                 <h2 className="text-[30px] font-bold mb-6 max-sm:text-[20px]">
                               Sell Smarter, Grow Faster
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
                                        <div  data-aos="fade-left" className="bg-[#d79c00] text-[#0b132b] p-8 rounded-2xl w-[600px]  max-sm:w-[340px] mx-auto">
                                 <h2 className="text-2xl font-bold mb-3 text-start">
                           Ready to Scale Your Online Store?
                                 </h2>
                                 <p className="mb-6 text-base text-start">Join successful e-commerce businesses that have increased sales and improved customer satisfaction with our automation solutions.  Join logistics companies that have reduced costs and improved delivery times with our comprehensive solutions.
                       </p>
                                 <ul className="space-y-3 mb-6">
                                   {points2.map((point, index) => (
                                     <li key={index} className="flex items-start gap-3 text-base max-sm:text-start ">
                                       <FiCheckCircle  className="text-[#0b132b] mt-1 text-[26px]"   />
                                       <span>{point}</span>
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

export default Ecommerce