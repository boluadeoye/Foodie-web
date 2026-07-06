import React from 'react';
import { motion } from 'framer-motion';

const partners = ["Slack", "Lego", "Cinema", "Subway", "Qube", "Vercel"];

export default function SocialProof() {
  return (
    <section className="w-full bg-[#F9F3E3] py-12 border-t border-b border-black/5">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 text-center">
        <p className="text-xs font-black tracking-[0.25em] uppercase text-[#111111]/40 mb-8">
          70,000+ people already use our app on a daily basis
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50">
          {partners.map((partner, i) => (
            <span key={i} className="text-lg md:text-2xl font-black tracking-tight text-[#111111] hover:text-[#F8991D] transition-colors cursor-pointer select-none">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
