import MainLayout from 'components/layout/MainLayout';
import MainContent from 'containers/MainContent';
import SideContent from 'containers/SideContent';

export default function Home() {
  // Main content section (3/4 width)
  const mainContent = (
    <div className="space-y-6">
      <section className="bg-card rounded-lg p-6 shadow-sm">
        <h1 className="text-3xl font-bold mb-4">Welcome to Sentra Gamers</h1>
        <p className="text-muted-foreground">
          Your ultimate destination for gaming news, reviews, and community.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-bold mb-2">Latest News</h3>
            <p className="text-sm">Stay updated with the latest gaming trends and releases.</p>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-bold mb-2">Game Reviews</h3>
            <p className="text-sm">Honest reviews from our gaming experts.</p>
          </div>
        </div>
      </section>

      <section className="bg-card rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Featured Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map(item => (
            <div key={item} className="border border-border rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted" />
              <div className="p-4">
                <h3 className="font-bold">Game Title {item}</h3>
                <p className="text-sm text-muted-foreground mt-1">An exciting adventure awaits.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  // Side content section (1/4 width)
  const sideContent = (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-4 shadow-sm">
        <h3 className="font-bold mb-3">Popular Categories</h3>
        <ul className="space-y-2">
          <li className="px-3 py-2 bg-primary/5 rounded-md">Action Games</li>
          <li className="px-3 py-2 bg-primary/5 rounded-md">Adventure</li>
          <li className="px-3 py-2 bg-primary/5 rounded-md">RPG</li>
          <li className="px-3 py-2 bg-primary/5 rounded-md">Strategy</li>
          <li className="px-3 py-2 bg-primary/5 rounded-md">Sports</li>
        </ul>
      </div>

      <div className="bg-card rounded-lg p-4 shadow-sm">
        <h3 className="font-bold mb-3">Upcoming Events</h3>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Gaming Convention 2025</p>
            <p className="text-sm text-muted-foreground">July 15-18, 2025</p>
          </div>
          <div>
            <p className="font-medium">E-Sports Tournament</p>
            <p className="text-sm text-muted-foreground">August 5-7, 2025</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg p-4 shadow-sm">
        <h3 className="font-bold mb-3">Join Newsletter</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Stay updated with the latest gaming news.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-3 py-2 rounded-l-md border border-input bg-background text-sm"
          />
          <button className="bg-primary text-primary-foreground px-3 py-2 rounded-r-md text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <MainLayout>
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <MainContent>{mainContent}</MainContent>
          <SideContent>{sideContent}</SideContent>
        </div>
      </div>
    </MainLayout>
  );
}
