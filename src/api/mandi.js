import { prices as mockPrices } from "../mocks/data";

// Same official source the old SaveAgri project used: Agmarknet daily prices on data.gov.in
const RESOURCE = "9ef84268-d588-465a-a308-a864a43d0070";
const SOURCE = import.meta.env.VITE_MANDI_SOURCE; // "backend" | "datagov" | unset = sample data
const API_BASE = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

const lower = (r) => Object.fromEntries(Object.entries(r).map(([k, v]) => [k.toLowerCase(), v]));
const num = (x) => { const n = Number(x); return Number.isFinite(n) && n > 0 ? n : null; };
const isoDate = (s) => { const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s || ""); return m ? `${m[3]}-${m[2]}-${m[1]}` : ""; };
const avg = (a) => { const v = a.filter((x) => x != null); return v.length ? Math.round(v.reduce((s, x) => s + x, 0) / v.length) : null; };
const mode = (a) => { const c = {}; a.forEach((x) => { if (x) c[x] = (c[x] || 0) + 1; }); return Object.entries(c).sort((x, y) => y[1] - x[1])[0]?.[0] || ""; };

// Same grouping as old priceTable(): latest arrival date, one row per commodity, averaged over markets.
// chg stays null: day-over-day change needs two days of stored history (the old project used its database).
function toTable(records, limit) {
  const rows = records.map(lower)
    .map((r) => ({ ...r, d: isoDate(r.arrival_date), modal: num(r.modal_price) }))
    .filter((r) => r.d && r.modal);
  const date = rows.reduce((m, r) => (r.d > m ? r.d : m), "");
  const by = new Map();
  rows.filter((r) => r.d === date).forEach((r) => by.set(r.commodity, [...(by.get(r.commodity) || []), r]));
  const out = [...by.entries()]
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([commodity, a]) => ({
      commodity,
      variety: mode(a.map((x) => x.variety)),
      min: avg(a.map((x) => num(x.min_price))),
      max: avg(a.map((x) => num(x.max_price))),
      modal: avg(a.map((x) => x.modal)),
      chg: null,
    }));
  return { date, rows: out, sample: false };
}

export async function fetchMandiPrices({ state = "Tamil Nadu", limit = 4, signal } = {}) {
  if (SOURCE === "backend") {
    // Expected: { date: "2026-11-27", rows: [{ commodity, variety, min, max, modal, chg }] }
    const res = await fetch(`${API_BASE}/api/mandi/prices?state=${encodeURIComponent(state)}&limit=${limit}`, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const j = await res.json();
    return { date: j.date || "", rows: j.rows || [], sample: false };
  }
  if (SOURCE === "datagov") {
    // DEV ONLY: /datagov is proxied by vite.config.js, which adds the API key on the Node side
    const url = `/datagov/resource/${RESOURCE}?format=json&limit=500&filters%5Bstate.keyword%5D=${encodeURIComponent(state)}`;
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const j = await res.json();
    return toTable(j.records || [], limit);
  }
  await new Promise((r) => setTimeout(r, 600)); // fake delay so the loading state is visible
  return {
    date: "",
    sample: true,
    rows: mockPrices.slice(0, limit).map((p) => ({ commodity: p.crop, variety: "", min: p.min, max: p.max, modal: p.modal, chg: p.change })),
  };
}