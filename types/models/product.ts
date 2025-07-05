export interface GameProduct {
    id: number;
    game_id: number;
    name: string;
    description: string;
    price: number;
    discount_percent: number;
    tags: string[];
    stock: number;
    created_at: string;
    updated_at: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    discount_percent: number;
    stock: number;
    image: string;
    created_at: string;
    updated_at: string;
}