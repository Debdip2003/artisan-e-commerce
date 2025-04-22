import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "./ProductItems";

const Bestseller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-white to-rose-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
          Best Sellers
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base sm:text-lg font-medium">
          Discover our top-rated, most-loved handmade creations by talented
          artisans across India.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {bestseller.map((item) => (
            <div
              key={item._id}
              className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl rounded-2xl bg-white p-5 relative border border-gray-100 shadow-sm hover:border-indigo-300"
            >
              {item.bestseller && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md animate-pulse">
                  Best Seller
                </div>
              )}

              <ProductItems
                id={item._id}
                image={item.image}
                name={item.name}
                price={`${item.price}`}
              />

              <div className="flex items-center justify-center mt-2">
                <span className="text-yellow-500 text-lg">★★★★☆</span>
              </div>

              <button className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestseller;
