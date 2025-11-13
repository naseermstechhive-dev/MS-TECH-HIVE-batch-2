import React from "react";
import { FaHospitalAlt, FaSchool, FaUniversity, FaUtensils, FaBuilding, FaStore, FaTools, FaTruck, FaLaptopCode, FaShoppingCart, FaClinicMedical } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const industries = [
  {
    title: "Hospital",
    icon: <FaHospitalAlt size={30} className="text-yellow-500" />,
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Streamline patient management, appointments, and medical records with automated workflows.",
    features: ["Patient Registration", "Appointment Scheduling", "Billing Systems", "Medical Records"],
  },
  {
    title: "School",
    icon: <FaSchool size={30} className="text-yellow-500" />,
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Automate attendance tracking, parent communication, and administrative tasks.",
    features: ["Student Attendance", "Grade Management", "Parent Portal", "Communication Tools"],
  },
  {
    title: "College",
    icon: <FaUniversity size={30} className="text-yellow-500" />,
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Comprehensive admission management, analytics dashboards, and student portals.",
    features: ["Admission Management", "Analytics", "Student Dashboards", "Course Management"],
  },
  {
    title: "Restaurant",
    icon: <FaUtensils size={30} className="text-yellow-500" />,
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Simplify reservations, orders, and inventory management for smoother operations.",
    features: ["Online Ordering", "Inventory Control", "Customer Management", "POS Integration"],
  },
  {
    title: "Office",
    icon: <FaBuilding size={30} className="text-yellow-500" />,
    image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Automate task assignments, track projects, and enhance collaboration in workplaces.",
    features: ["Task Automation", "Employee Tracking", "Document Management", "Performance Reports"],
  },
  {
    title: "Retail",
    icon: <FaStore size={30} className="text-yellow-500" />,
    image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Manage sales, inventory, and customer engagement with intelligent retail automation.",
    features: ["Inventory Management", "POS Integration", "Customer Analytics", "Sales Reports"],
  },
  {
    title: "Construction",
    icon: <FaTools size={30} className="text-yellow-500" />,
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1171&auto=format&fit=crop",
    description: "Enhance project planning, resource allocation, and real-time monitoring for construction firms.",
    features: ["Project Scheduling", "Budget Tracking", "Material Management", "Team Coordination"],
  },
  {
    title: "Logistics",
    icon: <FaTruck size={30} className="text-yellow-500" />,
    image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Optimize fleet operations, route planning, and shipment tracking for logistics businesses.",
    features: ["Route Optimization", "Shipment Tracking", "Fleet Management", "Reports"],
  },
  {
    title: "IT Company",
    icon: <FaLaptopCode size={30} className="text-yellow-500" />,
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Boost productivity with automated workflows, issue tracking, and client management tools.",
    features: ["Workflow Automation", "Issue Tracking", "CRM Integration", "Project Reporting"],
  },
  {
    title: "E-Commerce",
    icon: <FaShoppingCart size={30} className="text-yellow-500" />,
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Automate product listings, order processing, and customer interactions for online stores.",
    features: ["Order Automation", "Product Management", "Customer Support", "Sales Analytics"],
  },
  {
    title: "Clinic & Labs",
    icon: <FaClinicMedical size={30} className="text-yellow-500" />,
    image: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Digitize appointment scheduling, test result management, and patient engagement.",
    features: ["Appointment System", "Lab Reports", "Patient Database", "Notifications"],
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-gray-50 dark:bg-[#0c121d] py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Industries We Serve
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized automation solutions tailored for your industry’s unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-[#1c1f26] rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-500 flex flex-col"
            >
              {/* ICON */}
              <div className="absolute top-4 left-4 z-10">
                {item.icon}
              </div>

              {/* IMAGE WITH GRADIENT OVERLAY */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-5 flex flex-col h-full">
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm md:text-base">
                  {item.description}
                </p>

                {/* Key Features as flex badges with numbers */}
                <div className="mb-4">
                  <div className="text-yellow-500 font-semibold mb-2">Key Features:</div>

                  <ul className="flex flex-wrap gap-2 list-none">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className="bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-yellow-100 text-xs px-3 py-1 rounded-full shadow-sm hover:scale-105 transform transition flex items-center gap-1"
                      >
                        <span className="font-semibold">{i + 1}.</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button with Arrow */}
                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 px-5 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition"
                >
                  Learn More <span className="text-white text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    
     <div className="py-16   my-10 rounded-xl  w-[85%] m-auto px-6 text-center flex flex-col items-center justify-center space-y-6 transition-colors duration-500
                      bg-yellow-400 dark:bg-yellow-600">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-500">
          Don't See Your Industry?
        </h2>
      
        {/* Paragraph */}
        <p className="text-gray-800 dark:text-gray-200 max-w-2xl text-base md:text-lg transition-colors duration-500">
         We work with businesses across many sectors. Contact us to discuss your specific automation needs
        </p>
      
        {/* Button */}
        <button className="flex items-center gap-2 px-6 py-3 rounded-full font-medium
                           bg-gray-900 dark:bg-gray-800 text-white dark:text-white
                           hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300">
          Get Custom Solution
          <BsArrowRight className="text-xl" />
        </button>
      </div>
    </section>
  );
}
