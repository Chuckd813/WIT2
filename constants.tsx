
import React from 'react';
import { Business, BusinessCategory, Deal, EventInfo, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'browse', label: 'Browse' },
  { id: 'deals', label: 'Deals' },
  { id: 'events', label: 'Events' },
  { id: 'bookings', label: 'Bookings' },
  { id: 'add-business', label: 'Add Your Business' },
  // Contact is part of the footer, not a main nav item typically scrolled to.
];

export const TampaBayLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center ${className}`}>
    <span className="text-3xl font-bold text-sky-600">W</span>
    <span className="text-3xl font-bold text-slate-700">I</span>
    <span className="text-3xl font-bold text-orange-500">T</span>
    <span className="ml-2 text-xl font-semibold text-slate-600">Tampa Bay</span>
  </div>
);

export const MOCK_BUSINESSES: Business[] = [
  { id: '1', name: 'Sunset Grill', category: BusinessCategory.DINING, imageUrl: 'https://picsum.photos/seed/food1/400/300', bio: 'Waterfront dining with stunning sunset views.', rating: 4.5, reviewCount: 120, address: '123 Bayshore Blvd, Tampa, FL', isPromoted: true },
  { id: '2', name: 'Glamour Salon', category: BusinessCategory.BEAUTY, imageUrl: 'https://picsum.photos/seed/beauty1/400/300', bio: 'Top stylists for hair, nails, and makeup.', rating: 4.8, reviewCount: 85, address: '456 Hyde Park Ave, Tampa, FL' },
  { id: '3', name: 'Neon Nights Club', category: BusinessCategory.NIGHTLIFE, imageUrl: 'https://picsum.photos/seed/club1/400/300', bio: 'The hottest DJs and vibrant dance floor.', rating: 4.2, reviewCount: 210, address: '789 Ybor City, Tampa, FL' },
  { id: '4', name: 'Bay Wave Yachts', category: BusinessCategory.RENTALS, imageUrl: 'https://picsum.photos/seed/yacht1/400/300', bio: 'Luxury yacht rentals for any occasion.', rating: 4.9, reviewCount: 45, address: '101 Marina Dr, Tampa, FL' },
  { id: '5', name: 'Tampa Legal Eagles', category: BusinessCategory.LEGAL, imageUrl: 'https://picsum.photos/seed/legal1/400/300', bio: 'Experienced attorneys for all your legal needs.', rating: 4.7, reviewCount: 60, address: '202 Downtown St, Tampa, FL' },
  { id: '6', name: 'Coastal Celebrations', category: BusinessCategory.EVENTS_PLANNING, imageUrl: 'https://picsum.photos/seed/eventplan1/400/300', bio: 'Expert event planners for unforgettable moments.', rating: 4.6, reviewCount: 77, address: '303 Beach Dr, St Pete, FL', isPromoted: true },
  { id: '7', name: 'The Salty Pelican', category: BusinessCategory.DINING, imageUrl: 'https://picsum.photos/seed/food2/400/300', bio: 'Fresh seafood and casual beach vibes.', rating: 4.3, reviewCount: 150, address: '404 Clearwater St, Clearwater, FL' },
  { id: '8', name: 'Chic Cuts & Colors', category: BusinessCategory.BEAUTY, imageUrl: 'https://picsum.photos/seed/beauty2/400/300', bio: 'Modern haircuts and vibrant color specialists.', rating: 4.9, reviewCount: 92, address: '505 S Howard Ave, Tampa, FL' },
];

export const MOCK_DEALS: Deal[] = [
  { id: 'd1', title: '50% Off Sunset Cruise', businessName: 'Bay Wave Yachts', category: BusinessCategory.RENTALS, imageUrl: 'https://picsum.photos/seed/deal1/400/250', description: 'Enjoy a 2-hour luxury yacht cruise at half price!', originalPrice: 400, discountedPrice: 200, validUntil: '2024-12-31', ctaText: 'Claim This Deal' },
  { id: 'd2', title: 'BOGO Tapas Tuesday', businessName: 'Sunset Grill', category: BusinessCategory.DINING, imageUrl: 'https://picsum.photos/seed/deal2/400/250', description: 'Buy one tapas, get one free every Tuesday.', discountedPrice: 0, ctaText: 'Book Table', discountPercentage: 50 },
  { id: 'd3', title: '20% Off First Haircut', businessName: 'Glamour Salon', category: BusinessCategory.BEAUTY, imageUrl: 'https://picsum.photos/seed/deal3/400/250', description: 'New clients get 20% off their first haircut service.', discountedPrice: 0, discountPercentage: 20, ctaText: 'Book Appointment' },
];

export const MOCK_EVENTS: EventInfo[] = [
  { id: 'e1', title: 'Ybor City Saturday Market', date: 'Sat, Dec 7', time: '9 AM - 3 PM', location: 'Centennial Park, Ybor City', imageUrl: 'https://picsum.photos/seed/event1/400/250', description: 'Local artisans, food vendors, and live music.', category: 'Market', ticketLink: '#' },
  { id: 'e2', title: 'Gasparilla Pirate Fest', date: 'Sat, Jan 25', time: 'All Day', location: 'Bayshore Boulevard', imageUrl: 'https://picsum.photos/seed/event2/400/250', description: 'Tampa\'s iconic pirate invasion and parade!', category: 'Festival', ticketLink: '#' },
  { id: 'e3', title: 'Live Jazz Night at The Ritz', date: 'Fri, Dec 13', time: '8 PM - 11 PM', location: 'The Ritz Ybor', imageUrl: 'https://picsum.photos/seed/event3/400/250', description: 'Smooth jazz in a historic venue.', category: 'Music', ticketLink: '#' },
];

export const CATEGORIES = [
  { name: BusinessCategory.ALL, icon: 'fa-solid fa-border-all' },
  { name: BusinessCategory.DINING, icon: 'fa-solid fa-utensils' },
  { name: BusinessCategory.BEAUTY, icon: 'fa-solid fa-spa' },
  { name: BusinessCategory.NIGHTLIFE, icon: 'fa-solid fa-martini-glass-citrus' },
  { name: BusinessCategory.RENTALS, icon: 'fa-solid fa-ship' },
  { name: BusinessCategory.LEGAL, icon: 'fa-solid fa-gavel' },
  { name: BusinessCategory.EVENTS_PLANNING, icon: 'fa-solid fa-calendar-check' },
];
