import React, { useContext } from "react";   // ← FIXED missing useContext import
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
  const { addToCart } = useContext(CartContext); // ← USING Cart Context

  return (
    <>
      <Naavbar />

      <div className="w-full pt-32 pb-20 bg-[#0d0d0d] text-white flex flex-col items-center gap-10">

        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00ff99] to-[#067a55] bg-clip-text text-transparent">
          Shop Your Favorite Plants 🌿
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-11 max-w-6xl w-full px-6">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-[#111] rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[#00ff99]/40 cursor-pointer"
            >
              <img src={item.img} alt={item.name} className="w-full h-56 object-cover" />

              <div className="p-4 flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{item.name}</h1>
                <p className="text-gray-300 text-sm">{item.type}</p>
                <p className="text-[#00ff99] font-bold text-lg">{item.price}</p>

                <div className="flex items-center gap-1 text-[#00ff99]">
                  <i className="ri-star-fill"></i>
                  <span className="text-sm">{item.rating}</span>
                  <span className="text-xs text-gray-400">({item.reviews} reviews)</span>
                </div>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="w-1/2 py-2 text-sm bg-[#00ff99] text-black rounded-md font-semibold transition-all hover:scale-105"
                  >
                    Add to Cart
                  </button>

                  <button className="w-1/2 py-2 text-sm border border-[#00ff99] rounded-md font-semibold hover:bg-[#00ff99] hover:text-black transition-all hover:scale-105">
                    <a className="w-full h-full" href="/pay">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
