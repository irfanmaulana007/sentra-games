import Image from 'next/image';
import Link from 'next/link';
import { Product, GameProduct } from '@/types/models/product';
import { Tag, ShoppingCart } from 'lucide-react';
import { Button } from './button';

interface ProductCardProps {
    product: Product;
    className?: string;
}

interface GameProductCardProps {
    gameProduct: GameProduct;
    className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
    // Calculate discounted price
    const discountedPrice = product.price - (product.price * product.discount);
    const hasDiscount = product.discount > 0;
    
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}>
            <div className="aspect-[1/1] relative">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                />
                {hasDiscount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {Math.round(product.discount * 100)}% OFF
                    </div>
                )}
            </div>
            
            <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex justify-between items-center">
                    <div>
                        {hasDiscount ? (
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
                                <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                            </div>
                        ) : (
                            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        )}
                    </div>
                    
                    <Button size="sm" className="rounded-full">
                        <ShoppingCart size={16} className="mr-1" />
                        Add
                    </Button>
                </div>
                
                {product.stock < 10 && (
                    <div className="mt-2 text-xs text-amber-600">
                        Only {product.stock} left in stock
                    </div>
                )}
            </div>
        </div>
    );
}

export function GameProductCard({ gameProduct, className = '' }: GameProductCardProps) {
    // Calculate discounted price
    const discountedPrice = gameProduct.price - (gameProduct.price * gameProduct.discount);
    const hasDiscount = gameProduct.discount > 0;
    
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}>
            <div className="p-4">
                <div className="flex items-start justify-between">
                    <h3 className="font-medium text-gray-900 mb-1">{gameProduct.name}</h3>
                    {gameProduct.tags.length > 0 && (
                        <div className="flex items-center">
                            <Tag size={14} className="text-gray-500 mr-1" />
                            <span className="text-xs text-gray-500">{gameProduct.tags[0]}</span>
                        </div>
                    )}
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{gameProduct.description}</p>
                
                <div className="flex justify-between items-center">
                    <div>
                        {hasDiscount ? (
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
                                <span className="text-sm text-gray-500 line-through">${gameProduct.price.toFixed(2)}</span>
                            </div>
                        ) : (
                            <span className="text-lg font-bold text-gray-900">${gameProduct.price.toFixed(2)}</span>
                        )}
                    </div>
                    
                    <Button size="sm" className="rounded-full">
                        <ShoppingCart size={16} className="mr-1" />
                        Buy
                    </Button>
                </div>
            </div>
        </div>
    );
}

export function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-[1/1] bg-gray-200 animate-pulse"></div>
            <div className="p-4">
                <div className="h-5 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-3 w-full"></div>
                <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-1/4"></div>
                    <div className="h-8 bg-gray-200 rounded-full animate-pulse w-16"></div>
                </div>
            </div>
        </div>
    );
}
