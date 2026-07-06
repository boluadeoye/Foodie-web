import React from 'react';
import { motion } from 'framer-motion';

const FOOD_1 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783355589/blog_assets/khj2uohmm1wngrm28kjc.jpg';
const FOOD_2 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783355601/blog_assets/x7hwckssz8xgr47qcihr.jpg';

const foods = [
  { id: 1, img: FOOD_1, title: "Pizza Hut Delicious Pizza", desc: "American, Fast Food, Veggie" },
  { id: 2, img: FOOD_2, title: "Premium Delicious Pizza", desc: "American, Fast Food, Veggie" },
  { id: 3, img: FOOD_1, title: "Pizza Hut Delicious Pizza", desc: "American, Fast Food, Veggie" },
  { id: 4, img: FOOD_2, title: "Premium Delicious Pizza", desc: "American, Fast Food, Veggie" },
  { id: 5, img: FOOD_1, title: "Pizza Hut Delicious Pizza", desc: "American, Fast Food, Veggie" },
  { id: 6, img: FOOD_2, title: "Premium Delicious Pizza", desc: "American, Fast Food, Veggie" },
];

const categories = ["All", "Pizza", "Burger", "Pasta", "Salad", "Dessert"];

export default function AvailableFood() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[48px] font-black text-[#111111] tracking-tight mb-8">
            Available food menus
          </h2>
          
          {/* CATEGORY PILLS (Figma Fidelity) */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                  i === 0 ? 'bg-[#F8991D] text-white border-[#F8991D]' : 'bg-white text-[#555555] border-[#EEEEEE] hover:border-[#F8991D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3x2 GRID (3 Columns, 2 Rows on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
          {foods.map((food, index) => (
            <motion.div 
              key={food.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="group cursor-pointer"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-[#F9F3E3] shadow-sm">
                <img 
                  src={food.img} 
                  alt={food.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* TEXT CONTENT */}
              <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#111111] mb-2">
                {food.title}
              </h3>
              <p className="text-[14px] md:text-[15px] font-medium text-[#555555]">
                {food.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="mt-20 text-center">
          <button className="bg-[#F8991D] text-white px-12 py-5 rounded-2xl font-black text-sm md:text-base hover:scale-105 transition-all shadow-xl shadow-[#F8991D]/20">
            See More Menus ↗
          </button>
        </div>

      </div>
    </section>
  );
}
