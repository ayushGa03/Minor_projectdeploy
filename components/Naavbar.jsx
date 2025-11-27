import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Naavbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-black/40 backdrop-blur-md text-white flex items-center justify-between py-4 px-10 shadow-lg">

        {/* Logo */}
        <div className="flex items-center">
          <img
            className="w-44"
            src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/header-logo.svg"
            alt="Urban Jungle Logo"
          />
        </div>

        {/* Menu Options */}
        <div className="flex items-center gap-8 text-[17px] font-medium">
          <Link to="/" className="hover:text-green-400 transition-all duration-300">Home</Link>
          <Link to="/shop" className="hover:text-green-400 transition-all duration-300">Shop</Link>
          <Link to="/about" className="hover:text-green-400 transition-all duration-300">About</Link>
          <Link to="/contact" className="hover:text-green-400 transition-all duration-300">Contact</Link>

          {/* Social Icons */}
          <div className="flex gap-4 ml-4 text-xl">
            <i className="fa-brands fa-youtube hover:text-red-500 hover:scale-110 transition-all cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover:text-pink-500 hover:scale-110 transition-all cursor-pointer"></i>
            <i className="fa-brands fa-facebook hover:text-blue-500 hover:scale-110 transition-all cursor-pointer"></i>
            <i className="fa-brands fa-twitter hover:text-sky-400 hover:scale-110 transition-all cursor-pointer"></i>
          </div>

          {/* Cart Icon */}
          <div className="relative ml-6">
            <Link to="/cart">
              <i className="ri-shopping-cart-2-line text-2xl hover:text-green-400 cursor-pointer transition-all"></i>
            </Link>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-500 text-black font-bold w-5 h-5 flex items-center justify-center text-xs rounded-full">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Naavbar;
