import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { CartProvider } from "../Context/CartContext";
import Payment from "../pages/Payment";

const App = () => {
  return (
    <CartProvider>
      <Router>
        {/* Global Toast Notification Component */}
        <Toaster position="top-center" reverseOrder={false} />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pay" element={<Payment/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
