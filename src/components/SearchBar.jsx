import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b border-gray-300 bg-gradient-to-r from-gray-50 via-white to-gray-50 py-6 px-4 shadow-sm">
      <div className="relative max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search products, artisans, styles..."
          className="w-full py-3 pl-5 pr-10 rounded-full border border-gray-300 shadow-inner text-sm sm:text-base focus:ring-2 focus:ring-[#8B5E3C] focus:outline-none transition-all duration-300 bg-white placeholder-gray-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 opacity-60"
        />
        <button
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors duration-200"
          onClick={() => setShowSearch(false)}
        >
          <img src={assets.cross_icon} alt="close" className="w-3" />
        </button>
      </div>
    </div>
  ) : null;
};

export default SearchBar;
