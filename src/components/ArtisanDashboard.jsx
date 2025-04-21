import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ArtisanDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([
    // Sample products
    {
      id: 1,
      name: "Handwoven Silk Shawl",
      price: 1299,
      sold: true,
      stock: 0,
      description:
        "Pure silk handwoven shawl with traditional motifs. Perfect for special occasions.",
      image: "/images/silk-shawl.webp",
    },
    // add more sample products...
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
    stock: "",
    prompt: "", // for generating caption
  });

  const handleLogout = () => {
    navigate("/");
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
      prompt: "",
    });
  };

  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    }
  };

  const handleGenerateCaption = async () => {
    const prompt = newProduct.prompt.trim();
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
        <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Artisan Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Overview */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Overview</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Total Products</p>
                <p className="text-2xl font-semibold">{products.length}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Sold</p>
                <p className="text-2xl font-semibold">
                  {products.filter((p) => p.sold).length}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">In Stock</p>
                <p className="text-2xl font-semibold">
                  {products.filter((p) => !p.sold).length}
                </p>
              </div>
            </div>
          </div>

          {/* Add New Product */}
          <div className="bg-white p-6 rounded-lg shadow col-span-2">
            <h2 className="text-lg font-medium mb-4">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price (₹)"
                value={newProduct.price}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />

              {/* Prompt input and generate button */}
              <div className="flex gap-2">
                <input
                  type="text"
                  name="prompt"
                  placeholder="Enter short prompt (e.g., clay diya set)"
                  value={newProduct.prompt}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
                {loading ? (
                  <button
                    type="button"
                    disabled
                    className="px-4 py-2 bg-blue-300 text-white rounded cursor-not-allowed"
                  >
                    Generating...
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleGenerateCaption}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Generate Caption
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

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border p-2 rounded"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>

        {/* Product List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow space-y-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-bold">₹{product.price}</p>
              <p className="text-sm text-gray-500">
                Stock: {product.stock} | {product.sold ? "Sold" : "Available"}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/pricingDetails/${product.id}`)}
                  className="text-blue-600 hover:underline"
                >
                  View Price
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ArtisanDashboard;
