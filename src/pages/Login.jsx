import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [activeTab, setActiveTab] = useState("User");
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Here you would typically handle authentication
    // For demo purposes, we'll just redirect if Artisan is selected
    if (activeTab === "Artisan") {
      navigate("/artisan-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="hidden md:block bg-gray-100">
          <img
            src={assets.hero_login}
            alt="Artisan Work"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 sm:p-10">
          {/* Logo and Heading */}
          <div className="text-center mb-6">
            <img
              src={assets.logo}
              alt="Sahaj Logo"
              className="w-20 h-20 mx-auto mb-2"
            />
            <h2 className="text-3xl font-extrabold text-gray-900">Sahaj</h2>
            <p className="text-sm text-gray-500">Empowering Artisans with AI</p>
          </div>

          {/* User/Artisan Tabs */}
          <div className="flex justify-center gap-4 mb-6 border-b pb-3">
            {["User", "Artisan"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1 text-base font-medium transition-all duration-300 border-b-2 ${
                  activeTab === tab
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black hover:border-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmitHandler} className="space-y-4">
            <div className="text-center">
              <p className="text-2xl font-semibold">
                {currentState === "Login" ? "Sign In" : "Sign Up"}
              </p>
              <p className="text-sm text-gray-500">
                {currentState === "Login"
                  ? "Welcome back! Please login to continue."
                  : "Create an account to get started."}
              </p>
            </div>

            {activeTab === "User" && (
              <>
                {currentState !== "Login" && (
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="input-field"
                  />
                )}
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="input-field"
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="input-field"
                />
                {currentState !== "Login" && (
                  <>
                    <textarea
                      placeholder="Delivery Address"
                      required
                      className="input-field"
                      rows="2"
                    ></textarea>
                    <input
                      type="text"
                      placeholder="City"
                      required
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      required
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      required
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      required
                      className="input-field"
                    />
                  </>
                )}
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="cursor-pointer hover:underline">
                    Forgot your password?
                  </span>
                  <span
                    className="cursor-pointer hover:text-black"
                    onClick={() =>
                      setCurrentState(
                        currentState === "Login" ? "Sign Up" : "Login"
                      )
                    }
                  >
                    {currentState === "Login"
                      ? "Create account"
                      : "Already have an account? Login"}
                  </span>
                </div>
              </>
            )}

            {activeTab === "Artisan" && (
              <>
                <input
                  type="text"
                  placeholder="Artisan ID"
                  required
                  className="input-field"
                />
                {currentState !== "Login" ? (
                  <>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="input-field"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      className="input-field"
                    />
                    <input
                      type="password"
                      placeholder="Retype Password"
                      required
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Language"
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Skillset"
                      className="input-field"
                    />
                    <input
                      type="date"
                      placeholder="Registration Date"
                      className="input-field"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (optional)"
                      className="input-field"
                    />
                    <input
                      type="email"
                      placeholder="Email (optional)"
                      className="input-field"
                    />
                  </>
                ) : (
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="input-field"
                  />
                )}
                <div className="text-right text-sm text-gray-600">
                  <span
                    className="cursor-pointer hover:text-black"
                    onClick={() =>
                      setCurrentState(
                        currentState === "Login" ? "Sign Up" : "Login"
                      )
                    }
                  >
                    {currentState === "Login"
                      ? "Register as Artisan"
                      : "Already registered? Login"}
                  </span>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md text-lg font-medium hover:bg-gray-800 transition"
            >
              {currentState === "Login" ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .input-field {
          @apply w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black;
        }
      `}</style>
    </div>
  );
};

export default Login;