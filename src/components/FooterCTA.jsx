import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FooterCTA() {
  const assetUrl = "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783664386/blog_assets/jmulftgbvr5swkl73izi.png";

  return (
    <section className="relative bg-white pt-48 md:pt-64 pb-20 px-4 md:px-10 overflow-x-clip z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* 
          THE SLIM VESSEL: 
          - py-10 (desktop) reduces the card container height to make it sleek.
          - overflow-visible is mandatory for the head breakout.
        */}
        <div className="relative bg-[#FFF9E9] rounded-[40px] md:rounded-[60px] px-8 py-10 md:px-20 md:py-10 overflow-visible">
          
          {/* ASYMMETRIC GRID: Restricts content zone to prevent layout conflicts */}
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] items-center gap-0 md:gap-12 overflow-visible">
            
            {/* LEFT: THE COMPACT CONTENT PILLAR (Unified Group) */}
            <div className="relative z-20 flex flex-col justify-center text-left max-w-full md:max-w-[420px] space-y-4 md:space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl md:text-[38px] lg:text-[42px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                  Your order knocking on the door. <br />
                  Please receive
                </h2>
                
                <p className="text-[#1A1A1A]/60 text-xs md:text-sm leading-relaxed max-w-[340px]">
                  Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online.
                </p>
              </div>

              {/* MOBILE IMAGE: Touching the CTA Form with negative margin */}
              <div className="block md:hidden w-full my-2 mb-[-24px] relative z-10">
                <img 
                  src={assetUrl} 
                  className="w-[75%] mx-auto h-auto max-h-[220px] object-contain mix-blend-multiply" 
                  alt="Delivery" 
                />
              </div>

              {/* NEWSLETTER FORM: Compact layout */}
              <div className="pt-2">
                <form className="flex items-center bg-white rounded-full p-1 shadow-sm border border-black/5 w-full max-w-[320px] md:max-w-[345px]">
                  <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL" 
                    className="flex-1 bg-transparent px-4 py-2 text-[9px] font-bold text-[#1A1A1A] outline-none placeholder:text-[#1A1A1A]/30 tracking-widest"
                  />
                  <button 
                    type="submit" 
                    className="bg-[#1A1A1A] text-white px-5 py-3 md:px-6 md:py-3.5 rounded-full flex items-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:bg-[#F8991D] transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Subscribe Now 
                    <ArrowUpRight size={14} strokeWidth={3} />
                  </button>
                </form>
              </div>
            </div>

            {/* EMPTY GRID COLUMN: Only used to preserve spacing on desktop */}
            <div className="hidden md:block relative h-full min-h-[180px]" />

          </div>

          {/* 
            DESKTOP TITAN ASSET (DECOUPLED FROM INNER GRID):
            - Positioned directly inside the card wrapper, completely bypassing the grid's padding.
            - bottom-0 guarantees the feet stay perfectly flush with the actual card floor.
            - scale remains locked at h-[145%] to lg:h-[155%] to raise the head elegantly.
          */}
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src={assetUrl} 
            className="hidden md:block absolute bottom-0 right-0 h-[145%] lg:h-[155%] w-auto max-w-none object-contain object-bottom mix-blend-multiply antialiased z-10 pointer-events-none" 
            alt="4Foodies Delivery" 
          />

        </div>

        {/* FOOTER LEGAL BAR */}
        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-[#1A1A1A]/30 uppercase tracking-[0.2em]">
          <span>Copyright © 2026</span>
          <span>Built by <span className="text-[#1A1A1A] font-black">Stay Media</span></span>
        </div>
      </div>
    </section>
  );
}
