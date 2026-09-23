import { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, CreditCard, Lock, ArrowRight, PlaneTakeoff } from 'lucide-react';
import { CartItem } from '../data/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: () => void;
}

export function CheckoutModal({
  isOpen,
  onClose,
  items,
  onOrderComplete,
}: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    firstName: 'Julian',
    lastName: 'Vance',
    email: 'traveler@travora.travel',
    address: '42 Alpenblick Strasse',
    city: 'Zurich',
    country: 'Switzerland',
    postalCode: '8001',
    paymentMethod: 'card',
  });

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const freeShipping = rawSubtotal >= 150;
  const shipping = freeShipping ? 0 : 15;
  const total = rawSubtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrder = `TRV-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrder);
    setStep('success');
  };

  const handleFinish = () => {
    onOrderComplete();
    onClose();
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#141417] border border-white/10 rounded-sm shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-display text-base font-bold text-white uppercase tracking-widest">
              {step === 'form' ? 'Secure Express Checkout' : 'Order Confirmed'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-md"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Order Items Preview */}
            <div className="bg-[#18181D] p-4 rounded-sm border border-white/5 space-y-2">
              <div className="flex justify-between text-xs text-neutral-400 uppercase tracking-wider">
                <span>Selected Items ({items.length})</span>
                <span className="text-white font-mono font-semibold">${total} Total</span>
              </div>
              <div className="flex items-center gap-3 pt-2 overflow-x-auto">
                {items.map((i) => (
                  <div key={`${i.product.id}-${i.selectedColor}`} className="flex items-center gap-2 shrink-0">
                    <img
                      src={i.product.image}
                      alt={i.product.name}
                      className="w-10 h-10 object-cover rounded-sm border border-white/10"
                    />
                    <div className="text-xs">
                      <p className="text-white font-medium">{i.product.name}</p>
                      <p className="text-[10px] text-neutral-400">Qty {i.quantity} · {i.selectedColor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Information */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                1. Shipping Destination
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-neutral-400 mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-[#18181D] border border-white/15 px-3 py-2 text-white rounded-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-[#18181D] border border-white/15 px-3 py-2 text-white rounded-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-neutral-400 mb-1">Email For Tracking & Receipt</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#18181D] border border-white/15 px-3 py-2 text-white rounded-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-neutral-400 mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#18181D] border border-white/15 px-3 py-2 text-white rounded-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#18181D] border border-white/15 px-3 py-2 text-white rounded-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Country</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#18181D] border border-white/15 px-3 py-2 text-white rounded-sm focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                2. Payment Method
              </h3>
              <div className="grid grid-cols-3 gap-2.5 mb-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                  className={`p-3 border rounded-sm flex flex-col items-center justify-center gap-1.5 transition-all text-xs cursor-pointer ${
                    formData.paymentMethod === 'card'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-semibold'
                      : 'border-white/10 hover:border-white/20 text-neutral-400'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                  <span>Credit Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'apple' })}
                  className={`p-3 border rounded-sm flex flex-col items-center justify-center gap-1.5 transition-all text-xs cursor-pointer ${
                    formData.paymentMethod === 'apple'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-semibold'
                      : 'border-white/10 hover:border-white/20 text-neutral-400'
                  }`}
                >
                  <span className="font-bold text-sm"> Pay</span>
                  <span>Apple Pay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, paymentMethod: 'google' })}
                  className={`p-3 border rounded-sm flex flex-col items-center justify-center gap-1.5 transition-all text-xs cursor-pointer ${
                    formData.paymentMethod === 'google'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-semibold'
                      : 'border-white/10 hover:border-white/20 text-neutral-400'
                  }`}
                >
                  <span className="font-bold text-sm">G Pay</span>
                  <span>Google Pay</span>
                </button>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="space-y-3 bg-[#18181D] p-4 rounded-sm border border-white/5 text-xs">
                  <div>
                    <label className="block text-neutral-400 mb-1">Card Number</label>
                    <input
                      type="text"
                      readOnly
                      value="•••• •••• •••• 4242 (Demo Mode)"
                      className="w-full bg-[#131316] border border-white/15 px-3 py-2 text-white font-mono rounded-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-400 mb-1">Expiration</label>
                      <input
                        type="text"
                        readOnly
                        value="12 / 28"
                        className="w-full bg-[#131316] border border-white/15 px-3 py-2 text-white font-mono rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-400 mb-1">CVC Security</label>
                      <input
                        type="text"
                        readOnly
                        value="888"
                        className="w-full bg-[#131316] border border-white/15 px-3 py-2 text-white font-mono rounded-sm"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-xs tracking-widest uppercase rounded-sm transition-all shadow-xl shadow-[#D4AF37]/15 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Authorize & Complete Order · ${total}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>256-Bit Encrypted Secure Checkout · Worldwide Guarantee</span>
              </div>
            </div>
          </form>
        ) : (
          /* Confirmation State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Order Confirmed
              </span>
              <h2 className="font-display text-3xl font-bold text-white mt-1">
                Your Next Journey Has Begun
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, {formData.firstName}. We have queued your order for priority dispatch from our Zurich logistics atelier.
              </p>
            </div>

            <div className="bg-[#18181D] p-5 rounded-sm border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-400">Order Number:</span>
                <span className="text-white font-mono font-bold">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Estimated Delivery:</span>
                <span className="text-[#D4AF37] font-medium">3–5 Business Days (Express)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Destination:</span>
                <span className="text-white truncate max-w-[200px]">{formData.city}, {formData.country}</span>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-2">
                <span className="text-neutral-400">Total Billed:</span>
                <span className="text-white font-mono font-bold">${total}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleFinish}
                className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-xs tracking-widest uppercase rounded-sm transition-all"
              >
                Return to Storefront
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
