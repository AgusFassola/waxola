import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomaPage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  
import DarkModeToggle from "./components/DarkModeToggle";

const App: React.FC = () => {
  return (
    <div className="gb-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar/>
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/checkout" element={<CheckoutPage />}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
