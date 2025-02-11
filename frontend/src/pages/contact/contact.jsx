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
    <div className="w-full bg-[#111827] py-12 px-4 sm:px-6 lg:px-8 text-white">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center text-gray-100 mb-8" data-aos="zoom-in" data-aos-delay="100">
        Contact Us
      </h2>
  
      {/* Container for Content Cards and Form */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Information Cards */}
        <div className="space-y-6">
          <div className="backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow" data-aos="fade-down">
            <FaMapMarkerAlt className="text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Our Office</h3>
              <p className="text-gray-400">NO. 233 GVG NAGAR</p>
              <p className="text-gray-400">UDUMALPET COIMBATORE - 642113</p>
              <br /><hr />
              <p className="text-gray-400 pt-1">NO. 153 SIVANANDHAPURAM</p>
              <p className="text-gray-400">SARAVANAMPATTY COIMBATORE - 641035</p>
            </div>
          </div>
  
          <div className="backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow" data-aos="fade-down" data-aos-delay="200">
            <FaPhoneAlt className="text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Contact Number</h3>
              <a className="text-gray-400" href="tel:+917708463838">+91 7708463838</a>
            </div>
          </div>
  
          <div className="backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow" data-aos="fade-down" data-aos-delay="400">
            <FaEnvelope className="text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Email Address</h3>
              <a className="text-gray-400" href="mailto:sales@edfntechnologies.com">sales@edfntechnologies.com</a>
            </div>
          </div>
        </div>
  
        {/* Form Section */}
        <div className="lg:col-span-2 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow" data-aos="fade-down">
          <h2 className="text-3xl font-bold text-gray-300 mb-8 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="md:col-span-2 flex justify-between items-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed font-medium text-sm"
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
  
              {/* Social Media Section */}
              <div className="flex space-x-6">
                {[
                  { icon: <FaFacebook />, color: "blue-600", link: "https://facebook.com" },
                  { icon: <FaTwitter />, color: "blue-400", link: "https://twitter.com" },
                  { icon: <FaLinkedin />, color: "blue-700", link: "https://linkedin.com" },
                  { icon: <FaInstagram />, color: "pink-600", link: "https://instagram.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${social.color} hover:text-${social.color}/80 transition-colors duration-300`}
                  >
                    {React.cloneElement(social.icon, { className: "text-3xl" })}
                  </a>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  

};

export default Contact;
