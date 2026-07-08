import React from 'react';
import { motion } from 'framer-motion';

const ROCKET_GUY = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783491956/blog_assets/xszqelgsaxmfmn5xgzaf.png';

const features = [
  {
    id: "01",
    title: "Easy to use application",
    desc: "We're driven beyond just finishing the projects. We want to find solutions using our website & apps."
  },
  {
    id: "02",
    title: "Deliver Food within 30 min",
    desc: "We're driven beyond just finishing the projects. We want to find solutions using our website & apps."
  },
  {
    id: "03",
    title: "100% Reliable with Privacy",
    desc: "We're driven beyond just finishing the projects. We want to find solutions using our website & apps."
  }
];

export default function SupermanDelivery() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* ── GRID SYSTEM: ENFORCED 740PX BREAKPOINT ── */}
        <div className="grid grid-cols-1 min-[740px]:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ── LEFT COLUMN: CLEAN ASSET (NO BACKGROUND) ── */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <img 
              src={ROCKET_GUY} 
              alt="Delivery Rocket" 
              className="w-full max-w-[500px] h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* ── RIGHT COLUMN: LIGHT TYPOGRAPHY ── */}
          <div className="flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[24px] min-[740px]:text-[28px] font-semibold leading-tight text-brand-charcoal mb-6 max-w-[460px]"
            >
              We deliver our products as fast as superman can do
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[15px] text-gray-400 mb-12 max-w-[480px] leading-relaxed"
            >
              Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.
            </motion.p>

            {/* FEATURE LIST */}
            <div className="space-y-10">
              {features.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex gap-6 items-start"
                >
                  {/* GHOST NUMBER */}
                  <span className="text-[48px] md:text-[56px] font-bold text-gray-100 leading-none select-none">
                    {item.id}
                  </span>
                  
                  {/* TEXT BLOCK */}
                  <div className="pt-1">
                    <h4 className="text-[17px] md:text-[18px] font-bold text-brand-charcoal mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[14px] text-gray-400 leading-relaxed max-w-[360px]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
