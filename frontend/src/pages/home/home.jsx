import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import { motion } from "framer-motion";

const works = [
  "PCB Design",
  "MECHANICAL DESIGN",
  "LIBRARY DEVELOPMENT",
  "ATE SOLUTIONS",
  "TURN KEY PROJECTS",
  "PCB ASSEMBLY",
  "FABRICATION",
  "IOT SOLUTION",
  "EDA CONVERSATION",
];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-10">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center bg-gray-800/70 backdrop-blur-sm px-8 sm:px-20 py-10 rounded-tl-[40px] rounded-br-[40px]">
        <div
          className="text-4xl sm:text-5xl p-4 font-bold mb-10"
          style={{ fontFamily: "'Electrolize', sans-serif" }}
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="10"
        >
          Welcome to EDFN Technologies
        </div>
        <div className="flex flex-col items-center justify-center text-base sm:text-3xl">
          <span
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="10"
          >
            We create&nbsp;
          </span>
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 font-bold text-base sm:text-[20px]"
          >
            {works[index]}
          </motion.span>
        </div>
      </div>

      {/* Boxes Section */}
      <div className="box-border gap-8 sm:gap-20 py-6 px-4 w-full mx-4 max-w-[90vw]">
        <div className="flex flex-col sm:flex-row gap-4 h-full rounded-lg overflow-hidden">
          {/* Box 1 */}
          <div
            className="flex-1 relative bg-[#30323a] py-4 sm:py-[20px] px-4 sm:px-[20px] items-center flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 shadow-md rounded-md"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="10"
          >
            <div className="bg-blue-500 p-4 rounded-tl-[40px] rounded-br-[40px]">
              <HomeIcon className="text-white" style={{ fontSize: 30 }} />
            </div>
            <div className="text-center">
              Helping you with the <b>custom PCB</b> for all applications and{" "}
              <b>ATE domains</b>
            </div>
          </div>
          {/* Box 2 */}
          <div
            className="flex-1 bg-[#30323a] py-4 sm:py-[20px] px-4 sm:px-[20px] items-center flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 shadow-md rounded-md"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
          >
            <div className="bg-green-500 p-4 rounded-tl-[40px] rounded-br-[40px]">
              <BuildIcon className="text-white" style={{ fontSize: 30 }} />
            </div>
            <div className="text-center">
              End to end service from <b>design</b> to <b>manufacturing</b>
            </div>
          </div>
          {/* Box 3 */}
          <div
            className="flex-1 bg-[#30323a] py-4 sm:py-[20px] px-4 sm:px-[20px] items-center flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 shadow-md rounded-md"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="10"
          >
            <div className="bg-yellow-500 p-4 rounded-tl-[40px] rounded-br-[40px]">
              <CheckCircleIcon className="text-white" style={{ fontSize: 30 }} />
            </div>
            <div className="text-center">
              <b>Quality assurance compliance</b> with standards
            </div>
          </div>
          {/* Box 4 */}
          <div
            className="flex-1 bg-[#30323a] py-4 sm:py-[20px] px-4 sm:px-[20px] items-center flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 shadow-md rounded-md"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="10"
          >
            <div className="bg-red-500 p-4 rounded-tl-[40px] rounded-br-[40px]">
              <PeopleIcon className="text-white" style={{ fontSize: 30 }} />
            </div>
            <div className="text-center">
              <b>Collaborative design</b> process customization and flexibility{" "}
              <b>responsive</b> customer service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
