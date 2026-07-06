import { Star, Plus } from 'lucide-react';

const FOOD_ITEMS = [
  {
    id: 1,
    name: 'Spicy Margherita Pizza',
    tags: 'American · Fast Food · Burgers',
    rating: 4.8,
    price: '$12.99',
    gradient: 'from-orange-400 to-red-500',
    emoji: '🍕',
  },
  {
    id: 2,
    name: 'Classic BBQ Burger',
    tags: 'American · Fast Food · Burgers',
    rating: 4.7,
    price: '$9.99',
    gradient: 'from-amber-500 to-orange-600',
    emoji: '🍔',
  },
  {
    id: 3,
    name: 'Crispy Fried Chicken',
    tags: 'American · Fast Food · Burgers',
    rating: 4.9,
    price: '$11.49',
    gradient: 'from-yellow-400 to-amber-500',
    emoji: '🍗',
  },
  {
    id: 4,
    name: 'Loaded French Fries',
    tags: 'American · Fast Food · Burgers',
    rating: 4.6,
    price: '$5.99',
    gradient: 'from-yellow-300 to-yellow-500',
    emoji: '🍟',
  },
  {
    id: 5,
    name: 'Sushi Platter Deluxe',
    tags: 'American · Fast Food · Burgers',
    rating: 4.9,
    price: '$22.99',
    gradient: 'from-teal-400 to-cyan-500',
    emoji: '🍱',
  },
  {
    id: 6,
    name: 'Garden Fresh Salad',
    tags: 'American · Fast Food · Burgers',
    rating: 4.5,
    price: '$8.49',
    gradient: 'from-green-400 to-emerald-500',
    emoji: '🥗',
  },
];

function FoodCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#F8991D]/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      {/* Visual placeholder — gradient food card */}
      <div className={`relative h-44 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}>
        <span className="text-7xl select-none drop-shadow-lg">{item.emoji}</span>
        {/* Top badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 fill-[#F8991D] text-[#F8991D]" />
          <span className="text-xs font-bold text-[#1A1A1A]">{item.rating}</span>
        </div>
        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-[#F8991D] rounded-full px-2.5 py-1">
          <span className="text-xs font-black text-white">{item.price}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-black text-[#1A1A1A] text-base leading-tight mb-1 group-hover:text-[#F8991D] transition-colors">
          {item.name}
        </h3>
        <p className="text-[#1A1A1A]/50 text-xs mb-3">{item.tags}</p>
        <button className="w-full flex items-center justify-center gap-1.5 bg-[#F9F3E3] hover:bg-[#F8991D] text-[#F8991D] hover:text-white font-bold py-2.5 rounded-xl text-sm transition-all duration-200 border border-[#F8991D]/30 hover:border-[#F8991D]">
          <Plus className="w-4 h-4" />
          Add to order
        </button>
      </div>
    </div>
  );
}

export default function FoodMenu() {
  return (
    <section className="py-20 bg-white" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#F8991D]/10 text-[#F8991D] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Top Picks
          </span>
          <h2 className="font-black text-[#1A1A1A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Available food menus
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOOD_ITEMS.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-[#F8991D] text-white font-black px-10 py-4 rounded-full hover:bg-[#e8881a] transition-colors shadow-lg shadow-[#F8991D]/30 text-sm tracking-wide">
            View All Menu
          </button>
        </div>
      </div>
    </section>
  );
}
