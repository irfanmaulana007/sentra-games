'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to adjust padding
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once on mount to set initial state
    handleScroll();
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div 
        className={`flex-grow transition-all duration-300 ease-in-out ${scrolled ? 'pt-[72px]' : 'pt-[96px]'}`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
