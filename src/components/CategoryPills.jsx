const CATEGORIES = [
  'Dessert', 'Sushi', 'Pizza', 'Seafoods', 'Shawarma', 'Noodles',
  'Oily-eats', 'Grills', 'Drinks', 'Breakfast', 'Lunch', 'Street',
  'Pasta', 'Salad', 'Indian', 'Chinese',
];

export default function CategoryPills() {
  return (
    <section className="py-12 bg-[#F9F3E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-black text-[#1A1A1A] text-2xl sm:text-3xl text-center mb-8 tracking-tight">
          Other food options
        </h2>
        {/* Horizontal scroll container */}
        <div className="overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-3 w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="bg-white border border-[#F8991D]/30 text-[#1A1A1A] font-semibold text-sm px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-[#F8991D] hover:text-white hover:border-[#F8991D] transition-all duration-200 shadow-sm"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
