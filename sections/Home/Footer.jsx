import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0b0b] text-white pt-16 pb-10 px-6 flex flex-col items-center gap-10">

      {/* Infinite Moving Line */}
      <div className="overflow-hidden w-full">
        <div className="text-[#00ff99] whitespace-nowrap animate-marquee text-lg font-semibold tracking-wider">
          🌿 Fresh Plants • Fast Delivery • Secure Payments • 24/7 Customer Support • 100% Quality Guaranteed •
        </div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold bg-linear-to-r from-[#00ff99] to-[#067a55] bg-clip-text text-transparent">
            Urban Jungle Co.
          </h2>
          <p className="text-gray-400 mt-3">
            Bringing nature closer to your home with fresh and healthy plants.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-[#00ff99] cursor-pointer transition-all">Home</li>
            <li className="hover:text-[#00ff99] cursor-pointer transition-all">Shop</li>
            <li className="hover:text-[#00ff99] cursor-pointer transition-all">About</li>
            <li className="hover:text-[#00ff99] cursor-pointer transition-all">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-3">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-[#00ff99] cursor-pointer transition-all">FAQs</li>
            <li className="hover:text-[#00ff99] cursor-pointer transition-all">Return Policy</li>
            <li className="hover:text-[#00ff99] cursor-pointer transition-all">Shipping Info</li>
            <li className="hover:text-[#00ff99] cursor-pointer transition-all">Terms & Conditions</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <i className="ri-instagram-line hover:text-[#00ff99] transition-all cursor-pointer hover:scale-110"></i>
            <i className="ri-facebook-circle-line hover:text-[#00ff99] transition-all cursor-pointer hover:scale-110"></i>
            <i className="ri-twitter-x-line hover:text-[#00ff99] transition-all cursor-pointer hover:scale-110"></i>
            <i className="ri-youtube-line hover:text-[#00ff99] transition-all cursor-pointer hover:scale-110"></i>
          </div>

          <p className="text-gray-300 mt-3">📍 Bhopal, Madhya Pradesh</p>
          <p className="text-gray-300">📞 +91 98765 43210</p>
          <p className="text-gray-300">✉ support@urbanjungle.com</p>
        </div>
      </div>

      <div className="w-full h-px bg-[#00ff99]/40 mt-6"></div>

      <p className="text-gray-400 text-sm">© 2025 Urban Jungle Co. All Rights Reserved.</p>

      {/* 💚 Designed by Ayush */}
      <p className="text-lg font-semibold bg-linear-to-r from-[#00ff99] to-[#067a55] bg-clip-text text-transparent">
        Designed & Crafted by Ayush Gaurav
      </p>
    </footer>
  );
};

export default Footer;
