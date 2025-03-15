import React from "react";
import processGif from "../../assets/process.svg";
import { FaLightbulb, FaCogs } from "react-icons/fa";
import bg4 from "../../assets/bg4.jpg";
import { Chip, Avatar } from "@mui/material";

const services = [
  "Schematic Capture",
  "Component Engineering",
  "Board Layout",
  "3D Modelling",
  "Simulation & Analysis",
  "Power Network Integrity",
];

const assembly = [
  "Mechanical Integration",
  "Material Management",
  "High Density Assembly"
]

function Process() {
  return (
    <div className="relative pt-10 pb-10  container mx-auto text-white dark:bg-gray-900 dark:text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 rounded-lg"
        style={{ backgroundImage: `url(${bg4})` }}
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <h2
        className="text-4xl font-bold text-center mb-10"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Our Process
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="md:w-1/3 flex justify-center">
          <div
            className="rounded-full w-full md:w-2/3 flex justify-center"
            data-aos="zoom-in"
          >
            <img
              src={processGif}
              alt="Process GIF"
              className="w-full  object-cover shadow-md"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <div
            className="bg-gray-800/50 rounded-lg m-1 shadow-md p-8 hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-6">
              <FaLightbulb className="text-3xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Design</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {services.map((service, index) => (
                <Chip
                  key={index}
                  label={service}
                  variant="filled"
                  size="medium"
                  color="warning"
                />
              ))}
            </div>
          </div>

          <div
            className="bg-gray-800/50 rounded-lg m-1 shadow-md p-8 hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-md"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="flex items-center mb-6">
              <FaCogs className="text-3xl text-green-500 mr-3" />
              <h3 className="text-2xl font-semibold">Assembly</h3>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {assembly.map((assembly, index) => (
                <Chip
                  key={index}
                  label={assembly}
                  variant="filled"
                  size="medium"
                  color="success"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
