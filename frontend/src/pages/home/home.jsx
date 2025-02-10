import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import { useState, useEffect } from "react";
import mission from '../../assets/mission.gif';
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
        <div className='h-full items-center flex justify-center flex-col gap-28'>
            <div className='items-center flex-col justify-center'>
                <div className='text-5xl p-4 font-bold mb-10' style={{ fontFamily: "'Electrolize', sans-serif" }} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="10">
                    Welcome to EDFN Technologies
                </div>
                <div className="flex text-3xl items-center flex-col justify-center text-[20px]">
                    <span data-aos="fade-left" data-aos-duration="1000" data-aos-delay="10">We create&nbsp;</span>
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-blue-500 font-bold text-[20px]"
                    >
                        {works[index]}
                    </motion.span>
                </div>
            </div>
            <div className='box-border gap-20 py-[30px] px-[20px] w-full mx-[30px] max-w-[90vw] '>
                <div className='flex gap-2 h-full rounded-lg overflow-hidden'>
                    <div className="flex-1 bg-[#30323a] py-[20px] px-[20px] items-center flex justify-center gap-5 shadow-md rounded-md" data-aos="fade-up" data-aos-duration="500" data-aos-delay="10">
                        <div className="bg-blue-500 p-4 rounded-tl-[40px] rounded-br-[40px]">
                            <HomeIcon className="text-white" style={{ fontSize: 30 }} />
                        </div>
                        <div>Helping you with the <b>custom PCB</b> for all applications and <b>ATE domains</b></div>
                    </div>
                    <div className="flex-1 bg-[#30323a]  py-[20px] px-[20px] items-center flex justify-center gap-5 shadow-md rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="10">
                        <div className="bg-green-500 p-4 rounded-tl-[40px] rounded-br-[40px]">
                            <BuildIcon className="text-white" style={{ fontSize: 30 }} />
                        </div>
                        <div>End to end service from <b>design</b> to <b>manufacturing</b></div>
                    </div>
                    <div className="flex-1 bg-[#30323a]  py-[20px] px-[20px] items-center flex justify-center gap-5 shadow-md rounded-md" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="10">
                        <div className="bg-yellow-500 p-4 rounded-tl-[40px] rounded-br-[40px]">
                            <CheckCircleIcon className="text-white" style={{ fontSize: 30 }} />
                        </div>
                        <div><b>Quality assurance compliance</b> with standards</div>
                    </div>
                    <div className="flex-1 bg-[#30323a] py-[20px] px-[20px] items-center flex justify-center gap-5 shadow-md rounded-md" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="10">
                        <div className="bg-red-500 p-4 rounded-tl-[40px] rounded-br-[40px]">
                            <PeopleIcon className="text-white" style={{ fontSize: 30 }} />
                        </div>
                        <div><b>Collaborative design</b> process customization and flexibility <b>responsive</b> customer service</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
