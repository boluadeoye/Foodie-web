import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FooterCTA() {
  // JPG ASSET: mix-blend-multiply is mandatory to vanish the white background into the cream card
  const assetUrl = "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783524693/blog_assets/s9oadio4npnbskkyd8jk.jpg";

  return (
    <section className="relative bg-white pt-48 pb-20 px-6 md:px-10 overflow-x-clip z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* THE SLIM VESSEL: relative + overflow-visible is the master lock */}
        <div className="relative bg-[#F9F3E3] rounded-[40px] md:rounded-[60px] overflow-visible">
          
          {/* HARD-BOUNDARY GRID: 50/50 Split ensures zero collision between text and image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch overflow-visible">
            
            {/* LEFT COLUMN: TEXT & FORM (Locked to 50% width) */}
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center relative z-20">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
                Your order knocking on the door. <br className="hidden md:block" />
                Please receive
              </h2>
              
              <p className="text-[#1A1A1A]/60 text-sm md:text-base leading-relaxed mb-8 max-w-[40ch]">
                Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online.
              </p>

              {/* MOBILE IMAGE: Physically re-ordered between subtext and form for the "Editorial Flow" */}
              <div className="block md:hidden w-full mb-10">
                <img 
                  src={assetUrl} 
                  className="w-full h-auto max-h-[300px] object-contain mix-blend-multiply contrast-110" 
                  alt="Delivery" 
                />
              </div>

              {/* NEWSLETTER FORM: Fixed button collapse with flex-shrink-0 */}
              <form className="flex items-center bg-white rounded-full p-1.5 shadow-sm border border-black/5 w-full max-w-md">
                <input 
                  type="email" 
                  placeholder="ENTER YOUR EMAIL" 
                  className="flex-1 bg-transparent px-5 py-2 text-[10px] font-bold text-[#1A1A1A] outline-none placeholder:text-[#1A1A1A]/30 tracking-[0.2em] min-w-0"
                />
                <button 
                  type="submit" 
                  className="bg-[#1A1A1A] text-white px-6 py-4 md:px-8 rounded-full flex items-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:bg-[#F8991D] transition-all duration-300 group whitespace-nowrap flex-shrink-0 cursor-pointer"
                >
                  Subscribe Now 
                  <ArrowUpRight size={16} strokeWidth={3} />
                </button>
              </form>
            </div>

            {/* RIGHT COLUMN: THE IMAGE ANCHOR (No padding-bottom to keep image flush) */}
            <div className="hidden md:block relative overflow-visible">
               <motion.img 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src={assetUrl} 
                className="absolute bottom-0 right-0 h-[140%] lg:h-[145%] w-auto max-w-none object-contain object-right-bottom mix-blend-multiply contrast-110 antialiased z-10 pointer-events-none" 
                alt="4Foodies Delivery" 
              />
            </div>

          </div>
        </div>

        {/* FOOTER LEGAL BAR */}
        <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-[#1A1A1A]/30 uppercase tracking-[0.2em]">
          <span>Copyright © 2026</span>
          <span>Built by <span className="text-[#1A1A1A] font-black">Stay Media</span></span>
        </div>
      </div>
    </section>
  );
}
