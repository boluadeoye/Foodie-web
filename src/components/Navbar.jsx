import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'Menu', 'Reviews', 'FAQs', 'About'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F3E3]/95 backdrop-blur-sm border-b border-[#F8991D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Purged of 4F Hallucination */}
          <div className="flex items-center">
            <span className="font-black text-2xl text-[#1A1A1A] tracking-tighter">4FOODIES</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a key={link} href="#" className="text-sm font-bold text-[#1A1A1A]/70 hover:text-[#F8991D] transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA - Sleek Mild Rounding */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#F8991D] text-white px-7 py-3 rounded-2xl font-bold text-sm hover:bg-[#e8881a] transition-all shadow-lg shadow-[#F8991D]/20">
              <ShoppingCart className="w-4 h-4" />
              Order Now
            </button>
          </div>

          <button className="md:hidden p-2 text-[#1A1A1A]" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#F9F3E3] border-t border-[#F8991D]/20 px-6 py-8 space-y-6">
          {links.map((link) => (
            <a key={link} href="#" className="block text-2xl font-black text-[#1A1A1A]" onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <button className="w-full bg-[#F8991D] text-white py-4 rounded-2xl font-bold text-lg">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
