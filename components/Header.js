'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Dropdown from './Dropdown';
import Button from './Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { 
      label: 'Insight', 
      type: 'dropdown',
      items: [
        { label: 'Our Blog', href: '/insights/blog' },
        { label: "Farmer's Story", href: '/insights/farmers-story' }
      ]
    },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo - centered on mobile, left on desktop */}
          <div className={`${isMobile ? 'mx-auto' : 'mr-auto'} lg:mr-0`}>
            <Image
              src="/heabron_logo.png"
              alt="Heabron Logo"
              width={120}
              height={40}
              className="h-10 w-auto animate-slide-down"
              style={{ animationDelay: '0.2s' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, index) => (
              item.type === 'dropdown' ? (
                <Dropdown 
                  key={index}
                  title={item.label}
                  items={item.items}
                />
              ) : (
                <Link 
                  key={index} 
                  href={item.href}
                  className={`relative inline-block py-2 transition-colors hover:text-gray-300 ${item.href === pathname ? 'text-gray-300 font-semibold' : ''} group animate-slide-down`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </nav>

          {/* Get Started Button - hidden on mobile */}
          <div className="hidden lg:block">
            <Button href="/get-started" className="animate-slide-down" style={{ animationDelay: `${navItems.length * 0.1}s` }}>
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && isMobile && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => {
                if (item.type === 'dropdown') {
                  return (
                    <div key={index} className="flex flex-col space-y-2">
                      <button
                        className="relative flex items-center justify-between py-2 text-left transition-colors hover:text-gray-300 group"
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                      </button>
                      {mobileDropdownOpen && (
                        <div className="flex flex-col space-y-2 pl-4">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={`${index}-${subIndex}`}
                              href={subItem.href}
                              className="relative block py-2 pl-4 text-sm transition-colors hover:text-gray-300 group"
                              onClick={() => {
                                setIsOpen(false);
                                setMobileDropdownOpen(false);
                              }}
                            >
                              {subItem.label}
                              <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="relative block py-2 transition-colors hover:text-gray-300 group"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                );
              })}
              <Button
                href="/get-started"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
