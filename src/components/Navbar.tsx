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
            <Link
              to="/services"
              className="font-medium text-gray-700 transition-colors hover:text-resgato-blue"
            >
              Services
            </Link>
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
            <Link
              to="/services"
              className="py-2 font-medium text-gray-700 transition-colors hover:text-resgato-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
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
