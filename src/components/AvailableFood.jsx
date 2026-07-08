import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FOOD_1 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783355589/blog_assets/khj2uohmm1wngrm28kjc.jpg';
const FOOD_2 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783355601/blog_assets/x7hwckssz8xgr47qcihr.jpg';

const foods = [
  { id: 1, img: FOOD_1, title: "Pizza Hut Delicious Pizza", desc: "American, Fast Food, Burgers" },
  { id: 2, img: FOOD_2, title: "Premium Delicious Pizza", desc: "American, Fast Food, Burgers" },
  { id: 3, img: FOOD_1, title: "Pizza Hut Delicious Pizza", desc: "American, Fast Food, Burgers" },
  { id: 4, img: FOOD_2, title: "Premium Delicious Pizza", desc: "American, Fast Food, Burgers" },
  { id: 5, img: FOOD_1, title: "Pizza Hut Delicious Pizza", desc: "American, Fast Food, Burgers" },
  { id: 6, img: FOOD_2, title: "Premium Delicious Pizza", desc: "American, Fast Food, Burgers" },
];

export default function AvailableFood() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* ── SECTION HEADING (NO CATEGORIES) ── */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-[900] text-brand-charcoal tracking-tighter">
            Available food menus
          </h2>
        </div>

        {/* ── STRICT 3-COLUMN GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {foods.map((food, index) => (
            <motion.div
              key={food.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group cursor-pointer"
            >
              {/* IMAGE CONTAINER (CRISP ROUNDING) */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-5 bg-brand-cream">
                <img
                  src={food.img}
                  alt={food.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* TEXT CONTENT */}
              <h3 className="text-[20px] md:text-[22px] font-[900] text-brand-charcoal mb-1 tracking-tight">
                {food.title}
              </h3>
              <p className="text-[14px] md:text-[15px] font-medium text-brand-charcoal/50">
                {food.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── SECTION CTA ── */}
        <div className="mt-16 text-center">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-brand-orange text-white px-12 py-5 rounded-2xl font-[900] text-base flex items-center gap-3 mx-auto shadow-xl shadow-brand-orange/20 hover:bg-brand-charcoal transition-colors duration-300"
          >
            Place Order
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
