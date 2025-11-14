import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaHospitalAlt,
  FaSchool,
  FaUniversity,
  FaUtensils,
  FaBuilding,
  FaStore,
  FaTools,
  FaTruck,
  FaLaptopCode,
  FaShoppingCart,
  FaClinicMedical,
} from "react-icons/fa";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// ---------------- INDUSTRY DATA ----------------
const industries = [
  {
    title: "Hospital",
    route: "/hospital",
    icon: <FaHospitalAlt size={30} className="text-yellow-500" />,
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Streamline patient management, appointments, and medical records with automated workflows.",
    features: [
      "Patient Registration",
      "Appointment Scheduling",
      "Billing Systems",
      "Medical Records",
    ],
  },
  {
    title: "School",
    route: "/school",
    icon: <FaSchool size={30} className="text-yellow-500" />,
    image:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Automate attendance tracking, parent communication, and administrative tasks.",
    features: [
      "Student Attendance",
      "Grade Management",
      "Parent Portal",
      "Communication Tools",
    ],
  },
  {
    title: "College",
    route: "/college",
    icon: <FaUniversity size={30} className="text-yellow-500" />,
    image:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Comprehensive admission management, analytics dashboards, and student portals.",
    features: [
      "Admission Management",
      "Analytics",
      "Student Dashboards",
      "Course Management",
    ],
  },
  {
    title: "Restaurant",
    route: "/restaurant",
    icon: <FaUtensils size={30} className="text-yellow-500" />,
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Simplify reservations, orders, and inventory management for smoother operations.",
    features: [
      "Online Ordering",
      "Inventory Control",
      "Customer Management",
      "POS Integration",
    ],
  },
  {
    title: "Office",
    route: "/office",
    icon: <FaBuilding size={30} className="text-yellow-500" />,
    image:
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Automate task assignments, track projects, and enhance collaboration in workplaces.",
    features: [
      "Task Automation",
      "Employee Tracking",
      "Document Management",
      "Performance Reports",
    ],
  },
  {
    title: "Retail Shop",
    route: "/retaileShop",
    icon: <FaStore size={30} className="text-yellow-500" />,
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Manage sales, inventory, and customer engagement with intelligent retail automation.",
    features: [
      "Inventory Management",
      "POS Integration",
      "Customer Analytics",
      "Sales Reports",
    ],
  },
  {
    title: "Construction",
    route: "/construction",
    icon: <FaTools size={30} className="text-yellow-500" />,
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1171&auto=format&fit=crop",
    description:
      "Enhance project planning, resource allocation, and real-time monitoring.",
    features: [
      "Project Scheduling",
      "Budget Tracking",
      "Material Management",
      "Team Coordination",
    ],
  },
  {
    title: "Logistics",
    route: "/logistics",
    icon: <FaTruck size={30} className="text-yellow-500" />,
    image:
      "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Optimize fleet operations, route planning, and shipment tracking.",
    features: [
      "Route Optimization",
      "Shipment Tracking",
      "Fleet Management",
      "Reports",
    ],
  },
  {
    title: "IT Company",
    route: "/itCompany",
    icon: <FaLaptopCode size={30} className="text-yellow-500" />,
    image:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Boost productivity with automated workflows, issue tracking, and client management tools.",
    features: [
      "Workflow Automation",
      "Issue Tracking",
      "CRM Integration",
      "Project Reporting",
    ],
  },
  {
    title: "E-Commerce",
    route: "/ecommerce",
    icon: <FaShoppingCart size={30} className="text-yellow-500" />,
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Automate product listings, order processing, and customer interactions for online stores.",
    features: [
      "Order Automation",
      "Product Management",
      "Customer Support",
      "Sales Analytics",
    ],
  },
  {
    title: "Clinic & Labs",
    route: "/clinicLab",
    icon: <FaClinicMedical size={30} className="text-yellow-500" />,
    image:
      "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Digitize appointment scheduling, test result management, and patient engagement.",
    features: [
      "Appointment System",
      "Lab Reports",
      "Patient Database",
      "Notifications",
    ],
  },
];

// ---------------- COMPONENT ----------------
export default function IndustriesSection() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-[#0c121d] py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div data-aos="fade-up" className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Tailored digital & automation solutions built to empower your
            business.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white/80 dark:bg-[#1c1f26] backdrop-blur-xl 
              rounded-2xl shadow-xl overflow-hidden transition-all duration-500 
              hover:-translate-y-3 hover:shadow-2xl flex flex-col relative"
            >
              {/* Icon */}
              <div className="absolute top-5 left-5 z-20 p-2 bg-white dark:bg-black/40 rounded-xl shadow-md">
                {item.icon}
              </div>

              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {item.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="text-yellow-500 font-semibold mb-2">
                    Key Features
                  </h4>

                  <ul className="flex flex-wrap gap-2">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className="bg-yellow-100 dark:bg-yellow-700/60 text-yellow-900 dark:text-yellow-100 
                        text-xs px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-all duration-300"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <Link
                  to={item.route}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2 bg-yellow-500 text-white 
                  font-medium rounded-lg hover:bg-yellow-600 transition shadow-md"
                >
                  Learn More <BsArrowRight className="text-xl" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          data-aos="zoom-in"
          className="mt-20 py-16 px-6 text-center bg-yellow-400 dark:bg-yellow-600 
          rounded-2xl shadow-xl w-[90%] mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Don’t See Your Industry?
          </h2>
          <p className="text-gray-900 dark:text-gray-200 max-w-2xl mx-auto text-lg mb-6">
            We support businesses across all domains. Contact us to build a
            custom solution.
          </p>

          <div
            className="w-full flex flex-col items-center  text-center mt-4"
            data-aos="fade-up"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
              Get the best customized solution tailored for your business needs.
            </p>

            <Link to="/contact">
              <button
                className="px-8 py-3 border border-gray-700 bg-gray-900 dark:bg-gray-800 
                text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 
                transition flex items-center gap-2"
              >
                Get Custom Solution <BsArrowRight className="text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
