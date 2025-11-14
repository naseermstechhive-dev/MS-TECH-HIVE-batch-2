
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,     
      mirror: true,   
      easing: "ease-out",
    });
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  const [showTooltip, setShowTooltip] = useState(false);

  const handleNavigate = (type) => {
    switch (type) {
      case "Home":
        navigate("/");
        window.scrollTo(0, 0);
        break;
      case "About-us":
        navigate("/about");
        window.scrollTo(0, 0);
        break;
      case "Contact":
        navigate("/contact");
        window.scrollTo(0, 0);
        break;
      case "Industries":
        navigate("/industries");
        window.scrollTo(0, 0);
        break;
      case "Services":
        navigate("/service");
        window.scrollTo(0, 0);
        break;
      default:
        navigate("/");
        window.scrollTo(0, 0);
        break;
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-[#0c121d] text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <div className="w-[85%] m-auto pt-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 py-6 font-poppins transition-colors duration-500">
          {/* LEFT */}
          <div data-aos="fade-right" className="md:w-[50%] w-full text-left">
            {/* Logo */}
            <div className="md:w-[62%] w-full">
              <button
                onClick={() => handleNavigate("Home")}
                className="inline-flex items-start gap-3 mb-3"
                aria-label="Go to home"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <span className="text-2xl">🐢</span>
                </div>

                <div className="flex flex-col justify-start leading-tight">
                  <p className="text-gray-900 dark:text-white font-bold text-left text-lg transition-colors duration-500">
                    MS Tech Hive
                  </p>
                  <p className="text-yellow-400 text-xs font-medium">Automate Work. Accelerate Growth.</p>
                </div>
              </button>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 transition-colors duration-500">
                We help businesses across industries automate their workflows and accelerate growth through cutting-edge technology solutions.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex md:w-[70%] w-full gap-7 mt-4 text-gray-700 dark:text-gray-300 transition-colors duration-500">
              <a href="https://www.instagram.com/mstechhive/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="hover:text-yellow-400 transition-colors duration-300" style={{ height: 40, width: 40 }} />
              </a>
              <a href="https://www.facebook.com/people/M-Techhive/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="hover:text-blue-500 transition-colors duration-300" style={{ height: 40, width: 40 }} />
              </a>
              <a href="https://www.linkedin.com/in/ms-tech-hive-08aa7a378/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="hover:text-blue-400 transition-colors duration-300" style={{ height: 40, width: 40 }} />
              </a>
              <a href="https://x.com/MSTECHHIVE" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="hover:text-blue-300 transition-colors duration-300" style={{ height: 40, width: 40 }} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="hover:text-red-500 transition-colors duration-300" style={{ height: 40, width: 40 }} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div   className="flex lg:justify-around py-5 justify-between w-full md:w-[50%] leading-8">
            {/* Quick Links */}
            <div data-aos="fade-up" className="text-left">
              <div className="text-2xl mb-3 text-gray-900 dark:text-white transition-colors duration-500">Quick Links</div>
              {["Home", "About-us", "Services", "Industries", "Contact"].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavigate(link)}
                  className="text-gray-700 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 cursor-pointer block text-left mb-1 transition-colors duration-300"
                >
                  {link === "About-us" ? "About" : link === "Services" ? "Services" : link === "Industries" ? "Industries" : link}
                </button>
              ))}
            </div>

            {/* Contact Info */}
            <div className="text-left">
              <div  className="text-2xl mb-3 text-gray-900 dark:text-white transition-colors duration-500">Contact Info</div>

              <div data-aos="fade-left" className="flex flex-col gap-2">
                <button className="flex items-center gap-3 text-gray-700 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition-colors duration-300">
                  <FaEnvelope /> <span className="text-sm">info@mstechhive.com</span>
                </button>
                <button className="flex items-center gap-3 text-gray-700 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition-colors duration-300">
                  <FaPhoneAlt /> <span className="text-sm">+91 9032223352</span>
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/MS+Tech+Hive/",
                      "_blank"
                    )
                  }
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-400 hover:text-white dark:hover:text-yellow-400 transition-colors duration-300"
                >
                  <FaMapMarkerAlt /> <span className="text-sm">View Location</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-around items-center text-center text-sm text-gray-500 dark:text-gray-400 gap-4 transition-colors duration-500">
          <p>
            © 2025 <span className="text-gray-900 dark:text-white font-medium transition-colors duration-500">MS Tech Hive.</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
