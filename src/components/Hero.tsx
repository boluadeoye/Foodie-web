import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[850px] bg-brand-cream overflow-hidden flex items-center">
      
      {/* LAYER 10: THE CINEMATIC TITAN (ABSOLUTE BLEED) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: 150, scale: 1.05 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-[-5vh] right-[-15vw] w-full h-full flex items-end justify-end"
        >
          <img 
            src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1783343016/blog_assets/qoukhngvynpkitn4c9fq.png" 
            alt="4Foodies Titan"
            className="h-[70vh] lg:h-[110vh] w-auto max-w-none object-contain object-right-bottom"
          />
        </motion.div>
      </div>

      {/* LAYER 20: EDITORIAL CONTENT (RELATIVE STACK) */}
      <div className="relative z-20 container-figma w-full">
        <div className="max-w-full lg:max-w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-hero-impact text-brand-dark mb-8 lg:whitespace-nowrap">
              Your favorite food,<br className="hidden lg:block" />
              delivered your home
            </h1>
            
            <p className="text-brand-slate text-lg lg:text-2xl font-medium max-w-[520px] mb-14 leading-relaxed">
              Food, drinks, groceries, and more available for delivery and pickup.
            </p>

            {/* THE SLEEK STRETCH PILL */}
            <div className="flex flex-col gap-8">
              <div className="bg-white p-2 pl-8 lg:pl-14 rounded-full shadow-[0_30px_80px_rgba(0,0,0,0.08)] flex items-center gap-8 lg:gap-16 border border-white w-full sm:w-fit">
                
                {/* COUNTDOWN */}
                <div className="flex items-center gap-4 lg:gap-6 py-4">
                  {["03", "23", "45", "59"].map((val, i) => (
                    <React.Fragment key={i}>
                      <span className="text-2xl lg:text-4xl font-black tabular-nums text-brand-dark">{val}</span>
                      {i < 3 && <span className="text-xl lg:text-3xl font-bold text-brand-dark/10">:</span>}
                    </React.Fragment>
                  ))}
                </div>
                
                {/* SLEEK STRETCH BUTTON */}
                <button className="flex-shrink-0 bg-brand-orange text-white px-10 lg:px-16 py-6 lg:py-8 rounded-full font-black text-base lg:text-xl shadow-2xl shadow-brand-orange/40 hover:bg-brand-dark transition-all flex items-center gap-3 whitespace-nowrap">
                  Place Order <ArrowUpRight size={28} strokeWidth={3} />
                </button>
              </div>
              
              <div className="flex items-center gap-3 px-8 text-[11px] lg:text-sm font-black text-brand-dark/30 uppercase tracking-[0.3em]">
                <Lock size={16} strokeWidth={3} />
                Limited Time. Only a Few Spots Available.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* AMBIENT DEPTH LAYER */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[200px] z-0" />
    </section>
  );
}
