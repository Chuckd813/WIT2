
import React, { useState, useMemo } from 'react';
import { MOCK_BUSINESSES, CATEGORIES } from '../constants';
import { Business, BusinessCategory } from '../types';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col h-full">
    <div className="relative">
      <img src={business.imageUrl} alt={business.name} className="w-full h-48 object-cover" />
      {business.isPromoted && (
        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Promoted</span>
      )}
       <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
         <h3 className="text-xl font-bold text-white truncate">{business.name}</h3>
         <span className="text-xs text-sky-300 bg-black/50 px-2 py-1 rounded-full">{business.category}</span>
       </div>
    </div>
    <div className="p-5 flex-grow flex flex-col">
      <p className="text-slate-600 text-sm mb-3 flex-grow h-16 overflow-hidden">{business.bio}</p>
      <div className="flex items-center mb-3">
        {[...Array(Math.floor(business.rating))].map((_, i) => <i key={i} className="fas fa-star text-amber-400"></i>)}
        {business.rating % 1 !== 0 && <i className="fas fa-star-half-alt text-amber-400"></i>}
        {[...Array(5 - Math.ceil(business.rating))].map((_, i) => <i key={i} className="far fa-star text-amber-400"></i>)}
        <span className="text-slate-500 text-xs ml-2">({business.reviewCount} reviews)</span>
      </div>
      {business.address && <p className="text-xs text-slate-500 mb-1"><i className="fas fa-map-marker-alt mr-2 text-sky-500"></i>{business.address}</p>}
      <div className="mt-auto pt-3">
        <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors font-semibold text-sm">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

interface BrowseBusinessesSectionProps {
  id: string;
  initialCategory?: BusinessCategory;
  searchTerm?: string;
}

const BrowseBusinessesSection: React.FC<BrowseBusinessesSectionProps> = ({ id, initialCategory, searchTerm: initialSearchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState<BusinessCategory>(initialCategory || BusinessCategory.ALL);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || '');

  const filteredBusinesses = useMemo(() => {
    return MOCK_BUSINESSES.filter(business => {
      const categoryMatch = selectedCategory === BusinessCategory.ALL || business.category === selectedCategory;
      const searchMatch = searchTerm === '' || 
                          business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          business.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          business.category.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id={id} className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Explore Local Businesses</h2>
        <p className="text-center text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto">Find the best Tampa Bay has to offer, from acclaimed restaurants to trusted local services.</p>

        {/* Filters and Search */}
        <div className="mb-10 p-4 sm:p-6 bg-white rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
               <input
                type="text"
                placeholder="Search by name, service, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pr-10 text-slate-700 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
              <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {CATEGORIES.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-150 ease-in-out border-2
                  ${selectedCategory === category.name 
                    ? 'bg-sky-600 text-white border-sky-600 shadow-md' 
                    : 'bg-white text-slate-600 border-slate-300 hover:bg-sky-50 hover:border-sky-500 hover:text-sky-600'
                  }`}
              >
                <i className={`${category.icon} mr-2`}></i>{category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Business Grid */}
        {filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredBusinesses.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500 text-lg py-10">
            No businesses found matching your criteria. Try adjusting your filters or search term.
          </p>
        )}
      </div>
    </section>
  );
};

export default BrowseBusinessesSection;
