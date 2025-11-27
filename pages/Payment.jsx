import React, { useState } from "react";
import Naavbar from "../components/Naavbar";
import Footer from "../sections/Home/Footer";
import { Link, useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const product = location.state?.product;
  const totalAmount = location.state?.totalAmount || 0;

  const [selectedUPI, setSelectedUPI] = useState(null);

  const upiApps = [
    {
      name: "Google Pay",
      logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png",
    },
    {
      name: "PhonePe",
      logo: "https://e7.pngegg.com/pngimages/332/615/png-clipart-phonepe-india-unified-payments-interface-india-purple-violet.png",
    },
    {
      name: "Paytm",
      logo: "https://www.citypng.com/public/uploads/preview/paytm-circle-logo-hd-png-701751694706614zmho56voff.png",
    },
  ];

  return (
    <>
      <Naavbar />

      <div className="pt-32 min-h-screen bg-[#0d0d0d] text-white flex justify-center px-6 font-[Poppins] animate-fadeIn">
        <div className="bg-[#111111bb] backdrop-blur-xl max-w-3xl w-full p-10 rounded-3xl shadow-[0_0_30px_#00ff9966] flex flex-col gap-6 animate-fadeInSlow">

          <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-[#00ff99] to-[#067a55] bg-clip-text text-transparent">
            Complete Your Purchase 🌱
          </h1>

          {/* PRODUCT SUMMARY */}
          <div className="flex items-center gap-6 bg-[#0d0d0dcc] p-5 rounded-2xl hover:shadow-[0_0_20px_#00ff99] transition-all duration-500">
            <img
              src="https://www.citypng.com/public/uploads/preview/hd-shopping-cart-white-logo-icon-transparent-png-701751694973936amdcratijm.png"
              alt={product?.name}
              className="w-32 h-32 object-contain rounded-xl"
            />

            <div>
              <h2 className="text-2xl font-semibold">{product?.name || "Cart Items"}</h2>
              <p className="text-[#00ff99] font-extrabold text-4xl mt-2 animate-pulse">
                ₹{totalAmount}/-
              </p>
            </div>
          </div>

          {/* UPI APPS */}
          <h2 className="text-2xl font-bold mt-4 text-[#00ff99]">Choose UPI App</h2>
          <div className="grid grid-cols-3 gap-5 mt-3">
            {upiApps.map((app, index) => (
              <div
                key={index}
                onClick={() => setSelectedUPI(app.name)}
                className={`flex flex-col items-center cursor-pointer border rounded-2xl p-5 bg-[#0d0d0d] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_15px_#00ff99] ${
                  selectedUPI === app.name
                    ? "border-[#00ff99] shadow-[0_0_20px_#00ff99]"
                    : "border-gray-700"
                }`}
              >
                <img src={app.logo} alt={app.name} className="w-14 h-14 object-contain" />
                <p className="mt-3 font-semibold">{app.name}</p>
              </div>
            ))}
          </div>

          {/* PAYMENT BUTTON */}
          <div className="bg-[#0d0d0dcc] p-5 rounded-2xl mt-6 flex justify-between items-center shadow-inner">
            <h2 className="text-xl font-semibold">
              Total: <span className="text-[#00ff99] font-bold">₹{totalAmount}/-</span>
            </h2>

            <button
              disabled={!selectedUPI}
              className={`py-3 px-10 rounded-2xl text-lg font-bold transition-all duration-300 ${
                selectedUPI
                  ? "bg-[#00ff99] text-black hover:scale-110 hover:shadow-[0_0_20px_#00ff99]"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              Pay with {selectedUPI || "UPI"} 💳
            </button>
          </div>

          <Link
            to="/shop"
            className="text-center text-gray-300 hover:text-[#00ff99] transition-all duration-300 mt-2 hover:underline hover:tracking-widest"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Payment;
