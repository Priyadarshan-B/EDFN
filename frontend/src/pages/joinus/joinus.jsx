import React, { useState } from "react";
// import missionGif from '../../assets/mission.gif';
import bg5 from '../../assets/bg5.jpg';
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function JoinUs() {
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

    const roles = [
        "PCB Designer",
        "Embedded Systems Engineer",
        "Hardware Engineer",
        "Quality Assurance Engineer",
        "Production Manager",
        "Test Engineer",
        "Component Engineer",
        "Technical Support Engineer",
    ];

    return (
        <div className="relative flex flex-col md:flex-row m-2 p-4 md:p-20 rounded-lg shadow-lg w-full">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-90 w-full rounded-lg"
                style={{ backgroundImage: `url(${bg5})` }}
            />
            <div className="absolute inset-0 bg-black/70 w-full"></div>

            <div className="relative backdrop-blur-sm m-0 md:m-20 p-4 md:p-8 rounded-lg shadow-lg w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="10">
                <h2 className="font-bold text-3xl md:text-4xl mb-4 md:mb-6 text-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="10">
                    Work with Us
                </h2>
                <form onSubmit={sendEmail} className="grid grid-cols-1 gap-3">
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="w-full md:flex-1">
                            <label className="block text-gray-400 text-sm font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-1 py-3 border border-gray-700 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="w-full md:flex-1">
                            <label className="block text-gray-400 text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-1 py-3 border border-gray-700 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="flex-1">
                            <label className="block text-gray-400 text-sm font-medium mb-1">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                className="w-full px-1 py-3 border border-gray-700 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-400 text-sm font-medium mb-1">Role</label>
                            <select
                                name="role"
                                required
                                className="w-full px-1 py-3.5 border border-gray-700 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="" disabled selected>Select your role</option>
                                {roles.map((role, index) => (
                                    <option key={index} value={role}>{role}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-medium mb-1">Message</label>
                        <textarea
                            name="message"
                            required
                            rows="5"
                            className="w-full px-1 py-1 border border-gray-700 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed font-medium text-sm"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
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
    );
}

export default JoinUs;