export interface GameProduct {
    id: string;
    game_id: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    tags: string[];
    stock: number;
    created_at: string;
    updated_at: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    stock: number;
    image: string;
    created_at: string;
    updated_at: string;
}