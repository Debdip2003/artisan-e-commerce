import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [aadhaarFront, setAadhaarFront] = useState(null);
  const [aadhaarBack, setAadhaarBack] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    fullName: "",
    gender: "",
    dob: "",
    address: "",
    phoneNumber: "",
    retypePassword: "",
  });
  const [activeTab, setActiveTab] = useState("User");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Handle file uploads for Aadhaar images
  const handleFrontUpload = (e) => {
    setAadhaarFront(e.target.files[0]);
  };

  // Handle file uploads for Aadhaar images
  const handleBackUpload = (e) => {
    setAadhaarBack(e.target.files[0]);
  };

  // Function to extract data from Aadhaar images
  const handleExtractData = async () => {
    if (loading) return;
    setLoading(true);
    if (!aadhaarFront || !aadhaarBack) {
      toast.error("Please upload both front and back Aadhaar images.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("front", aadhaarFront);
    formDataToSend.append("back", aadhaarBack);

    try {
      const res = await fetch("http://localhost:5000/extract-aadhaar", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to extract Aadhaar details");
        return;
      }

      setFormData((prev) => ({
        ...prev,
        fullName: data["Name"] || "",
        gender: data["Gender"] || "",
        dob: data["DOB/YOB"] || "",
        address: data["Address"] || "",
        phoneNumber: data["Aadhar Number"] || "",
      }));

      toast.success("Aadhaar data extracted successfully");
      setLoading(false);
    } catch (err) {
      toast.error("Server error while extracting data");
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (currentState === "Login") {
      if (activeTab === "Artisan") {
        if (
          formData.id === "artisan123" &&
          formData.password === "artisanpass"
        ) {
          navigate("/artisan-dashboard");
        } else {
          toast.error("Invalid Artisan credentials");
        }
      } else if (activeTab === "Volunteer") {
        if (
          formData.id === "volunteer123" &&
          formData.password === "volunteerpass"
        ) {
          navigate("/volunteer-dashboard");
        } else {
          toast.error("Invalid Volunteer credentials");
        }
      }
    } else {
      // Sign Up logic or form data submission
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
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
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="text"
                      placeholder="Gender"
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          gender: e.target.value,
                        }))
                      }
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
                      value={formData.address}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />

                    <input
                      type="text"
                      placeholder="Date of Birth (DD-MM-YYYY)"
                      value={formData.dob}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          dob: e.target.value,
                        }))
                      }
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
                      accept="image/*"
                      onChange={handleFrontUpload}
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleBackUpload}
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <button
                      type="button"
                      onClick={handleExtractData}
                      disabled={loading}
                      className="w-full mt-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200 disabled:opacity-50"
                    >
                      {loading ? "Extracting..." : "Extract Aadhaar"}
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Artisan ID"
                      onChange={(e) =>
                        setFormData({ ...formData, id: e.target.value })
                      }
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
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
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }))
                      }
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="text"
                      placeholder="Gender"
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          gender: e.target.value,
                        }))
                      }
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
                      value={formData.address}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />

                    <input
                      type="text"
                      placeholder="Date of Birth (DD-MM-YYYY)"
                      value={formData.dob}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          dob: e.target.value,
                        }))
                      }
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
                      accept="image/*"
                      onChange={handleFrontUpload}
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleBackUpload}
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <button
                      type="button"
                      onClick={handleExtractData}
                      disabled={loading}
                      className="w-full mt-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200 disabled:opacity-50"
                    >
                      {loading ? "Extracting..." : "Extract Aadhaar"}
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Artisan ID"
                      onChange={(e) =>
                        setFormData({ ...formData, id: e.target.value })
                      }
                      required
                      className="w-full px-5 py-3 text-base border border-gray-400 rounded-lg bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 ease-in-out"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
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
