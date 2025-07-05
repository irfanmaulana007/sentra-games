export enum NewsType {
    Article = 'article',
    Updates = 'updates',
    Announcement = 'announcement'
}

export interface News {
    id: number;
    slug: string;
    author_id: number;
    title: string;
    content: string;
    image: string;
    type: NewsType;
    created_at: string;
    updated_at: string;
}