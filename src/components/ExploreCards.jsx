import { ArrowRight, ArrowUpRight } from "lucide-react";

// Picks src/assets/quick/qa1.* ... qa8.* whatever the extension is (jpg, png, webp...)
const files = import.meta.glob("../assets/quick/qa*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });
const imageFor = (n) => Object.entries(files).find(([path]) => new RegExp(`/qa${n}\\.`).test(path))?.[1];

// Badges are generic labels, not fake live counts. Replace with real numbers once APIs exist.
const cards = [
  { n: 1, badge: "Latest", dot: "bg-red-500", title: "Agriculture News", text: "Latest Indian and global agriculture news.", cta: "View News", href: "#" },
  { n: 2, badge: "Central & State", dot: "bg-emerald-500", title: "Government Schemes", text: "Central and state government schemes.", cta: "View Schemes", href: "#schemes" },
  { n: 3, badge: "Community", dot: "bg-emerald-500", title: "Community / Ask an Expert", text: "Farmer questions and expert answers.", cta: "Explore Community", href: "#community" },
  { n: 4, badge: "Daily rates", dot: "bg-red-500", title: "Today's Market Prices", text: "Daily commodity prices and changes.", cta: "View Prices", href: "#market" },
  { n: 5, badge: "Forecast", dot: "bg-sky-500", title: "Weather & Agri Alerts", text: "Weather forecast and agricultural alerts.", cta: "Check Weather", href: "#" },
  { n: 6, badge: "Guides", dot: "bg-emerald-500", title: "Crop Advisory & Knowledge", text: "Crop guides, pest control and best practices.", cta: "Read More", href: "#advisory" },
  { n: 7, badge: "Inputs & machinery", dot: "bg-emerald-500", title: "Marketplace", text: "Agricultural inputs, machinery and services.", cta: "Explore Marketplace", href: "#marketplace" },
  { n: 8, badge: "Discover more", dot: "bg-stone-500", title: "Explore SaveAgri", text: "Discover all agricultural tools and services.", cta: "Explore More", href: "#" },
];

export default function ExploreCards() {
  return (
    <section aria-labelledby="explore-title" className="py-2">
      <h2 id="explore-title" className="text-2xl font-bold text-brand-900">Explore SaveAgri</h2>
      {/* <p className="mb-4 text-sm text-stone-600">Select a card to view complete details</p> */}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
        {cards.map((c, i) => {
          const img = imageFor(c.n);
          return (
            <a
              key={c.n}
              href={c.href}
              style={{ animationDelay: `${i * 70}ms` }}
              className="card-in group relative block aspect-[4/5] sm:aspect-[4/3] overflow-hidden rounded-2xl bg-brand-900 shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-2 hover:ring-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              {img ? (
                <img src={img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-900" />
              )}

              {/* dark green fade so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e1a] from-5% via-[#0f2e1a]/70 via-40% to-transparent to-70%" />

              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-2.5 py-1 text-xs font-medium text-stone-800 backdrop-blur">
                <span className={`h-2 w-2 rounded-full ${c.dot}`} aria-hidden /> {c.badge}
              </span>

              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg bg-emerald-100/90 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white sm:h-9 sm:w-9">
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                <h3 className="text-base font-semibold leading-snug sm:text-lg">{c.title}</h3>
                <p className="mt-1 text-xs text-white/85 sm:text-sm">{c.text}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-emerald-300 sm:mt-3">
                  {c.cta} <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}