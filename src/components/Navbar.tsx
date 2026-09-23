import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onNavigateSection: (sectionId: string, categoryFilter?: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export function Navbar({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onNavigateSection,
  onOpenAbout,
  onOpenContact,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, categoryFilter?: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId, categoryFilter);
  };

  return (
    <>
      {/* Top micro-announcement banner */}
      <div className="w-full bg-[#141416] border-b border-white/5 py-1.5 px-4 text-center text-[11px] tracking-widest text-[#D4AF37] uppercase font-medium flex items-center justify-center gap-2">
        <span>Complimentary Express Global Delivery Over $150</span>
        <span className="hidden sm:inline opacity-40">·</span>
        <span className="hidden sm:inline text-neutral-400">Lifetime Warranty Included</span>
      </div>

      {/* Main Top Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0E]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
            : 'bg-gradient-to-b from-[#0D0D0E]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark / Emblem */}
            <div
              onClick={() => handleNavClick('hero')}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavClick('hero')}
              aria-label="TRAVORA Home"
            >
              <Logo />
            </div>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wider text-neutral-300">
              <button
                onClick={() => handleNavClick('hero')}
                className="hover:text-white transition-colors uppercase cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('collection')}
                className="hover:text-white transition-colors uppercase cursor-pointer"
              >
                Shop
              </button>
              <button
                onClick={() => handleNavClick('collection', 'backpacks')}
                className="hover:text-white transition-colors uppercase cursor-pointer"
              >
                Backpacks
              </button>
              <button
                onClick={() => handleNavClick('collection', 'duffle')}
                className="hover:text-white transition-colors uppercase cursor-pointer"
              >
                Duffle Bags
              </button>
              <button
                onClick={() => handleNavClick('collection', 'accessories')}
                className="hover:text-white transition-colors uppercase cursor-pointer"
              >
                Travel Accessories
              </button>
              <button
                onClick={onOpenAbout}
                className="hover:text-white transition-colors uppercase cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={onOpenContact}
                className="hover:text-white transition-colors uppercase cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Actions (Search, Cart, Mobile Toggle) */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenSearch}
                aria-label="Search travel products"
                className="p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-colors cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenCart}
                aria-label="Open Shopping Bag"
                className="relative p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-colors cursor-pointer flex items-center"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-[#D4AF37] text-black text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums shadow">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md flex flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Logo />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 px-6 py-8 flex flex-col justify-between overflow-y-auto">
            <nav className="flex flex-col gap-6 text-lg font-display tracking-widest text-neutral-200">
              <button
                onClick={() => handleNavClick('hero')}
                className="text-left hover:text-[#D4AF37] transition-colors uppercase flex items-center justify-between"
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>
              <button
                onClick={() => handleNavClick('collection')}
                className="text-left hover:text-[#D4AF37] transition-colors uppercase flex items-center justify-between"
              >
                <span>Shop All</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>
              <button
                onClick={() => handleNavClick('collection', 'backpacks')}
                className="text-left hover:text-[#D4AF37] transition-colors uppercase flex items-center justify-between"
              >
                <span>Backpacks</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>
              <button
                onClick={() => handleNavClick('collection', 'duffle')}
                className="text-left hover:text-[#D4AF37] transition-colors uppercase flex items-center justify-between"
              >
                <span>Duffle Bags</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>
              <button
                onClick={() => handleNavClick('collection', 'carryon')}
                className="text-left hover:text-[#D4AF37] transition-colors uppercase flex items-center justify-between"
              >
                <span>Carry-On Luggage</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>
              <button
                onClick={() => handleNavClick('collection', 'accessories')}
                className="text-left hover:text-[#D4AF37] transition-colors uppercase flex items-center justify-between"
              >
                <span>Travel Accessories</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAbout();
                }}
                className="text-left hover:text-[#D4AF37] transition-colors uppercase flex items-center justify-between"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="text-left hover:text-[#D4AF37] transition-colors uppercase flex items-center justify-between"
              >
                <span>Contact Concierge</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </button>
            </nav>

            <div className="pt-8 border-t border-white/10 text-xs text-neutral-400 space-y-3">
              <p className="tracking-widest uppercase text-[#D4AF37]">TRAVORA Flagship Concierge</p>
              <p>Email: concierge@travora.travel</p>
              <p>Worldwide Carbon-Neutral Shipping</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
