import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const logos = [
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659842/blog_assets/eyxm3onzqah28qji1zrc.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659848/blog_assets/mx5wuug39qgr9g7ppt3z.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659854/blog_assets/mazsiht150h6xuwtarcy.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659860/blog_assets/y3tzecfu3fgl2wh6wgwt.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659867/blog_assets/ko7tvbbdjlevyg9ikzxc.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659872/blog_assets/lqf4922wrpvdyap7mhc9.jpg"
];

const faqs = [
  {
    question: "Is this for me if I just started my business?",
    answer: "Before Stay Media, I was posting daily with zero results. Now, I've tripled my engagement and finally started getting inquiries."
  },
  { question: "Do I need to run ads separately?", answer: "Our platform handles the core distribution, but we can integrate with your existing ad accounts." },
  { question: "Will I need to provide anything?", answer: "Just your basic brand assets and menu items. We handle the heavy lifting." },
  { question: "Is this offer time-limited?", answer: "We review our pricing quarterly to ensure we provide the best value to our partners." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ── INTEGRATED SOCIAL PROOF MARQUEE ── */}
        <div className="mb-32">
          <p className="text-center text-[#1A1A1A]/40 text-sm md:text-base font-medium tracking-tight mb-12">
            210,000+ people already use our app on a daily basis
          </p>

          <div className="relative w-full">
            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden select-none">
              <div className="flex flex-nowrap gap-12 md:gap-24 animate-marquee-scroll items-center py-4">
                {[...logos, ...logos, ...logos].map((logo, i) => (
                  <div key={i} className="h-8 md:h-10 w-auto shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <img src={logo} alt="" className="h-full w-auto object-contain mix-blend-multiply" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQ ACCORDION ── */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-[28px] md:text-[32px] font-black text-[#1A1A1A] mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 ${
                  openIndex === index ? 'bg-[#FFF9E5]' : 'bg-white border border-gray-100'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-[16px] md:text-[18px] font-bold text-[#1A1A1A]">
                    {faq.question}
                  </span>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[14px] md:text-[15px] text-[#1A1A1A]/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-scroll {
          display: flex;
          animation: marquee-scroll 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
