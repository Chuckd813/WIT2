
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrowseBusinessesSection from './components/BrowseBusinessesSection';
import DealsSection from './components/DealsSection';
import EventsSection from './components/EventsSection';
import BookingSection from './components/BookingSection';
import BusinessPortalSection from './components/BusinessPortalSection';
import AdSpace from './components/AdSpace';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { SectionId, BusinessCategory } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isUserLoginModalOpen, setIsUserLoginModalOpen] = useState(false);
  const [isBusinessLoginModalOpen, setIsBusinessLoginModalOpen] = useState(false);

  // For BrowseSection filtering from Hero
  const [browseInitialCategory, setBrowseInitialCategory] = useState<BusinessCategory | undefined>(undefined);
  const [browseInitialSearchTerm, setBrowseInitialSearchTerm] = useState<string | undefined>(undefined);


  const handleNavigate = useCallback((sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Clear browse filters if navigating away from a hero-initiated browse
      if (sectionId !== 'browse') {
        setBrowseInitialCategory(undefined);
        setBrowseInitialSearchTerm(undefined);
      }
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId); // Update active section for header styling
    }
  }, []);
  
  const handleHeroCategorySelect = (category: BusinessCategory) => {
    setBrowseInitialCategory(category);
    setBrowseInitialSearchTerm(undefined); // Clear search term
    handleNavigate('browse');
  };

  const handleHeroSearch = (term: string) => {
    setBrowseInitialCategory(BusinessCategory.ALL); // Reset category to all
    setBrowseInitialSearchTerm(term);
    handleNavigate('browse');
  };

  // Update active section on scroll
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) { // Adjust threshold as needed
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-50% 0px -50% 0px" } // Trigger when middle of section is in middle of viewport
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        onLoginClick={() => setIsUserLoginModalOpen(true)}
        onBusinessLoginClick={() => setIsBusinessLoginModalOpen(true)}
      />
      <main className="flex-grow">
        <HeroSection id="home" onCategorySelect={handleHeroCategorySelect} onSearch={handleHeroSearch} />
        <BrowseBusinessesSection 
          id="browse" 
          initialCategory={browseInitialCategory} 
          searchTerm={browseInitialSearchTerm}
        />
        <DealsSection id="deals" />
        <AdSpace id="sponsors"/> {/* Mid-page ad space example */}
        <EventsSection id="events" />
        <BookingSection id="bookings" />
        <BusinessPortalSection id="add-business" onLoginClick={() => setIsBusinessLoginModalOpen(true)} />
      </main>
      <Footer onNavigate={handleNavigate} />

      {/* User Login Modal */}
      <Modal 
        isOpen={isUserLoginModalOpen} 
        onClose={() => setIsUserLoginModalOpen(false)} 
        title="User Login"
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input type="password" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm" />
          </div>
          <button type="submit" className="w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700">Login</button>
          <p className="text-sm text-center text-slate-600">Don't have an account? <a href="#" className="font-medium text-sky-600 hover:text-sky-500">Sign up</a></p>
        </form>
      </Modal>

      {/* Business Login Modal */}
      <Modal 
        isOpen={isBusinessLoginModalOpen} 
        onClose={() => setIsBusinessLoginModalOpen(false)} 
        title="Business Login"
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Business Email</label>
            <input type="email" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input type="password" className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">Login to Portal</button>
          <p className="text-sm text-center text-slate-600">New business? <a href="#add-business" onClick={() => { setIsBusinessLoginModalOpen(false); handleNavigate('add-business');}} className="font-medium text-orange-600 hover:text-orange-500">Register here</a></p>
        </form>
      </Modal>
    </div>
  );
};

export default App;
