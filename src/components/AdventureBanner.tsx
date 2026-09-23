import { ArrowRight } from 'lucide-react';

interface AdventureBannerProps {
  onShopBags: () => void;
}

export function AdventureBanner({ onShopBags }: AdventureBannerProps) {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden border-y border-white/10">
      {/* Cinematic Full-Width Mountain Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/adventure_banner_1790141551380.jpg"
          alt="Breathtaking mountain peaks travel horizon"
          className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Scrim for text legibility */}
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-transparent to-[#0D0D0E]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-4">
          The World Awaits
        </span>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F4F1EA] mb-6 [text-wrap:balance]">
          Pack. Go. <span className="text-[#E6C66E] italic font-normal">Explore.</span>
        </h2>

        <p className="text-base sm:text-lg text-neutral-200 font-light max-w-2xl leading-relaxed mb-10 [text-wrap:balance]">
          From misty alpine ridges to bustling transatlantic hubs, travel lighter, travel smarter, and never leave your essentials behind.
        </p>

        <button
          onClick={onShopBags}
          className="px-9 py-4 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-sm tracking-widest uppercase rounded-sm transition-all duration-200 shadow-2xl shadow-[#D4AF37]/25 flex items-center gap-3 cursor-pointer group"
        >
          <span>Shop Travel Bags</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
