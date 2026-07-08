import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const MOCKUP_ASSET = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783511070/blog_assets/hobynqaueryv5frnwky8.png';

export default function AppDownload() {
  return (
    <section className="w-full bg-white py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col min-[740px]:flex-row items-center gap-12 md:gap-24">
        
        {/* LEFT: MOCKUP */}
        <div className="w-full min-[740px]:w-1/2 flex justify-center">
          <img 
            src={MOCKUP_ASSET} 
            alt="App Mockup" 
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="w-full min-[740px]:w-1/2 flex flex-col items-start">
          {/* REDUCED WEIGHT & 3-LINE CONSTRAINT */}
          <h2 className="text-[28px] md:text-[40px] font-medium text-[#1A1A1A] leading-[1.2] tracking-tight mb-8 max-w-[540px]">
            Connecting our user with iOS & Android apps. Download from iTune & Play store
          </h2>
          
          <p className="text-[#1A1A1A]/50 text-[15px] md:text-[17px] leading-relaxed mb-10 max-w-[480px]">
            Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. We're driven beyond just finishing the projects. We want to find solutions using our website & apps.
          </p>

          {/* BLACK BUTTON */}
          <button className="bg-[#1A1A1A] text-white px-9 py-4 rounded-2xl font-bold text-[16px] flex items-center gap-3 transition-transform active:scale-95">
            Place Order
            <ArrowUpRight size={20} strokeWidth={2} />
          </button>
        </div>

      </div>
    </section>
  );
}
