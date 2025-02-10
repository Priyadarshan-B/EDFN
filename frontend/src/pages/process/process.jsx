import React from "react";
import processGif from "../../assets/process.gif";
import { FaLightbulb, FaCogs } from "react-icons/fa";

function Process() {
  return (
    <div className="container  py-12 px-6 text-white dark:bg-gray-900 dark:text-white">
      <h2
        className="text-4xl font-bold text-center mb-12"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        OUR PROCESS
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div
          className="md:w-1/3 flex justify-center"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="w-84 h-84 rounded-full overflow-hidden shadow-lg bg-gray-800/50 backdrop-blur-sm flex items-center justify-center">
            <img
              src={processGif}
              alt="Process GIF"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-8">
          <div
            className="bg-gray-800/50 rounded-lg shadow-md p-8 hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-6">
              <FaLightbulb className="text-3xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold">Design</h3>
            </div>
            <ul className="list-disc pl-6 text-lg">
              <li>Schematic Capture</li>
              <li>Component Engineering</li>
              <li>Board Layout</li>
              <li>3D Modelling</li>
              <li>Simulation & Analysis</li>
              <li>Power Network Integrity</li>
            </ul>
          </div>

          <div
            className="bg-gray-800/50 rounded-lg shadow-md p-8 hover:shadow-xl transition-all transform hover:scale-105 backdrop-blur-md"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="flex items-center mb-6">
              <FaCogs className="text-3xl text-green-500 mr-3" />
              <h3 className="text-2xl font-semibold">Assembly</h3>
            </div>
            <ul className="list-disc pl-6 text-lg">
              <li>Mechanical Integration</li>
              <li>Material Management</li>
              <li>High Density Assembly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
