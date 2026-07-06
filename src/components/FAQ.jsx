import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "Is this for me? I just started my business?", a: "Absolutely. 4Foodies is designed for scale. Whether you are a local kitchen or a multi-location franchise, our delivery network integrates seamlessly." },
  { q: "Do I need a credit card to sign up?", a: "No credit card is required to sign up. You can browse our platform and configure your menu for free." },
  { q: "When will my business be verified?", a: "Our support staff verifies kitchens within 24-48 business hours after documentation is uploaded." },
  { q: "Is there a contract or commitment?", a: "No contracts. You can pause or cancel your partnership at any time without fees." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[800px] px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-black text-[#111111] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#EEEEEE] pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left font-sans font-extrabold text-[18px] md:text-[20px] text-[#111111] hover:text-[#F8991D] transition-colors"
              >
                <span>{faq.q}</span>
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans font-medium text-[15px] leading-[1.8] text-[#555555] pt-2 pb-4">
                      {faq.a}
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
