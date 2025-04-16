import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setVisible(false);
  }, [location]);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "COLLECTIONS", path: "/collections" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
    { label: "JOURNEY", path: "/product-journey" },
    { label: "INNOVATION", path: "/innovation" },
    { label: "WORKSHOP", path: "/workshop" },
  ];

  return (
    <div className="flex items-center justify-between py-5 font-medium relative px-4 sm:px-8 shadow-sm bg-white z-50">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="Sahaj - AI for Artisans"
          className="w-32 sm:w-40 object-contain"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
        {navLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 hover:text-black ${
                isActive ? "font-semibold text-black" : ""
              }`
            }
          >
            <p>{item.label}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-5 cursor-pointer hover:scale-110 transition"
          onClick={() => setShowSearch(true)}
        />

        {/* Profile Icon */}
        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="profile_icon"
            />
          </Link>
          <div className="group-hover:block hidden absolute right-0 pt-3 z-10">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart_icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu_icon"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 bg-white transition-all duration-300 ease-in-out sm:hidden ${
          visible ? "w-4/5 shadow-lg" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-700 pt-5 px-4 h-full">
          {/* Back Button */}
          <div
            className="flex items-center gap-4 mb-6 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="dropdown_menu"
            />
            <p>Back</p>
          </div>

          {/* Nav Links */}
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `py-3 pl-4 border-b text-sm ${
                  isActive ? "text-black font-semibold bg-gray-100" : ""
                } hover:bg-gray-100`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
