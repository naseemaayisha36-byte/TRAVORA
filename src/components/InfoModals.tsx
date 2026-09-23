import { useState } from 'react';
import { X, CheckCircle2, Mail, MapPin, Phone, ShieldCheck, Compass, Send } from 'lucide-react';
import { Logo } from './Logo';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />
      <div className="relative w-full max-w-3xl bg-[#141417] border border-white/10 rounded-sm shadow-2xl p-6 sm:p-10 z-10 max-h-[85vh] overflow-y-auto text-neutral-300">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white"
          aria-label="Close about modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <Logo />
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
          <span>Brand Heritage</span>
          <span aria-hidden="true">·</span>
          <span>Since 2021</span>
        </div>

        <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mb-6">
          Crafted for the Unbound Horizon
        </h2>

        <div className="space-y-4 text-sm font-light leading-relaxed">
          <p>
            TRAVORA was born out of frustration with disposable travel gear. Too many bags sacrificed elegance for ruggedness, or cracked under the pressure of international transits.
          </p>
          <p>
            We set out to create a unified design language: timeless silhouettes, warm architectural palettes of obsidian, desert sand, and soft gold, constructed from military-grade ballistic nylons and 100% German Makrolon® aerospace polycarbonate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <div className="p-4 bg-[#18181D] rounded-sm border border-white/5">
            <Compass className="w-5 h-5 text-[#D4AF37] mb-2" />
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">
              Field Tested
            </h4>
            <p className="text-[11px] text-neutral-400">
              Evaluated on 40+ international flight sectors and alpine conditions.
            </p>
          </div>
          <div className="p-4 bg-[#18181D] rounded-sm border border-white/5">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-2" />
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">
              Lifetime Guarantee
            </h4>
            <p className="text-[11px] text-neutral-400">
              We stand behind every seam, zipper, and composite wheel for life.
            </p>
          </div>
          <div className="p-4 bg-[#18181D] rounded-sm border border-white/5">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mb-2" />
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">
              Carbon Conscious
            </h4>
            <p className="text-[11px] text-neutral-400">
              100% recycled packaging & carbon-neutral verified shipping.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-xs tracking-widest uppercase rounded-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function ContactModal({ isOpen, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Order Inquiry',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />
      <div className="relative w-full max-w-xl bg-[#141417] border border-white/10 rounded-sm shadow-2xl p-6 sm:p-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white"
          aria-label="Close contact modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-1">
          <span>Global Atelier Support</span>
        </div>
        <h2 className="font-display text-2xl font-bold text-white mb-2">
          Contact TRAVORA Concierge
        </h2>
        <p className="text-xs text-neutral-400 font-light mb-6">
          Our travel specialists are available 24/7 for bespoke recommendations, order assistance, and warranty service.
        </p>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
            <h3 className="font-display text-xl font-bold text-white">
              Dispatch Received
            </h3>
            <p className="text-xs text-neutral-400">
              A TRAVORA concierge will respond to {formData.email || 'your email'} within 4 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-neutral-400 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Julian Vance"
                className="w-full bg-[#18181D] border border-white/15 px-3 py-2 text-white rounded-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="traveler@domain.com"
                className="w-full bg-[#18181D] border border-white/15 px-3 py-2 text-white rounded-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">Topic</label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full bg-[#18181D] border border-white/15 px-3 py-2 text-white rounded-sm focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="Order Inquiry">Order Inquiry & Tracking</option>
                <option value="Product Advisory">Product Advisory & Sizing</option>
                <option value="Warranty Claim">Lifetime Warranty Claim</option>
                <option value="Corporate Gifting">Corporate & Bulk Gifting</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How may our travel atelier assist you?"
                className="w-full bg-[#18181D] border border-white/15 px-3 py-2 text-white rounded-sm focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="text-[11px] text-neutral-500">
                Direct: concierge@travora.travel
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold uppercase tracking-widest text-xs rounded-sm transition-all flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function PolicyModal({
  isOpen,
  onClose,
  title,
  content,
}: ModalProps & { title: string; content: string[] }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />
      <div className="relative w-full max-w-2xl bg-[#141417] border border-white/10 rounded-sm shadow-2xl p-6 sm:p-8 z-10 max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white"
          aria-label="Close policy"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="font-display text-2xl font-bold text-white mb-4">
          {title}
        </h2>

        <div className="space-y-3 text-xs text-neutral-300 font-light leading-relaxed">
          {content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#D4AF37] text-black font-semibold text-xs tracking-widest uppercase rounded-sm"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
