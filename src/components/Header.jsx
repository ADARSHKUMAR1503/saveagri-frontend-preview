import { useState } from "react";
import { Bell, Menu, Search, Sprout, User, X } from "lucide-react";
import { navLinks } from "../mocks/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <Sprout className="text-brand-600" size={30} aria-hidden />
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold text-brand-900">SaveAgri</span>
            <span className="hidden text-[11px] text-stone-500 sm:block">India's Agriculture Platform</span>
          </span>
        </a>
        <nav aria-label="Main" className="ml-4 hidden items-center gap-1 xl:flex">
          {navLinks.map((l, i) => (
            <a key={l.label} href={l.href} className={`rounded px-2.5 py-1.5 text-sm font-medium ${i === 0 ? "bg-brand-600 text-white" : "text-stone-700 hover:bg-brand-50"}`}>{l.label}</a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <label className="relative hidden md:block">
            <span className="sr-only">Search</span>
            <Search size={16} className="absolute left-3 top-2.5 text-stone-500" aria-hidden />
            <input type="search" placeholder="Search crops, prices, schemes..." className="w-64 rounded-full border border-stone-300 py-2 pl-9 pr-3 text-sm" />
          </label>
          <button onClick={() => setLang(lang === "EN" ? "TA" : "EN")} className="rounded px-2 py-1 text-sm font-medium hover:bg-stone-100" aria-label="Switch language">
            {lang === "EN" ? "ENG | தமிழ்" : "தமிழ் | ENG"}
          </button>
          <button className="rounded p-2 hover:bg-stone-100" aria-label="Notifications"><Bell size={20} /></button>
          <button className="hidden items-center gap-1.5 rounded-full bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-900 sm:flex">
            <User size={16} aria-hidden /> My Account
          </button>
          <button className="rounded p-2 xl:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-stone-200 bg-white px-4 py-2 xl:hidden">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block rounded px-2 py-2.5 font-medium hover:bg-brand-50">{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
