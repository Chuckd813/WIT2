import React, { useState } from 'react';
import { MOCK_BUSINESSES } from '../constants';
import { BusinessCategory } from '../types';

interface BookingSectionProps {
  id: string;
}

export default function BookingSection({ id }: BookingSectionProps): JSX.Element {
  const [serviceType, setServiceType] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);

  const featuredServices = MOCK_BUSINESSES.filter(b => b.category === BusinessCategory.RENTALS || b.category === BusinessCategory.BEAUTY).slice(0,2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic alert, in a real app this would trigger a search or booking flow
    alert(\`Searching for \${serviceType} on \${date} for \${guests} guest(s).\`);
  };

  return (
    <section id={id} className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">Book Your Next Experience</h2>
        <p className="text-center text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto">Easily find and book services, rentals, and appointments with Tampa Bay's top providers.</p>

        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold text-slate-700 mb-6 text-center">Quick Book</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
              <select
                id="serviceType"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full py-2.5 px-3 text-slate-700 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                required
              >
                <option value="">Select a service...</option>
                <option value="yacht_rental">Yacht Rental</option>
                <option value="restaurant_reservation">Restaurant Reservation</option>
                <option value="salon_appointment">Salon Appointment</option>
                <option value="event_tickets">Event Tickets</option>
                <option value="legal_consultation">Legal Consultation</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full py-2.5 px-3 text-slate-700 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-slate-700 mb-1">Guests / People</label>
                <input
                  type="number"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  min="1"
                  className="w-full py-2.5 px-3 text-slate-700 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-sky-600 text-white py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg">
              Search Availability
            </button>
          </form>
        </div>

        {featuredServices.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 text-center mb-8">Featured Bookable Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredServices.map(service => (
                <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <img src={service.imageUrl} alt={service.name} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">{service.name}</h4>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{service.bio}</p>
                    <button className="w-full bg-orange-500 text-white py-2.5 px-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm shadow-md hover:shadow-lg">
                      Book Now <i className="fas fa-calendar-check ml-1"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}