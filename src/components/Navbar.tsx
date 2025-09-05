import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-resgato-navy to-resgato-blue bg-clip-text text-2xl font-bold text-transparent">
              Resgato
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              to="/case-studies"
              className="font-medium text-gray-700 transition-colors hover:text-resgato-blue"
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className="font-medium text-gray-700 transition-colors hover:text-resgato-blue"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center font-medium text-gray-700 transition-colors hover:text-resgato-blue">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full">
                    All Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/seo" className="w-full">
                    SEO Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ppc" className="w-full">
                    PPC Advertising
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/social-media-marketing" className="w-full">
                    Social Media
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/email-marketing" className="w-full">
                    Email Marketing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/website-development" className="w-full">
                    Web Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/content-strategy" className="w-full">
                    Content Strategy
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Industries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center font-medium text-gray-700 transition-colors hover:text-resgato-blue">
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/dealershipmarketing" className="w-full">
                    Dealership Marketing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/utah-real-estate-marketing" className="w-full">
                    Real Estate Marketing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/utah-marketing-firms" className="w-full">
                    Utah Marketing Firms
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/utahmarketingagency" className="w-full">
                    Utah Marketing Agency
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ai-consulting" className="w-full">
                    AI Consulting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/strategic-consulting" className="w-full">
                    Strategic Consulting
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/local-business-audit"
              className="font-medium text-gray-700 transition-colors hover:text-resgato-blue"
            >
              Free Audit
            </Link>
            <Link
              to="/blog"
              className="font-medium text-gray-700 transition-colors hover:text-resgato-blue"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="font-medium text-gray-700 transition-colors hover:text-resgato-blue"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-white px-4 pb-4 pt-2 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/case-studies"
              className="py-2 font-medium text-gray-700 transition-colors hover:text-resgato-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className="py-2 font-medium text-gray-700 transition-colors hover:text-resgato-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Services Section */}
            <div className="py-2">
              <div className="mb-2 font-medium text-gray-700">Services</div>
              <div className="ml-4 space-y-2">
                <Link
                  to="/services"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Services
                </Link>
                <Link
                  to="/seo"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SEO Services
                </Link>
                <Link
                  to="/ppc"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PPC Advertising
                </Link>
                <Link
                  to="/social-media-marketing"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Social Media
                </Link>
                <Link
                  to="/email-marketing"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Email Marketing
                </Link>
                <Link
                  to="/website-development"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  to="/content-strategy"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Content Strategy
                </Link>
              </div>
            </div>

            {/* Industries Section */}
            <div className="py-2">
              <div className="mb-2 font-medium text-gray-700">Industries</div>
              <div className="ml-4 space-y-2">
                <Link
                  to="/dealershipmarketing"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dealership Marketing
                </Link>
                <Link
                  to="/utah-real-estate-marketing"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Real Estate Marketing
                </Link>
                <Link
                  to="/utah-marketing-firms"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Utah Marketing Firms
                </Link>
                <Link
                  to="/utahmarketingagency"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Utah Marketing Agency
                </Link>
                <Link
                  to="/ai-consulting"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Consulting
                </Link>
                <Link
                  to="/strategic-consulting"
                  className="block py-1 text-sm text-gray-600 transition-colors hover:text-resgato-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Strategic Consulting
                </Link>
              </div>
            </div>

            <Link
              to="/local-business-audit"
              className="py-2 font-medium text-gray-700 transition-colors hover:text-resgato-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Audit
            </Link>
            <Link
              to="/blog"
              className="py-2 font-medium text-gray-700 transition-colors hover:text-resgato-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="py-2 font-medium text-gray-700 transition-colors hover:text-resgato-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
