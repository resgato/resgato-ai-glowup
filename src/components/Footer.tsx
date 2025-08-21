import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-resgato-dark-purple pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Resgato</h2>
            <p className="max-w-xs text-gray-300">
              Utah's leading digital marketing agency founded in 2012, helping
              local businesses optimize their online presence and drive
              measurable results.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/taylorbrody"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/resgatomarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/utah-marketing-firms"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Utah Marketing Firms
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/local-business-audit"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Free Audit
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/seo"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  to="/ppc"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Utah PPC Services
                </Link>
              </li>
              <li>
                <Link
                  to="/social-media-marketing"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/email-marketing"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/content-strategy"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-consulting"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  AI Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Salt Lake City, Utah</li>
              <li>
                <a
                  href="tel:+18017421540"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  (801) 742-1540
                </a>
              </li>
              <li>
                <a
                  href="mailto:help@resgato.com"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  help@resgato.com
                </a>
              </li>
              <li className="text-gray-300">
                <p>
                  New clients: Use contact form
                  <br />
                  Current clients: Email help@resgato.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Services Links */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-4 text-sm uppercase tracking-wider text-gray-400">
                Utah PPC Services
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>
                  <Link
                    to="/ppc"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Google Ads Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ppc"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    PPC Strategy Utah
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ppc"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Salt Lake City PPC Agency
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ppc"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Paid Search Utah
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm uppercase tracking-wider text-gray-400">
                SEO & Digital Services
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>
                  <Link
                    to="/seo"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Utah SEO Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/content-strategy"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Content Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-consulting"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/strategic-consulting"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Digital Strategy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <h3 className="mb-4 text-center text-lg font-semibold">
            Certifications & Partnerships
          </h3>
          <div className="mb-8 flex flex-wrap justify-center gap-6">
            <div className="rounded bg-white/10 px-4 py-2">
              Google Ads Certified
            </div>
            <div className="rounded bg-white/10 px-4 py-2">
              Google Analytics Certified
            </div>
            <div className="rounded bg-white/10 px-4 py-2">
              Facebook Marketing Partner
            </div>
            <div className="rounded bg-white/10 px-4 py-2">TikTok Agency</div>
            <div className="rounded bg-white/10 px-4 py-2">
              Mailchimp Agency
            </div>
          </div>
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} Resgato. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
