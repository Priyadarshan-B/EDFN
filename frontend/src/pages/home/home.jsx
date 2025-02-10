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

// JSON Array for the feature boxes
const featureBoxes = [
    {
        icon: <HomeIcon className="text-white" style={{ fontSize: 30 }} />,
        bgColor: "bg-blue-500",
        text: "Helping you with the <b>custom PCB</b> for all applications and <b>ATE domains</b>",
    },
    {
        icon: <BuildIcon className="text-white" style={{ fontSize: 30 }} />,
        bgColor: "bg-green-500",
        text: "End to end service from <b>design</b> to <b>manufacturing</b>",
    },
    {
        icon: <CheckCircleIcon className="text-white" style={{ fontSize: 30 }} />,
        bgColor: "bg-yellow-500",
        text: "<b>Quality assurance compliance</b> with standards",
    },
    {
        icon: <PeopleIcon className="text-white" style={{ fontSize: 30 }} />,
        bgColor: "bg-red-500",
        text: "<b>Collaborative design</b> process customization and flexibility <b>responsive</b> customer service",
    },
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
        <div className="h-full flex flex-col items-center justify-center gap-20">
            <div className="flex flex-col items-center m-3 justify-center bg-gray-800/70 backdrop-blur-sm px-8 sm:px-20 py-5 rounded-lg">
                <div
                    className="text-4xl sm:text-5xl p-2 font-bold mb-5"
                    style={{ fontFamily: "'Electrolize', sans-serif" }}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="10"
                >
                    Welcome to EDFN Technologies
                </div>
                <div className="flex flex-col items-center justify-center text-base sm:text-3xl">
                    <span data-aos="fade-left" data-aos-duration="1000" data-aos-delay="10">
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

            {/* Feature Boxes Section */}
            <div className="box-border gap-8 sm:gap-20 py-6 px-4 w-full mx-4 max-w-[90vw]">
                <div className="flex flex-col sm:flex-row gap-4 h-full rounded-lg overflow-hidden">
                    {featureBoxes.map((box, i) => (
                        <div
                            key={i}
                            className="flex-1 relative bg-gray-800/70 backdrop-blur-sm py-4 sm:py-[20px] px-4 sm:px-[20px] items-center flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 shadow-md rounded-md"
                            data-aos="fade-up"
                            data-aos-duration={`${500 + i * 500}`}
                            data-aos-delay="10"
                        >
                            <div className={`${box.bgColor} p-4 rounded-[40px] rounded-br-[40px]`}>
                                {box.icon}
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: box.text }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
