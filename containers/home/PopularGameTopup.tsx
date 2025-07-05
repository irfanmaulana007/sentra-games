'use client';

import { games } from 'constants/mock-data';
import ScrollContainer from '../../components/ui/ScrollContainer';
import Image from 'next/image';

export default function PopularGameTopup() {
    return (
        <ScrollContainer
            title={
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold font-sans">
                        🔥 <span className="text-red-600">Lagi Ramai,</span> Lagi Dicari!
                    </h3>
                    <p className="text-sm text-gray-500">Top-up game paling laris</p>
                </div>
            }
        >
            {games.map(game => (
                <div
                    key={game.id}
                    className="flex-[0_0_150px] mr-4 last:mr-0 overflow-hidden space-y-2 cursor-pointer group"
                >
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            src={game.image_thumbnail}
                            alt={game.name}
                            width={150}
                            height={150}
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <h3 className="text-sm font-medium transition-colors duration-300 group-hover:text-red-700">
                        {game.name} Topup
                    </h3>
                </div>
            ))}
        </ScrollContainer>
    );
}
