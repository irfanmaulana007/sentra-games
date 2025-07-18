import { User } from 'types/models/user';
import { Banner } from '../types/models/banner';
import { Game } from '../types/models/game';
import { News, NewsType } from '../types/models/news';
import { OrderGameProduct, OrderProduct, OrderStatus } from '../types/models/order';
import { GameProduct, Product } from '../types/models/product';
import { Tournament } from '../types/models/tournament';

export const banners: Banner[] = [
    {
        id: 1,
        image: '/images/banners/banner-1.webp',
        link: '/banner1',
        game_id: 1,
    },
    {
        id: 2,
        image: '/images/banners/banner-2.webp',
        link: '/banner2',
        game_id: 2,
    },
    {
        id: 3,
        image: '/images/banners/banner-3.webp',
        link: '/banner3',
        game_id: 3,
    },
    {
        id: 4,
        image: '/images/banners/banner-4.webp',
        link: '/banner4',
        game_id: 4,
    },
    {
        id: 5,
        image: '/images/banners/banner-5.webp',
        link: '/banner5',
        game_id: 5,
    },
];

export const games: Game[] = [
    {
        id: 1,
        name: 'AFK Journey',
        description: 'AFK Journey',
        logo: '/images/games/afk-journey-logo.webp',
        image_thumbnail: '/images/games/afk-journey-thumbnail.webp',
        genre: 'Infentary',
        tags: [],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 2,
        name: 'Age of Empires',
        description: 'Age of Empires',
        logo: '/images/games/age-of-empires-logo.webp',
        image_thumbnail: '/images/games/age-of-empires-thumbnail.webp',
        genre: 'Infentary',
        tags: [],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 3,
        name: 'Free Fire',
        description: 'Free Fire',
        logo: '/images/games/free-fire-logo.webp',
        image_thumbnail: '/images/games/free-fire-thumbnail.webp',
        genre: 'Infentary',
        tags: [],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 4,
        name: 'Identity V Echoes',
        description: 'Identity V Echoes',
        logo: '/images/games/identity-v-echoes-logo.webp',
        image_thumbnail: '/images/games/identity-v-echoes-thumbnail.webp',
        genre: 'Infentary',
        tags: [],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 5,
        name: 'Marvel Rivals',
        description: 'Marvel Rivals',
        logo: '/images/games/marvel-rivals-logo.webp',
        image_thumbnail: '/images/games/marvel-rivals-thumbnail.webp',
        genre: 'Infentary',
        tags: [],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 6,
        name: 'Mobile Legends',
        description: 'Mobile Legends',
        logo: '/images/games/mobile-legends-logo.webp',
        image_thumbnail: '/images/games/mobile-legends-thumbnail.webp',
        genre: 'Infentary',
        tags: [],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 7,
        name: 'Once Human',
        description: 'Once Human',
        logo: '/images/games/once-human-logo.webp',
        image_thumbnail: '/images/games/once-human-thumbnail.webp',
        genre: 'Infentary',
        tags: [],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 8,
        name: 'Ragnarok Origin',
        description: 'Ragnarok Origin',
        logo: '/images/games/ragnarok-origin-logo.webp',
        image_thumbnail: '/images/games/ragnarok-origin-thumbnail.webp',
        genre: 'Infentary',
        tags: [],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 9,
        name: 'Valorant',
        description: 'Valorant',
        logo: '/images/games/valorant-logo.webp',
        image_thumbnail: '/images/games/valorant-logo.webp',
        genre: 'Infentary',
        tags: [],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
];

export const products: Product[] = [
    {
        id: 1,
        name: 'Razer Edge Android Gaming Device Handheld 144 Hz 6 GB LPDDR5',
        description: 'Razer Edge Android Gaming Device Handheld 144 Hz 6 GB LPDDR5',
        price: 3999000,
        discount_percent: 0,
        stock: 12,
        image: '/images/products/razer-edge.webp',
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 2,
        name: 'Rexus Omni RXB-147 Bundle Meja Gaming - Include Pegboard & Monitor Bracket',
        description: 'Rexus Omni RXB-147 Bundle Meja Gaming - Include Pegboard & Monitor Bracket',
        price: 2449000,
        discount_percent: 30,
        stock: 12,
        image: '/images/products/rexus-omni.webp',
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 3,
        name: 'Corsair TC100 RELAXED  Gaming Chair - Fabric - Black/Grey',
        description: 'Corsair TC100 RELAXED  Gaming Chair - Fabric - Black/Grey',
        price: 3420000,
        discount_percent: 0,
        stock: 12,
        image: '/images/products/rexus-daxa-borion.webp',
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 4,
        name: 'CORSAIR iCUE ELITE CPU Cooler LCD Display Upgrade Kit - Hitam',
        description: 'CORSAIR iCUE ELITE CPU Cooler LCD Display Upgrade Kit - Hitam',
        price: 840000,
        discount_percent: 0,
        stock: 12,
        image: '/images/products/corsair-icue-elite.webp',
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 5,
        name: 'Rexus Gamepad Daxa Borion AX8',
        description: 'Rexus Gamepad Daxa Borion AX8',
        price: 826000,
        discount_percent: 60,
        stock: 12,
        image: '/images/products/rexus-gamepad.webp',
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 6,
        name: 'Rexus Omni RXB-147 Bundle Meja Gaming - Include Pegboard & Monitor Bracket',
        description: 'Rexus Omni RXB-147 Bundle Meja Gaming - Include Pegboard & Monitor Bracket',
        price: 2449000,
        discount_percent: 30,
        stock: 12,
        image: '/images/products/rexus-omni.webp',
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
];

interface OrderProductWithProduct extends OrderProduct {
    product: Product;
}

export const orders: OrderProductWithProduct[] = [
    {
        id: 1,
        user_id: 1,
        status: OrderStatus.PENDING,
        product_id: 1,
        quantity: 1,
        total_price: 100000,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        product: products[0],
    },
    {
        id: 2,
        user_id: 2,
        status: OrderStatus.PENDING,
        product_id: 2,
        quantity: 2,
        total_price: 200000,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        product: products[1],
    },
    {
        id: 3,
        user_id: 3,
        status: OrderStatus.PENDING,
        product_id: 3,
        quantity: 3,
        total_price: 300000,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        product: products[2],
    },
];

export const gameProducts: GameProduct[] = [
    {
        id: 1,
        game_id: 1,
        name: '4003 + 827 Diamonds',
        description: '4003 + 827 Diamonds',
        price: 100000,
        discount_percent: 10,
        stock: 12,
        tags: ['Diamonds'],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 2,
        game_id: 2,
        name: 'Elite Pass (LV1-100)',
        description: 'Elite Pass (LV1-100)',
        price: 100000,
        discount_percent: 5,
        stock: 12,
        tags: ['Battle Pass'],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 3,
        game_id: 3,
        name: '2180 Lattices',
        description: '2180 Lattices',
        price: 200000,
        discount_percent: 0,
        stock: 12,
        tags: ['Lattices'],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 4,
        game_id: 4,
        name: 'Express Supply Pass',
        description: 'Express Supply Pass',
        price: 250000,
        discount_percent: 35,
        stock: 12,
        tags: ['Supply Pass'],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 5,
        game_id: 5,
        name: '2050 VP',
        description: '2050 VP',
        price: 250000,
        discount_percent: 0,
        stock: 12,
        tags: ['VP'],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 6,
        game_id: 6,
        name: '1000 VP',
        description: '1000 VP',
        price: 10000,
        discount_percent: 0,
        stock: 12,
        tags: ['VP'],
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
];

interface GameOrderWithGame extends OrderGameProduct {
    game: Game;
    product: GameProduct;
}
export const gameOrders: GameOrderWithGame[] = [
    {
        id: 1,
        user_id: 1,
        status: OrderStatus.PENDING,
        game_id: 1,
        product_id: 1,
        quantity: 1,
        total_price: 100000,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[0],
        product: gameProducts[0],
    },
    {
        id: 2,
        user_id: 2,
        status: OrderStatus.PENDING,
        game_id: 2,
        product_id: 2,
        quantity: 2,
        total_price: 200000,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[1],
        product: gameProducts[1],
    },
    {
        id: 3,
        user_id: 3,
        status: OrderStatus.PENDING,
        game_id: 3,
        product_id: 3,
        quantity: 3,
        total_price: 300000,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[2],
        product: gameProducts[2],
    },
    {
        id: 4,
        user_id: 4,
        status: OrderStatus.COMPLETED,
        game_id: 4,
        product_id: 4,
        quantity: 4,
        total_price: 300000,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[0],
        product: gameProducts[3],
    },
    {
        id: 5,
        user_id: 5,
        status: OrderStatus.COMPLETED,
        game_id: 5,
        product_id: 5,
        quantity: 5,
        total_price: 300000,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[3],
        product: gameProducts[4],
    },
    {
        id: 6,
        user_id: 6,
        status: OrderStatus.COMPLETED,
        game_id: 6,
        product_id: 6,
        quantity: 6,
        total_price: 300000,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[4],
        product: gameProducts[1],
    },
    {
        id: 7,
        user_id: 7,
        status: OrderStatus.COMPLETED,
        game_id: 7,
        product_id: 7,
        quantity: 7,
        total_price: 300000,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[5],
        product: gameProducts[3],
    },
    {
        id: 8,
        user_id: 8,
        status: OrderStatus.COMPLETED,
        game_id: 8,
        product_id: 8,
        quantity: 8,
        total_price: 300000,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[6],
        product: gameProducts[4],
    },
];

interface TournamentWithGame extends Tournament {
    game: Game;
}
export const tournaments: TournamentWithGame[] = [
    {
        id: 1,
        game_id: 1,
        name: 'Infentary Championship Mal Mangga Dua',
        description: 'Infentary Championship Mal Mangga Dua',
        thumbnail: '/images/tournaments/tournament-1.webp',
        start_date: '2025-07-20',
        end_date: '2025-07-25',
        stream_url: '',
        is_paid: false,
        price: 0,
        max_participant: 20,
        participant_count: 12,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[0],
    },
    {
        id: 2,
        game_id: 2,
        name: 'Free Fire Sentra Gamers Weekly Tournament',
        description: 'Free Fire Sentra Gamers Weekly Tournament',
        thumbnail: '/images/tournaments/tournament-2.webp',
        start_date: '2025-07-08',
        end_date: '2025-07-15',
        stream_url: '',
        is_paid: true,
        price: 100000,
        max_participant: 20,
        participant_count: 18,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[1],
    },
    {
        id: 3,
        game_id: 3,
        name: 'Offline Tournament PUBG Mobile Infentary Championship',
        description: 'Offline Tournament PUBG Mobile Infentary Championship',
        thumbnail: '/images/tournaments/tournament-3.webp',
        start_date: '2025-07-20',
        end_date: '2025-07-25',
        stream_url: '',
        is_paid: true,
        price: 100000,
        max_participant: 16,
        participant_count: 15,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[2],
    },
    {
        id: 4,
        game_id: 4,
        name: 'TEMPEST CHAMPIONSHIP BY SENTRA GAMERS ',
        description: 'TEMPEST CHAMPIONSHIP BY SENTRA GAMERS ',
        thumbnail: '/images/tournaments/tournament-4.webp',
        start_date: '2025-07-20',
        end_date: '2025-07-25',
        stream_url: '',
        is_paid: false,
        price: 0,
        max_participant: 120,
        participant_count: 48,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[3],
    },
    {
        id: 5,
        game_id: 5,
        name: 'STARS 7 FIVE X HARCO MANGGA DUA',
        description: 'STARS 7 FIVE X HARCO MANGGA DUA',
        thumbnail: '/images/tournaments/tournament-5.webp',
        start_date: '2025-07-20',
        end_date: '2025-07-25',
        stream_url: '',
        is_paid: false,
        price: 0,
        max_participant: 48,
        participant_count: 24,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[4],
    },
    {
        id: 6,
        game_id: 6,
        name: 'STARS 7 FIVE X HARCO MANGGA DUA',
        description: 'STARS 7 FIVE X HARCO MANGGA DUA',
        thumbnail: '/images/tournaments/tournament-5.webp',
        start_date: '2025-07-20',
        end_date: '2025-07-25',
        stream_url: '',
        is_paid: false,
        price: 0,
        max_participant: 48,
        participant_count: 24,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[4],
    },
    {
        id: 7,
        game_id: 7,
        name: 'GEBYAR TANGERANG BERSAMA OFFLINE TOURNAMENT PUBGM BY KOTA TANGERANG',
        description: 'GEBYAR TANGERANG BERSAMA OFFLINE TOURNAMENT PUBGM BY KOTA TANGERANG',
        thumbnail: '/images/tournaments/tournament-7.webp',
        start_date: '2025-06-20',
        end_date: '2025-08-25',
        stream_url: '',
        is_paid: false,
        price: 0,
        max_participant: 12,
        participant_count: 20,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[1],
    },
    {
        id: 8,
        game_id: 8,
        name: 'OFFLINE TOURNAMENT PUBG MOBILE INFENTARY CHAMPIONSHIP 🎮🏆',
        description: 'OFFLINE TOURNAMENT PUBG MOBILE INFENTARY CHAMPIONSHIP 🎮🏆',
        thumbnail: '/images/tournaments/tournament-8.webp',
        start_date: '2025-06-20',
        end_date: '2025-08-25',
        stream_url: '',
        is_paid: false,
        price: 0,
        max_participant: 12,
        participant_count: 20,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[2],
    },
    {
        id: 9,
        game_id: 9,
        name: 'DB ROOM PUBG MOBILE FAST TOURNAMENT 7 FEBRUARI',
        description: 'DB ROOM PUBG MOBILE FAST TOURNAMENT 7 FEBRUARI',
        thumbnail: '/images/tournaments/tournament-9.webp',
        start_date: '2025-06-20',
        end_date: '2025-08-25',
        stream_url: '',
        is_paid: false,
        price: 0,
        max_participant: 12,
        participant_count: 20,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[3],
    },

    {
        id: 10,
        game_id: 10,
        name: 'DB ROOMS Beginner S1 X Sentra Gamers',
        description: 'DB ROOMS Beginner S1 X Sentra Gamers',
        thumbnail: '/images/tournaments/tournament-10.webp',
        start_date: '2025-06-20',
        end_date: '2025-08-25',
        stream_url: '',
        is_paid: false,
        price: 0,
        max_participant: 12,
        participant_count: 20,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        game: games[4],
    },
    {
        id: 11,
        game_id: 11,
        name: 'PUBG MOBILE ITC ROXY FAST TOUR',
        description: 'PUBG MOBILE ITC ROXY FAST TOUR',
        thumbnail: '/images/tournaments/tournament-11.webp',
        start_date: '2025-06-20',
        end_date: '2025-08-25',
        stream_url: '',
        is_paid: false,
        price: 0,
        max_participant: 12,
        participant_count: 20,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        game: games[5],
    },
    {
        id: 12,
        game_id: 12,
        name: 'PUBG MOBILE ITC ROXY FAST TOUR',
        description: 'PUBG MOBILE ITC ROXY FAST TOUR',
        thumbnail: '/images/tournaments/tournament-12.webp',
        start_date: '2025-06-20',
        end_date: '2025-08-25',
        stream_url: '',
        is_paid: false,
        price: 0,
        max_participant: 12,
        participant_count: 20,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
        game: games[2],
    },
];

export const users: User[] = [
    {
        id: 1,
        name: ' Chris Pereira',
    },
];

interface NewsWithGame extends News {
    game: Game;
    author: User;
}
export const news: NewsWithGame[] = [
    {
        id: 1,
        slug: 'dungeon-crawler-carl-hardcover-editions-save-on-the-best-selling-litrpg',
        author_id: 1,
        title: 'Dungeon Crawler Carl Hardcover Editions - Save On The Best-Selling LitRPG',
        content:
            "A trio of hardcover editions of Matt Dinniman's popular LitRPG novel series are available to preorder at Amazon.",
        image: '/images/news/news-thumbnail-1.webp',
        game: games[0],
        author: users[0],
        type: NewsType.Article,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 2,
        slug: 'marvel-rivals-gets-suit-from-playstation-s-spider-man-2-later-this-month',
        author_id: 1,
        title: "Marvel Rivals Gets Suit from PlayStation's Spider-Man 2 Later This Month",
        content: "Marvel Rivals Gets Suit from PlayStation's Spider-Man 2 Later This Month",
        image: '/images/news/news-thumbnail-2.webp',
        game: games[1],
        author: users[0],
        type: NewsType.Article,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 3,
        slug: 'black-ops-6-zombies-season-2-plans-include-a-new-tomb-map-and-more-quality-of-life-changes',
        author_id: 1,
        title: 'Black Ops 6 Zombies Season 2 Plans Include a New Tomb Map and More Quality-of-Life Changes',
        content:
            'Black Ops 6 Zombies Season 2 Plans Include a New Tomb Map and More Quality-of-Life Changes',
        image: '/images/news/news-thumbnail-3.webp',
        game: games[2],
        author: users[0],
        type: NewsType.Article,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 4,
        slug: 'the-best-of-gaming-at-ces-2025-rtx-5090-amd-rx-9070-switch-2-mock-up-new-handheld-pcs-and-more',
        author_id: 1,
        title: 'The Best of Gaming at CES 2025: RTX 5090, AMD RX 9070, Switch 2 Mock-Up, New Handheld PCs, and More',
        content:
            'The Best of Gaming at CES 2025: RTX 5090, AMD RX 9070, Switch 2 Mock-Up, New Handheld PCs, and More',
        image: '/images/news/news-thumbnail-4.webp',
        game: games[3],
        author: users[0],
        type: NewsType.Article,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 5,
        slug: 'suikoden-live-musik-wawancara-dan-bocoran-masa-depan',
        author_id: 1,
        title: 'Suikoden Live: Musik, Wawancara, dan Bocoran Masa Depan',
        content: 'Suikoden Live: Musik, Wawancara, dan Bocoran Masa Depan',
        image: '/images/news/news-thumbnail-5.webp',
        game: games[4],
        author: users[0],
        type: NewsType.Article,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 6,
        slug: 'suikoden-live-musik-wawancara-dan-bocoran-masa-depan2',
        author_id: 1,
        title: 'Suikoden Live: Musik, Wawancara, dan Bocoran Masa Depan',
        content: 'Suikoden Live: Musik, Wawancara, dan Bocoran Masa Depan',
        image: '/images/news/news-thumbnail-5.webp',
        game: games[5],
        author: users[0],
        type: NewsType.Article,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: 7,
        slug: 'suikoden-live-musik-wawancara-dan-bocoran-masa-depan3',
        author_id: 1,
        title: 'Suikoden Live: Musik, Wawancara, dan Bocoran Masa Depan',
        content: 'Suikoden Live: Musik, Wawancara, dan Bocoran Masa Depan',
        image: '/images/news/news-thumbnail-5.webp',
        game: games[6],
        author: users[0],
        type: NewsType.Article,
        created_at: new Date(new Date().getTime() - 13 * 60 * 60 * 1000).toISOString(),
        updated_at: new Date().toISOString(),
    },
];
