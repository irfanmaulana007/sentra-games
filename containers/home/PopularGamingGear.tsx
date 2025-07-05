'use client';

import { products } from 'constants/mock-data';
import ScrollContainer from '../../components/ui/ScrollContainer';
import ProductCard from '../../components/cards/ProductCard';

export default function PopularGamingGear() {
    return (
        <ScrollContainer
            title={
                <h3 className="text-lg font-bold font-sans">
                    🛒 <span className="text-red-600">Gear Baru,</span> Main Makin Seru!
                </h3>
            }
        >
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ScrollContainer>
    );
}
