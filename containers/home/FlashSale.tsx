'use client';

import { useState, useEffect } from 'react';
import ScrollContainer from '../../components/ui/ScrollContainer';
import GameProductCard from '../../components/cards/GameProductCard';
import { gameProducts, games } from '../../constants/mock-data';
import { GameProduct } from '../../types/models/product';
import { Game } from '../../types/models/game';
import Image from 'next/image';

export default function FlashSale() {
    // State for the selected game filter
    const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

    // Set end time to 3 hours from now
    const [timeLeft, setTimeLeft] = useState<{ hours: string; minutes: string; seconds: string }>({
        hours: '03',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        // Calculate end time (3 hours from now)
        const endTime = new Date();
        endTime.setHours(endTime.getHours() + 3);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = endTime.getTime() - now.getTime();

            if (difference <= 0) {
                // Timer ended
                clearInterval(timer);
                setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
                return;
            }

            // Calculate hours, minutes, seconds
            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Format with leading zeros
            const formattedHours = hours.toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            const formattedSeconds = seconds.toString().padStart(2, '0');

            setTimeLeft({
                hours: formattedHours,
                minutes: formattedMinutes,
                seconds: formattedSeconds,
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Get unique games from products for filter tabs
    const uniqueGames = Array.from(new Set(gameProducts.map(product => product.game_id)))
        .map(gameId => games.find(game => game.id === gameId))
        .filter(game => game !== undefined) as Game[];

    // Get game products and their corresponding games, filtered by selected game if any
    const filteredProducts = selectedGameId
        ? gameProducts.filter(product => product.game_id === selectedGameId)
        : gameProducts;

    const flashSaleProducts = filteredProducts.slice(0, 6).map((product: GameProduct) => {
        const game = games.find((g: Game) => g.id === product.game_id) || games[0];
        return { product, game };
    });

    return (
        <div className="flex flex-col gap-y-4">
            <ScrollContainer
                title={
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-x-4">
                            <div className="flex flex-col">
                                <h3 className="text-lg font-bold font-sans">
                                    ⚡️ <span className="text-red-600">SENTRA</span> Flashdrop
                                </h3>
                                <p className="text-xs text-gray-500">
                                    Diskon Kilat, Meluncur Cepat!
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <div className="text-xs border border-red-500 rounded-full px-3 py-1 flex items-center gap-x-0.5">
                                    <span className="text-red-600 font-medium">
                                        {timeLeft.hours}
                                    </span>
                                    <span className="text-red-600">:</span>
                                    <span className="text-red-600 font-medium">
                                        {timeLeft.minutes}
                                    </span>
                                    <span className="text-red-600">:</span>
                                    <span className="text-red-600 font-medium">
                                        {timeLeft.seconds}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Image
                                src="/images/illustration/flash-sale-bar.webp"
                                alt="Flash Sale Bar"
                                width={142}
                                height={58}
                            />
                        </div>
                    </div>
                }
            >
                {flashSaleProducts.map(
                    ({ product, game }: { product: GameProduct; game: Game }) => (
                        <GameProductCard
                            key={product.id}
                            product={product}
                            game={game}
                            className="flex-[0_0_220px] mr-4 last:mr-0"
                        />
                    )
                )}
            </ScrollContainer>

            <div className="flex overflow-x-auto scrollbar-hide gap-x-1 pb-2">
                <button
                    onClick={() => setSelectedGameId(null)}
                    className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                        selectedGameId === null
                            ? 'bg-red-600 text-white'
                            : 'bg-white/10 backdrop-blur-sm text-gray-700 hover:bg-white/20'
                    }`}
                >
                    All Games
                </button>
                {uniqueGames.map(game => (
                    <button
                        key={game.id}
                        onClick={() => setSelectedGameId(game.id)}
                        className={`flex items-center gap-x-1.5 px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                            selectedGameId === game.id
                                ? 'bg-red-600 text-white'
                                : 'bg-white/10 backdrop-blur-sm text-gray-700 hover:bg-white/20'
                        }`}
                    >
                        <div className="relative w-4 h-4 rounded-full overflow-hidden">
                            <Image src={game.image_thumbnail} alt={game.name} fill className="object-cover" />
                        </div>
                        {game.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
