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
            to="/about" 
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link 
            to="/planning" 
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Trip Planning
          </Link>
          <div className="relative group">
            <button className="font-medium text-gray-600 hover:text-primary transition-colors flex items-center">
              Pages
              <svg 
                className="ml-1 h-4 w-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md mt-2">
              <Link 
                to="/destination" 
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Destination
              </Link>
              <Link 
                to="/booking" 
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Booking
              </Link>
              <Link 
                to="/travel-guide" 
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Travel Guide
              </Link>
            </div>
          </div>
          <Link 
            to="/blog" 
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Blog
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
              to="/about" 
              className="block py-2 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block py-2 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <div className="py-2">
              <button className="flex items-center text-gray-600">
                Pages
                <svg 
                  className="ml-1 h-4 w-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>
            </div>
            <Link 
              to="/blog" 
              className="block py-2 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-600"
              onClick={() => setIsOpen(false)}
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