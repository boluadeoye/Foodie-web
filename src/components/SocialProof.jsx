import React from 'react';

const LOGOS = ["Slack", "Lego", "Cinema", "Subway", "Qube", "Vercel"];

export default function SocialProof() {
  return (
    <div className="w-full bg-[#F9F3E3] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[11px] md:text-[13px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-10">
          70,000+ PEOPLE ALREADY USE OUR APP ON A DAILY BASIS
        </p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-40 grayscale">
          {LOGOS.map((logo) => (
            <span key={logo} className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
