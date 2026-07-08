import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const STEP_1 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783490901/blog_assets/eo5akocikcgibgzbpmlb.png';
const STEP_2 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783490862/blog_assets/ml8xg8htfawxjokniegj.png';
const STEP_3 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783490861/blog_assets/ehn6psthwzlab1ciu3yc.png';

const options = [
  "Dessert", "Sushi", "Pasta", "Seafoods", "Shawarma", 
  "Swallows", "Barbecue", "Gis-dodo", "Grills", "Breakfast",
  "Lunch", "Dinner", "French", "Italian", "Chinese"
];

const steps = [
  {
    id: 1,
    img: STEP_1,
    title: "Become a Delivery Man",
    desc: "As a delivery driver, you'll make reliable money—working anytime, anywhere.",
    link: "Start Earning"
  },
  {
    id: 2,
    img: STEP_2,
    title: "Become a Partner",
    desc: "Grow your business and reach new customers by partnering with us.",
    link: "Sign up your store"
  },
  {
    id: 3,
    img: STEP_3,
    title: "Try Android/iOS App",
    desc: "Get the best 4Foodies experience with live order tracking.",
    link: "Get the app"
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* ── SECTION 1: OTHER FOOD OPTIONS ── */}
        <div className="text-center mb-24">
          <h2 className="text-[28px] md:text-[36px] font-[900] text-brand-charcoal mb-10 tracking-tight">
            Other food options
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {options.map((opt, i) => (
              <span 
                key={i}
                className="px-6 py-2.5 bg-gray-100/60 text-brand-charcoal/70 rounded-full text-sm font-bold border border-transparent hover:border-brand-orange/30 hover:bg-white transition-all cursor-default"
              >
                {opt}
              </span>
            ))}
          </div>
        </div>

        {/* ── SECTION 2: HOW IT WORKS ── */}
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[42px] font-[900] text-brand-charcoal tracking-tight">
            Let's see how it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group h-full"
            >
              {/* IMAGE CONTAINER (FIXED HEIGHT FOR ALIGNMENT) */}
              <div className="relative mb-8 w-full h-[180px] md:h-[200px] flex items-center justify-center">
                <img 
                  src={step.img} 
                  alt={step.title}
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT CONTENT WRAPPER */}
              <div className="flex flex-col items-center flex-1">
                <h3 className="text-[22px] md:text-[24px] font-[900] text-brand-charcoal mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[15px] md:text-[16px] leading-relaxed text-brand-charcoal/60 mb-8 max-w-[300px]">
                  {step.desc}
                </p>

                {/* CONVERSION LINK (HARD-ALIGNED TO BOTTOM) */}
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-1 text-brand-orange font-black text-sm md:text-base hover:gap-2 transition-all"
                  >
                    {step.link}
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
