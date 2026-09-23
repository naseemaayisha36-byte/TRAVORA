import { CheckCircle2, ArrowRight, Compass, Shield } from 'lucide-react';

interface WhyTravoraProps {
  onLearnMore: () => void;
  onExploreProducts: () => void;
}

export function WhyTravora({ onLearnMore, onExploreProducts }: WhyTravoraProps) {
  const pillars = [
    {
      title: 'Minimal Luxury Aesthetics',
      desc: 'Restrained, understated silhouettes that transition seamlessly from first-class cabins to remote Scandinavian cabins.',
    },
    {
      title: 'Architectural Organization',
      desc: 'Dedicated suspended compartments for laptops, passports, and garments keep everything intact without visual chaos.',
    },
    {
      title: 'Uncompromising Endurance',
      desc: 'Water-tight YKK zippers, reinforced anchor bar-tacks, and aerospace-tested materials built for a lifetime on the move.',
    },
  ];

  return (
    <section id="why-travora" className="py-24 bg-[#0D0D0E] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Asset with Luxury Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-black/80 aspect-[16/10] sm:aspect-[4/3] group">
              <img
                src="/src/assets/images/why_travora_craft_1790141565331.jpg"
                alt="Travora travel gear in modern luxury transit lounge"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Inset Quote / Trust Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0D0D0E]/90 backdrop-blur-md border border-white/10 rounded-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1">
                  Design Philosophy
                </p>
                <p className="text-sm font-light text-neutral-200 italic">
                  “We eliminate travel friction so you can focus entirely on the horizon ahead.”
                </p>
              </div>
            </div>

            {/* Decorative soft gold glow */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Why TRAVORA</span>
              <span aria-hidden="true">·</span>
              <span>Our Vision</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA] mb-6 leading-[1.15] [text-wrap:balance]">
              Made for the journey ahead.
            </h2>

            <p className="text-base text-neutral-300 font-light leading-relaxed mb-8">
              At TRAVORA, we believe travel should be an exercise in clarity, not clutter. We engineer stylish, durable, and exceptionally functional travel bags for everyday explorers, international travelers, and adventurous spirits who refuse to compromise between high fashion and rugged performance.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-5 mb-10">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-3.5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E6C66E]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F1EA] tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light mt-0.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProducts}
                className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-xs tracking-widest uppercase rounded-sm transition-all duration-200 shadow-md shadow-[#D4AF37]/15 flex items-center gap-2 cursor-pointer"
              >
                <span>Shop the Gear</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onLearnMore}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/15 text-xs tracking-widest uppercase rounded-sm transition-colors cursor-pointer"
              >
                About Our Heritage
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
