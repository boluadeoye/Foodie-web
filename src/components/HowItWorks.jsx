import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Store, Smartphone } from 'lucide-react';

const steps = [
  { id: 1, icon: Bike, title: "Become a delivery man", desc: "Join our fleet of friendly riders, choose your own hours, and start earning today." },
  { id: 2, icon: Store, title: "Become a partner", desc: "Grow your business by listing your menu on our high-traffic platform." },
  { id: 3, icon: Smartphone, title: "Try Android/iOS App", desc: "Order your favorite meals on the go with our top-rated mobile applications." },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#F9F3E3] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-black text-[#111111] tracking-tight">
            Let's see how it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[32px] border border-black/5 hover:shadow-[0_32px_64px_-15px_rgba(0,0,0,0.05)] transition-all flex flex-col items-start group"
            >
              <div className="p-5 bg-[#F9F3E3] rounded-2xl text-[#F8991D] mb-8 group-hover:bg-[#F8991D] group-hover:text-white transition-all duration-300">
                <step.icon size={32} />
              </div>
              <h3 className="text-[22px] font-extrabold text-[#111111] mb-4">
                {step.title}
              </h3>
              <p className="text-[15px] font-medium leading-[1.8] text-[#555555]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
