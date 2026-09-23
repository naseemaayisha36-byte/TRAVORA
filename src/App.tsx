/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PRODUCTS, Product, CartItem } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { BrandValues } from './components/BrandValues';
import { WhyTravora } from './components/WhyTravora';
import { AdventureBanner } from './components/AdventureBanner';
import { CustomerReviews } from './components/CustomerReviews';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { AboutModal, ContactModal, PolicyModal } from './components/InfoModals';
import { Check } from 'lucide-react';

export default function App() {
  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // TRAVORA Travel Backpack
      quantity: 1,
      selectedColor: 'Obsidian Black',
    },
  ]);

  // Modals & Navigation state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [policyModal, setPolicyModal] = useState<{
    isOpen: boolean;
    title: string;
    content: string[];
  }>({
    isOpen: false,
    title: '',
    content: [],
  });

  // Filter state for collection
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart actions
  const handleAddToCart = (product: Product, colorName: string, quantity = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === colorName
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, selectedColor: colorName }];
    });
    showToast(`Added ${quantity} × ${product.name} (${colorName}) to your bag`);
  };

  const handleUpdateQuantity = (productId: string, color: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedColor === color) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string, color: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedColor === color)
      )
    );
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setCartItems([]);
  };

  // Section navigation
  const scrollToSection = (sectionId: string, categoryFilter?: string) => {
    if (categoryFilter) {
      setActiveCategory(categoryFilter);
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartTotalItemsCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0D0D0E] text-[#F4F1EA] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      {/* 2. NAVIGATION */}
      <Navbar
        cartCount={cartTotalItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateSection={scrollToSection}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <Hero
          onShopNow={() => scrollToSection('collection', 'all')}
          onExploreCollection={() => scrollToSection('collection', 'backpacks')}
        />

        {/* 3. FEATURED COLLECTION */}
        <FeaturedCollection
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onAddToCart={(product, color) => handleAddToCart(product, color, 1)}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        {/* 4. BRAND VALUES */}
        <BrandValues />

        {/* 5. WHY TRAVORA */}
        <WhyTravora
          onLearnMore={() => setIsAboutOpen(true)}
          onExploreProducts={() => scrollToSection('collection', 'all')}
        />

        {/* 6. ADVENTURE BANNER */}
        <AdventureBanner
          onShopBags={() => scrollToSection('collection', 'all')}
        />

        {/* 7. CUSTOMER REVIEWS */}
        <CustomerReviews />

        {/* 8. NEWSLETTER */}
        <Newsletter />
      </main>

      {/* 9. FOOTER */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenTerms={() =>
          setPolicyModal({
            isOpen: true,
            title: 'Terms of Carriage & Service',
            content: [
              'All TRAVORA luggage and bags are sold subject to our Lifetime Craft Guarantee. We repair or replace manufacturing defects under regular airline and travel usage.',
              'Complimentary shipping applies on all qualifying global orders exceeding $150 USD. Orders are processed from our central logistics facility within 24 hours of authorization.',
              '100-Day Travel Trial: You may test your TRAVORA luggage on actual journeys for up to 100 days. If not fully satisfied, returns are accepted in good condition with return freight covered.',
            ],
          })
        }
        onOpenPrivacy={() =>
          setPolicyModal({
            isOpen: true,
            title: 'Privacy & Data Protection',
            content: [
              'TRAVORA is committed to safeguarding the personal details of our global travelers. We never sell, rent, or disclose personal journey information or transaction data.',
              'All checkout transactions are processed using high-standard 256-bit TLS encryption in compliance with international payment standards.',
              'You can manage or delete your traveler profile and subscription preferences at any time by contacting concierge@travora.travel.',
            ],
          })
        }
      />

      {/* Modals & Overlays */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(product) => setQuickViewProduct(product)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderComplete={handleOrderComplete}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={() =>
          setPolicyModal({ isOpen: false, title: '', content: [] })
        }
        title={policyModal.title}
        content={policyModal.content}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161619] border border-[#D4AF37]/50 text-white px-4 py-3 rounded-sm shadow-2xl flex items-center gap-3 animate-fade-in text-xs max-w-sm">
          <div className="w-5 h-5 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <p className="font-medium text-neutral-200">{toastMessage}</p>
        </div>
      )}
    </div>
  );
}
