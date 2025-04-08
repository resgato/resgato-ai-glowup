
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
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
            <span className="text-2xl font-bold bg-gradient-to-r from-resgato-navy to-resgato-blue bg-clip-text text-transparent">Resgato</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-700 hover:text-resgato-blue font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-resgato-blue font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-700 hover:text-resgato-blue font-medium p-0">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem to="/services" title="All Services">
                        Overview of our complete service offerings
                      </ListItem>
                      <ListItem to="/seo" title="SEO Services">
                        Search engine optimization for improved rankings
                      </ListItem>
                      <ListItem to="/ppc" title="PPC Campaigns">
                        Pay-per-click advertising for immediate visibility
                      </ListItem>
                      <ListItem to="/email-marketing" title="Email Marketing">
                        Strategic email campaigns to engage your audience
                      </ListItem>
                      <ListItem to="/strategic-consulting" title="Strategic Consulting">
                        Expert guidance for your digital marketing strategy
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/case-studies" className="text-gray-700 hover:text-resgato-blue font-medium transition-colors">
              Case Studies
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-resgato-blue font-medium transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-resgato-blue font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button asChild className="bg-resgato-blue hover:bg-resgato-navy text-white">
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
              className="text-gray-700 hover:text-resgato-blue font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-resgato-blue font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Services Section with nested links */}
            <div className="py-2">
              <Link
                to="/services"
                className="text-gray-700 hover:text-resgato-blue font-medium transition-colors flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Services</span>
              </Link>
              <div className="pl-4 mt-2 space-y-2 border-l border-gray-200">
                <Link
                  to="/seo"
                  className="block text-gray-600 hover:text-resgato-blue py-1 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SEO Services
                </Link>
                <Link
                  to="/ppc"
                  className="block text-gray-600 hover:text-resgato-blue py-1 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PPC Campaigns
                </Link>
                <Link
                  to="/email-marketing"
                  className="block text-gray-600 hover:text-resgato-blue py-1 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Email Marketing
                </Link>
                <Link
                  to="/strategic-consulting"
                  className="block text-gray-600 hover:text-resgato-blue py-1 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Strategic Consulting
                </Link>
              </div>
            </div>
            
            <Link
              to="/case-studies"
              className="text-gray-700 hover:text-resgato-blue font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-resgato-blue font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-resgato-blue font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-resgato-blue hover:bg-resgato-navy text-white w-full"
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

// ListItem component for the dropdown menu
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; title: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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

ListItem.displayName = "ListItem";

export default Navbar;
