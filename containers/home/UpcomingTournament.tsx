'use client';

import { tournaments } from '../../constants/mock-data';
import ScrollContainer from '../../components/ui/ScrollContainer';
import TournamentCard from '../../components/cards/TournamentCard';

export default function UpcomingTournament() {
    const upcomingTournaments = tournaments.filter(tournament => {
        const startDate = new Date(tournament.start_date);
        return startDate >= new Date();
    });
    return (
        <ScrollContainer
            title={
                <h3 className="text-lg font-bold font-sans">
                    🏁 <span className="text-red-700">Pendaftaran</span> Turnamen Dibuka!
                </h3>
            }
        >
            {upcomingTournaments.map(tournament => (
                <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
        </ScrollContainer>
    );
}
