import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import ProductJourney from "./pages/ProductJourney";
import OurPolicies from "./components/OurPolicies";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Delivery from "./pages/Delivery";
import Artisans from "./pages/Artisans";
import Innovation from "./pages/Innovation";
import Workshop from "./pages/Workshop";
import ArtisanPricing from "./pages/ArtisanPricing";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArtisanDashboard from "./components/ArtisanDashboard";
import PricingDetails from "./pages/PricingDetails";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import ArtisanProfile from "./pages/ArtisanProfile";
function App() {
  const location = useLocation();

  const hideLayoutRoutes = [
    "/artisan-dashboard",
    "/volunteer-dashboard",
    "/pricingDetails",
    "/artisan",
  ];
  const shouldHideLayout = hideLayoutRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />

      {/* Shared Layout Components */}
      {!shouldHideLayout && (
        <>
          <NavBar />
          <SearchBar />
        </>
      )}

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/product-journey" element={<ProductJourney />} />
        <Route path="/policies" element={<OurPolicies />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/artisanpricing" element={<ArtisanPricing />} />
        <Route path="/pricingDetails/:id" element={<PricingDetails />} />

        <Route path="/artisanpricing/:artisanId" element={<ArtisanPricing />} />

        <Route path="/artisan-dashboard" element={<ArtisanDashboard />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
        <Route path="/artisan/:id" element={<ArtisanProfile />} />

        {/* Add more routes as needed */}
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
