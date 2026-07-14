import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FooterCTA() {
  const assetUrl = "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783664386/blog_assets/jmulftgbvr5swkl73izi.png";

  return (
    <section className="relative bg-white pt-32 md:pt-64 pb-20 px-4 md:px-10 overflow-x-clip z-10">
      <div className="max-w-7xl mx-auto">

        {/* THE VESSEL */}
        <div className="relative bg-[#FFF9E9] rounded-[40px] md:rounded-[60px] px-8 py-12 md:px-20 md:py-10 overflow-visible">

          {/* ASYMMETRIC GRID */}
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] items-center gap-0 md:gap-12 overflow-visible">

            {/* LEFT: THE CONTENT PILLAR */}
            <div className="relative z-20 flex flex-col justify-center text-left max-w-full md:max-w-[420px]">

              <div className="space-y-4 mb-8 md:mb-6">
                <h2 className="text-3xl md:text-[38px] lg:text-[42px] font-black text-[#1A1A1A] leading-[1.1] tracking-tight">
                  Your order knocking on the door. <br />
                  Please receive
                </h2>

                <p className="text-[#1A1A1A]/60 text-sm md:text-sm leading-relaxed max-w-[340px]">
                  Stay updated with the latest menus and exclusive offers from your favorite local kitchens.
                </p>
              </div>

              {/* MOBILE IMAGE: pointer-events-none ensures input remains clickable */}
              <div className="block md:hidden w-full relative z-10 pointer-events-none">
                <img
                  src={assetUrl}
                  className="w-[90%] mx-auto h-auto max-h-[260px] object-contain mix-blend-multiply"
                  alt="Delivery"
                />
              </div>

              {/* NEWSLETTER FORM: -mt-12 pulls the form UP into the image on mobile */}
              <div className="relative z-20 -mt-12 md:mt-0">
                <form className="flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full p-2 md:p-1 shadow-xl md:shadow-sm border border-black/5 w-full max-w-full md:max-w-[345px] gap-3 md:gap-0">
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full md:flex-1 bg-transparent px-4 py-4 md:py-2 text-[10px] font-bold text-[#1A1A1A] outline-none placeholder:text-[#1A1A1A]/30 tracking-widest"
                  />
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-[#1A1A1A] text-white px-6 py-4 md:px-6 md:py-3.5 rounded-xl md:rounded-full flex items-center justify-center gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:bg-[#F8991D] transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Subscribe Now
                    <ArrowUpRight size={14} strokeWidth={3} />
                  </button>
                </form>
              </div>
            </div>

            {/* EMPTY GRID COLUMN */}
            <div className="hidden md:block relative h-full min-h-[180px]" />

          </div>

          {/* DESKTOP TITAN ASSET: Untouched to preserve perfection */}
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

        {/* FOOTER LEGAL BAR: Attribution corrected to Stay Media */}
        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-[#1A1A1A]/30 uppercase tracking-[0.2em]">
          <span>Copyright © 2026</span>
          <span>Built by <span className="text-[#1A1A1A] font-black">Stay Media</span></span>
        </div>
      </div>
    </section>
  );
}
