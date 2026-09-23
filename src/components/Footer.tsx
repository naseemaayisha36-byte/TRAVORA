import { useState } from 'react';
import { Logo } from './Logo';
import { Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string, categoryFilter?: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export function Footer({
  onNavigateSection,
  onOpenAbout,
  onOpenContact,
  onOpenTerms,
  onOpenPrivacy,
}: FooterProps) {
  const [currency, setCurrency] = useState('USD ($)');

  return (
    <footer className="bg-[#09090A] border-t border-white/10 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info & Tagline */}
          <div className="lg:col-span-2 space-y-5">
            <Logo />
            <p className="text-base text-neutral-300 font-light max-w-sm italic">
              “Travel Bags for Every Journey”
            </p>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Engineered with meticulous Swiss-inspired minimalism, aerospace-grade composite shells, and weather-resistant textiles. Crafted to accompany you across continents.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { name: 'Instagram', url: '#instagram' },
                { name: 'Pinterest', url: '#pinterest' },
                { name: 'YouTube', url: '#youtube' },
                { name: 'X / Twitter', url: '#twitter' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  onClick={(e) => e.preventDefault()}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-sm bg-[#161619] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
                >
                  <span className="text-[11px] font-semibold">{social.name.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
              Shop Collections
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigateSection('collection', 'all')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Travel Bags
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('collection', 'backpacks')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Travel Backpacks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('collection', 'duffle')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Adventure Duffles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('collection', 'carryon')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Carry-On Hard Shells
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('collection', 'accessories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Travel Organizers & Kits
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Contact Concierge</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Lifetime Warranty
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Track Your Shipment
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Care & Cleaning Guide
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Corporate Gifting
                </button>
              </li>
            </ul>
          </div>

          {/* About & Locale */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
              The Atelier
            </h4>
            <ul className="space-y-2.5 text-xs mb-6">
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About TRAVORA
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Material Sustainability
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Design Principles
                </button>
              </li>
            </ul>

            {/* Currency Selector */}
            <div className="pt-2">
              <label htmlFor="currency-select" className="block text-[11px] text-neutral-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Region & Currency</span>
              </label>
              <select
                id="currency-select"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-[#161619] border border-white/10 text-xs text-white px-3 py-2 rounded-sm focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="USD ($)">United States (USD $)</option>
                <option value="EUR (€)">European Union (EUR €)</option>
                <option value="GBP (£)">United Kingdom (GBP £)</option>
                <option value="CAD ($)">Canada (CAD $)</option>
                <option value="JPY (¥)">Japan (JPY ¥)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} TRAVORA Co. All rights reserved. Registered Travel Goods.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenContact}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Security Inquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
