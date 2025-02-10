import React from "react";

function Mission() {
    return (
        <div className="min-h-screen w-full bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8"> {/* Two-column layout */}
    
            <div data-aos="fade-up" className="bg-gray-800 rounded-xl p-8 shadow-lg md:w-1/2"> {/* Box 1 */}
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">
                Innovation-driven Future
              </h2>
              <p className="text-lg leading-relaxed">
                As the world of electronics evolves at an unprecedented pace, EDFN
                Technologies is committed to staying at the forefront of innovation. We
                constantly invest in research, development, and training to ensure that
                our team is equipped with the latest knowledge and tools.
              </p>
            </div>
    
            <div data-aos="fade-down" className="bg-gray-800 rounded-xl p-8 shadow-lg md:w-1/2"> {/* Box 2 */}
              <p className="text-lg leading-relaxed mb-4">
                Our goal is to be your trusted partner in navigating the ever-changing landscape
                of semiconductor and PCB design. Thank you for considering EDFN Technologies as your partner in design
                excellence.
              </p>
              <p className="text-lg leading-relaxed">
                 We look forward to the opportunity to collaborate with
                you on your next electronic endeavor. Contact us today to start the
                journey towards innovation, precision, and success.
              </p>
            </div>
    
          </div>
        </div>
      );
}

export default Mission