import { useState } from 'react';
import { Star, Eye, Plus, Check } from 'lucide-react';
import { Product } from '../data/products';

interface FeaturedCollectionProps {
  products: Product[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onAddToCart: (product: Product, colorName: string) => void;
  onQuickView: (product: Product) => void;
}

export function FeaturedCollection({
  products,
  activeCategory,
  onSelectCategory,
  onAddToCart,
  onQuickView,
}: FeaturedCollectionProps) {
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    'travora-travel-backpack': 'Obsidian Black',
    'travora-adventure-duffle': 'Charcoal Slate',
    'travora-carry-on': 'Titanium Graphite',
    'travora-travel-organizer': 'Matte Obsidian',
  });

  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Collection' },
    { id: 'backpacks', label: 'Backpacks' },
    { id: 'duffle', label: 'Duffle Bags' },
    { id: 'carryon', label: 'Carry-On Luggage' },
    { id: 'accessories', label: 'Travel Accessories' },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleColorChange = (productId: string, colorName: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: colorName }));
  };

  const handleAdd = (product: Product) => {
    const chosenColor = selectedColors[product.id] || product.colors[0]?.name || 'Standard';
    onAddToCart(product, chosenColor);
    setAddedAnimationId(product.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1400);
  };

  return (
    <section id="collection" className="py-24 bg-[#0D0D0E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
              <span>Signature Travel Pieces</span>
              <span aria-hidden="true">/</span>
              <span>2026 Collection</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F1EA]">
              Featured Collection
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Precision-crafted travel bags and luggage engineered for the demands of the modern journey.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional button elements with clear states) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs tracking-wider uppercase font-medium rounded-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-md shadow-[#D4AF37]/20'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => {
            const currentColor = selectedColors[product.id] || product.colors[0]?.name;
            const isJustAdded = addedAnimationId === product.id;

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-[#141416] border border-white/10 rounded-sm overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-[#1a1a1d] overflow-hidden">
                  <img
                    src={product.image}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (product.id === 'travora-travel-backpack') {
                        target.src = '/images/product_backpack_1790141507567.jpg';
                      } else if (product.id === 'travora-adventure-duffle') {
                        target.src = '/images/product_duffle_1790141518025.jpg';
                      } else if (product.id === 'travora-carry-on') {
                        target.src = '/images/product_carryon_1790141529193.jpg';
                      } else if (product.id === 'travora-travel-organizer') {
                        target.src = '/images/product_organizer_1790141539373.jpg';
                      }
                    }}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Fallback pattern behind if image delays */}
                  <div className="absolute inset-0 -z-10 bg-neutral-900 flex items-center justify-center text-neutral-700 text-xs font-mono">
                    TRAVORA · STUDIO
                  </div>

                  {/* Subtle Badge (Zero-pill text kicker style) */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#0D0D0E]/85 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37]">
                      {product.badge}
                    </div>
                  )}

                  {/* Quick View Button on Image Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                    <button
                      onClick={() => onQuickView(product)}
                      className="px-4 py-2 bg-white/90 hover:bg-white text-black text-xs font-semibold tracking-wider uppercase rounded-sm flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                      <span className="uppercase tracking-widest text-[11px] text-[#C9B48F]">
                        {product.capacity}
                      </span>
                      <div className="flex items-center gap-1 text-neutral-300">
                        <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                        <span className="font-medium tabular-nums">{product.rating}</span>
                        <span className="text-neutral-500 text-[11px]">({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => onQuickView(product)}
                      className="font-display text-lg font-bold text-[#F4F1EA] group-hover:text-white transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    {/* Product Tagline */}
                    <p className="mt-1 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>

                    {/* Color Swatches */}
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-[11px] text-neutral-500 uppercase tracking-wider">Color:</span>
                      <div className="flex items-center gap-1.5">
                        {product.colors.map((color) => (
                          <button
                            key={color.name}
                            type="button"
                            onClick={() => handleColorChange(product.id, color.name)}
                            title={color.name}
                            className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                              currentColor === color.name
                                ? 'scale-125 border-[#D4AF37] ring-1 ring-[#D4AF37]'
                                : 'border-white/30 hover:border-white'
                            }`}
                            style={{ backgroundColor: color.hex }}
                            aria-label={`Select ${color.name}`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-neutral-400 ml-1 truncate">
                        {currentColor}
                      </span>
                    </div>
                  </div>

                  {/* Price & Add to Cart Action */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Price</span>
                      <span className="font-display text-lg font-bold text-white tabular-nums">
                        ${product.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      disabled={isJustAdded}
                      className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-sm flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#D4AF37] hover:bg-[#E5C158] text-black shadow-md shadow-[#D4AF37]/10'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
