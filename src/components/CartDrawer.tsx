import { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { CartItem } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, color: string, delta: number) => void;
  onRemoveItem: (productId: string, color: string) => void;
  onCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string>('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = rawSubtotal * appliedDiscount;
  const subtotalAfterDiscount = rawSubtotal - discountAmount;
  const freeShippingThreshold = 150;
  const isFreeShipping = rawSubtotal >= freeShippingThreshold || items.length === 0;
  const shippingCost = isFreeShipping ? 0 : 15;
  const total = subtotalAfterDiscount + (items.length > 0 ? shippingCost : 0);

  const progressPercent = Math.min(
    100,
    Math.round((rawSubtotal / freeShippingThreshold) * 100)
  );
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - rawSubtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'JOURNEY10') {
      setAppliedDiscount(0.1);
      setPromoMessage('10% VIP Explorer privilege applied');
    } else if (promoCode.trim().toUpperCase() === 'TRAVORA') {
      setAppliedDiscount(0.15);
      setPromoMessage('15% Founder privilege applied');
    } else {
      setPromoMessage('Invalid promo code. Try "JOURNEY10"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121215] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold text-white uppercase tracking-widest">
                Shopping Bag
              </span>
              <span className="text-xs text-[#D4AF37] font-mono">
                ({items.reduce((acc, i) => acc + i.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-md transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          {items.length > 0 && (
            <div className="px-6 py-3.5 bg-[#17171C] border-b border-white/5">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-neutral-300">
                  {isFreeShipping ? (
                    <span className="text-[#D4AF37] font-semibold">
                      Unlocked: Complimentary Global Express Shipping
                    </span>
                  ) : (
                    <span>
                      Add{' '}
                      <strong className="text-white font-semibold">
                        ${remainingForFreeShipping}
                      </strong>{' '}
                      for Free Worldwide Shipping
                    </span>
                  )}
                </span>
                <span className="text-[11px] font-mono text-neutral-400">
                  {progressPercent}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C9B69B] to-[#D4AF37] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {items.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-neutral-500 mb-4">
                  <Tag className="w-7 h-7 text-[#D4AF37]/50" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Your Bag is Empty
                </h3>
                <p className="text-xs text-neutral-400 max-w-xs leading-relaxed mb-6">
                  Explore our travel collection designed for every journey ahead.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-xs tracking-widest uppercase rounded-sm transition-all"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="flex gap-4 pb-5 border-b border-white/5 group"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-sm bg-neutral-900 border border-white/10 shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-semibold text-white tracking-wide leading-snug">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() =>
                            onRemoveItem(item.product.id, item.selectedColor)
                          }
                          className="text-neutral-500 hover:text-rose-400 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Color: {item.selectedColor}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-white/15 rounded-sm bg-[#161619]">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.selectedColor, -1)
                          }
                          className="px-2 py-1 text-neutral-400 hover:text-white hover:bg-white/5"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs text-white font-mono tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.selectedColor, 1)
                          }
                          className="px-2 py-1 text-neutral-400 hover:text-white hover:bg-white/5"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-white tabular-nums">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Module */}
          {items.length > 0 && (
            <div className="p-6 bg-[#0E0E11] border-t border-white/10 space-y-4">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code (e.g. JOURNEY10)"
                  className="flex-1 px-3 py-2 bg-[#17171C] border border-white/10 text-xs text-white uppercase placeholder:normal-case placeholder-neutral-500 rounded-sm focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-medium rounded-sm uppercase tracking-wider"
                >
                  Apply
                </button>
              </form>
              {promoMessage && (
                <p className="text-[11px] text-[#D4AF37] font-medium">
                  {promoMessage}
                </p>
              )}

              {/* Subtotals Breakdown */}
              <div className="space-y-1.5 text-xs border-t border-white/5 pt-3">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="text-white font-mono tabular-nums">${rawSubtotal}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-[#D4AF37]">
                    <span>Privilege Discount ({appliedDiscount * 100}%)</span>
                    <span className="font-mono tabular-nums">-${discountAmount.toFixed(0)}</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-400">
                  <span>Global Express Shipping</span>
                  <span className="text-white font-mono">
                    {shippingCost === 0 ? 'Complimentary' : `$${shippingCost}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                  <span>Estimated Total</span>
                  <span className="font-display text-base text-[#E6C66E] font-mono tabular-nums">
                    ${total.toFixed(0)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={onCheckout}
                className="w-full py-4 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-xs tracking-widest uppercase rounded-sm transition-all duration-200 shadow-xl shadow-[#D4AF37]/15 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100-Day Travel Trial · Free Worldwide Returns</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
