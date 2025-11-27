import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Naavbar = () => {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-black/40 backdrop-blur-md text-white flex items-center justify-between py-4 px-6 md:px-10 shadow-lg">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            className="w-40 md:w-44"
            src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/header-logo.svg"
            alt="Urban Jungle Logo"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-[17px] font-medium">
          <Link to="/" className="hover:text-green-400 transition-all duration-300">Home</Link>
          <Link to="/shop" className="hover:text-green-400 transition-all duration-300">Shop</Link>
          <Link to="/about" className="hover:text-green-400 transition-all duration-300">About</Link>
          <Link to="/contact" className="hover:text-green-400 transition-all duration-300">Contact</Link>

          {/* Social */}
          <div className="flex gap-4 ml-4 text-xl">
            <i className="fa-brands fa-youtube hover:text-red-500 hover:scale-110 transition-all cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover:text-pink-500 hover:scale-110 transition-all cursor-pointer"></i>
            <i className="fa-brands fa-facebook hover:text-blue-500 hover:scale-110 transition-all cursor-pointer"></i>
            <i className="fa-brands fa-twitter hover:text-sky-400 hover:scale-110 transition-all cursor-pointer"></i>
          </div>

          {/* Cart */}
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

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden bg-black/80 backdrop-blur-md text-white flex flex-col items-center gap-6 py-6 text-lg font-medium transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        <div className="flex gap-4 text-xl mt-2">
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>

        <Link to="/cart" onClick={() => setMenuOpen(false)} className="relative text-xl mt-1">
          <i className="ri-shopping-cart-2-line"></i>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-green-500 text-black font-bold w-5 h-5 flex items-center justify-center text-xs rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Naavbar;
