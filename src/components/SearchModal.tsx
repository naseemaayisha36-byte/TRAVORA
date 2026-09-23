import { useState, useEffect } from 'react';
import { Search as SearchIcon, X, ArrowRight, Star } from 'lucide-react';
import { Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export function SearchModal({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.tagline.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.material.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  const quickTerms = ['Carry-On', 'Backpack', 'Duffle', 'Organizer', 'Waterproof', 'TSA'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Search Container */}
      <div className="relative w-full max-w-2xl bg-[#141417] border border-white/10 rounded-sm shadow-2xl overflow-hidden z-10">
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3">
          <SearchIcon className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bags, duffles, carry-ons, materials..."
            className="flex-1 bg-transparent text-white placeholder-neutral-500 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-neutral-400 hover:text-white"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-md"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-5 py-3 bg-[#111113] border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs text-neutral-400">
          <span className="text-[11px] uppercase tracking-wider text-neutral-500 shrink-0">
            Suggested:
          </span>
          {quickTerms.map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-1 bg-white/5 hover:bg-white/10 text-neutral-300 rounded-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-neutral-400 px-1 mb-2">
            <span>{filtered.length} products found</span>
            <span className="text-[10px] text-neutral-500">ESC to close</span>
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-neutral-400 text-sm">
              No products found matching “{query}”. Try searching for “Backpack” or “Carry-On”.
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="group flex items-center justify-between p-3 rounded-sm bg-[#17171C] hover:bg-[#1E1E24] border border-white/5 hover:border-[#D4AF37]/40 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded-sm bg-neutral-900 border border-white/10 shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-neutral-400 line-clamp-1">
                      {product.tagline}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-500">
                      <span>{product.capacity}</span>
                      <span aria-hidden="true">·</span>
                      <div className="flex items-center gap-0.5 text-neutral-300">
                        <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-display text-sm font-bold text-white tabular-nums">
                    ${product.price}
                  </span>
                  <div className="w-8 h-8 rounded-sm bg-white/5 group-hover:bg-[#D4AF37] group-hover:text-black flex items-center justify-center text-neutral-400 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
