import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* First column - 1/4 width */}
                    <div className="lg:col-span-1">
                        <div className="flex flex-col gap-y-2 items-center lg:items-start">
                            <Image
                                src="/images/logo.webp"
                                alt="Sentra Gamers"
                                width={240}
                                height={115}
                                className="w-auto h-auto max-w-[200px] lg:max-w-[240px]"
                            />
                            <div className="flex justify-center lg:justify-start space-x-3 mt-2">
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    className="opacity-70 hover:opacity-100 transition-all"
                                >
                                    <Image
                                        src="/images/icons/facebook.svg"
                                        alt="Facebook"
                                        width={20}
                                        height={20}
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    className="opacity-70 hover:opacity-100 transition-all"
                                >
                                    <Image
                                        src="/images/icons/instagram.svg"
                                        alt="Instagram"
                                        width={20}
                                        height={20}
                                    />
                                </a>
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    className="opacity-70 hover:opacity-100 transition-all"
                                >
                                    <Image
                                        src="/images/icons/whatsapp.svg"
                                        alt="Whatsapp"
                                        width={20}
                                        height={20}
                                    />
                                </a>
                                <a
                                    href="https://discord.gg"
                                    target="_blank"
                                    className="opacity-70 hover:opacity-100 transition-all"
                                >
                                    <Image
                                        src="/images/icons/discord.svg"
                                        alt="Discord"
                                        width={20}
                                        height={20}
                                    />
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    className="opacity-70 hover:opacity-100 transition-all"
                                >
                                    <Image
                                        src="/images/icons/youtube.svg"
                                        alt="Youtube"
                                        width={20}
                                        height={20}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Second column - 2/4 width */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-x-10 h-full">
                            <Link
                                href="/about"
                                className="text-crimson-trigger hover:text-crimson-trigger/80 transition-colors py-2 lg:py-0 block lg:inline"
                            >
                                ABOUT US
                            </Link>
                            <Link
                                href="/terms"
                                className="text-crimson-trigger hover:text-crimson-trigger/80 transition-colors py-2 md:py-0 block md:inline"
                            >
                                TERMS AND CONDITIONS
                            </Link>
                            <Link
                                href="/contact"
                                className="text-crimson-trigger hover:text-crimson-trigger/80 transition-colors py-2 lg:py-0 block lg:inline"
                            >
                                CONTACT
                            </Link>
                        </div>
                    </div>

                    {/* Third column - 1/4 width */}
                    <div className="lg:col-span-1 text-center lg:text-right">
                        <h4 className="text-base mb-1 text-crimson-trigger">LINKS</h4>
                        <ul className="space-y-1">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 hover:text-gray-900 transition-colors block py-1"
                                >
                                    Top-Up
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/games"
                                    className="text-gray-600 hover:text-gray-900 transition-colors block py-1"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/news"
                                    className="text-gray-600 hover:text-gray-900 transition-colors block py-1"
                                >
                                    Tournament
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/community"
                                    className="text-gray-600 hover:text-gray-900 transition-colors block py-1"
                                >
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/community"
                                    className="text-gray-600 hover:text-gray-900 transition-colors block py-1"
                                >
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-xs mt-8 md:mt-4 border-t border-gray-200 pt-4 md:pt-2">
                    <p>
                        Copyright © {new Date().getFullYear()} SentraGamers. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
