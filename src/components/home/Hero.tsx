import { motion, Variants } from 'framer-motion';

/* ─── Asset URL ─────────────────────────────────────────────────────────── */
const SCOOTER_GUY = 'https://res.cloudinary.com/dwbjb3svx/image/upload/v1783343016/blog_assets/qoukhngvynpkitn4c9fq.png';

/* ─── Framer Motion Config (Phelzink DNA) ───────────────────────────────── */
const easeStd = [0.22, 1, 0.36, 1];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const line: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeStd },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F9F3E3] overflow-hidden pt-24 pb-20 md:pt-44 md:pb-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">

        {/* ══════════════════════════════════════════════════════════════
            THE COMPOSITOR GRID
        ══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-x-12 items-center">

          {/* ── LEFT: THE EDITORIAL PILLAR (Cols 1-7) ── */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col z-30">

            {/* HEADING: Phelzink 0.9 Leading Lock */}
            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-col font-black select-none mb-8 md:mb-12"
            >
              <motion.span variants={line} className="text-[42px] md:text-[72px] lg:text-[96px] leading-[0.9] tracking-[-0.04em] text-[#1A1A1A] whitespace-nowrap">
                Your favorite food,
              </motion.span>
              <motion.span variants={line} className="text-[42px] md:text-[72px] lg:text-[96px] leading-[0.9] tracking-[-0.04em] text-[#F8991D] whitespace-nowrap">
                delivered
              </motion.span>
              <motion.span variants={line} className="text-[42px] md:text-[72px] lg:text-[96px] leading-[0.9] tracking-[-0.04em] text-[#1A1A1A] whitespace-nowrap">
                your home
              </motion.span>
            </motion.h1>

            {/* ── MOBILE VISUAL UNIT (Phelzink Bleed Logic) ── */}
            <div className="md:hidden relative w-full h-[380px] mt-4 mb-8 pointer-events-none">
              <div className="absolute bottom-0 right-[-20%] w-[130%] h-full">
                <img 
                  src={SCOOTER_GUY} 
                  alt="" 
                  className="w-full h-full object-contain object-right-bottom drop-shadow-2xl" 
                />
              </div>
            </div>

            {/* ── SUBTEXT & SCARCITY ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="relative z-40"
            >
              <p className="font-medium text-[16px] md:text-[20px] leading-[1.6] text-[#555555] max-w-[480px] mb-12">
                Food, drinks, groceries, and more available for delivery and pickup.
              </p>

              {/* THE FLOATING LEDGER (Phelzink Depth) */}
              <div className="flex flex-col gap-6">
                <div className="bg-white/95 backdrop-blur-xl p-2 pl-6 md:pl-10 rounded-[40px] shadow-[0_32px_64px_-15px_rgba(248,153,29,0.25)] flex items-center gap-4 md:gap-10 border border-white w-full sm:w-fit">
                  
                  {/* COUNTDOWN */}
                  <div className="flex items-center gap-3 md:gap-5 py-3">
                    {["03", "23", "45", "59"].map((val, i) => (
                      <div key={i} className="flex items-center gap-3 md:gap-5">
                        <span className="text-2xl md:text-4xl font-black tabular-nums text-[#1A1A1A]">{val}</span>
                        {i < 3 && <span className="text-xl md:text-3xl font-bold text-[#1A1A1A]/10">:</span>}
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <button className="bg-[#F8991D] text-white px-8 md:px-12 py-5 md:py-7 rounded-[32px] font-black text-sm md:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-xl shadow-[#F8991D]/30 cursor-pointer">
                    Place Order <span className="text-xl md:text-2xl">↗</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-3 px-6 text-[10px] md:text-xs font-black text-[#1A1A1A]/30 uppercase tracking-[0.25em]">
                  <span className="text-lg">🔒</span>
                  Limited Time. Only a Few Spots Available.
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: DESKTOP VISUAL ANCHOR (Cols 8-12) ── */}
          <div className="hidden md:block md:col-span-5 lg:col-span-6 relative min-h-[700px] pointer-events-none">
            
            {/* THE GLOW DEPTH */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-[#F8991D]/10 rounded-full blur-[120px] z-0" />

            {/* THE SCOOTER BLEED (Phelzink Anchor) */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: easeStd }}
              className="absolute bottom-[-10%] right-[-35%] w-[150%] h-[110%] z-10"
            >
              <img 
                src={SCOOTER_GUY} 
                alt="4Foodies Delivery" 
                className="w-full h-full object-contain object-right-bottom drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]" 
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
