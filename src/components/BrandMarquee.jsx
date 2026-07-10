import React from "react";

const logos = [
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659842/blog_assets/eyxm3onzqah28qji1zrc.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659848/blog_assets/mx5wuug39qgr9g7ppt3z.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659854/blog_assets/mazsiht150h6xuwtarcy.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659860/blog_assets/y3tzecfu3fgl2wh6wgwt.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659867/blog_assets/ko7tvbbdjlevyg9ikzxc.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1783659872/blog_assets/lqf4922wrpvdyap7mhc9.jpg"
];

export default function BrandMarquee() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* SOCIAL PROOF TEXT */}
        <p className="text-center text-[#1A1A1A]/40 text-sm md:text-base font-medium tracking-tight mb-16">
          210,000+ people already use our app on a daily basis
        </p>

        {/* MARQUEE ENGINE */}
        <div className="relative w-full">
          {/* Edge Fades: Creates the high-fashion "Vanish" effect */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden select-none">
            <div className="flex flex-nowrap gap-12 md:gap-24 animate-marquee items-center py-4">
              {/* Double-buffered array for seamless infinite loop */}
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <div 
                  key={i} 
                  className="h-8 md:h-12 w-auto shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
                >
                  <img
                    src={logo}
                    alt="Partner Brand"
                    className="h-full w-auto object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee-scroll 40s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
