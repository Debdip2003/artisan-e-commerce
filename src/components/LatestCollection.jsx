import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItems from "./ProductItems";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rose-50 via-white to-indigo-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">
          Sahaj's Latest Collections
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
          Explore the newest creations from our artisan partners — a blend of tradition and technology, crafted with care and powered by Sahaj AI.
        </p>

    
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {latestProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out"
            >
              <ProductItems
                id={item._id}
                image={item.image}
                name={item.name}
                price={`₹${item.price.toLocaleString()}`}
              />

     
              <div className="mt-2 text-xs text-indigo-500 font-medium italic">
                New Arrival
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
