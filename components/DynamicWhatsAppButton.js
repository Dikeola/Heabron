'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function DynamicWhatsAppButton() {
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: '#10b981',
    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4), 0 0 0 3px rgba(255, 255, 255, 0.3)',
  });

  useEffect(() => {
    const sections = [
      { selector: '.bg-green-700, .bg-green-800, .bg-green-600', bgColor: '#059669', shadowColor: 'rgba(5, 150, 105, 0.6)' },
      { selector: '.bg-black', bgColor: '#1f2937', shadowColor: 'rgba(31, 41, 55, 0.8)' },
      { selector: '.bg-gray-50', bgColor: '#f9fafb', shadowColor: 'rgba(249, 250, 251, 0.9)' },
      { selector: '.bg-white', bgColor: '#ffffff', shadowColor: 'rgba(255, 255, 255, 0.9)' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        let maxRatio = 0;
        let dominantSection = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            dominantSection = entry.target;
          }
        });

        if (dominantSection) {
          const computedStyle = window.getComputedStyle(dominantSection);
          const backgroundColor = computedStyle.backgroundColor;

          // Determine button style based on background
          if (backgroundColor.includes('rgb(34, 197, 94)') || backgroundColor.includes('rgb(21, 128, 61)')) {
            // Green sections
            setButtonStyle({
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4), 0 0 0 3px rgba(16, 185, 129, 1)',
            });
          } else if (backgroundColor.includes('rgb(0, 0, 0)')) {
            // Black sections
            setButtonStyle({
              backgroundColor: '#10b981',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.6), 0 0 0 3px rgba(255, 255, 255, 0.5)',
            });
          } else {
            // Light sections (white, gray)
            setButtonStyle({
              backgroundColor: '#10b981',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4), 0 0 0 3px rgba(255, 255, 255, 0.3)',
            });
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe all sections
    sections.forEach(({ selector }) => {
      document.querySelectorAll(selector).forEach((section) => {
        observer.observe(section);
      });
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#059669';
    e.target.style.boxShadow = `0 6px 20px ${buttonStyle.boxShadow.includes('rgba(255, 255, 255)') ? 'rgba(16, 185, 129, 0.6), 0 0 0 4px rgba(255, 255, 255, 0.4)' : 'rgba(16, 185, 129, 0.6)'}`;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = buttonStyle.backgroundColor;
    e.target.style.boxShadow = buttonStyle.boxShadow;
  };

  return (
    <a
      href="https://wa.me/2348123726444"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-[100] group"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 100,
        ...buttonStyle,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
}
