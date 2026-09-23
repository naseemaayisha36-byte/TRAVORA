import { ArrowRight, ShieldCheck, Compass, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onExploreCollection: () => void;
}

export function Hero({ onShopNow, onExploreCollection }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Container with Measured Luxury Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          onError={(e) => {
            // Robust fallback if relative path is used
            const target = e.currentTarget;
            if (!target.src.includes('hero_travel_luggage')) {
              target.src = '/images/hero_travel_luggage_1790141495883.jpg';
            }
          }}
          alt="TRAVORA luxury travel bags in scenic alpine destination"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered cinematic dark scrim to ensure high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-[#0D0D0E]/60 to-[#0D0D0E]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0E]/80 via-transparent to-[#0D0D0E]/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Subtle Brand Tagline Kicker (Zero-pill compliant) */}
        <div className="flex items-center gap-2.5 text-xs font-medium tracking-[0.28em] uppercase text-[#D4AF37] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The New Standard in Travel Luggage</span>
          <span aria-hidden="true">·</span>
          <span>Since 2021</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F4F1EA] max-w-4xl leading-[1.1] mb-6 [text-wrap:balance]">
          Carry Your Next <span className="text-[#E6C66E] italic font-normal">Adventure</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl text-neutral-300 max-w-2xl font-light tracking-wide leading-relaxed mb-10 [text-wrap:balance]">
          Built for journeys. Designed for you. Engineered from aerospace polycarbonate, weatherproof canvas, and ballistic nylon to endure every horizon.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onShopNow}
            className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-sm tracking-widest uppercase rounded-sm transition-all duration-200 shadow-xl shadow-[#D4AF37]/15 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreCollection}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-[#F4F1EA] hover:text-white border border-white/20 hover:border-white/40 font-medium text-sm tracking-widest uppercase rounded-sm backdrop-blur-sm transition-all duration-200 cursor-pointer"
          >
            Explore Collection
          </button>
        </div>

        {/* Proof Markers */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 text-left w-full max-w-3xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white tracking-wider uppercase">Lifetime Warranty</p>
              <p className="text-[11px] text-neutral-400">Repaired or replaced globally</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white tracking-wider uppercase">All-Terrain Ready</p>
              <p className="text-[11px] text-neutral-400">Tested in alpine & urban extremes</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[10px] font-bold text-[#D4AF37]">
              ★
            </div>
            <div>
              <p className="text-xs font-semibold text-white tracking-wider uppercase">4.9 / 5 Rating</p>
              <p className="text-[11px] text-neutral-400">Over 1,200 verified reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
