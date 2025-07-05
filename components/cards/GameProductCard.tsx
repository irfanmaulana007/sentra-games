'use client';

import { GameProduct } from '../../types/models/product';
import { Game } from '../../types/models/game';
import Image from 'next/image';
import Link from 'next/link';

interface GameProductCardProps {
    product: GameProduct;
    game: Game;
    className?: string;
}

export default function GameProductCard({ product, game, className = '' }: GameProductCardProps) {
    const discountedPrice =
        product.price > 0 && product.discount_percent > 0
            ? product.price * (1 - product.discount_percent / 100)
            : product.price;

    return (
        <Link href={`/games/${game.id}/products/${product.id}`} className={`block ${className}`}>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-flash-sale-card group cursor-pointer relative">
                <div className="p-3 flex flex-col justify-between h-full">
                    <div className="flex flex-col">
                        <div className="pb-0">
                            {product.tags && product.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mb-2">
                                    {product.tags.map((tag: string, index: number) => (
                                        <span
                                            key={index}
                                            className="bg-white/20 text-neutral-50 text-xs px-2 py-0.5 rounded-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="relative w-6 h-6 rounded-sm overflow-hidden">
                                <Image
                                    src={game.image_thumbnail}
                                    alt={game.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xs text-neutral-50 truncate">{game.name}</span>
                        </div>
                        <h3 className="font-medium text-xl mt-1 transition-colors duration-300 text-neutral-50">
                            {product.name}
                        </h3>
                    </div>

                    <div>
                        {product.discount_percent > 0 ? (
                            <div className="flex flex-col">
                                <div className="flex items-center gap-x-2">
                                    <span className="text-xs text-neutral-200 line-through">
                                        Rp{product.price.toLocaleString()}
                                    </span>
                                    <span className="text-xs bg-green-600 px-1 py-0.5 rounded-sm text-neutral-50">
                                        {product.discount_percent}%
                                    </span>
                                </div>
                                <span className="text-neutral-50 font-bold">
                                    Rp{discountedPrice.toLocaleString()}
                                </span>
                            </div>
                        ) : (
                            <span className="font-bold text-neutral-50">
                                Rp{product.price.toLocaleString()}
                            </span>
                        )}
                    </div>
                </div>

                <div className="absolute bottom-0 right-0">
                    <Image
                        src="/images/illustration/flame.webp"
                        alt="Heart"
                        width={132}
                        height={204}
                    />
                </div>
            </div>
        </Link>
    );
}
