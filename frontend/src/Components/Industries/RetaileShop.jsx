import React from 'react'
import ServiceHero from '../ServiceHero'
import { FiShoppingCart } from "react-icons/fi";
import { LuBox } from "react-icons/lu";
import InfoCard2 from '../InfoCard2';
import { LuCreditCard } from "react-icons/lu";
import { CgSignal } from "react-icons/cg";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";
import { LuClock } from "react-icons/lu";

import { FiUsers } from "react-icons/fi";

const RetaileShop = () => {
  const points = [
    "Reduce inventory management time by 50%",
    "Automate stock reordering and alerts",
    "Improve customer retention with CRM",
    "Streamline checkout and payment processes",
    "Generate detailed sales and profit reports",
    "Optimize staff scheduling and performance",
  ];
  const points2 = [
    "Tailored setup for your store type",
    "Staff training and system onboarding",
    "Ongoing support and maintenance",
  ];
  return (
    <>
               <ServiceHero
        logo="🛍️"
        logo2={<FiShoppingCart/>}
        title="Retail Shop"
        subtitle="Retail Management Solutions"
        description="Modernize your retail operations with comprehensive inventory management, POS systems, customer relationship tools, and sales analytics platforms."
        primaryButton="Get Started Today"
        secondaryButton="View All Services"
        image="retail.png"
        text1='smart'
        text2='Retail'
      />




              
         <div className="bg-gradient-to-br  from-gray-800 to-gray-900">
          <div className="flex  flex-col gap-2 pt-10 pb-20">
          <div className="text-[36px] font-bold text-white max-sm:text-[22px]">
           Complete Retail Management System
          </div>
          <div className="text-[20px] text-white max-sm:text-[16px]">
          From inventory to customer relationships, manage every aspect of your retail business efficiently
          </div>
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6">
          <InfoCard2
            icon={<LuBox  className="text-yellow-500" />}
            title=" Inventory Management"
            description1="Real-time stock tracking, automated reordering, and "
            description2="comprehensive product catalog management."
          />

          <InfoCard2
            icon={<LuCreditCard  className="text-yellow-500"/>}
            title="Point of Sale Systems"
            description1="Modern POS terminals with payment processing,"
            description2="eceipt generation, and transaction tracking."
          />

          <InfoCard2
            icon={< FiUsers className="text-yellow-500" />}
            title="Customer Management"
            description1="CRM integration with customer profiles, purchase  "
            description2=" history ,and loyalty program managemen"
          />
        </div>

        <div className="flex  flex-row max-sm:flex-col  justify-center gap-6 pt-8">
          <InfoCard2
            icon={<CgSignal   className="text-yellow-500"   />}
            title="Sales Analytics"
            description1="Comprehensive sales reporting, trend analysis,"
            description2="and performance metrics dashboard."
          />

          <InfoCard2
            icon={<PiShoppingCartSimpleDuotone  className="text-yellow-500" />}
            title="E-commerce Integration"
            description1="Seamless online and offline sales integration" 
            description2="with unified inventory management."
          /> 
          <InfoCard2
            icon={<LuClock    className="text-yellow-500" />}
            title="Staff Management"
            description1="Employee scheduling, performance tracking,"
            description2="and sales commission automation."
          />

         
        </div>


         <div className="flex flex-row  max-sm:flex-col p-10  bg-[#0b132b] gap-6">
                       <div className=" text-white p-8  mx-auto">
                  <h2 className="text-[30px] font-bold mb-6">
                  Retail Excellence Made Simple
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
                Boost Your Retail Success
                  </h2>
                  <p className="mb-6 text-base text-start">
                 Join successful retailers who have increased efficiency and customer satisfaction with our management solutions.
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

export default RetaileShop