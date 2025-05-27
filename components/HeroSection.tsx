
import React from 'react';
import { CATEGORIES } from '../constants';
import { BusinessCategory } from '../types';

interface HeroSectionProps {
  id: string;
  onCategorySelect: (category: BusinessCategory) => void;
  onSearch: (term: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id, onCategorySelect, onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  
  return (
    <section id={id} className="relative bg-gradient-to-r from-sky-600 via-sky-500 to-orange-400 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Discover Tampa Bay's Finest
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-sky-100">
          Your ultimate guide to local businesses, services, deals, and events in the heart of Florida's Gulf Coast.
        </p>
        
        <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for restaurants, salons, events..."
              className="w-full py-4 px-6 pr-12 text-slate-900 rounded-full shadow-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 h-full px-5 text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>

        <div className="mb-10">
          <p className="text-sm uppercase tracking-wider text-sky-200 mb-3">Popular Categories:</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {CATEGORIES.slice(1, 6).map((cat) => ( // Skip "All", take first 5 popular
              <button
                key={cat.name}
                onClick={() => onCategorySelect(cat.name)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-2 px-4 rounded-full text-sm sm:text-base transition-colors"
              >
                <i className={`${cat.icon} mr-2`}></i>{cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm inline-block py-2 px-5 rounded-lg">
          <p className="text-lg font-semibold">
            <i className="fas fa-users mr-2 text-orange-300"></i>
            <span className="font-bold text-xl">13,000+</span> monthly visitors and growing!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
