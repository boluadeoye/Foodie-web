import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Mariana Dickey',
    role: 'In blogger',
    text: "OMG! I cannot believe that I got a brand new landing page after getting this template. We are able to use it with modern and trending designs.",
    rating: 5,
    initials: 'MD',
    color: 'bg-[#F8991D]',
  },
  {
    name: 'James Rodriguez',
    role: 'Restaurant Owner',
    text: "The dashboard is incredibly intuitive. Within a week, our delivery orders tripled. The customer support is world-class.",
    rating: 5,
    initials: 'JR',
    color: 'bg-teal-500',
  },
  {
    name: 'Aisha Patel',
    role: 'Food Blogger',
    text: "I recommend 4Foodies to every restaurateur I know. The onboarding was seamless and results came in within 48 hours.",
    rating: 5,
    initials: 'AP',
    color: 'bg-rose-500',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F9F3E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#F8991D]/15 text-[#F8991D] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Reviews
          </span>
          <h2 className="font-black text-[#1A1A1A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            What people say about us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 border border-[#F8991D]/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#F8991D]/30 mb-4" />
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#F8991D] text-[#F8991D]" />
                ))}
              </div>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-black text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-black text-[#1A1A1A] text-sm">{t.name}</p>
                  <p className="text-[#1A1A1A]/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
