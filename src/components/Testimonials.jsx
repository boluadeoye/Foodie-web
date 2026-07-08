import React from 'react';
import { motion } from 'framer-motion';

const THREED_ASSET = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783510464/blog_assets/wxzqtdbkg8liruqqcvpl.jpg';

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ── GRID SYSTEM: HARD SNAP AT 740PX ── */}
        <div className="grid grid-cols-1 min-[740px]:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: CONTENT BLOCK */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] mb-10 tracking-tight leading-tight">
              What people say about us
            </h2>

            <div className="relative">
              {/* DECORATIVE QUOTE */}
              <span className="absolute left-[-40px] top-[-15px] text-[70px] text-[#E5E5E5] font-serif leading-none select-none opacity-60">
                “
              </span>
              
              <p className="text-[18px] md:text-[24px] font-serif italic leading-[1.6] text-[#1A1A1A] mb-10">
                OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce template with modern and trending design.
              </p>

              {/* AUTHOR BLOCK */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-[#F9F3E3] border border-gray-100">
                  <img 
                    src="https://i.pravatar.cc/150?u=mariana" 
                    alt="Mariana Dickey" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] font-bold text-[#1A1A1A]">Mariana Dickey</span>
                  <span className="text-[14px] text-[#1A1A1A]/40">UI Designer</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: 3D ASSET BLOCK */}
          <div className="flex justify-center min-[740px]:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-[550px] min-[740px]:max-w-none"
            >
              <img 
                src={THREED_ASSET} 
                alt="3D Characters" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
