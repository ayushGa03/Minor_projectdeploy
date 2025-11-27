import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Naavbar from "../components/Naavbar";
import Footer from "../sections/Home/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + parseInt(item.price.replace(/₹|\/-|-/g, ""));
  }, 0);

  return (
    <>
      <Naavbar />

      <div className="pt-32 pb-20 bg-[#0d0d0d] text-white min-h-screen px-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00ff99] to-[#067a55] bg-clip-text text-transparent">
          Your Cart 🛒
        </h1>

        {cart.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-gray-300 text-lg">Your Cart is Empty</p>
            <Link to="/shop">
              <button className="mt-4 bg-[#00ff99] text-black font-semibold px-6 py-2 rounded-md hover:scale-105 transition-all">
                Go To Shop
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-full max-w-5xl mt-10 flex flex-col gap-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-[#111] p-4 rounded-xl shadow-md justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-28 w-28 rounded-xl object-cover"
                  />
                  <div>
                    <h2 className="text-2xl font-semibold">{item.name}</h2>
                    <p className="text-[#00ff99] font-bold text-lg">{item.price}</p>
                    <p className="text-gray-400 text-sm">{item.type}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-all"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Checkout Box */}
            <div className="bg-[#111] p-6 rounded-xl mt-6 flex justify-between items-center">
              <h2 className="text-2xl font-semibold">
                Total: <span className="text-[#00ff99]">₹{totalPrice}/-</span>
              </h2>
              <button className="bg-[#00ff99] text-black px-6 py-3 font-semibold rounded-lg hover:scale-105 transition-all">
                  <a h-full w-full href="/pay">Proceed TO Buy</a>
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
