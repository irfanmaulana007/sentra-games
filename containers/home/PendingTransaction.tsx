import { gameOrders, orders } from 'constants/mock-data';
import Image from 'next/image';
import Link from 'next/link';

export default function PendingTransaction() {
    const pendingGameTransaction = gameOrders
        .filter(order => order.status === 'pending')
        .slice(0, 3);
    const pendingGearTransaction = orders
        .filter(order => order.status === 'pending')
        .slice(0, 1);
    return (
        <div className="flex flex-col gap-y-4">
            <h3 className="text-lg font-bold font-sans">
                ✅ <span className="text-red-600">Selesaikan</span> Transaksi Kamu!
            </h3>
            {pendingGameTransaction.map(order => (
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
                            <p className="text-sm text-neutral-700 underline">
                                Lanjutkan Pembayaran
                            </p>
                        </Link>
                    </div>
                </div>
            ))}
            {pendingGearTransaction.map(order => (
                <div key={order.id} className="flex gap-x-2">
                    <Image
                        src={order.product.image}
                        alt={order.product.name}
                        width={84}
                        height={84}
                        className="object-cover rounded-sm"
                    />
                    <div className="flex flex-col justify-between pb-1">
                        <div className="flex flex-col">
                            <p className="font-medium line-clamp-1">{order.product.name}</p>
                            <p className="text-xs text-neutral-500">Gaming Hardware</p>
                        </div>
                        <Link href={`/order/${order.id}`}>
                            <p className="text-sm text-neutral-700 underline">
                                Lanjutkan Pembayaran
                            </p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
