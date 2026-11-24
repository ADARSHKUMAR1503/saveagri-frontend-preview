import Header from "./components/Header";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import ExploreCards from "./components/ExploreCards";
import { AdSlot } from "./components/ui";
import { Advisory, AppDownload, Community, Marketplace, MarketPrices, QuickLinks, Schemes, StatsStrip, WeatherCard } from "./components/Sections";

export default function App() {
  return (
    <>
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-3">
        <AdSlot label="Top banner 728×90" className="min-h-[90px]" />
      </div>

      <Hero />

      <main className="mx-auto max-w-7xl space-y-6 px-4 pb-4">
        <div className="relative z-10 -mt-10 rounded-xl shadow-lg">
          <StatsStrip />
        </div>

        <ExploreCards />

        {/* 3 columns on xl: left sidebar | main | right sidebar */}
        <div className="grid gap-4 lg:grid-cols-[1fr_320px] xl:grid-cols-[220px_minmax(0,1fr)_320px]">
          {/* LEFT sidebar: Quick links + App card (moves to the bottom on smaller screens) */}
          <aside aria-label="Left sidebar" className="order-last grid gap-4 self-start sm:grid-cols-2 lg:col-span-2 xl:sticky xl:top-20 xl:order-none xl:col-span-1 xl:grid-cols-1">
            <QuickLinks />
            <AppDownload />
          </aside>

          {/* CENTER */}
          <div className="min-w-0 space-y-4">
            <div className="grid gap-4 2xl:grid-cols-2">
              <MarketPrices />
              <WeatherCard />
            </div>
            {/* <AdSlot label="In-content banner 728×90" /> */}
            <Advisory />
            <Marketplace />
          </div>

          {/* RIGHT sidebar */}
          <aside aria-label="Right sidebar" className="min-w-0 space-y-4">
            <Schemes />
            <Community />
            {/* <AdSlot label="Sidebar 300×250" className="min-h-[250px]" /> */}
          </aside>
        </div>

        <AdSlot label="Footer-area banner" />
      </main>
      <Footer />
    </>
  );
}