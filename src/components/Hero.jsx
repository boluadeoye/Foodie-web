import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';

const ASSET_URL = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783343016/blog_assets/qoukhngvynpkitn4c9fq.png';

export default function Hero() {
  return (
    <section className="stage-overflow-fix min-h-screen bg-[#F9F3E3] flex flex-col">
      
      {/* ── DESKTOP ASSET (TITAN-CLEARANCE & SWEET SPOT) ── */}
      <div className="hidden md:block absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.img
          src={ASSET_URL}
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute 
                     /* Head Level at 36%, Nudged Right to 32% Translation, Scale 1.35 */
                     top-[36%] right-0 w-[135%] max-w-none translate-x-[32%] origin-right
                     h-auto object-contain object-right-top drop-shadow-[0_80px_80px_rgba(0,0,0,0.18)]"
        />
      </div>

      {/* ── CONTENT PILLAR (CENTERED) ── */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 w-full pt-20 md:pt-0 md:min-h-screen flex flex-col justify-center">
        
        {/* HARD GUTTER: max-w-[520px] ensures zero collision with the asset */}
        <div className="w-full md:max-w-[520px]">
          
          {/* 1. HEADLINE */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[44px] md:text-[88px] leading-[0.85] tracking-[-0.05em] font-[900] text-[#1A1A1A] mb-6"
          >
            Your favorite food,<br />
            delivered<br />
            your home
          </motion.h1>
          
          {/* 2. SUBTEXT */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[17px] md:text-[20px] font-medium text-[#1A1A1A]/50 max-w-[420px] mb-2 md:mb-12 leading-tight"
          >
            Food, drinks, groceries, and more available for delivery and pickup.
          </motion.p>

          {/* 3. MOBILE ASSET STAGE (LOCKED) */}
          <div className="md:hidden relative w-full h-[340px] mb-4 pointer-events-none">
            <motion.img 
              src={ASSET_URL}
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              className="absolute right-[-40%] bottom-[-10%] w-[200%] max-w-none h-full object-contain object-right-bottom drop-shadow-[0_40px_40px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* 4. SCARCITY PILLS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            {/* PILL 1: TIMER */}
            <div className="bg-white px-6 py-4 rounded-2xl shadow-xl border border-white flex items-center justify-between sm:justify-start gap-4">
              {["03", "23", "45", "59"].map((val, i) => (
                <React.Fragment key={i}>
                  <span className="text-2xl md:text-3xl font-[900] tabular-nums text-[#1A1A1A]">{val}</span>
                  {i < 3 && <span className="text-xl font-bold text-[#1A1A1A]/10">:</span>}
                </React.Fragment>
              ))}
            </div>

            {/* PILL 2: CTA (HARD-FIXED PILL SHAPE) */}
            <button className="bg-[#F8991D] text-white px-10 py-5 md:py-6 rounded-2xl font-[900] text-lg flex flex-row items-center justify-center gap-3 shadow-2xl shadow-[#F8991D]/40 active:scale-95 transition-transform whitespace-nowrap min-w-fit">
              Place Order
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>

          {/* 5. SCARCITY FOOTER */}
          <div className="flex items-center gap-2 px-1 text-[11px] font-black text-[#1A1A1A]/30 uppercase tracking-[0.2em]">
            <Lock className="w-3 h-3" />
            Limited Time. Only a Few Spots Available.
          </div>
        </div>
      </div>

    </section>
  );
}
