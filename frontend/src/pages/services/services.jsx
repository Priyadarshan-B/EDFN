import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import BuildIcon from "@mui/icons-material/Build";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import MemoryIcon from "@mui/icons-material/Memory";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import WifiIcon from "@mui/icons-material/Wifi";
import TransformIcon from "@mui/icons-material/Transform";

const services = [
    { title: "PCB Design", description: "Our PCB design services focus on creating layouts that maximize functionality, minimize interference, and optimize manufacturability.", icon: <DeveloperBoardIcon />, color: "bg-blue-500" },
    { title: "Mechanical Design", description: "Seamless integration of mechanical design and electronic software by experts, using advanced tools for optimal collaboration.", icon: <BuildIcon />, color: "bg-green-500" },
    { title: "Library Development", description: "Revolutionize electronic projects with our curated libraries—efficiency, accuracy, and compatibility for innovation.", icon: <LibraryBooksIcon />, color: "bg-purple-500" },
    { title: "ATE Solutions", description: "Elevate testing with our Advanced Test Equipment solutions, streamlining processes for precision and efficiency.", icon: <PrecisionManufacturingIcon />, color: "bg-yellow-500" },
    { title: "Turn Key Projects", description: "Seamless turnkey solutions integrating cutting-edge software with advanced electronics for precision and efficiency.", icon: <AssignmentTurnedInIcon />, color: "bg-pink-500" },
    { title: "PCB Assembly", description: "Create PCB layouts, design electronic circuits, and simulate electrical systems using specialized software for optimal functionality.", icon: <MemoryIcon />, color: "bg-red-500" },
    { title: "Fabrication", description: "Designing, coding, testing, and optimizing circuits for seamless functionality and reliable performance.", icon: <MiscellaneousServicesIcon />, color: "bg-indigo-500" },
    { title: "IoT Solutions", description: "IoT solutions enable seamless communication between devices, collect data, and optimize processes for efficiency.", icon: <WifiIcon />, color: "bg-teal-500" },
    { title: "EDA Conversion", description: "Explore and analyze electronic systems with EDA Conversion software, facilitating efficient design and optimization.", icon: <TransformIcon />, color: "bg-orange-500" }
];

function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); 
    }, []);

    return (
        <div className="p-10 min-h-screen">
            <h2 className="text-4xl font-bold text-center text-white mb-6" data-aos="fade-down">
                Our Services
            </h2>
            <p className="text-center mb-10 text-gray-300 max-w-3xl mx-auto" data-aos="fade-up">
                At <span className="text-blue-400 font-bold">EDFN Technologies</span>, we offer a comprehensive suite of services and solutions in semiconductor and PCB design, tailored to meet the diverse needs of our clients. Our expertise and commitment to excellence ensure that your electronic projects are brought to life with precision, innovation, and reliability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-white"
                        data-aos="fade-up"
                        data-aos-delay={index * 50} 
                    >
                        <div className={`absolute -top-3 -left-3 ${service.color} text-white p-3 rounded-full shadow-md`}>
                            {service.icon}
                        </div>

                        <h3 className="font-bold text-2xl mb-3 mt-6">{service.title}</h3>
                        <p className="text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
