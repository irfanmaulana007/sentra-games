'use client';

import ScrollContainer from '../../components/ui/ScrollContainer';

export default function FlashSale() {
    const tournaments = [1, 2, 3, 4, 5, 6];

    return (
        <ScrollContainer
            title={<h3 className="text-lg font-bold font-sans">⚡️ SENTRA Flashdrop</h3>}
        >
            {tournaments.map(item => (
                <div
                    key={item}
                    className="flex-[0_0_280px] mr-4 last:mr-0 border border-gray-200 rounded-lg overflow-hidden"
                >
                    <div className="aspect-video bg-gray-200" />
                    <div className="p-4">
                        <h3 className="font-bold">Tournament Title {item}</h3>
                        <p className="text-sm text-gray-500 mt-1">An exciting tournament awaits.</p>
                    </div>
                </div>
            ))}
        </ScrollContainer>
    );
}
