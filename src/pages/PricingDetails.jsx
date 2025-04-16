// PricingDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const PricingDetails = () => {
  const { productId } = useParams();
  
  // Pricing data for different products
  const pricingData = {
    1: { // Handwoven Silk Shawl (₹1299)
      productName: "Handwoven Silk Shawl",
      artisanAmount: 1000,
      gst: 180,
      delivery: 20,
      platformFee: 99,
      total: 1299
    },
    4: { // Block Printed Cotton Saree (₹1499)
      productName: "Block Printed Cotton Saree",
      artisanAmount: 1200,
      gst: 216,
      delivery: 20,
      platformFee: 63,
      total: 1499
    }
  };

  // Get the pricing for the current product or use default
  const currentPricing = pricingData[productId] || {
    productName: "Product",
    artisanAmount: 0,
    gst: 0,
    delivery: 0,
    platformFee: 0,
    total: 0
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">
            Pricing Breakdown
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {currentPricing.productName} (ID: {productId})
          </p>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span>Amount paid to artisan</span>
            <span className="font-medium">₹{currentPricing.artisanAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>GST (18%)</span>
            <span className="font-medium">₹{currentPricing.gst.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Delivery Fee</span>
            <span className="font-medium">₹{currentPricing.delivery.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Platform Fee</span>
            <span className="font-medium">₹{currentPricing.platformFee.toFixed(2)}</span>
          </div>
        </div>

        <div className="border-t pt-4 flex justify-between items-center text-base font-semibold text-gray-900">
          <span>Total (Paid by Buyer)</span>
          <span>₹{currentPricing.total.toFixed(2)}</span>
        </div>

        <div className="text-center">
          <button 
            onClick={() => window.history.back()}
            className="mt-4 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md text-sm font-medium transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;