import React from 'react';
import { motion } from 'framer-motion';

const SCOOTER_GUY = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783343016/blog_assets/qoukhngvynpkitn4c9fq.png';

const easeStd = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const line = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeStd },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F9F3E3] overflow-hidden pt-24 pb-20 md:pt-40 md:pb-32 min-h-screen flex items-center">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 w-full">
        
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12 items-center">

          {/* ── LEFT: THE EDITORIAL PILLAR (Cols 1-6) ── */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col z-20">
            
            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-col font-sans font-black select-none mb-10"
            >
              <motion.span variants={line} className="text-[38px] md:text-[64px] lg:text-[88px] leading-[0.9] tracking-[-0.04em] text-[#111111] whitespace-nowrap">
                Your favorite food,
              </motion.span>
              <motion.span variants={line} className="text-[38px] md:text-[64px] lg:text-[88px] leading-[0.9] tracking-[-0.04em] text-[#111111] whitespace-nowrap">
                delivered
              </motion.span>
              <motion.span variants={line} className="text-[38px] md:text-[64px] lg:text-[88px] leading-[0.9] tracking-[-0.04em] text-[#111111] whitespace-nowrap">
                your home
              </motion.span>
            </motion.h1>

            {/* ── MOBILE VISUAL UNIT (High Nudge + Massive Scale) ── */}
            <div className="md:hidden relative w-full h-[400px] mt-4 mb-8 pointer-events-none">
              <div className="absolute bottom-[30%] right-[-20%] w-[140%] h-[120%]">
                <img src={SCOOTER_GUY} alt="" className="w-full h-full object-contain object-right-bottom drop-shadow-2xl" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-30"
            >
              <p className="font-sans font-medium text-[15px] lg:text-[18px] leading-[1.8] text-[#3A3A3A] max-w-[440px] mb-10">
                Food, drinks, groceries, and more available for delivery and pickup.
              </p>

              {/* SCARCITY LEDGER */}
              <div className="flex flex-col gap-6">
                <div className="bg-white p-2 pl-6 md:pl-10 rounded-[40px] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] flex items-center gap-4 md:gap-10 border border-white w-full sm:w-fit">
                  <div className="flex items-center gap-3 md:gap-5 py-3">
                    {["03", "23", "45", "59"].map((val, i) => (
                      <div key={i} className="flex items-center gap-3 md:gap-5">
                        <span className="text-2xl md:text-4xl font-black tabular-nums text-[#111111]">{val}</span>
                        {i < 3 && <span className="text-xl md:text-3xl font-bold text-[#111111]/10">:</span>}
                      </div>
                    ))}
                  </div>
                  <button className="bg-[#F8991D] text-white px-8 md:px-12 py-5 md:py-7 rounded-[32px] font-black text-sm md:text-lg shadow-xl shadow-[#F8991D]/20">
                    Place Order ↗
                  </button>
                </div>
                <div className="flex items-center gap-3 px-6 text-[10px] md:text-xs font-bold text-[#111111]/30 uppercase tracking-[0.2em]">
                  <span>🔒</span> Limited Time. Only a Few Spots Available.
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: DESKTOP VISUAL ANCHOR (EXTREME NUDGE: bottom-[40%] + EXTREME SIZE: h-[170%]) ── */}
          <div className="hidden md:block md:col-span-6 lg:col-span-7 relative min-h-[650px] pointer-events-none z-10">
            
            {/* THE GLOW */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square bg-[#F8991D]/5 rounded-full blur-[120px] z-0" />

            {/* CHARACTER BOUNDARY EXTENSION - CINEMATIC OVERLAY */}
            <motion.div
              initial={{ opacity: 0, x: 60, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease: easeStd }}
              className="absolute right-[-35%] bottom-[40%] w-[170%] h-[170%] z-10"
            >
              <img 
                src={SCOOTER_GUY} 
                alt="4Foodies Delivery" 
                className="w-full h-full object-contain object-right-bottom drop-shadow-[0_50px_50px_rgba(0,0,0,0.2)]" 
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
