
import React from 'react';
import { MOCK_EVENTS } from '../constants';
import { EventInfo } from '../types';

interface EventCardProps {
  event: EventInfo;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden group flex flex-col md:flex-row">
    <img src={event.imageUrl} alt={event.title} className="w-full md:w-1/3 h-48 md:h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="p-5 flex flex-col justify-between flex-grow">
      <div>
        <span className="text-xs text-orange-500 bg-orange-100 px-2 py-1 rounded-full font-semibold mb-1 inline-block">{event.category}</span>
        <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-sky-600 transition-colors">{event.title}</h3>
        <p className="text-slate-500 text-sm mb-1"><i className="fas fa-calendar-alt mr-2 text-sky-500"></i>{event.date} <span className="mx-1">|</span> <i className="fas fa-clock mr-1 text-sky-500"></i>{event.time}</p>
        <p className="text-slate-500 text-sm mb-3"><i className="fas fa-map-marker-alt mr-2 text-sky-500"></i>{event.location}</p>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{event.description}</p>
      </div>
      {event.ticketLink && (
        <a 
          href={event.ticketLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-auto self-start bg-sky-600 text-white py-2 px-5 rounded-lg hover:bg-sky-700 transition-colors font-semibold text-sm shadow-md hover:shadow-lg"
        >
          Get Tickets <i className="fas fa-ticket-alt ml-1"></i>
        </a>
      )}
    </div>
  </div>
);

const EventsSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Live Events Calendar</h2>
        <p className="text-center text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto">Don't miss out on the vibrant happenings around Tampa Bay. From festivals to concerts, there's always something exciting!</p>
        
        <div className="space-y-6 md:space-y-8">
          {MOCK_EVENTS.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
         <div className="text-center mt-12">
            <button className="bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors font-semibold shadow-md hover:shadow-lg">
                View Full Calendar <i className="fas fa-calendar-week ml-2"></i>
            </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
