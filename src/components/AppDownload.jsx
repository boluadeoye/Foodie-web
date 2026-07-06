import React from 'react';
import { motion } from 'framer-motion';

const PHONE_MOCK = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783343016/blog_assets/qoukhngvynpkitn4c9fq.png';

export default function AppDownload() {
  return (
    <section className="w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        {/* Use flex-col-reverse on mobile so text stays on top, image on bottom */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 md:gap-x-16 items-center">

          {/* LEFT: THE VISUAL UNIT (Cols 1-6) */}
          <div className="md:col-span-6 relative mt-12 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square md:aspect-auto md:h-[600px] bg-[#F9F3E3] rounded-[48px] border border-black/5 overflow-hidden flex items-end justify-center"
            >
              {/* Increased scale to 150% and removed absolute centering */}
              <img 
                src={PHONE_MOCK} 
                alt="App Mockup" 
                className="h-[110%] w-auto object-contain object-bottom translate-y-10 drop-shadow-2xl" 
              />
            </motion.div>
          </div>

          {/* RIGHT: THE EDITORIAL CONTENT (Cols 7-12) */}
          <div className="md:col-span-6 flex flex-col z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[38px] md:text-[56px] leading-[0.95] font-black text-[#111111] tracking-[-0.04em] mb-8">
                Connecting our use with iOS & Android apps
              </h2>
              <p className="text-[16px] md:text-[18px] font-medium leading-[1.8] text-[#555555] mb-10 max-w-[480px]">
                Download the 4Foodies application today and access real-time order tracking, localized menus, and integrated checkout systems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#111111] text-white px-10 py-5 rounded-2xl font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-black/10">
                  App Store ↗
                </button>
                <button className="bg-[#F8991D] text-white px-10 py-5 rounded-2xl font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-[#F8991D]/20">
                  Google Play ↗
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
