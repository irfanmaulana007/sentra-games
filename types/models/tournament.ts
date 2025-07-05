export interface Tournament {
    id: number;
    game_id: number;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    stream_url: string;
    is_paid: boolean;
    price: number;
    max_participant: number;
    participant_count: number;
    thumbnail: string;
    created_at: string;
    updated_at: string;
}