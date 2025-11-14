



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoCard2 = ({ icon, title, description1, description2 }) => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,     
      mirror: true,   
      easing: "ease-out",
    });
  }, []);

  return (
    <div  
      data-aos="zoom-out"
      className="group w-[410px] h-[220px] bg-gray-300 dark:bg-[#374151] rounded-[12px] p-6 flex flex-col gap-3 justify-start items-start
                 shadow-md max-sm:w-[360px] relative overflow-hidden hover:bg-gray-400 dark:hover:bg-black/79 transition-colors"
    >
      {/* Icon - Moves left on hover - Accepts both React icons and string emojis */}
      <div className="transition-all duration-300 group-hover:-translate-x-6 text-4xl text-amber-400">
        {typeof icon === 'string' ? (
          <span>{icon}</span>
        ) : (
          React.isValidElement(icon) ? React.cloneElement(icon, { className: "text-4xl" }) : icon
        )}
      </div>

      {/* Text Content - No hover effects */}
      <p className="text-[25px] font-semibold mb-1 text-gray-900 dark:text-white">
        {title}
      </p>

      <div>
        <p className="text-sm text-start text-gray-700 dark:text-gray-300 text-[17px]">{description1}</p>
        <p className="text-sm text-start text-gray-700 dark:text-gray-300 text-[17px]">{description2}</p>
      </div>
    </div>
  );
};

export default InfoCard2;