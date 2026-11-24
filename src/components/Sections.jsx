import { useState } from "react";
import { CloudSun, Droplets, MapPin, Thermometer, TrendingDown, TrendingUp, Wind, Landmark, MessageCircleQuestion, Smartphone } from "lucide-react";
import { articles, prices, products, questions, quickLinks, schemes, stats, weather } from "../mocks/data";
import { Card, Rating, SectionHeader } from "./ui";
// Picks src/assets/advisory/adv1.* ... adv3.* whatever the extension is
const advFiles = import.meta.glob("../assets/advisory/adv*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });
const advImage = (n) => Object.entries(advFiles).find(([path]) => new RegExp(`/adv${n}\\.`).test(path))?.[1];
export function StatsStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl border border-stone-200 bg-white px-4 py-3">
      <button className="flex items-center gap-2 font-medium"><MapPin size={18} className="text-brand-600" aria-hidden /> Tamil Nadu, Thanjavur</button>
      {stats.map((s) => (
        <div key={s.label} className="text-sm"><span className="font-semibold text-brand-900">{s.value}</span> <span className="text-stone-500">{s.label}</span></div>
      ))}
      <span className="ml-auto flex items-center gap-2 text-sm"><CloudSun size={20} className="text-harvest" aria-hidden /> {weather.temp}°C {weather.condition}</span>
    </div>
  );
}

export function MarketPrices() {
  // TODO(API): fetch mandi prices, show Skeleton while loading, ErrorState on failure, EmptyState if [].
  return (
    <Card id="market" className="overflow-x-auto">
      <SectionHeader title="Today's market prices" sample />
      <table className="w-full min-w-[480px] text-sm">
        <thead><tr className="border-b text-left text-xs text-stone-500">
          <th className="py-2">Commodity</th><th>Min (₹/Q)</th><th>Max (₹/Q)</th><th>Modal (₹/Q)</th><th>Change</th>
        </tr></thead>
        <tbody>
          {prices.map((p) => {
            const up = p.change >= 0;
            const Icon = up ? TrendingUp : TrendingDown;
            return (
              <tr key={p.crop} className="border-b last:border-0">
                <td className="py-2.5 font-medium">{p.crop}</td>
                <td>{p.min.toLocaleString("en-IN")}</td><td>{p.max.toLocaleString("en-IN")}</td>
                <td className="font-semibold">{p.modal.toLocaleString("en-IN")}</td>
                <td><span className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium ${up ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  <Icon size={12} aria-hidden /> {up ? "+" : ""}{p.change}%
                </span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export function WeatherCard() {
  return (
    <Card>
      <SectionHeader title="Weather & alerts" sample />
      <div className="flex items-center gap-4">
        <CloudSun size={44} className="text-harvest" aria-hidden />
        <div><div className="font-display text-3xl font-semibold">{weather.temp}°C</div><div className="text-sm text-stone-600">{weather.condition}</div></div>
        <ul className="ml-auto space-y-1 text-xs text-stone-600">
          <li className="flex items-center gap-1"><Thermometer size={12} aria-hidden /> Feels {weather.feels}°C</li>
          <li className="flex items-center gap-1"><Droplets size={12} aria-hidden /> {weather.humidity}%</li>
          <li className="flex items-center gap-1"><Wind size={12} aria-hidden /> {weather.wind} km/h</li>
        </ul>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-1 text-center text-xs">
        {weather.forecast.map((f) => (<div key={f.day} className="rounded bg-stone-100 py-1.5"><div className="font-medium">{f.day}</div>{f.hi}°/{f.lo}°</div>))}
      </div>
      <p className="mt-3 rounded-lg bg-lime-100 p-2.5 text-sm text-lime-900">{weather.alert}</p>
    </Card>
  );
}

export function Advisory() {
  const tags = ["For You", ...new Set(articles.map((a) => a.tag))];
  const [tab, setTab] = useState("For You");
  const list = tab === "For You" ? articles : articles.filter((a) => a.tag === tab);
  return (
    <Card id="advisory">
      <SectionHeader title="Crop advisory & knowledge" sample />
      <div role="tablist" className="mb-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`rounded-full px-3 py-1 text-sm ${tab === t ? "bg-brand-600 text-white" : "bg-stone-100 hover:bg-brand-100"}`}>{t}</button>
        ))}
      </div>
      {list.length === 0 ? <p className="py-6 text-center text-sm text-stone-500">No articles yet for this topic.</p> : (
        <div className="grid gap-3 sm:grid-cols-3">
          {list.map((a) => {
            // image number = position of the article in the full list (1st article = adv1)
            const img = advImage(articles.indexOf(a) + 1);
            return (
              <a key={a.title} href="#" className="group overflow-hidden rounded-lg border border-stone-200 transition hover:-translate-y-1 hover:border-brand-600 hover:shadow-md">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-100 to-brand-600/40">
                  {img && <img src={img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />}
                </div>
                <div className="p-2.5">
                  <h3 className="text-sm font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-1 text-xs text-stone-500">{a.read} min read</p>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </Card>
  );
}

export function Marketplace() {
  return (
    <Card id="marketplace">
      <SectionHeader title="Marketplace" sample />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {products.map((p) => (
          <div key={p.name} className="rounded-lg border border-stone-200 p-3">
            <div className="flex h-20 items-center justify-center rounded bg-brand-50 text-4xl" aria-hidden>{p.emoji}</div>
            <h3 className="mt-2 text-sm font-semibold leading-tight">{p.name}</h3>
            <p className="text-xs text-stone-500">{p.note}</p>
            <div className="mt-1 flex items-center justify-between"><span className="text-sm font-semibold">{p.price ? `₹${p.price.toLocaleString("en-IN")}` : "Contact seller"}</span><Rating value={p.rating} /></div>
            <button className="mt-2 w-full rounded border border-brand-600 py-1 text-sm font-medium text-brand-700 hover:bg-brand-50">View product</button>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function Schemes() {
  return (
    <Card id="schemes">
      <SectionHeader title="Government schemes" sample />
      <ul className="space-y-2">
        {schemes.map((s) => (
          <li key={s.name}><a href="#" className="flex items-center gap-3 rounded-lg border border-stone-200 p-2.5 hover:border-brand-600">
            <Landmark className="text-brand-600" size={22} aria-hidden />
            <span className="flex-1"><span className="block text-sm font-semibold">{s.name}</span><span className="text-xs text-stone-500">{s.desc}</span></span>
            <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-900">{s.status}</span>
          </a></li>
        ))}
      </ul>
    </Card>
  );
}

export function Community() {
  return (
    <Card id="community">
      <SectionHeader title="Ask an expert" sample />
      <ul className="space-y-2">
        {questions.map((q) => (
          <li key={q.q}><a href="#" className="flex gap-2 rounded-lg p-2 hover:bg-stone-100">
            <MessageCircleQuestion className="shrink-0 text-brand-600" size={20} aria-hidden />
            <span><span className="block text-sm font-medium">{q.q}</span><span className="text-xs text-stone-500">{q.answers} answers • {q.ago}</span></span>
          </a></li>
        ))}
      </ul>
    </Card>
  );
}

export function QuickLinks() {
  return (
    <Card>
      <h2 className="mb-2 text-lg font-semibold text-brand-900">Quick links</h2>
      <ul className="space-y-1.5 text-sm">{quickLinks.map((l) => <li key={l}><a href="#" className="text-brand-700 hover:underline">{l}</a></li>)}</ul>
    </Card>
  );
}

export function AppDownload() {
  return (
    <Card className="flex items-center gap-3 bg-brand-50">
      <Smartphone size={36} className="text-brand-600" aria-hidden />
      <div className="text-sm"><div className="font-semibold">SaveAgri app</div><div className="text-stone-600">Coming soon for Android and iOS.</div></div>
    </Card>
  );
}
