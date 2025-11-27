import React from "react";
import Naavbar from "../components/Naavbar";
import Footer from "../sections/Home/Footer";
import { Link, useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <>
      <Naavbar />

      <div className="pt-32 min-h-screen bg-[#0d0d0d] text-white flex justify-center px-6">
        <div className="bg-[#111] max-w-3xl w-full p-8 rounded-2xl shadow-[0_0_25px_#00ff9980] flex flex-col gap-6">

          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#00ff99] to-[#067a55] bg-clip-text text-transparent">
            Complete Your Purchase 🌿
          </h1>

          {/* PRODUCT SUMMARY */}
          <div className="flex items-center gap-6 bg-[#0d0d0d] p-4 rounded-xl">
            <img src={product?.img} alt={product?.name}
              className="w-32 h-32 object-cover rounded-xl" />

            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">{product?.name}</h2>
              <p className="text-gray-300">{product?.type}</p>
              <p className="text-[#00ff99] font-bold text-xl mt-2">{product?.price}</p>
            </div>
          </div>

          {/* PAYMENT FORM */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Billing Details</h2>

            <input type="text" placeholder="Full Name" className="p-3 rounded-md bg-[#0d0d0d] border border-[#00ff99]" />
            <input type="email" placeholder="Email" className="p-3 rounded-md bg-[#0d0d0d] border border-[#00ff99]" />
            <input type="tel" placeholder="Phone Number" className="p-3 rounded-md bg-[#0d0d0d] border border-[#00ff99]" />
            <input type="text" placeholder="Address" className="p-3 rounded-md bg-[#0d0d0d] border border-[#00ff99]" />

            <h2 className="text-2xl font-semibold mt-3">Payment Method</h2>

            <select className="p-3 bg-[#0d0d0d] border border-[#00ff99] rounded-md">
              <option>UPI</option>
              <option>Credit / Debit Card</option>
              <option>Net Banking</option>
              <option>Cash on Delivery</option>
            </select>

            <button className="mt-3 bg-[#00ff99] text-black font-bold py-4 rounded-xl text-xl hover:scale-110 transition-all">
              Pay Now 💳
            </button>

            <Link to="/shop" className="text-center text-gray-300 hover:text-[#00ff99] transition-all">
              ← Back to Shop
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Payment;
