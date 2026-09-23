export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* Refined Geometric Compass & Chevron Emblem */}
      <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#242428] to-[#121214] border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:border-[#D4AF37]/60 transition-all duration-300">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-4.5 h-4.5 text-[#E6C66E] transition-transform duration-500 group-hover:rotate-45"
        >
          {/* Minimalist modern travel diamond & vector chevron */}
          <path
            d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="1.5" fill="#E6C66E" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="font-display text-xl font-bold tracking-[0.22em] text-[#F4F1EA] group-hover:text-white transition-colors uppercase">
          TRAVORA
        </span>
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#C9B48F] opacity-90 -mt-0.5">
          Travel Bags
        </span>
      </div>
    </div>
  );
}
