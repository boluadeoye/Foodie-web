import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Route, ShieldCheck, Heart, Clock, Smartphone } from 'lucide-react';

const advantages = [
  { icon: Sparkles, title: "Available Partners", desc: "Collaborating with premium kitchens to deliver unmatched quality." },
  { icon: Route, title: "Wide Delivery Range", desc: "Expanding our parameters to reach every corner of your neighborhood." },
  { icon: Heart, title: "Best Quality Food", desc: "Enforcing strict sanitation and chef standards for every single plate." },
  { icon: Clock, title: "Fastest Deliveries", desc: "Riders dispatched immediately upon kitchen confirmation." },
  { icon: ShieldCheck, title: "Trusted & Secure", desc: "End-to-end encrypted financial operations for safe transactions." },
  { icon: Smartphone, title: "Mobile Application", desc: "Real-time order tracking and secure payments inside our custom app." },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#F9F3E3] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[32px] md:text-[48px] font-black text-[#111111] tracking-tight">
            Why choose 4Foodies Restaurant
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {advantages.map((adv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] border border-black/5 flex flex-col items-start hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 bg-[#F9F3E3] rounded-2xl text-[#F8991D] mb-6">
                <adv.icon size={24} />
              </div>
              <h3 className="text-[20px] font-extrabold text-[#111111] mb-3">{adv.title}</h3>
              <p className="text-[14px] font-medium leading-[1.8] text-[#555555]">{adv.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
