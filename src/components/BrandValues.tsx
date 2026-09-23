import { ShieldCheck, Maximize2, PlaneTakeoff } from 'lucide-react';

export function BrandValues() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Durable Quality',
      subtitle: 'Engineered for Extreme Endurance',
      description:
        'Crafted from bulletproof 840D recycled ballistic nylon, aerospace polycarbonate shells, and YKK® Aquaguard weather-sealed zippers. Rigorously drop-tested from 3 meters to safeguard your journey.',
      metrics: '100k+ Mile Certified',
    },
    {
      icon: Maximize2,
      title: 'Spacious Designs',
      subtitle: 'Intuitive Packing Architecture',
      description:
        'Engineered with full 180° lay-flat clamshell access, internal dual-buckle compression systems, and dedicated false-bottom tech sleeves that pack 35% more without expanding exterior dimensions.',
      metrics: 'Up to 35% More Capacity',
    },
    {
      icon: PlaneTakeoff,
      title: 'Travel Ready',
      subtitle: 'Effortless Global Transits',
      description:
        'Designed to glide past baggage claim. Features frictionless luggage trolley pass-through sleeves, Japanese Hinomoto whisper-quiet 360° caster wheels, and universal airline overhead bin compliance.',
      metrics: 'Airline IATA Compliant',
    },
  ];

  return (
    <section className="py-24 bg-[#111113] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
            <span>The TRAVORA Standard</span>
            <span aria-hidden="true">·</span>
            <span>Uncompromising Craft</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F1EA]">
            Built with Purpose. Refined by Journeys.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Every buckle, zipper seam, and structural shell is obsessively tested so you can navigate international terminals, remote trailheads, and cobblestone alleys with absolute confidence.
          </p>
        </div>

        {/* 3 Elegant Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="group relative p-8 bg-[#17171A] border border-white/5 rounded-sm hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                {/* Subtle warm accent hairline */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-[#222226] border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display text-xs text-neutral-600 font-bold tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-xl font-bold text-[#F4F1EA] mb-1 group-hover:text-white transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#C9B48F] mb-4 font-medium">
                    {val.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>

                {/* Proof Metric (Zero-pill text separator style) */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 uppercase tracking-wider text-[11px]">Benchmark</span>
                  <span className="text-[#D4AF37] font-medium tracking-wide">
                    {val.metrics}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
