import MainLayout from 'components/layout/MainLayout';
import HomeBanner from 'containers/home/Banner';
import FlashSale from 'containers/home/FlashSale';
import NewsAndUpdates from 'containers/home/NewsAndUpdates';
import OngoingTournament from 'containers/home/OngoingTournament';
import PopularGamingGear from 'containers/home/PopularGamingGear';
import PopularGameTopup from 'containers/home/PopularGameTopup';
import UpcomingTournament from 'containers/home/UpcomingTournament';
import MainContent from 'containers/MainContent';
import SideContent from 'containers/SideContent';
import JoinMembershipCard from 'components/cards/JoinMembershipCard';
import PendingTransaction from 'containers/home/PendingTransaction';
import CompletedTransaction from 'containers/home/CompletedTransaction';

export default function Home() {
    return (
        <MainLayout>
            <div className="container mx-auto py-6 px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    <MainContent>
                        <div className="flex flex-col gap-y-8">
                            <HomeBanner />
                            <UpcomingTournament />
                            <OngoingTournament />
                            <FlashSale />
                            <PopularGameTopup />
                            <PopularGamingGear />
                            <NewsAndUpdates />
                        </div>
                    </MainContent>
                    <SideContent>
                        <div className="hidden lg:flex flex-col gap-y-8">
                            <JoinMembershipCard />
                            <PendingTransaction />
                            <CompletedTransaction />
                        </div>
                    </SideContent>
                </div>
            </div>
        </MainLayout>
    );
}
