import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ['Home', 'Menu', 'Reviews', 'FAQs', 'About'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F3E3]/95 backdrop-blur-sm border-b border-[#F8991D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F8991D] rounded-full flex items-center justify-center">
              <span className="text-white font-black text-xs">4F</span>
            </div>
            <span className="font-black text-xl text-[#1A1A1A] tracking-tight">4FOODIES</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-semibold text-[#1A1A1A] hover:text-[#F8991D] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#F8991D] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#e8881a] transition-colors duration-200 shadow-md shadow-[#F8991D]/30">
              <ShoppingCart className="w-4 h-4" />
              Order Now
            </button>
          </div>

          {/* Mobile hamburger only */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#F8991D]/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6 text-[#1A1A1A]" /> : <Menu className="w-6 h-6 text-[#1A1A1A]" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — only shown when open, hamburger already hidden on md+ */}
      {open && (
        <div className="md:hidden bg-[#F9F3E3] border-t border-[#F8991D]/20 px-4 pb-4">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-3 text-sm font-semibold text-[#1A1A1A] hover:text-[#F8991D] border-b border-[#F8991D]/10 last:border-0 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="mt-3 w-full bg-[#F8991D] text-white py-3 rounded-full font-bold text-sm hover:bg-[#e8881a] transition-colors">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
