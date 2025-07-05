export enum OrderStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled'
}

export interface Order {
    id: string;
    user_id: string;
    status: OrderStatus;
    created_at: string;
    updated_at: string;
}

export interface OrderGameProduct extends Order {
    game_id: string;
    product_id: string;
    quantity: number;
    total_price: number;
}

export interface OrderProduct extends Order {
    product_id: string;
    quantity: number;
    total_price: number;
}