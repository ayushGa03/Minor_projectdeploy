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

      <div className="pt-32 min-h-screen bg-[#0d0d0d] text-white flex justify-center px-4 sm:px-6">
        <div className="bg-[#111111bb] backdrop-blur-xl w-full max-w-3xl p-6 sm:p-10 rounded-3xl shadow-[0_0_30px_#00ff9966] flex flex-col gap-6">

          <h1 className="text-3xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-[#00ff99] to-[#067a55] bg-clip-text text-transparent">
            Complete Your Purchase 🌱
          </h1>

          {/* PRODUCT SUMMARY */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-[#0d0d0dcc] p-4 sm:p-5 rounded-2xl hover:shadow-[0_0_20px_#00ff99] transition-all">
            <img
              src="https://i.pinimg.com/736x/a0/7e/64/a07e64a679218ec421cc5c0c3b5894e5.jpg"
              alt={product?.name}
              className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-xl"
            />

            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold">{product?.name || "Cart Items"}</h2>
              <p className="text-[#00ff99] font-extrabold text-3xl sm:text-4xl mt-2">
                ₹{totalAmount}/-
              </p>
            </div>
          </div>

          {/* UPI APPS */}
          <h2 className="text-2xl font-semibold text-center text-[#00ff99]">Choose UPI App</h2>

          <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-3">
            {upiApps.map((app, index) => (
              <div
                key={index}
                onClick={() => setSelectedUPI(app.name)}
                className={`flex flex-col items-center cursor-pointer border rounded-2xl p-3 sm:p-5 bg-[#0d0d0d] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#00ff99] ${
                  selectedUPI === app.name
                    ? "border-[#00ff99] shadow-[0_0_20px_#00ff99]"
                    : "border-gray-700"
                }`}
              >
                <img src={app.logo} alt={app.name} className="w-10 h-10 sm:w-14 sm:h-14 object-contain" />
                <p className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold">{app.name}</p>
              </div>
            ))}
          </div>

          {/* PAYMENT BUTTON */}
          <div className="bg-[#0d0d0dcc] p-4 sm:p-5 rounded-2xl mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-lg sm:text-xl font-semibold">
              Total: <span className="text-[#00ff99] font-bold">₹{totalAmount}/-</span>
            </h2>

            <button
              disabled={!selectedUPI}
              className={`py-3 w-full sm:w-auto px-8 rounded-2xl text-lg font-bold transition-all duration-300 ${
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
            className="text-center text-gray-300 hover:text-[#00ff99] transition-all duration-300 mt-2 hover:underline text-sm sm:text-base"
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
