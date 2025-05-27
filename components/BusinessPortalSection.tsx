import React, { useState } from 'react';
import Modal from './Modal';

interface BusinessPortalSectionProps {
  id: string;
  onLoginClick: () => void;
}

export default function BusinessPortalSection({ id, onLoginClick }: BusinessPortalSectionProps): JSX.Element {
  const [showPricing, setShowPricing] = useState(false);
  
  // Placeholder form state
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(\`Thank you for registering \${businessName}! We've sent a confirmation to \${email}.\`);
    // Reset form
    setBusinessName('');
    setEmail('');
    setServiceCategory('');
  };

  return (
    <>
      <section id={id} className="py-12 md:py-20 bg-gradient-to-br from-sky-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Business with WIT</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-sky-100">
              Join Tampa Bay's premier digital marketplace. Showcase your services, connect with new customers, and boost your visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Signup Form Card */}
            <div className="bg-white text-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 text-center text-sky-700">Register Your Business Today!</h3>
              <form onSubmit={handleSignupSubmit} className="space-y-5">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-slate-600 mb-1">Business Name</label>
                  <input type="text" id="businessName" value={businessName} onChange={e => setBusinessName(e.target.value)} required className="w-full py-2.5 px-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"/>
                </div>
                <div>
                  <label htmlFor="businessEmail" className="block text-sm font-medium text-slate-600 mb-1">Business Email</label>
                  <input type="email" id="businessEmail" value={email} onChange={e => setEmail(e.target.value)} required className="w-full py-2.5 px-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"/>
                </div>
                <div>
                  <label htmlFor="serviceCategory" className="block text-sm font-medium text-slate-600 mb-1">Service Category</label>
                  <select id="serviceCategory" value={serviceCategory} onChange={e => setServiceCategory(e.target.value)} required className="w-full py-2.5 px-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none">
                    <option value="">Select category...</option>
                    <option value="dining">Dining</option>
                    <option value="beauty">Beauty</option>
                    <option value="nightlife">Nightlife</option>
                    <option value="rentals">Rentals</option>
                    <option value="legal">Legal Services</option>
                    <option value="event_planning">Event Planners</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg shadow-md hover:shadow-lg">
                  Create Free Listing
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-4 text-center">
                By signing up, you agree to our <a href="#terms" className="underline hover:text-sky-600">Terms of Service</a>.
              </p>
            </div>

            {/* Features Card */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-3xl font-semibold mb-6">Why Partner with Us?</h3>
              <ul className="space-y-4 text-lg text-sky-50">
                <li className="flex items-start"><i className="fas fa-bullseye text-orange-400 text-xl mr-3 mt-1"></i>Reach thousands of targeted local customers actively searching for your services.</li>
                <li className="flex items-start"><i className="fas fa-store-alt text-orange-400 text-xl mr-3 mt-1"></i>Easy-to-use dashboard to manage your profile, services, and special offers.</li>
                <li className="flex items-start"><i className="fas fa-ad text-orange-400 text-xl mr-3 mt-1"></i>Affordable advertising options and premium listings to stand out.</li>
                <li className="flex items-start"><i className="fas fa-chart-line text-orange-400 text-xl mr-3 mt-1"></i>Access analytics to track views, clicks, and bookings (Premium feature).</li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setShowPricing(true)}
                  className="bg-white text-sky-700 py-3 px-8 rounded-lg hover:bg-sky-100 transition-colors font-semibold shadow-lg text-lg"
                >
                  View Pricing & Ad Options
                </button>
                <button 
                  onClick={onLoginClick}
                  className="border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white/10 transition-colors font-semibold shadow-lg text-lg"
                >
                  Business Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={showPricing} onClose={() => setShowPricing(false)} title="Advertising Packages">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg text-slate-700">Basic Listing</h4>
            <p className="text-slate-600 text-sm">Free - Includes business name, category, and contact info.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-slate-700">Premium Listing - $49/mo</h4>
            <p className="text-slate-600 text-sm">Includes all Basic features + photo gallery, detailed bio, deal posting, prominent placement, basic analytics.</p>
          </div>
           <div>
            <h4 className="font-semibold text-lg text-slate-700">Featured Ad Spot - $99/mo</h4>
            <p className="text-slate-600 text-sm">Get your business featured on the homepage and top of category searches. Limited spots available.</p>
          </div>
          <button className="w-full bg-orange-500 text-white py-2.5 px-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
            Choose a Plan
          </button>
        </div>
      </Modal>
    </>
  );
}