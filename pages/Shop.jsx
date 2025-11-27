import React, { useContext, useState } from "react";
import "remixicon/fonts/remixicon.css";
import Naavbar from "../components/Naavbar";
import Footer from "../sections/Home/Footer";
import { CartContext } from "../Context/CartContext";

const products = [
  {
    id: 1,
    name: "Jade Plant",
    type: "Indoor Bonsai",
    price: "₹399/-",
    rating: 4.6,
    reviews: 178,
    img: "https://media.istockphoto.com/id/1396488496/photo/crassula-ovata-houseplant-in-a-green-pot-grey-background.jpg?s=612x612&w=0&k=20&c=lYmcbTpffeIDUmbj1XoVn-DRUAKgRRuTkg1QJ1I2POQ=",
  },
  {
    id: 2,
    name: "Areca Palm",
    type: "Indoor Purifier",
    price: "₹749/-",
    rating: 4.8,
    reviews: 210,
    img: "https://masonhome.in/cdn/shop/files/348_3c0f3f06-b8b8-48b7-9e79-551d76890a64.png?v=1758785141&width=1500",
  },
  {
    id: 3,
    name: "Spider Plant",
    type: "Air Purifier",
    price: "₹299/-",
    rating: 4.5,
    reviews: 134,
    img: "https://www.palasa.co.in/cdn/shop/files/DSC1865.jpg?v=1750749622",
  },
  {
    id: 4,
    name: "Bamboo Plant",
    type: "Lucky Feng Shui",
    price: "₹199/-",
    rating: 4.7,
    reviews: 268,
    img: "https://m.media-amazon.com/images/I/518eaTa9hmL.jpg",
  },
  {
    id: 5,
    name: "ZZ Plant",
    type: "Low Maintenance Indoor",
    price: "₹799/-",
    rating: 4.9,
    reviews: 300,
    img: "https://kyari.co/cdn/shop/files/1_c2592c28-67c7-4eeb-ae96-8d693911e234.jpg?v=1737183229&width=480",
  },
  {
    id: 6,
    name: "Rubber Plant",
    type: "Decorative Leafy",
    price: "₹649/-",
    rating: 4.8,
    reviews: 178,
    img: "https://m.media-amazon.com/images/I/71z4dJMMBmL.jpg",
  },
  {
    id: 7,
    name: "Fiddle Leaf Fig",
    type: "Luxury Indoor Plant",
    price: "₹1299/-",
    rating: 4.9,
    reviews: 322,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvG60R9IM1yc_TC1EwnMDQL-o8t2IlbC0_hg&s",
  },
  {
    id: 8,
    name: "Pothos Money Plant",
    type: "Hanging Indoor",
    price: "₹249/-",
    rating: 4.7,
    reviews: 450,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YCmc6G3BVhLQFO3gDMlJsDhd5TA5SS_ViQ&s",
  },
];
const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState({});

  const increase = (product) => {
    setQty((prev) => {
      const newCount = (prev[product.id] || 0) + 1;
      addToCart(product, 1);
      return { ...prev, [product.id]: newCount };
    });
  };

  const decrease = (product) => {
    setQty((prev) => {
      const newCount = (prev[product.id] || 1) - 1;
      if (newCount <= 0) return { ...prev, [product.id]: 0 };
      return { ...prev, [product.id]: newCount };
    });
  };

  return (
    <>
      <Naavbar />
      <div className="pt-32 pb-20 bg-[#0d0d0d] text-white text-center font-[Poppins]">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#00ff99] to-[#067a55] bg-clip-text text-transparent animate-fadeIn">
          Shop Your Favorite Plants 🌿
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6 mt-10 animate-fadeInSlow">
          {products.map((item) => {
            const count = qty[item.id] || 0;
            return (
              <div
                key={item.id}
                className="bg-[#111111c5] backdrop-blur-md rounded-2xl shadow-xl p-5 
                hover:scale-[1.05] hover:shadow-[0_0_20px_#00ff99] transition-all duration-500"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    className="w-full h-56 object-cover rounded-xl hover:scale-110 transition-all duration-700"
                  />
                </div>

                <h2 className="text-xl font-bold mt-3">{item.name}</h2>
                <p className="text-gray-400 text-sm">{item.type}</p>

                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-[#00ff99] font-bold">{item.rating}</span>
                  <span className="text-yellow-300 text-lg">⭐</span>
                  <span className="text-gray-400 text-sm">({item.reviews})</span>
                </div>

                <p className="text-[#00ff99] font-bold text-xl mt-1">{item.price}</p>

                {count === 0 ? (
                  <button
                    onClick={() => increase(item)}
                    className="mt-4 w-full bg-[#00ff99] text-black py-2 rounded-md font-semibold hover:bg-[#05e98c] transition-all duration-300 hover:scale-105"
                  >
                    Add to Cart +
                  </button>
                ) : (
                  <div className="flex justify-between mt-4 bg-[#0d0d0d] py-2 px-4 rounded-md">
                    <button onClick={() => decrease(item)} className="text-xl font-bold">−</button>
                    <span className="font-bold">{count}</span>
                    <button onClick={() => increase(item)} className="text-xl font-bold">+</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
