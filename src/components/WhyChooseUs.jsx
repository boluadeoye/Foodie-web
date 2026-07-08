import React from 'react';
import { motion } from 'framer-motion';

const DECOR_ASSET = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783496840/blog_assets/pjw7gr6td3e9cgv5pldt.jpg';

const ICON_1 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783493730/blog_assets/cg2ifthc0gyjegusg2pr.jpg';
const ICON_2 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783493738/blog_assets/mjfp78tnql4letlbzaz1.jpg';
const ICON_3 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783493746/blog_assets/uf91ynapbwv4iyolm8me.jpg';
const ICON_4 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783493774/blog_assets/grjylc6vhr2ufibrlvm9.jpg';
const ICON_5 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783493785/blog_assets/pgntnxagoegfdlogtdr4.jpg';
const ICON_6 = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783493811/blog_assets/zicox5sxgjuhtnxeersk.jpg';

const features = [
  { id: 1, icon: ICON_1, title: "Analytics Business", desc: "We're driven beyond just finishing the projects. We want to find smart solutions." },
  { id: 2, icon: ICON_2, title: "Wide Coverage Map", desc: "We're driven beyond just finishing the projects. We want to find smart solutions." },
  { id: 3, icon: ICON_3, title: "Artificial Intelligence", desc: "We're driven beyond just finishing the projects. We want to find smart solutions." },
  { id: 4, icon: ICON_4, title: "Largest People", desc: "We're driven beyond just finishing the projects. We want to find smart solutions." },
  { id: 5, icon: ICON_5, title: "Trusted & Secure", desc: "We're driven beyond just finishing the projects. We want to find smart solutions." },
  { id: 6, icon: ICON_6, title: "Mobile Apps", desc: "We're driven beyond just finishing the projects. We want to find smart solutions." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#F9F3E3] py-24 overflow-hidden">
      
      {/* ── LAYER 0: MINIMAL DECOR ── */}
      <div className="absolute bottom-0 left-0 w-[120px] md:w-[180px] z-0 pointer-events-none opacity-40">
        <img src={DECOR_ASSET} alt="" className="w-full h-auto mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A1A1A] tracking-tight">
            Why choose 4Foodies Restaurant
          </h2>
        </div>

        {/* FEATURE GRID (RAW ICONS, NO BOXES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <img 
                src={item.icon} 
                alt="" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain mb-6" 
              />
              <h3 className="text-[18px] font-bold text-[#1A1A1A] mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#1A1A1A]/50 max-w-[240px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
