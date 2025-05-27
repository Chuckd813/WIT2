
export enum BusinessCategory {
  ALL = "All",
  DINING = "Dining",
  BEAUTY = "Beauty",
  NIGHTLIFE = "Nightlife",
  RENTALS = "Rentals",
  LEGAL = "Legal",
  EVENTS_PLANNING = "Event Planners",
  OTHER = "Other",
}

export interface Business {
  id: string;
  name: string;
  category: BusinessCategory;
  imageUrl: string;
  logoUrl?: string;
  bio: string;
  rating: number;
  reviewCount: number;
  address?: string;
  phone?: string;
  website?: string;
  isPromoted?: boolean;
}

export interface Deal {
  id: string;
  title: string;
  businessName: string;
  category: BusinessCategory;
  imageUrl: string;
  description: string;
  originalPrice?: number;
  discountedPrice: number;
  discountPercentage?: number;
  validUntil?: string;
  ctaText: string;
}

export interface EventInfo {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  description: string;
  ticketLink?: string;
  category: string; // e.g., "Club Night", "Yacht Party"
}

export type SectionId = 'home' | 'browse' | 'deals' | 'events' | 'bookings' | 'add-business' | 'contact' | 'sponsors';

export interface NavItem {
  id: SectionId;
  label: string;
}
