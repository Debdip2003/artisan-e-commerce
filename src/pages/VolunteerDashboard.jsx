import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const VolunteerDashboard = () => {
  const [artisans, setArtisans] = useState([]);
  const [newArtisan, setNewArtisan] = useState({
    name: "",
    specialty: "",
    location: "",
  });
  const [editingArtisanId, setEditingArtisanId] = useState(null);
  const navigate = useNavigate();

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
    setNewArtisan({ name: "", specialty: "", location: "" });
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newArtisan.name}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="specialty"
            placeholder="Specialty"
            value={newArtisan.specialty}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newArtisan.location}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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
                  <h3 className="font-bold text-lg">{artisan.name}</h3>
                  <h3 className=" text-lg">{artisan.id}</h3>
                  <p className="text-sm text-gray-700">
                    Specialty: {artisan.specialty}
                  </p>
                  <p className="text-sm text-gray-700">
                    Location: {artisan.location}
                  </p>
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
