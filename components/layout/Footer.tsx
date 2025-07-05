import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-white py-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* First column - 1/4 width */}
                    <div className="md:col-span-1">
                        <div className="flex flex-col gap-y-2 items-center">
                            <Image
                                src="/images/logo.webp"
                                alt="Sentra Gamers"
                                width={300}
                                height={144}
                            />
                            <div className="flex justify-center space-x-2">
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
                    <div className="md:col-span-2">
                        <div className="flex items-center justify-center gap-x-10 h-full">
                            <Link
                                href="/about"
                                className="text-crimson-trigger hover:text-crimson-trigger/80 transition-colors"
                            >
                                ABOUT US
                            </Link>
                            <Link
                                href="/terms"
                                className="text-crimson-trigger hover:text-crimson-trigger/80 transition-colors"
                            >
                                TERMS AND CONDITIONS
                            </Link>
                            <Link
                                href="/contact"
                                className="text-crimson-trigger hover:text-crimson-trigger/80 transition-colors"
                            >
                                CONTACT
                            </Link>
                        </div>
                    </div>

                    {/* Third column - 1/4 width */}
                    <div className="md:col-span-1 text-right">
                        <h4 className="text-base mb-1 text-crimson-trigger">LINKS</h4>
                        <ul>
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Top-Up
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/games"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/news"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Tournament
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/community"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/community"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-xs mt-4">
                    <p>
                        Copyright © {new Date().getFullYear()} SentraGamers. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
