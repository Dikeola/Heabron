'use client';

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const footerNavItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Our Blog', href: '/insights/blog' },
    { label: "Farmer's Story", href: '/insights/farmers-story' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-green-400" />,
      label: 'Phone',
      value: '+234 812 372 6444',
    },
    {
      icon: <FaEnvelope className="text-green-400" />,
      label: 'Email',
      value: 'info@heabron.com',
      href: 'mailto:info@heabron.com'
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 w-full max-w-none">
          {/* Column 1: Logo and Company Info */}
          <div className="w-full text-center">
            <img src="/heabron_logo.png" alt="Heabron Logo" className="h-12 w-auto mb-4 mx-auto" />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Empowering farmers and agricultural communities through innovative solutions and cooperative partnerships.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/Heabron/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-white" />
              </a>
              <a
                href="https://twitter.com/Heabron_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/heabron_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/heabron-farm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@Heabron-farm-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-300">© {new Date().getFullYear()} Heabron. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
