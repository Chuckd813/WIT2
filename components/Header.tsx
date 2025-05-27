
import React, { useState } from 'react';
import { NAV_ITEMS, TampaBayLogo } from '../constants';
import { NavItem, SectionId } from '../types';

interface HeaderProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  onLoginClick: () => void;
  onBusinessLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, onLoginClick, onBusinessLoginClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink: React.FC<{ item: NavItem }> = ({ item }) => (
    <a
      href={`#${item.id}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(item.id);
        setIsMobileMenuOpen(false);
      }}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
        ${activeSection === item.id 
          ? 'bg-sky-600 text-white shadow-md' 
          : 'text-slate-700 hover:bg-sky-100 hover:text-sky-700'
        }
        lg:text-base`}
    >
      {item.label}
    </a>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
              <TampaBayLogo />
            </a>
          </div>
          <nav className="hidden md:flex space-x-1 lg:space-x-3">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={onLoginClick}
              className="px-4 py-2 text-sm font-medium text-sky-600 border border-sky-600 rounded-md hover:bg-sky-50 transition-colors"
            >
              User Login
            </button>
            <button
              onClick={onBusinessLoginClick}
              className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
            >
              Business Login
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-500 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 p-2 rounded-md"
              aria-label="Open main menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium 
                  ${activeSection === item.id 
                    ? 'bg-sky-600 text-white' 
                    : 'text-slate-700 hover:bg-sky-100 hover:text-sky-700'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 pb-3 border-t border-slate-200 px-4 space-y-2">
             <button
              onClick={() => { onLoginClick(); setIsMobileMenuOpen(false); }}
              className="w-full px-4 py-2 text-sm font-medium text-sky-600 border border-sky-600 rounded-md hover:bg-sky-50 transition-colors"
            >
              User Login
            </button>
            <button
              onClick={() => { onBusinessLoginClick(); setIsMobileMenuOpen(false); }}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
            >
              Business Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
