
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-resgato-dark-purple text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Resgato</h2>
            <p className="text-gray-300 max-w-xs">
              Digital marketing agency founded in 2012, helping businesses optimize their online presence and drive results.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/taylorbrody" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/resgatomarketing" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/seo" className="text-gray-300 hover:text-white transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/ppc" className="text-gray-300 hover:text-white transition-colors">
                  PPC Services
                </Link>
              </li>
              <li>
                <Link to="/social-media-marketing" className="text-gray-300 hover:text-white transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/email-marketing" className="text-gray-300 hover:text-white transition-colors">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link to="/content-strategy" className="text-gray-300 hover:text-white transition-colors">
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link to="/ai-consulting" className="text-gray-300 hover:text-white transition-colors">
                  AI Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Salt Lake City, Utah
              </li>
              <li>
                <a href="tel:+18017421540" className="text-gray-300 hover:text-white transition-colors">
                  (801) 742-1540
                </a>
              </li>
              <li>
                <a href="mailto:help@resgato.com" className="text-gray-300 hover:text-white transition-colors">
                  help@resgato.com
                </a>
              </li>
              <li className="text-gray-300">
                <p>
                  New clients: Use contact form<br />
                  Current clients: Email help@resgato.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-center">Certifications & Partnerships</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/10 px-4 py-2 rounded">Google Ads Certified</div>
            <div className="bg-white/10 px-4 py-2 rounded">Google Analytics Certified</div>
            <div className="bg-white/10 px-4 py-2 rounded">Facebook Marketing Partner</div>
            <div className="bg-white/10 px-4 py-2 rounded">TikTok Agency</div>
            <div className="bg-white/10 px-4 py-2 rounded">Mailchimp Agency</div>
          </div>
          <p className="text-gray-400 text-sm text-center">
            &copy; {currentYear} Resgato. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
