// PricingDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const PricingDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);

  const pricingData = {
    1: {
      productName: "Handwoven Silk Shawl",
      artisanAmount: 1000,
      gst: 180,
      delivery: 20,
      platformFee: 99,
      total: 1299,
    },
    2: {
      productName: "Handwoven Silk Shawl",
      artisanAmount: 1000,
      gst: 180,
      delivery: 20,
      platformFee: 99,
      total: 1299,
    },
    3: {
      productName: "Handwoven Silk Shawl",
      artisanAmount: 1000,
      gst: 180,
      delivery: 20,
      platformFee: 99,
      total: 1299,
    },
    4: {
      productName: "Block Printed Cotton Saree",
      artisanAmount: 1200,
      gst: 216,
      delivery: 20,
      platformFee: 63,
      total: 1499,
    },
    5: {
      productName: "Handwoven Silk Shawl",
      artisanAmount: 1000,
      gst: 180,
      delivery: 20,
      platformFee: 99,
      total: 1299,
    },
  };

  const currentPricing = pricingData[productId] || {
    productName: "Product Not Found",
    artisanAmount: 0,
    gst: 0,
    delivery: 0,
    platformFee: 0,
    total: 0,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            Pricing Breakdown
          </h1>
          <p className="text-lg text-gray-600">
            <span className="font-medium text-gray-800">
              {currentPricing.productName}
            </span>{" "}
            (Product ID: {id})
          </p>
        </div>

        <div className="divide-y divide-gray-200 text-gray-700 space-y-4">
          <div className="flex justify-between pt-4">
            <span>Amount Paid to Artisan</span>
            <span className="font-semibold text-gray-900">
              ₹{currentPricing.artisanAmount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between pt-4">
            <span>GST (18%)</span>
            <span className="font-semibold text-gray-900">
              ₹{currentPricing.gst.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between pt-4">
            <span>Delivery Fee</span>
            <span className="font-semibold text-gray-900">
              ₹{currentPricing.delivery.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between pt-4">
            <span>Platform Fee</span>
            <span className="font-semibold text-gray-900">
              ₹{currentPricing.platformFee.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="border-t pt-4 flex justify-between items-center text-lg font-bold text-gray-900">
          <span>Total (Paid by Buyer)</span>
          <span className="text-green-600">
            ₹{currentPricing.total.toFixed(2)}
          </span>
        </div>

        <div className="text-center pt-6">
          <button
            onClick={() => window.history.back()}
            className="inline-block bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
