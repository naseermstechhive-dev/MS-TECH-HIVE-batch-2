import React, { useState } from "react";
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

const Footer = () => {
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
    <footer className="bg-darkbg text-white">
      <div className="w-[85%] m-auto pt-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 border-richblue-500 font-poppinsRegular py-6">
          {/* LEFT */}
          <div className="md:w-[50%] w-full text-left">
            {/* logo */}
          <div className="md:w-[62%] w-full">
  <button
    onClick={() => handleNavigate("Home")}
    className="inline-flex items-start gap-3 mb-3"
    aria-label="Go to home"
  >
    {/* Logo */}
    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
      <span className="text-2xl">🐢</span>
    </div>

    {/* Text */}
    <div className="flex flex-col justify-start leading-tight">
      <p className="text-white font-bold  text-left text-lg">MS Tech Hive</p>
      <p className="text-yellow-400 text-xs font-medium">
        Automate Work. Accelerate Growth.
      </p>
    </div>
  </button>

  {/* Description */}
  <p className="text-[#717171] text-sm mt-2">
    We help businesses across industries automate their workflows and accelerate growth through cutting-edge technology solutions.
  </p>
</div>

        
            

            {/* content */}
            

            {/* social media */}
            <div className="flex md:w-[70%] w-full gap-7 mt-4">
              <a
                href="https://www.instagram.com/mstechhive/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram style={{ height: 40, width: 40 }} />
              </a>

              <a
                href="https://www.facebook.com/people/M-Techhive/pfbid02aehgvVvXUYcTmT4HUYZfLGzSNjJSTJkQ6FCG7sAuj6SRPR4u8wjif1RN24pBhof6l/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF style={{ height: 40, width: 40 }} />
              </a>

              <a
                href="https://www.linkedin.com/in/ms-tech-hive-08aa7a378/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn style={{ height: 40, width: 40 }} />
              </a>

              <a
                href="https://x.com/MSTECHHIVE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter style={{ height: 40, width: 40 }} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube style={{ height: 40, width: 40 }} />
              </a>
            </div>
          </div>

          {/* RIGHT (quick links & contact grouped) */}
          <div className="flex lg:justify-around py-5 justify-between w-full md:w-[50%] leading-8">
            {/* Quick Links */}
            <div className="text-left">
              <div className="text-2xl mb-3">Quick Links</div>
              <button
                onClick={() => handleNavigate("Home")}
                className="text-[#717171] hover:text-white cursor-pointer block text-left mb-1"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate("About-us")}
                className="text-[#717171] hover:text-white cursor-pointer block text-left mb-1"
              >
                About
              </button>
              <button
                onClick={() => handleNavigate("Industries")}
                className="text-[#717171] hover:text-white cursor-pointer block text-left mb-1"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigate("Services")}
                className="text-[#717171] hover:text-white cursor-pointer block text-left mb-1"
              >
                Industries
              </button>
              <button
                onClick={() => handleNavigate("Contact")}
                className="text-[#717171] hover:text-white cursor-pointer block text-left mb-1"
              >
                Contact
              </button>
            </div>

            {/* Contact Info */}
            <div className="text-left">
              <div className="text-2xl mb-3">Contact Info</div>

              <button
                onClick={() => handleNavigate("Instant-Loans")}
                className="text-[#717171] hover:text-white cursor-pointer  text-left mb-2 flex items-center gap-3"
              >
                <FaEnvelope className="text-[#717171]" />
                <span className="text-sm">info@mstechhive.com</span>
              </button>

              <button
                onClick={() => handleNavigate("Partner-Program")}
                className="text-[#717171] hover:text-white cursor-pointer  text-left mb-2 flex items-center gap-3"
              >
                <FaPhoneAlt className="text-[#717171]" />
                <span className="text-sm">+91 9032223352</span>
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/MS+Tech+Hive/@14.4670821,78.8352239,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb373002cfcc90f:0x75c59bc3329a8a59!8m2!3d14.4670821!4d78.8377988!16s%2Fg%2F11xp16y38_?entry=tts&g_ep=EgoyMDI1MDczMC4wIPu8ASoASAFQAw%3D%3D",
                    "_blank"
                  )
                }
                className="text-[#717171] hover:text-white cursor-pointer text-left flex items-center gap-3"
              >
                <FaMapMarkerAlt className="text-[#717171]" />
                <span className="text-sm">View Location</span>
              </button>
            </div>
          </div>
          
        </div>
 {/* You can add a bottom area (copyright / extra links) here if needed */}
            {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-around items-center text-center text-sm text-gray-500 gap-4">
          <p>
            © 2025 <span className="text-white font-medium">MS Tech Hive.</span> All rights reserved.
          </p>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
