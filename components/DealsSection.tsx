
import React from 'react';
import { MOCK_DEALS } from '../constants';
import { Deal } from '../types';

interface DealCardProps {
  deal: Deal;
}

const DealCard: React.FC<DealCardProps> = ({ deal }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group">
    <div className="relative">
      <img src={deal.imageUrl} alt={deal.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 m-2 rounded-full shadow-md">
        {deal.discountPercentage ? `${deal.discountPercentage}% OFF` : deal.originalPrice ? 'SALE' : 'SPECIAL'}
      </div>
    </div>
    <div className="p-5 flex-grow flex flex-col">
      <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-sky-600 transition-colors">{deal.title}</h3>
      <p className="text-xs text-slate-500 mb-2">
        <i className="fas fa-store mr-1 text-sky-500"></i>{deal.businessName} - <span className="font-semibold">{deal.category}</span>
      </p>
      <p className="text-slate-600 text-sm mb-3 flex-grow">{deal.description}</p>
      <div className="flex items-baseline mb-3">
        {deal.originalPrice && (
          <span className="text-slate-400 line-through mr-2 text-sm">${deal.originalPrice.toFixed(2)}</span>
        )}
        <span className="text-2xl font-bold text-orange-600">${deal.discountedPrice.toFixed(2)}</span>
      </div>
      {deal.validUntil && <p className="text-xs text-slate-500 mb-3"><i className="fas fa-clock mr-1"></i>Ends: {deal.validUntil}</p>}
      <button className="mt-auto w-full bg-orange-500 text-white py-2.5 px-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm shadow-md hover:shadow-lg">
        {deal.ctaText}
      </button>
    </div>
  </div>
);


const DealsSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-12 md:py-20 bg-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Hot Deals & Promotions</h2>
        <p className="text-center text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto">Grab these limited-time offers from top Tampa Bay businesses before they're gone!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {MOCK_DEALS.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
        
        <div className="text-center mt-12">
            <button className="bg-sky-600 text-white py-3 px-8 rounded-lg hover:bg-sky-700 transition-colors font-semibold shadow-md hover:shadow-lg">
                View All Deals <i className="fas fa-arrow-right ml-2"></i>
            </button>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
