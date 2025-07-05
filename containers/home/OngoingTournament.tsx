'use client';

import { tournaments } from 'constants/mock-data';
import ScrollContainer from '../../components/ui/ScrollContainer';
import TournamentCard from 'components/cards/TournamentCard';

export default function OngoingTournament() {
    const ongoingTournaments = tournaments.filter(tournament => {
        const startDate = new Date(tournament.start_date);
        const endDate = new Date(tournament.end_date);
        return startDate <= new Date() && endDate >= new Date();
    });
    return (
        <ScrollContainer
            title={
                <h3 className="text-lg font-bold font-sans">
                    🚨 <span className="text-red-700">Jangan Lewatkan!</span> Turnamen Live Hari
                    ini!
                </h3>
            }
        >
            {ongoingTournaments.map(tournament => (
                <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
        </ScrollContainer>
    );
}
