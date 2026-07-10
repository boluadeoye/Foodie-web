import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';

const ASSET_URL = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783658079/blog_assets/do0xtir2zzgls4ytq9yf.png';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: "03", hours: "22", minutes: "54", seconds: "58" });

  useEffect(() => {
    const targetKey = "4foodies_promo_target";
    let targetTime = localStorage.getItem(targetKey);
    if (!targetTime) {
      const offset = (3 * 24 * 60 * 60 * 1000) + (23 * 60 * 60 * 1000) + (45 * 60 * 1000) + (59 * 1000);
      const newTarget = Date.now() + offset;
      localStorage.setItem(targetKey, String(newTarget));
      targetTime = String(newTarget);
    }
    const timer = setInterval(() => {
      const difference = Number(targetTime) - Date.now();
      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
          hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="stage-overflow-fix min-h-screen md:h-screen w-full bg-[#FFF9E9] pt-24 md:pt-0 pb-20 md:pb-0 overflow-visible">
      
      {/* ── DESKTOP ASSET: Anchored to Section Floor ── */}
      <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          src={ASSET_URL}
          className="absolute bottom-0 right-0 h-[90%] w-auto max-w-none object-contain object-bottom antialiased"
          alt="Delivery Hero"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 w-full h-full flex flex-col md:flex-row md:items-center">
        
        {/* ── THE COMPACT CONTENT PILLAR ── */}
        <div className="flex flex-col justify-center w-full md:max-w-[340px] lg:max-w-[380px] space-y-6 md:space-y-8">
          
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-0.04em] font-[900] text-[#1A1A1A]"
            >
              Your favorite food,<br /> delivered your home
            </motion.h1>

            <motion.p
              className="text-[15px] md:text-[16px] font-medium text-[#1A1A1A]/50 leading-relaxed max-w-[320px]"
            >
              Food, drinks, groceries, and more available for delivery and pickup.
            </motion.p>
          </div>

          {/* MOBILE IMAGE: Sequential flow with relative positioning */}
          <div className="md:hidden w-full py-4">
            <img src={ASSET_URL} className="w-full h-auto antialiased" alt="Delivery" />
          </div>

          {/* ACTION UNIT: Added mb-4 to ensure scarcity text has room */}
          <div className="space-y-6 pb-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="bg-white px-5 py-3 rounded-2xl shadow-lg border border-white flex items-center justify-between gap-3">
                {[timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((val, i) => (
                  <React.Fragment key={i}>
                    <span className="text-xl md:text-2xl font-[900] tabular-nums text-[#1A1A1A]">{val}</span>
                    {i < 3 && <span className="text-lg font-bold text-[#1A1A1A]/10">:</span>}
                  </React.Fragment>
                ))}
              </div>

              <button className="bg-[#F8991D] text-white px-6 py-4 rounded-2xl font-[900] text-base flex items-center justify-center gap-2 shadow-xl shadow-[#F8991D]/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap flex-shrink-0">
                Place Order <ArrowUpRight size={18} strokeWidth={3} />
              </button>
            </div>

            {/* SCARCITY: Now part of the natural flow, no longer buried */}
            <div className="flex items-center gap-2 text-[10px] font-black text-[#1A1A1A]/30 uppercase tracking-[0.15em]">
              <Lock className="w-3 h-3" /> Limited Time. Only a Few Spots Available.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
