import Image from 'next/image';
import Link from 'next/link';
import { news } from 'constants/mock-data';
import { getRelativeTime } from 'utils/date';

export default function NewsAndUpdates() {
    // Get the first 5 news items
    const topNews = news.slice(0, 5);
    const featuredNews = topNews[0];
    const otherNews = topNews.slice(1);

    return (
        <div className="flex flex-col gap-y-4">
            <h3 className="text-lg font-bold font-sans">
                📢 <span className="text-red-600">Berita Game Paling Update,</span> Langsung di
                Sentra!
            </h3>

            <div className="w-full rounded-md overflow-hidden">
                <Link href={`/news/${featuredNews.slug}`} className="group block">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="relative h-full min-h-[240px]">
                            <Image
                                src={featuredNews.image}
                                alt={featuredNews.title}
                                fill
                                className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="p-6 flex flex-col justify-center gap-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                                {featuredNews.title}
                            </h3>

                            <p className="text-gray-600 line-clamp-3 text-sm">
                                {featuredNews.content}
                            </p>

                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium capitalize text-crimson-trigger">
                                    {featuredNews.type}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {getRelativeTime(featuredNews.created_at)}
                                </span>
                                <span className="text-xs text-gray-500">
                                    {featuredNews.author.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {otherNews.map(news => (
                    <Link key={news.id} href={`/news/${news.slug}`} className="block group">
                        <div className="rounded-lg overflow-hidde h-full flex flex-col">
                            <div className="aspect-video relative">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    fill
                                    className="object-cover rounded-sm group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="pb-4 flex flex-col gap-y-1 flex-grow">
                                <div className="text-xs text-gray-400 mt-3">{news.game.name}</div>
                                <h3 className="font-bold line-clamp-2 text-sm">{news.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
