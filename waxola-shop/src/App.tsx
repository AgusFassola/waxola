import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomaPage";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  


const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/checkout" element={<CheckoutPage />}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App
