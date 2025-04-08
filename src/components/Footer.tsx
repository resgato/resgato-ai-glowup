
import React from 'react';
import { Link } from 'react-router-dom';

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
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
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
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  PPC Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Strategic Consulting
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
