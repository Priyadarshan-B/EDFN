import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_0pa5y0d";
    const templateId = "template_l33mqv9";
    const userId = "Ex1HaTpAQYDoXjFDp";

    emailjs
      .sendForm(serviceId, templateId, e.target, userId)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We will get back to you soon!",
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className=" w-full rounded-lg py-12 px-4 sm:px-6 lg:px-8 text-white">
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-8" data-aos="zoom-in">
        Contact Us
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/3 flex flex-col gap-5">
            <div
              className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg flex-1 flex items-start gap-4 hover:shadow-xl transition-shadow"
              data-aos="fade-up"
            >
              <FaMapMarkerAlt
                className=" text-2xl mt-1 flex-shrink-0 transition-colors duration-300"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Our Office</h3>
                <p className="text-gray-400">NO. 233 GVG NAGAR </p>
                <p className="text-gray-400">UDUMALPET COIMBATORE - 642113</p><br /><hr />
                <p className="text-gray-400 pt-1">NO. 153 SIVANANDHAPURAM</p>
                <p className="text-gray-400">
                  SARAVANAMPATTY COIMBATORE - 641035
                </p>
              </div>
            </div>

            <div
              className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaPhoneAlt
                className=" text-2xl mt-1  flex-shrink-0 transition-colors duration-300"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Number</h3>
                <a className="text-gray-400" href="tel:+917708463838">+91 7708463838</a>
              </div>
            </div>

            <div
              className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaEnvelope
                className=" text-2xl mt-1 flex-shrink-0 transition-colors duration-300"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Email Address</h3>
                <a className="text-gray-400" href="mailto:sales@edfntechnologies.com">sales@edfntechnologies.com</a>
              </div>
            </div>
          </div>

          <div
            className="w-full lg:w-2/3 bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            data-aos="fade-down"
          >
            <h2 className="text-3xl font-bold text-gray-300 mb-8 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed font-medium text-sm float-right"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        viewBox="0 0 24 24"
                      ></svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className="w-full bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg p-8 mx-auto hover:shadow-xl transition-shadow"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h2 className="text-2xl font-bold text-gray-300 mb-6 text-center">
            Connect Us
          </h2>
          <div className="flex justify-center space-x-6">
            {[
              {
                icon: <FaFacebook />,
                color: "blue-600",
                darkColor: "blue-500",
                link: "https://facebook.com",
              },
              {
                icon: <FaTwitter />,
                color: "blue-400",
                darkColor: "blue-300",
                link: "https://twitter.com",
              },
              {
                icon: <FaLinkedin />,
                color: "blue-700",
                darkColor: "blue-600",
                link: "https://linkedin.com",
              },
              {
                icon: <FaInstagram />,
                color: "pink-600",
                darkColor: "pink-500",
                link: "https://instagram.com",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-${social.color} dark:text-${social.darkColor} hover:text-${social.color}/80 dark:hover:text-${social.darkColor}/80 transition-colors duration-300`}
              >
                {React.cloneElement(social.icon, { className: "text-3xl" })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

};

export default Contact;
