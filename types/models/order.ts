export enum OrderStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled'
}

export interface Order {
    id: number;
    user_id: number;
    status: OrderStatus;
    created_at: string;
    updated_at: string;
}

export interface OrderGameProduct extends Order {
    game_id: number;
    product_id: number;
    quantity: number;
    total_price: number;
}

export interface OrderProduct extends Order {
    product_id: number;
    quantity: number;
    total_price: number;
}