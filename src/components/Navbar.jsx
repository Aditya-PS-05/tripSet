import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo-trip.png"
            alt="Tripset Logo" 
            className="h-8"
          />
          <span className="ml-2 text-2xl font-bold">Tripset</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="font-medium text-gray-900 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/planning" 
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Trip Planning
          </Link>
        </div>

        {/* Contact Button */}
        <Link 
          to="/contact"
          className="hidden md:block px-6 py-2 rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <Link 
              to="/" 
              className="block py-2 text-gray-900 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/planning" 
              className="block py-2 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Trip Planning
            </Link>
            <Link 
            to="/contact"
            className="block px-6 py-2 rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
            Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;