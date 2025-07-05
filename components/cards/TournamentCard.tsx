'use client';

import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Tournament } from '../../types/models/tournament';
import { Game } from '../../types/models/game';

// Define the TournamentWithGame interface that extends Tournament with game property
interface TournamentWithGame extends Tournament {
    game: Game;
}

interface TournamentCardProps {
    tournament: TournamentWithGame;
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
    const currentDate = new Date();

    const isTournamentStarted = (startDate: string) => {
        return new Date(startDate) <= currentDate;
    };

    const formatParticipants = (current: number, max: number) => {
        return `${current}/${max}`;
    };

    return (
        <div className="flex-[0_0_250px] p-2 mr-4 last:mr-0 border border-gray-200 rounded-lg overflow-hidden  hover:shadow-md transition-shadow duration-300">
            <div className="relative aspect-square">
                <Image
                    src={tournament.thumbnail}
                    alt={tournament.name}
                    fill
                    className="object-cover"
                />

                {!isTournamentStarted(tournament.start_date) && (
                    <div
                        className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-md ${tournament.is_paid ? 'bg-amber-500 text-white' : 'bg-green-500 text-white'}`}
                    >
                        {tournament.is_paid ? 'PAID ENTRY' : 'FREE ENTRY'}
                    </div>
                )}
            </div>

            <div className="p-4 flex flex-col gap-2">
                {!isTournamentStarted(tournament.start_date) && (
                    <div className="text-xs font-medium uppercase">
                        {format(new Date(tournament.start_date), 'EEE, dd MMM yyyy')}
                    </div>
                )}

                <div className="h-[4.5rem] mb-1">
                    <h3 className="font-bold text-base text-gray-800 line-clamp-3">
                        {tournament.name}
                    </h3>
                </div>

                <div className="text-xs underline">{tournament.game.name}</div>

                {isTournamentStarted(tournament.start_date) ? (
                    <Link href={tournament.stream_url || '#'} className="mt-2">
                        <button className="cursor-pointer w-full border border-red-600 hover:border-red-700 text-red-600 hover:text-red-700 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            Watch Live
                        </button>
                    </Link>
                ) : (
                    <div className="mt-2">
                        <button className="cursor-pointer w-full bg-button-join-tournament text-white py-2 rounded-md text-sm transition-colors">
                            <div className="flex items-center justify-between px-4">
                                <span>Join</span>
                                <span className="text-xs">
                                    {formatParticipants(
                                        tournament.participant_count,
                                        tournament.max_participant
                                    )}{' '}
                                    Slots
                                </span>
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
