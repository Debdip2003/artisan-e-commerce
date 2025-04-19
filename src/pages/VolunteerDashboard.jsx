// VolunteerDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const VolunteerDashboard = () => {
  const [artisans, setArtisans] = useState([]);
  const [aadhaarFront, setAadhaarFront] = useState(null);
  const [aadhaarBack, setAadhaarBack] = useState(null);
  const [newArtisan, setNewArtisan] = useState({
    password: "",
    fullName: "",
    gender: "",
    dob: "",
    address: "",
    phoneNumber: "",
    retypePassword: "",
  });
  const [editingArtisanId, setEditingArtisanId] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFrontUpload = (e) => {
    setAadhaarFront(e.target.files[0]);
  };

  const handleBackUpload = (e) => {
    setAadhaarBack(e.target.files[0]);
  };

  const handleExtractData = async () => {
    if (loading) return;
    setLoading(true);
    if (!aadhaarFront || !aadhaarBack) {
      toast.error("Please upload both front and back Aadhaar images.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("front", aadhaarFront);
    formData.append("back", aadhaarBack);

    try {
      const res = await fetch("http://localhost:5000/extract-aadhaar", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to extract Aadhaar details");
        setLoading(false);
        return;
      }

      setNewArtisan((prev) => ({
        ...prev,
        fullName: data["Name"] || "",
        gender: data["Gender"] || "",
        dob: data["DOB/YOB"] || "",
        address: data["Address"] || "",
        phoneNumber: data["Aadhar Number"] || "",
      }));

      toast.success("Aadhaar data extracted successfully");
    } catch (err) {
      toast.error("Server error while extracting data");
    }
    setLoading(false);
  };

  useEffect(() => {
    const storedArtisans = localStorage.getItem("artisans");
    if (storedArtisans) {
      setArtisans(JSON.parse(storedArtisans));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("artisans", JSON.stringify(artisans));
  }, [artisans]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArtisan((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOrUpdateArtisan = (e) => {
    e.preventDefault();
    if (editingArtisanId) {
      setArtisans((prev) =>
        prev.map((artisan) =>
          artisan.id === editingArtisanId
            ? { ...artisan, ...newArtisan }
            : artisan
        )
      );
      setEditingArtisanId(null);
    } else {
      const newEntry = {
        id: uuidv4(),
        ...newArtisan,
      };
      setArtisans([...artisans, newEntry]);
    }
    setNewArtisan({
      password: "",
      fullName: "",
      gender: "",
      dob: "",
      address: "",
      phoneNumber: "",
      retypePassword: "",
    });
  };

  const handleEditArtisan = (artisan) => {
    setNewArtisan(artisan);
    setEditingArtisanId(artisan.id);
  };

  const handleDeleteArtisan = (id) => {
    setArtisans((prev) => prev.filter((artisan) => artisan.id !== id));
  };

  const handleViewArtisan = (id) => {
    navigate(`/artisan/${id}`);
  };

  const handleLogout = () => {
    navigate(-1); // Redirect to login page
  };

  const reversedArtisans = [...artisans].reverse();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Volunteer Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-red-600"
          >
            Back
          </button>
        </div>
      </header>

      {/* Add / Edit Artisan */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingArtisanId ? "Edit Artisan" : "Add Artisan"}
        </h2>
        <form
          onSubmit={handleAddOrUpdateArtisan}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={newArtisan.fullName}
              onChange={(e) => handleInputChange(e)}
              name="fullName"
              required
              className="input-style"
            />
            <input
              type="text"
              placeholder="Gender"
              value={newArtisan.gender}
              onChange={(e) => handleInputChange(e)}
              name="gender"
              required
              className="input-style"
            />
            <input
              type="password"
              placeholder="Password"
              value={newArtisan.password}
              onChange={(e) => handleInputChange(e)}
              name="password"
              required
              className="input-style"
            />
            <input
              type="password"
              placeholder="Retype Password"
              value={newArtisan.retypePassword}
              onChange={(e) => handleInputChange(e)}
              name="retypePassword"
              required
              className="input-style"
            />
            <input
              type="text"
              placeholder="Address"
              value={newArtisan.address}
              onChange={(e) => handleInputChange(e)}
              name="address"
              className="input-style"
            />
            <input
              type="text"
              placeholder="Date of Birth (DD-MM-YYYY)"
              value={newArtisan.dob}
              onChange={(e) => handleInputChange(e)}
              name="dob"
              className="input-style"
            />
            <input
              type="number"
              placeholder="Phone Number"
              value={newArtisan.phoneNumber}
              onChange={(e) => handleInputChange(e)}
              name="phoneNumber"
              required
              className="input-style"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFrontUpload}
              className="input-style"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleBackUpload}
              className="input-style"
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
          <button
            type="submit"
            className="col-span-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {editingArtisanId ? "Update Artisan" : "Add Artisan"}
          </button>
        </form>
      </div>

      {/* Artisan List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Artisan List</h2>
        {artisans.length === 0 ? (
          <p className="text-gray-600">No artisans available.</p>
        ) : (
          <ul className="divide-y">
            {reversedArtisans.map((artisan) => (
              <li
                key={artisan.id}
                className="py-4 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="font-bold text-lg">{artisan.fullName}</h3>
                  <p className="text-sm text-gray-700">
                    Gender: {artisan.gender}
                  </p>
                  <p className="text-sm text-gray-700">DOB: {artisan.dob}</p>
                </div>
                <div className="mt-2 md:mt-0 flex gap-2 flex-wrap">
                  <button
                    onClick={() => handleEditArtisan(artisan)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteArtisan(artisan.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleViewArtisan(artisan.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    View
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VolunteerDashboard;
