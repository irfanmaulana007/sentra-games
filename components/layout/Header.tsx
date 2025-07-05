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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            } px-6`}
        >
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-sidebar-border/50 transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {mobileMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="4" y1="8" x2="20" y2="8" />
                                <line x1="4" y1="16" x2="20" y2="16" />
                            </>
                        )}
                    </svg>
                </button>

                <div className="flex items-center">
                    <Link href="/">
                        <div className="relative transition-all duration-300">
                            <Image
                                src="/images/logo.webp"
                                alt="Sentra Gamers"
                                width={scrolled ? 134 : 154}
                                height={scrolled ? 63 : 73}
                                className="transition-all duration-300 hidden lg:block"
                            />
                            <Image
                                src="/images/logo.webp"
                                alt="Sentra Gamers"
                                width={scrolled ? 100 : 120}
                                height={scrolled ? 50 : 60}
                                className="transition-all duration-300 lg:hidden"
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

                <div className="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-4">
                    <div className="flex items-center space-x-4">
                        {/* Mobile Search Button */}
                        <button
                            onClick={() => setShowMobileSearch(!showMobileSearch)}
                            className="lg:hidden flex items-center mr-0 justify-center w-10 h-10 rounded-full hover:bg-sidebar-border/50 transition-colors"
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

                        <Button className="rounded-full bg-button-fireburst hidden lg:block">
                            Membership
                        </Button>
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

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMobileMenuOpen(false)}
            ></div>

            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                    mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } shadow-xl overflow-y-auto`}
            >
                <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <Image
                            src="/images/logo.webp"
                            alt="Sentra Gamers"
                            width={120}
                            height={60}
                            className="w-auto h-auto"
                        />
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-100"
                            aria-label="Close menu"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    <Link
                        href="/"
                        className="text-black hover:text-gray-800 transition-colors py-2 border-b border-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Top-Up
                    </Link>
                    <Link
                        href="/games"
                        className="text-black hover:text-gray-800 transition-colors py-2 border-b border-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Shop
                    </Link>
                    <Link
                        href="/news"
                        className="text-black hover:text-gray-800 transition-colors py-2 border-b border-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Tournament
                    </Link>
                    <Link
                        href="/community"
                        className="text-black hover:text-gray-800 transition-colors py-2 border-b border-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        News
                    </Link>
                    <Link
                        href="/community"
                        className="text-black hover:text-gray-800 transition-colors py-2 border-b border-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Community
                    </Link>
                    <Button
                        className="rounded-full bg-button-fireburst mt-4"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Membership
                    </Button>
                </nav>
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
