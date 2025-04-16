import React from "react";
import { Link } from "react-router-dom";

const Delivery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-100 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        {}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#8B5E3C] mb-4">🚚 Product Delivery Information</h1>
          <p className="text-lg text-gray-700">
            Your handcrafted treasures, delivered with care and love!
          </p>
        </div>

        {}
        <div className="space-y-8 text-gray-800 text-base leading-relaxed">
          <div className="bg-[#FFF6E5] border-l-4 border-[#FBBF24] p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">📦 Delivery Timeline</h2>
            <p>
              All products are made by skilled artisans with love and care.
              Depending on the complexity and region, delivery may take between
              <span className="font-semibold text-[#8B5E3C]"> 5–10 business days</span>.
              We ensure safe and prompt delivery to your doorstep.
            </p>
          </div>

          <div className="bg-[#E0F7FA] border-l-4 border-[#00ACC1] p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">💰 Platform Charges</h2>
            <p>
              Sahaj supports artisans by charging only a minimal
              <span className="font-semibold text-[#8B5E3C]"> 5% platform fee</span>
              on every purchase. This small amount helps us maintain our platform and continue empowering local talents.
            </p>
          </div>

          <div className="bg-[#F3E8FF] border-l-4 border-[#9F7AEA] p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">🎯 Our Promise</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Timely and safe delivery of your products.</li>
              <li>Real-time updates and tracking once your product ships.</li>
              <li>100% handcrafted authenticity guarantee.</li>
              <li>Customer support that actually cares 💬</li>
            </ul>
          </div>
        </div>

        {}
        <div className="mt-12 text-center">
          <Link to="/collections">
            <button className="bg-[#8B5E3C] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#a67450] hover:scale-105 transition-all duration-300">
              🛍️ Browse Our Collections
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
