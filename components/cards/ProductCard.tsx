'use client';

import { Product } from '../../types/models/product';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const discountedPrice =
        product.discount_percent > 0
            ? product.price * (1 - product.discount_percent / 100)
            : product.price;

    return (
        <div className="flex-[0_0_200px] mr-2 last:mr-0 overflow-hidden group cursor-pointer">
            <div className="p-3">
                <div className="aspect-square relative rounded-sm overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                    {product.discount_percent > 0 && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                            -{product.discount_percent}%
                        </div>
                    )}
                </div>
            </div>
            <div className="px-3 pb-3">
                <h3 className="font-medium text-sm line-clamp-2 h-10 transition-colors duration-300 group-hover:text-red-600">{product.name}</h3>
                <div className="mt-2">
                    {product.discount_percent > 0 ? (
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 line-through">
                                Rp{product.price.toLocaleString()}
                            </span>
                            <span className="text-red-600 font-bold">
                                Rp{discountedPrice.toLocaleString()}
                            </span>
                        </div>
                    ) : (
                        <span className="font-bold">Rp{product.price.toLocaleString()}</span>
                    )}
                </div>
            </div>
        </div>
    );
}
