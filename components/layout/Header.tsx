'use client'

import Link from 'next/link';
import { useState } from 'react';
import SearchInput from 'components/ui/SearchInput';

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Implement actual search functionality here
  };
  return (
    <header className="w-full bg-sidebar border-b border-sidebar-border py-4 px-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-sidebar-primary-foreground">
            Sentra Gamers
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-sidebar-foreground hover:text-sidebar-primary-foreground transition-colors">
            Top-Up
          </Link>
          <Link href="/games" className="text-sidebar-foreground hover:text-sidebar-primary-foreground transition-colors">
            Shop
          </Link>
          <Link href="/news" className="text-sidebar-foreground hover:text-sidebar-primary-foreground transition-colors">
            Tournament
          </Link>
          <Link href="/community" className="text-sidebar-foreground hover:text-sidebar-primary-foreground transition-colors">
            News
          </Link>
          <Link href="/community" className="text-sidebar-foreground hover:text-sidebar-primary-foreground transition-colors">
            Community
          </Link>
        </nav>
        {/* Desktop Search */}
        <div className="hidden lg:flex items-center relative mx-4 flex-grow max-w-md">
          <SearchInput 
            placeholder="Search games, tournaments, news..." 
            onSearch={handleSearch} 
          />
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Mobile Search Button */}
          <button 
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-sidebar-border/50 transition-colors"
            aria-label="Search"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-sidebar-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          
          <button className="bg-sidebar-primary text-sidebar-primary-foreground px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Membership
          </button>
        </div>
      </div>
      
      {/* Mobile Search Dropdown */}
      {showMobileSearch && (
        <div className="lg:hidden w-full px-4 pb-4 transition-all duration-300 ease-in-out">
          <SearchInput 
            placeholder="Search games, tournaments, news..." 
            onSearch={handleSearch}
            autoFocus={true}
          />
        </div>
      )}
    </header>
  );
}
