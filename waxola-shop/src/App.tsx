import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomaPage";
import ShopPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  
import DarkModeToggle from "./components/DarkModeToggle";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gb-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar/>
      <DarkModeToggle />
      <div className="flex-grow container mx-auto p-6">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/checkout" element={<CheckoutPage />}/>
        <Route path="/cart" element={<CartPage />}/>
      </Routes>
      </div>
      
      <Footer/>
    </div>
  );
};

export default App;
