


// import React from "react";

// const InfoCard = ({ number, title, description1, description2, boxColor = "#FACC15" }) => {
//   return (
//     <div
//       className="group w-[410px] h-[220px] bg-[#1F2937] rounded-[12px] p-6 flex flex-col gap-3 justify-start items-start text-white 
//                  shadow-md hover:shadow-2xl transform transition-all duration-300 cursor-pointer hover:scale-105"
//     >
//       {/* Small Box with Number */}
//       <div
//         className="w-[48px] h-[48px] rounded-md flex items-center justify-center text-black font-bold text-lg mb-4 
//                    transition-all duration-300 group-hover:scale-110 group-hover:bg-[#374151]"
//         style={{ backgroundColor: boxColor }}
//       >
//         {number}
//       </div>

//       {/* Text Content */}
//       <p
//         className="text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-amber-400"
//       >
//         {title}
//       </p>

//       <div>
//         <p className="text-sm text-start text-gray-300 text-[17px]">{description1}</p>
//         <p className="text-start text-[17px] text-gray-300">{description2}</p>
//       </div>
//     </div>
//   );
// };

// export default InfoCard;


import React from "react";

const InfoCard = ({ number, title, description1, description2, boxColor = "#FACC15" }) => {
  return (
    <div
      className="group w-[410px] h-[220px] bg-[#1F2937] rounded-[12px] p-6 flex flex-col gap-3 justify-start items-start text-white
                 shadow-md hover:shadow-2xl transform transition-all duration-300 cursor-pointer 
                 hover:scale-105 hover:bg-[#374151] max-sm:w-[390px]"
    >
      {/* Small Box with Number */}
      <div
        className="w-[48px] h-[48px] rounded-md flex items-center justify-center text-black font-bold text-lg mb-4 
                   transition-all duration-300 group-hover:scale-110 group-hover:bg-[#111827]"
        style={{ backgroundColor: boxColor }}
      >
        {number}
      </div>

      {/* Text Content */}
      <p
        className="text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-amber-400"
      >
        {title}
      </p>

      <div>
        <p className="text-sm text-start text-gray-300 text-[17px]">{description1}</p>
        <p className="text-start text-[17px] text-gray-300">{description2}</p>
      </div>
    </div>
  );
};

export default InfoCard;
