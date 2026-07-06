import React from 'react';
import { motion } from 'framer-motion';

const ROCKET_GUY = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783343016/blog_assets/qoukhngvynpkitn4c9fq.png';

const points = [
  { num: "01", title: "Easy to use application", desc: "Our intuitive user interface makes ordering food a seamless experience." },
  { num: "02", title: "Deliver food with a smile", desc: "Our dedicated riders prioritize friendly, prompt, and secure deliveries." },
  { num: "03", title: "100% reliable with privacy", desc: "We protect your data and secure every transaction with end-to-end privacy." },
];

export default function SupermanDelivery() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-x-12 items-center">

          {/* LEFT: THE 3D VISUAL */}
          <div className="relative md:col-span-6 min-h-[400px] md:min-h-[550px] w-full pointer-events-none mb-12 md:mb-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute left-[-20%] w-[130%] h-full"
            >
              <img 
                src={ROCKET_GUY} 
                alt="Superman Delivery" 
                className="w-full h-full object-contain rotate-[-12deg] drop-shadow-2xl" 
              />
            </motion.div>
          </div>

          {/* RIGHT: THE CONTENT */}
          <div className="md:col-span-6 flex flex-col z-20">
            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] leading-[0.95] font-black text-[#111111] tracking-tight mb-8">
              We deliver our products as fast as super-man can do
            </h2>
            <p className="text-base md:text-lg font-medium leading-[1.8] text-[#555555] mb-12 max-w-[480px]">
              Our distribution network is mathematically optimized to ensure your order arrives at peak temperature.
            </p>

            <div className="flex flex-col gap-8">
              {points.map((pt, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-[24px] font-black text-[#F8991D] leading-none">{pt.num}</span>
                  <div>
                    <h3 className="text-[18px] font-extrabold text-[#111111] mb-2">{pt.title}</h3>
                    <p className="text-[14px] font-medium leading-[1.6] text-[#555555] max-w-[400px]">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
