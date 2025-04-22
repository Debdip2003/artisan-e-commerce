import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const contactDetails = [
  {
    icon: "📞",
    title: "Phone",
    value: "+91 70290 81087",
    description: "Reach us directly for instant assistance.",
    bg: "bg-gradient-to-br from-rose-100 to-rose-50",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "+91 70290 81087",
    description: "Chat with our support team on WhatsApp.",
    bg: "bg-gradient-to-br from-emerald-100 to-emerald-50",
  },
  {
    icon: "✉️",
    title: "Email",
    value: "sahaj@gmail.com",
    description: "Send us queries, suggestions, or feedback.",
    bg: "bg-gradient-to-br from-sky-100 to-sky-50",
  },
  {
    icon: "🏬",
    title: "Our Headquarters",
    value: "64/4B/8 Dr SC Banerjee Road, Kolkata - 700010",
    description: "Drop by to explore our handcrafted products.",
    bg: "bg-gradient-to-br from-yellow-100 to-yellow-50",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#f9fafb] text-gray-700 font-sans">
      {}
      <div
        className="text-center py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${assets.contact_img})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-white mt-3 text-lg">
            We’re happy to assist you — drop us a message or call anytime.
          </p>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactDetails.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} p-6 rounded-xl shadow-md hover:shadow-lg transition`}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-800 font-medium">{item.value}</p>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
