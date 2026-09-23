import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/products';

export function CustomerReviews() {
  return (
    <section className="py-24 bg-[#111113] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
            <span>Verified Travelers</span>
            <span aria-hidden="true">·</span>
            <span>Global Field Reports</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F1EA]">
            Tested on Every Horizon
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 font-light">
            Read unprompted impressions from travelers who put TRAVORA bags through tens of thousands of miles.
          </p>
        </div>

        {/* 3 Minimal Luxury Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#17171A] border border-white/5 p-8 rounded-sm flex flex-col justify-between hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-[#F4F1EA] mb-3">
                  “{rev.title}”
                </h3>

                {/* Review prose */}
                <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Verification Details (Zero-pill) */}
              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {rev.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#C9B48F]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Verified Buyer</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-500 font-mono">
                  <span>{rev.productPurchased}</span>
                  <span aria-hidden="true">·</span>
                  <span>{rev.tripType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
