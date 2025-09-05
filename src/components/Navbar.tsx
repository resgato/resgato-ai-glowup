import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-gray-700 hover:text-resgato-blue">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-resgato-light-purple to-resgato-purple p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              All Services
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Complete overview of our digital marketing solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem to="/seo" title="SEO Services">
                        Search engine optimization to improve your online visibility
                      </ListItem>
                      <ListItem to="/ppc" title="PPC Advertising">
                        Pay-per-click campaigns that drive qualified traffic
                      </ListItem>
                      <ListItem to="/social-media-marketing" title="Social Media">
                        Strategic social media campaigns for brand growth
                      </ListItem>
                      <ListItem to="/email-marketing" title="Email Marketing">
                        Targeted email campaigns that convert prospects
                      </ListItem>
                      <ListItem to="/website-development" title="Web Development">
                        Custom websites that drive results
                      </ListItem>
                      <ListItem to="/content-strategy" title="Content Strategy">
                        Strategic content that engages and converts
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Industry-Specific Landing Pages */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium text-gray-700 hover:text-resgato-blue">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem to="/dealershipmarketing" title="Dealership Marketing">
                        Specialized automotive marketing solutions
                      </ListItem>
                      <ListItem to="/utah-real-estate-marketing" title="Real Estate Marketing">
                        Marketing strategies for real estate professionals
                      </ListItem>
                      <ListItem to="/utah-marketing-firms" title="Utah Marketing Firms">
                        Why choose Resgato among Utah marketing agencies
                      </ListItem>
                      <ListItem to="/utahmarketingagency" title="Utah Marketing Agency">
                        Local marketing expertise for Utah businesses
                      </ListItem>
                      <ListItem to="/ai-consulting" title="AI Consulting">
                        Artificial intelligence solutions for business growth
                      </ListItem>
                      <ListItem to="/strategic-consulting" title="Strategic Consulting">
                        High-level business strategy and planning
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
              <div className="font-medium text-gray-700 mb-2">Services</div>
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
              <div className="font-medium text-gray-700 mb-2">Industries</div>
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

// ListItem component for the dropdown menu
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { to: string; title: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={to}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';

export default Navbar;
