import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import Naavbar from "../components/Naavbar";
import Footer from "../sections/Home/Footer";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace(/₹|\/-|-/g, ""));
    return total + price * (item.quantity || 1);
  }, 0);

  return (
    <>
      <Naavbar />
      <div className="pt-32 bg-[#0d0d0d] text-white min-h-screen px-6">
        <h1 className="text-4xl font-bold text-center text-[#00ff99]">Your Cart 🛒</h1>

        {cart.length === 0 ? (
          <div className="text-center mt-10 flex justify-center items-center flex-col gap-5">Cart is Empty
               <Link to="/shop" state={{ totalAmount: totalPrice }}>
                <button className="bg-[#00ff99] text-black font-bold px-6 py-3 rounded-lg">
                  Go Back
                </button>
              </Link>
          </div>
          
        ) : (
          <div className="max-w-5xl mx-auto mt-10 flex flex-col gap-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-[#111] p-4 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={item.img} className="h-24 w-24 rounded-lg" />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-[#00ff99]">{item.price}</p>
                    <p className="text-gray-400">Qty: {item.quantity}</p>
                  </div>
                </div>

                <button
                  className="bg-red-500 px-4 py-2 rounded-lg"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="bg-[#111] p-6 rounded-lg flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#00ff99]">
                Total: ₹{totalPrice}/-
              </h2>

              <Link to="/pay" state={{ totalAmount: totalPrice }}>
                <button className="bg-[#00ff99] text-black font-bold px-6 py-3 rounded-lg">
                  Proceed to Buy
                </button>
              </Link>
            </div>
             <Link to="/shop" state={{ totalAmount: totalPrice }}>
                <button className="bg-[#00ff99] text-black font-bold px-6 py-3 rounded-lg">
                  Go Back
                </button>
              </Link>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
