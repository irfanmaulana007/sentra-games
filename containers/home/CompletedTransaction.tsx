import { Button } from 'components/ui/button';
import { gameOrders } from 'constants/mock-data';
import Image from 'next/image';
import Link from 'next/link';

export default function CompletedTransaction() {
    const completedGameTransaction = gameOrders
        .filter(order => order.status === 'completed')
        .slice(0, 3);
    return (
        <div className="flex flex-col gap-y-4">
            <h3 className="text-lg font-bold font-sans">
                ✅ <span className="text-red-600">💎 Top-Up</span> Terakhir Kamu!
            </h3>
            {completedGameTransaction.map(order => (
                <div key={order.id} className="flex gap-x-2">
                    <Image
                        src={order.game.image_thumbnail}
                        alt={order.game.name}
                        width={84}
                        height={84}
                        className="object-cover rounded-sm"
                    />
                    <div className="flex flex-col justify-between pb-1">
                        <div className="flex flex-col">
                            <p className="font-medium line-clamp-1">{order.product.name}</p>
                            <p className="text-xs text-neutral-500">In-game Currency</p>
                        </div>
                        <Link href={`/order/${order.id}`}>
                            <Button
                                size="sm"
                                className="bg-button-join-tournament text-neutral-50"
                                variant="outline"
                            >
                                Beli Lagi
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
