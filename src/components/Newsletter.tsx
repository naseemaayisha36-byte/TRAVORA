import { useState, FormEvent } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid travel contact email.');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  return (
    <section className="py-24 bg-[#0D0D0E] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Emblem or Kicker */}
        <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#18181B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
          <Mail className="w-5 h-5" />
        </div>

        <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-2">
          The TRAVORA Dispatch
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F1EA] mb-4 [text-wrap:balance]">
          Get Ready for Your Next Journey
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed mb-8 [text-wrap:balance]">
          Be the first to access limited-edition color drops, secret travel itineraries, and exclusive craftsmanship insights.
        </p>

        {isSubscribed ? (
          <div className="max-w-md mx-auto p-6 bg-[#161618] border border-[#D4AF37]/40 rounded-sm flex items-center justify-center gap-3 text-white">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <div className="text-left">
              <p className="text-sm font-semibold">Welcome to the TRAVORA Circle</p>
              <p className="text-xs text-neutral-400">A welcome briefing and private 10% privilege code is on its way to your inbox.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3.5 bg-[#17171A] border border-white/15 focus:border-[#D4AF37] focus:outline-none text-sm text-white placeholder-neutral-500 rounded-sm transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 shadow-md shadow-[#D4AF37]/15 flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {error && (
              <p className="mt-2.5 text-xs text-rose-400 font-medium text-left">{error}</p>
            )}

            <p className="mt-4 text-[11px] text-neutral-500 font-light">
              We respect your privacy. Unsubscribe at any time with a single click.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
