import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="mt-32 bg-white border-t pt-10 px-6 sm:px-10">
      <div className="grid sm:grid-cols-[3fr_1fr_1fr] gap-10 max-w-7xl mx-auto text-sm text-gray-600">
        <div>
          <img src={assets.logo} alt="Sahaj Logo" className="mb-4 w-36" />
          <p className="max-w-sm leading-relaxed">
            Empowering local artisans with AI-driven solutions. Sahaj brings handmade excellence to your fingertips while supporting sustainable, local craftsmanship.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline cursor-pointer">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline cursor-pointer">About Us</Link>
            </li>
            <li>
              <Link to="/delivery" className="hover:underline cursor-pointer">Delivery</Link>
            </li>
            <li>
              <Link to="/policies" className="hover:underline cursor-pointer">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Get in Touch</h4>
          <ul className="space-y-2">
            <li>📞 +91 7029081087</li>
            <li>📧 sahaj@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-10 pt-5 text-center text-xs text-gray-500">
        © 2024 Sahaj - AI for Artisans. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
