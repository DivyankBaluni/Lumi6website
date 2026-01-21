
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';

type NavbarProps = React.HtmlHTMLAttributes<HTMLElement> & {
  splashActive?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ splashActive, className, ...props }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    // Set up Intersection Observer for active section highlighting
    const sections = ['features', 'how-it-works', 'insights', 'proof'];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2, // Lower threshold for earlier detection
        rootMargin: '-80px 0px -40% 0px' // Adjust margin to detect section when it fills the view
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [location.pathname]);


  return (
    <nav
      {...props}
      className={`fixed top-0 left-0 right-0 z-50 py-2 md:py-4 px-4 md:px-10 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative h-8 w-auto overflow-hidden">
            {/* Text Logo - shown when not scrolled */}
            <div className={`transition-all duration-500 ease-in-out transform ${isScrolled
              ? 'opacity-0 scale-95 -translate-y-full absolute'
              : 'opacity-100 scale-100 translate-y-0'
              }`}>
              <Logo size="md" />
            </div>

            {/* SVG Logo - shown when scrolled */}
            <div className={`transition-all duration-500 ease-in-out transform ${isScrolled
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-full absolute'
              }`}>
              <img
                src="https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/Logo+1.svg"
                alt="Lumi6"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/products"
            className={`font-bold transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${location.pathname === '/products' ? 'text-rebuttl-blue after:scale-x-100' : 'text-gray-700 hover:text-rebuttl-blue'
              }`}
          >
            Products
          </Link>
          <Link
            to="/education"
            className={`font-bold transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${location.pathname === '/education' ? 'text-rebuttl-blue after:scale-x-100' : 'text-gray-700 hover:text-rebuttl-blue'
              }`}
          >
            Education
          </Link>
          <Link
            to="/individuals"
            className={`font-bold transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${location.pathname === '/individuals' ? 'text-rebuttl-blue after:scale-x-100' : 'text-gray-700 hover:text-rebuttl-blue'
              }`}
          >
            Individuals
          </Link>
          <Link
            to="/#features"
            className={`font-bold transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${activeSection === 'features' ? 'text-rebuttl-blue after:scale-x-100' : 'text-gray-700 hover:text-rebuttl-blue'
              }`}
          >
            Features
          </Link>
          <Link
            to="/blogs"
            className={`font-bold transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${location.pathname === '/blogs' ? 'text-rebuttl-blue after:scale-x-100' : 'text-gray-700 hover:text-rebuttl-blue'
              }`}
          >
            Blogs
          </Link>
        </div>

        <div className="hidden md:flex gap-4">
          <Button
            variant="ghost"
            className="min-w-[88px] px-4 py-2 whitespace-nowrap text-gray-700 hover:text-rebuttl-blue"
            onClick={() => window.open('https://app.lumi6.com/login', '_blank')}
          >
            Sign In
          </Button>
          <Button
            className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white min-w-[88px] px-4 py-2 whitespace-nowrap"
            onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu backdrop */}
      {/* {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )} */}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out translate-y-0">
          {/* <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50"> */}
          <div className="flex flex-col gap-4 py-4 px-4 max-h-[calc(100vh-73px)] overflow-y-auto">
            <Link to="/products" className="font-bold text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link to="/education" className="font-bold text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Education</Link>
            <Link to="/individuals" className="font-bold text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Individuals</Link>
            <Link to="/#features" className="font-bold text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link to="/blogs" className="font-bold text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
              <Button
                variant="ghost"
                // className="text-gray-700 hover:text-rebuttl-blue"
                className="text-sm md:text-base px-3 md:px-4 w-full max-w-[320px] mx-auto text-base"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open('https://app.lumi6.com/login', '_blank');
                }}
              >
                Sign In
              </Button>
              <Button
                // className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white"
                className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white 
                text-sm md:text-base px-3 md:px-4 w-full max-w-[320px] mx-auto text-base"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open('https://app.lumi6.com/signup', '_blank');
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
