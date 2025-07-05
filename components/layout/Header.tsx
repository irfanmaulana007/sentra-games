'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SearchInput from 'components/ui/SearchInput';
import Image from 'next/image';
import { User } from 'lucide-react';
import { Button } from 'components/ui/button';

export default function Header() {
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Track scroll position and update header state
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

    const handleSearch = (query: string) => {
        console.log('Searching for:', query);
        // Implement actual search functionality here
    };
    
    return (
        <header 
            className={`w-full bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
                scrolled ? 'py-2 shadow-sm' : 'py-4'
            } px-6`}>
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                    <Link href="/">
                        <div className="relative transition-all duration-300">
                            <Image
                                src="/images/logo.webp"
                                alt="Sentra Gamers"
                                width={scrolled ? 134 : 154}
                                height={scrolled ? 63 : 73}
                                className="transition-all duration-300"
                            />
                        </div>
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="text-black hover:text-gray-800 transition-colors">
                        Top-Up
                    </Link>
                    <Link
                        href="/games"
                        className="text-black hover:text-gray-800 transition-colors"
                    >
                        Shop
                    </Link>
                    <Link href="/news" className="text-black hover:text-gray-800 transition-colors">
                        Tournament
                    </Link>
                    <Link
                        href="/community"
                        className="text-black hover:text-gray-800 transition-colors"
                    >
                        News
                    </Link>
                    <Link
                        href="/community"
                        className="text-black hover:text-gray-800 transition-colors"
                    >
                        Community
                    </Link>
                </nav>

                <div className="flex items-center gap-x-4">
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

                        <Button className="rounded-full bg-button-fireburst">Membership</Button>
                    </div>

                    {/* Desktop Search */}
                    <div className="hidden lg:flex items-center relative flex-grow max-w-md">
                        <SearchInput
                            className="text-sm"
                            placeholder="Find top-up, vouchers, more..."
                            onSearch={handleSearch}
                        />
                    </div>

                    <Button variant="ghost" size="icon" className="rounded-full">
                        <User className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Mobile Search Dropdown */}
            {showMobileSearch && (
                <div className="lg:hidden w-full px-4 pb-4 transition-all duration-300 ease-in-out">
                    <SearchInput
                        className="text-sm"
                        placeholder="Find top-up, vouchers, more..."
                        onSearch={handleSearch}
                        autoFocus={true}
                    />
                </div>
            )}
        </header>
    );
}
