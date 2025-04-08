
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-resgato-deep-purple to-resgato-purple bg-clip-text text-transparent">Resgato</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-700 hover:text-resgato-purple font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-resgato-purple font-medium transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-resgato-purple font-medium transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-resgato-purple font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button asChild className="bg-resgato-purple hover:bg-resgato-deep-purple text-white">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-resgato-purple font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-resgato-purple font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-resgato-purple font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-resgato-purple font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-resgato-purple hover:bg-resgato-deep-purple text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
