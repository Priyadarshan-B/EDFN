import React from "react";
import missionGif from '../../assets/mission.gif';

function Mission() {
  return (
    <div className="h-full w-full bg-gray-900/50 backdrop-blur-sm rounded-lg text-gray-300 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-7xl w-full">

        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12" data-aos="zoom-in">
          Innovation-Driven Future
        </h2>

        <div className="flex flex-col md:flex-row-reverse gap-10 items-center"> 

          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-up">
            <img
              src={missionGif}
              alt="Mission Animation"
              className="w-full max-w-sm object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col gap-8 w-full md:w-1/2">
            <div data-aos="fade-up" className="bg-gray-800/50 rounded-xl p-8 shadow-lg flex-1 backdrop-blur-sm">
              <p className="text-lg leading-relaxed">
                As the world of electronics evolves at an unprecedented pace, EDFN
                Technologies is committed to staying at the forefront of innovation. We
                constantly invest in research, development, and training to ensure that
                our team is equipped with the latest knowledge and tools.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Our goal is to be your trusted partner in navigating the ever-changing landscape
                of semiconductor and PCB design. Thank you for considering EDFN Technologies as your partner in design
                excellence.
              </p>
            </div>

            <div data-aos="fade-down" className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg flex-1">
              <p className="text-lg leading-relaxed mb-4">
                Thank you for considering EDFN Technologies as your partner in design excellence.
              </p>
              <p className="text-lg leading-relaxed">
                We look forward to the opportunity to collaborate with
                you on your next electronic endeavor. Contact us today to start the
                journey towards innovation, precision, and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;