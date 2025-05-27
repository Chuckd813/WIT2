
import React from 'react';
import { TampaBayLogo } from '../constants';
import { SectionId } from '../types';

interface FooterProps {
  onNavigate: (sectionId: SectionId) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact" className="bg-slate-800 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About & Logo */}
          <div>
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="inline-block mb-4">
              {/* Modified TampaBayLogo for footer */}
              <div className="flex items-center">
                <span className="text-3xl font-bold text-sky-400">W</span>
                <span className="text-3xl font-bold text-slate-200">I</span>
                <span className="text-3xl font-bold text-orange-400">T</span>
                <span className="ml-2 text-xl font-semibold text-slate-300">Tampa Bay</span>
              </div>
            </a>
            <p className="text-sm mb-4">
              Your premier guide to Tampa Bay's vibrant local scene. Discover, connect, and experience the best our city has to offer.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><i className="fab fa-facebook-f text-xl"></i></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><i className="fab fa-tiktok text-xl"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#browse" onClick={(e) => { e.preventDefault(); onNavigate('browse'); }} className="hover:text-sky-400 transition-colors">Browse Businesses</a></li>
              <li><a href="#deals" onClick={(e) => { e.preventDefault(); onNavigate('deals'); }} className="hover:text-sky-400 transition-colors">Hot Deals</a></li>
              <li><a href="#events" onClick={(e) => { e.preventDefault(); onNavigate('events'); }} className="hover:text-sky-400 transition-colors">Events Calendar</a></li>
              <li><a href="#add-business" onClick={(e) => { e.preventDefault(); onNavigate('add-business'); }} className="hover:text-sky-400 transition-colors">For Businesses</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Contact Us</h5>
             <form className="space-y-3">
               <input type="email" placeholder="Your Email" className="w-full bg-slate-700 text-slate-200 placeholder-slate-400 px-3 py-2.5 rounded-lg border border-slate-600 focus:ring-1 focus:ring-sky-500 focus:border-sky-500 focus:outline-none text-sm"/>
               <textarea placeholder="Your Message" rows={3} className="w-full bg-slate-700 text-slate-200 placeholder-slate-400 px-3 py-2.5 rounded-lg border border-slate-600 focus:ring-1 focus:ring-sky-500 focus:border-sky-500 focus:outline-none text-sm"></textarea>
               <button type="submit" className="w-full bg-orange-500 text-white py-2.5 px-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm">Send Message</button>
             </form>
          </div>
          
          {/* Newsletter */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Stay Updated</h5>
            <p className="text-sm mb-3">Subscribe to our newsletter for the latest Tampa Bay deals, events, and news.</p>
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="flex-grow bg-slate-700 text-slate-200 placeholder-slate-400 px-3 py-2.5 rounded-l-lg border border-slate-600 focus:ring-1 focus:ring-sky-500 focus:border-sky-500 focus:outline-none text-sm" />
              <button type="submit" className="bg-sky-600 text-white px-4 py-2.5 rounded-r-lg hover:bg-sky-700 transition-colors font-semibold text-sm">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} WIT Tampa Bay. All Rights Reserved.</p>
          <p className="mt-1">
            <a href="#privacy" className="hover:text-sky-400 transition-colors">Privacy Policy</a> | <a href="#terms" className="hover:text-sky-400 transition-colors">Terms of Service</a> | <a href="#business-login" className="hover:text-sky-400 transition-colors">Business Login</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
