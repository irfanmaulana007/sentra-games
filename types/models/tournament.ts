export interface Tournament {
    id: string;
    game_id: string;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    stream_url: string;
    is_paid: boolean;
    price: number;
    max_participant: number;
    participant_count: number;
    created_at: string;
    updated_at: string;
}