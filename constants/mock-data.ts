import { Banner } from '../types/models/banner';
import { Game } from '../types/models/game';
import { News } from '../types/models/news';
import { Order } from '../types/models/order';
import { GameProduct, Product } from '../types/models/product';
import { Tournament } from '../types/models/tournament';

export const banners: Banner[] = [
    {
        id: 1,
        image: '/images/banners/banner1.webp',
        link: '/banner1',
        game_id: 1,
    },
    {
        id: 2,
        image: '/images/banners/banner2.webp',
        link: '/banner2',
        game_id: 2,
    },
];
export const orders: Order[] = [];
export const tournaments: Tournament[] = [];
export const gameProducts: GameProduct[] = [];
export const games: Game[] = [];
export const products: Product[] = [];
export const news: News[] = [];
