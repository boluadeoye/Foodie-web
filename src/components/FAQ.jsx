import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const LOGOS = ["Slack", "Lego", "Cinema", "Subway", "Oral Unic", "Visão"];

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
    <section className="w-full bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* ── SOCIAL PROOF (FIGMA VERSION) ── */}
        <div className="mb-24">
          <p className="text-center text-[16px] md:text-[20px] text-[#1A1A1A]/60 mb-10">
            210,000+ people already use our app on a daily basis
          </p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale">
            {LOGOS.map((logo) => (
              <span key={logo} className="text-xl md:text-2xl font-bold text-[#1A1A1A]">{logo}</span>
            ))}
          </div>
        </div>

        {/* ── FAQ SECTION ── */}
        <h2 className="text-center text-[28px] md:text-[32px] font-bold text-[#1A1A1A] mb-12">
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
    </section>
  );
}
