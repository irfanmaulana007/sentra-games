'use client';

import { Button } from 'components/ui/button';
import { useState } from 'react';

export default function JoinMembershipCard() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-join-membership-card rounded-lg px-4 py-6 shadow-sm relative space-y-2">
            {/* Close button */}
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-2 cursor-pointer text-neutral-50 hover:text-neutral-400 transition-colors"
                aria-label="Close membership card"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <h3 className="font-bold text-neutral-50 text-lg">Upgrade ke Gamer Elite!</h3>

            <p className="text-sm text-neutral-50 mb-6">
                Cuma seharga gorengan, dapet fitur VIP, bonus tiap minggu, dan status paling keren!
                Cuma Rp 5.000/bulan 🔥
            </p>

            <Button className="bg-button-fireburst text-neutral-50 font-medium py-1 px-4 rounded-lg hover:opacity-90 transition-opacity">
                Langsung Gabung
            </Button>
        </div>
    );
}
