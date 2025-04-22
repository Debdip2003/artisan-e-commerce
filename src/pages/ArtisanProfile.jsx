import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import shawl from "../assets/frontend_assets/shawlImage.webp";

const ArtisanProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Handwoven Silk Shawl",
      price: 1299,
      sold: true,
      stock: 0,
      description:
        "Pure silk handwoven shawl with traditional motifs. Perfect for special occasions.",
      image: shawl,
    },
    {
      id: 2,
      name: "Ceramic Tea Set",
      price: 899,
      sold: false,
      stock: 5,
      description:
        "Handcrafted ceramic tea set with 6 cups and a teapot. Microwave safe.",
      image: shawl,
    },
    {
      id: 3,
      name: "Wooden Elephant Sculpture",
      price: 599,
      sold: false,
      stock: 2,
      description:
        "Carved from sustainable sheesham wood. Approximately 8 inches tall.",
      image: shawl,
    },
    {
      id: 4,
      name: "Block Printed Cotton Saree",
      price: 1499,
      sold: true,
      stock: 0,
      description:
        "Hand block printed cotton saree with organic dyes. Breathable and comfortable.",
      image: shawl,
    },
    {
      id: 5,
      name: "Brass Pooja Thali",
      price: 799,
      sold: false,
      stock: 3,
      description:
        "Traditional brass pooja thali with intricate engravings. Comes with diyas.",
      image: shawl,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
    stock: "",
  });

  const handleLogout = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setNewProduct((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const price = parseFloat(newProduct.price);

    // Validate price range
    if (price < 100 || price > 1500) {
      alert("Price must be between ₹100 and ₹1500");
      return;
    }

    const productToAdd = {
      id: products.length + 1,
      name: newProduct.name,
      price: price,
      sold: false,
      stock: parseInt(newProduct.stock),
      description: newProduct.description,
      image: newProduct.image
        ? URL.createObjectURL(newProduct.image)
        : "/images/default-product.jpg",
    };

    setProducts([...products, productToAdd]);
    setNewProduct({
      name: "",
      price: "",
      description: "",
      image: null,
      stock: "",
    });
  };

  const handleViewPriceDetails = (productId) => {
    navigate(`/pricingDetails/${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleGenerateCaption = async () => {
    const prompt =
      typeof newProduct?.prompt === "string" ? newProduct.prompt.trim() : "";
    if (!prompt) {
      alert("Please enter a short product idea or prompt first.");
      return;
    }

    try {
      setLoading(true); // Start loading
      const response = await fetch("http://localhost:5000/generate-caption", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product: prompt }),
      });

      const data = await response.json();
      setNewProduct((prev) => ({
        ...prev,
        description: data.caption,
      }));
    } catch (error) {
      console.error("Error generating caption:", error);
      alert("Failed to generate caption. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Artisan Profile ({id})
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Back
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stats Overview */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Overview</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Total Products</p>
                  <p className="text-2xl font-semibold">{products.length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sold Products</p>
                  <p className="text-2xl font-semibold">
                    {products.filter((p) => p.sold).length}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available Products</p>
                  <p className="text-2xl font-semibold">
                    {products.filter((p) => !p.sold).length}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <p className="text-2xl font-semibold">
                    ₹
                    {products
                      .filter((p) => p.sold)
                      .reduce((sum, product) => sum + product.price, 0)}
                  </p>
                </div>
              </div>
            </div>

            {/* Add Product Form */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Add New Product</h2>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter product name"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                    min="100"
                    max="1500"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                    placeholder="100-1500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    placeholder="Enter stock quantity"
                    name="stock"
                    value={newProduct.stock}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Original Product Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter location (e.g., Jaipur, Rajasthan)"
                    name="stock"
                    value={newProduct.location}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="prompt"
                      placeholder="Enter short prompt "
                      value={newProduct.prompt}
                      onChange={handleInputChange}
                      className=" border p-2 rounded mb-4 w-[50%]"
                    />
                    {loading ? (
                      <button
                        type="button"
                        disabled
                        className=" bg-blue-300 text-white rounded cursor-not-allowed w-[50%] mb-4"
                      >
                        Generating...
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleGenerateCaption}
                        className=" bg-blue-500 text-white rounded hover:bg-blue-600 w-[50%] mb-4"
                      >
                        Generate
                      </button>
                    )}
                  </div>
                  <textarea
                    name="description"
                    placeholder="Product Description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded h-24"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product Image
                  </label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-md text-lg font-medium hover:bg-gray-800 transition"
                >
                  Add Product
                </button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/orders")}
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  View Orders
                </button>
                <button
                  onClick={() => navigate("/profile")}
                  className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                  Update Profile
                </button>
                <button
                  onClick={() => navigate("/analytics")}
                  className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
                >
                  View Analytics
                </button>
              </div>
            </div>
          </div>

          {/* Products List */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Your Products</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {product.description}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-16 w-16 overflow-hidden rounded">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          ₹{product.price.toFixed(2)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            product.sold
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {product.sold ? "Sold" : "Available"}
                        </span>
                        {product.sold && (
                          <button
                            onClick={() => handleViewPriceDetails(product.id)}
                            className="ml-2 text-xs text-blue-600 hover:text-blue-800"
                          >
                            Price Details
                          </button>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.stock}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArtisanProfile;
