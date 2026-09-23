import { useState, useEffect } from 'react';
import { X, Star, Check, Plus, Minus, Shield, Compass, Package } from 'lucide-react';
import { Product } from '../data/products';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, colorName: string, quantity: number) => void;
}

export function QuickViewModal({ product, onClose, onAddToCart }: QuickViewModalProps) {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.name || '');
      setQuantity(1);
      setAdded(false);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#141417] border border-white/10 rounded-sm shadow-2xl overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-neutral-400 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Column */}
          <div className="relative aspect-square md:aspect-auto bg-[#1a1a1e] overflow-hidden flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-black/80 border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37]">
                {product.badge}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 mb-2 text-xs">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>
                <span className="text-white font-medium tabular-nums">{product.rating}</span>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-400">({product.reviewsCount} reviews)</span>
              </div>

              {/* Title & Tagline */}
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {product.name}
              </h2>
              <p className="mt-1 text-xs text-[#C9B48F] uppercase tracking-wider font-medium">
                {product.tagline}
              </p>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-2xl font-bold text-white tabular-nums">
                  ${product.price}
                </span>
                <span className="text-xs text-neutral-400">USD · Tax & duties included</span>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs bg-[#1a1a1f] p-4 rounded-sm border border-white/5">
                <div>
                  <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">
                    Capacity
                  </span>
                  <span className="text-neutral-200 font-medium">{product.capacity}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">
                    Weight
                  </span>
                  <span className="text-neutral-200 font-medium">{product.weight}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">
                    Dimensions
                  </span>
                  <span className="text-neutral-200 font-medium font-mono text-[11px]">
                    {product.dimensions}
                  </span>
                </div>
              </div>

              {/* Highlights checklist */}
              <div className="mt-5 space-y-2">
                {product.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Color Selector */}
              <div className="mt-6">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-neutral-400 uppercase tracking-wider">
                    Selected Color:
                  </span>
                  <span className="text-white font-medium">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`px-3 py-1.5 rounded-sm border text-xs flex items-center gap-2 transition-all cursor-pointer ${
                        selectedColor === c.name
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                          : 'border-white/10 hover:border-white/30 text-neutral-400'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/30"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart Action */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="flex items-center border border-white/15 rounded-sm bg-[#161619]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 text-neutral-400 hover:text-white"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-xs text-white font-mono tabular-nums font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 text-neutral-400 hover:text-white"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 px-6 text-xs font-semibold uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#D4AF37] hover:bg-[#E5C158] text-black shadow-[#D4AF37]/15'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <span>Add to Bag · ${(product.price * quantity).toFixed(0)}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
