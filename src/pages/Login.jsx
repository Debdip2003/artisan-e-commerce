import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [activeTab, setActiveTab] = useState("User");
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (activeTab === "Artisan") {
      navigate("/artisan-dashboard");
    } else if (activeTab === "Volunteer") {
      navigate("/volunteer-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="hidden md:block bg-gray-100">
          <img
            src={assets.hero_login}
            alt="Artisan Work"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-10 md:p-12">
          {/* Branding */}
          <div className="text-center mb-8">
            <img
              src={assets.logo}
              alt="Sahaj Logo"
              className="w-full h-full mx-auto mb-3"
            />
            <p className="text-sm text-gray-500">Empowering Artisans with AI</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center rounded-full mb-8">
            {["User", "Artisan", "Volunteer"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 ml-2 text-sm font-medium rounded-full transition ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={onSubmitHandler} className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {currentState === "Login" ? "Sign In" : "Sign Up"}
              </h3>
              <p className="text-sm text-gray-500">
                {currentState === "Login"
                  ? "Welcome back! Please login to continue."
                  : "Create your account to get started."}
              </p>
            </div>

            {/* User Fields */}
            {activeTab === "User" && (
              <>
                {currentState !== "Login" && (
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                  />
                )}
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                />
                {currentState !== "Login" && (
                  <>
                    <textarea
                      placeholder="Delivery Address"
                      required
                      rows="2"
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="City"
                        required
                        className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        required
                        className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Country"
                        required
                        className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                      />
                      <input
                        type="text"
                        placeholder="Postal Code"
                        required
                        className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                      />
                    </div>
                  </>
                )}
              </>
            )}

            {/* Artisan Fields */}
            {activeTab === "Artisan" && (
              <>
                {currentState !== "Login" ? (
                  <>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="text"
                      placeholder="Gender"
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="password"
                      placeholder="Retype Password"
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />

                    <input
                      type="text"
                      placeholder="Date of Birth (DD-MM-YYYY)"
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="number"
                      placeholder="Phone Number "
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="file"
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="file"
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Artisan ID"
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                  </>
                )}
              </>
            )}

            {/* Volunteer registration */}
            {activeTab === "Volunteer" && (
              <>
                {currentState !== "Login" ? (
                  <>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="password"
                      placeholder="Retype Password"
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />

                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />

                    <input
                      type="text"
                      placeholder="Date of Birth (DD-MM-YYYY)"
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="email"
                      placeholder="Email (optional)"
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="file"
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Volunteer ID"
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                  </>
                )}
              </>
            )}

            {/* Switch Login/Signup */}
            <div className="flex justify-between text-sm text-gray-600">
              {activeTab === "User" && (
                <span className="cursor-pointer hover:underline">
                  Forgot password?
                </span>
              )}
              <span
                className="cursor-pointer hover:text-black font-medium"
                onClick={() =>
                  setCurrentState(
                    currentState === "Login" ? "Sign Up" : "Login"
                  )
                }
              >
                {currentState === "Login"
                  ? activeTab === "User"
                    ? "Create account"
                    : activeTab === "Volunteer"
                    ? "Create Volunteer account"
                    : "Create Artisan account"
                  : "Already have an account?"}
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
            >
              {currentState === "Login" ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>

      {/* Tailwind Utility Classes as Custom Component Styles */}
      <style jsx>{`
        .w-full
          px-5
          py-3
          text-base
          border
          border-gray-400
          rounded-lg
          bg-white
          shadow-md
          placeholder-gray-500
          focus:outline-none
          focus:ring-2
          focus:ring-black
          focus:border-black
          transition-all
          duration-200
          ease-in-out {
          @apply w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition;
        }
      `}</style>
    </div>
  );
};

export default Login;
