export enum NewsType {
    Article = 'article',
    Updates = 'updates',
    Announcement = 'announcement'
}

export interface News {
    id: string;
    slug: string;
    author_id: string;
    title: string;
    content: string;
    image: string;
    type: NewsType;
    created_at: string;
    updated_at: string;
}