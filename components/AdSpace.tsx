
import React from 'react';

const AdSpace: React.FC<{id?: string}> = ({id}) => {
  // In a real app, this would fetch ads or rotate them
  const ad = {
    imageUrl: 'https://picsum.photos/seed/ad1/800/100',
    link: '#',
    altText: 'Promotional Ad Banner for Local Business',
    sponsorName: 'Tampa Bay Auto Group'
  };

  return (
    <section id={id} className="py-8 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-xs uppercase text-slate-500 font-semibold">Sponsored Content</span>
        </div>
        <a href={ad.link} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={ad.imageUrl} alt={ad.altText} className="w-full h-auto object-contain" />
        </a>
        <p className="text-center text-xs text-slate-500 mt-2">Advertisement by {ad.sponsorName}</p>
      </div>
    </section>
  );
};

export default AdSpace;
