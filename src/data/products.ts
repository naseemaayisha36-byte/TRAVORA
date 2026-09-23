export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  rating: number;
  reviewsCount: number;
  category: 'backpacks' | 'duffle' | 'carryon' | 'accessories';
  image: string;
  badge?: string;
  capacity: string;
  dimensions: string;
  weight: string;
  material: string;
  description: string;
  highlights: string[];
  colors: { name: string; hex: string }[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  title: string;
  comment: string;
  rating: number;
  productPurchased: string;
  tripType: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'travora-travel-backpack',
    name: 'TRAVORA Travel Backpack',
    tagline: 'All-terrain ergonomics with intuitive 32L packing architecture',
    price: 245,
    rating: 4.9,
    reviewsCount: 328,
    category: 'backpacks',
    image: '/images/product_backpack.jpg',
    badge: 'Best Seller',
    capacity: '32 Liters',
    dimensions: '50 × 33 × 20 cm (19.7 × 13 × 7.9 in)',
    weight: '1.28 kg (2.8 lbs)',
    material: '840D Waterproof Ballistic Recycled Nylon with magnetic hardware',
    description: 'Engineered for seamless transits and mountain expeditions alike. Features a lie-flat 180° clamshell opening, dedicated suspended 16” padded laptop compartment, concealed magnetic passport pocket, and contoured breathable air-mesh back panel.',
    highlights: [
      'TSA-ready 180° full clamshell access',
      'Suspended false-bottom 16" laptop sleeve',
      'Fidlock® magnetic quick-release chest buckle',
      'Luggage trolley sleeve pass-through for roller bags'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#1C1C1E' },
      { name: 'Desert Dune', hex: '#D7C7B0' },
      { name: 'Alpine Forest', hex: '#2F3E38' }
    ]
  },
  {
    id: 'travora-adventure-duffle',
    name: 'TRAVORA Adventure Duffle',
    tagline: 'Rugged weather-resistant 45L hauler with dual duffle/backpack carry',
    price: 210,
    rating: 4.8,
    reviewsCount: 214,
    category: 'duffle',
    image: '/images/product_duffle.jpg',
    badge: 'Adventure Pick',
    capacity: '45 Liters',
    dimensions: '56 × 35 × 25 cm (22 × 13.8 × 9.8 in)',
    weight: '1.42 kg (3.1 lbs)',
    material: 'Weatherproof Waxed Canvas & Full-Grain Tuscan Leather trim',
    description: 'Designed for the unrestricted wanderer. Built to withstand rough cargo holds, sudden alpine rainstorms, and weekend retreats. Seamlessly converts from ergonomic backpack to classic handheld carry in seconds.',
    highlights: [
      'Stowable padded shoulder straps for backpack conversion',
      'Reinforced waterproof storm-flap YKK® Aquaguard zippers',
      'Ventilated side shoe compartment (fits up to US 14)',
      'Subtle brushed soft gold hardware details'
    ],
    colors: [
      { name: 'Charcoal Slate', hex: '#2B2C30' },
      { name: 'Warm Desert Khaki', hex: '#C2B49D' },
      { name: 'Deep Espresso', hex: '#3B2F2F' }
    ]
  },
  {
    id: 'travora-carry-on',
    name: 'TRAVORA Carry-On',
    tagline: 'Aerospace-grade polycarbonate with whisper-silent 360° mobility',
    price: 320,
    rating: 4.9,
    reviewsCount: 456,
    category: 'carryon',
    image: '/images/product_carryon.jpg',
    badge: 'Flagship Edition',
    capacity: '38 Liters',
    dimensions: '55 × 36 × 23 cm (21.7 × 14.2 × 9 in)',
    weight: '3.1 kg (6.8 lbs)',
    material: '100% German Makrolon® Polycarbonate shell with anodized frame',
    description: 'Precision-formed hard shell that bends under pressure and snaps effortlessly back into shape. Glides silently through airport terminals on Japanese Hinomoto 360° wheels with built-in TSA combination locks and compression divider pads.',
    highlights: [
      'Whisper-quiet Japanese Hinomoto 360° dual-caster wheels',
      'Integrated flush TSA-approved combination lock',
      'Internal dual-compression buckle system saves 25% volume',
      'Reinforced soft-gold corner guards for impact resistance'
    ],
    colors: [
      { name: 'Titanium Graphite', hex: '#3A3D40' },
      { name: 'Warm Champagne Gold', hex: '#C9B69B' },
      { name: 'Matte Onyx', hex: '#161618' }
    ]
  },
  {
    id: 'travora-travel-organizer',
    name: 'TRAVORA Travel Organizer',
    tagline: 'Lay-flat accordion kit for tech cables, passport, and daily essentials',
    price: 68,
    rating: 4.9,
    reviewsCount: 189,
    category: 'accessories',
    image: '/images/product_organizer.jpg',
    badge: 'Essential Gear',
    capacity: '3.5 Liters',
    dimensions: '24 × 16 × 9 cm (9.4 × 6.3 × 3.5 in)',
    weight: '260 g (0.57 lbs)',
    material: 'High-density 420D recycled ripstop nylon with soft-touch lining',
    description: 'Eliminate tangled cables and misplaced boarding cards. Organizes your chargers, power banks, AirPods, adapters, and travel documents in an origami-style lay-flat opening that stands upright on airplane tray tables.',
    highlights: [
      'Self-standing accordion structure for seatback tables',
      'Custom elastic loops for stylus, pens, and USB cords',
      'Fleece-lined magnetic compartment for delicate sunglasses/watch',
      'Exterior weather-resistant quick-grab boarding pass pocket'
    ],
    colors: [
      { name: 'Matte Obsidian', hex: '#18181A' },
      { name: 'Warm Sand', hex: '#D2C4B2' },
      { name: 'Smoky Olive', hex: '#363E36' }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Julian Vance',
    location: 'Zurich, Switzerland',
    title: 'The pinnacle of functional luxury',
    comment: 'Took the TRAVORA Carry-On and Backpack through three European capitals and a snowy weekend in Zermatt. The wheels are genuinely silent on cobbled streets, and the weight distribution makes 15-hour travel days feel completely effortless.',
    rating: 5,
    productPurchased: 'TRAVORA Carry-On & Backpack',
    tripType: 'International Transit',
    date: 'February 2026'
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    location: 'Tokyo, Japan',
    title: 'Flawless materials and craftsmanship',
    comment: 'The Adventure Duffle converts instantly when catching a bullet train or hiking through Hakone. The waxed canvas smells phenomenal and shrugs off downpours without soaking through. Simply best in class.',
    rating: 5,
    productPurchased: 'TRAVORA Adventure Duffle',
    tripType: 'Alpine & Urban Expedition',
    date: 'January 2026'
  },
  {
    id: 'rev-3',
    author: 'Marcus Sterling',
    location: 'Vancouver, Canada',
    title: 'Engineered for actual frequent flyers',
    comment: 'The Travel Organizer revolutionized how I pack my tech gear and passports. Everything is exactly where my fingers expect it to be. The understated gold hardware and stitching make it feel twice its price.',
    rating: 5,
    productPurchased: 'TRAVORA Travel Organizer',
    tripType: 'Global Business Travel',
    date: 'March 2026'
  }
];
