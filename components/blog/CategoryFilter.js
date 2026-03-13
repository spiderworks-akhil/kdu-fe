import { categories } from "@/lib/blogData";

export default function CategoryFilter({ activeCategory, onSelect }) {
  return (
    <div className="sticky top-[100px] z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-section-bg text-text-gray hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
