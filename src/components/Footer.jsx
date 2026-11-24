const cols = [
  { title: "Platform", links: ["Market Prices", "Crop Advisory", "Schemes", "Marketplace"] },
  { title: "Company", links: ["About SaveAgri", "Contact", "Privacy Policy", "Terms & Conditions"] },
];

export default function Footer() {
  return (
    <footer className="mt-10 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-xl font-bold text-white">SaveAgri</div>
          <p className="mt-2 max-w-sm text-sm">Market prices, crop guidance, government schemes and farm tools for Indian farmers.</p>
        </div>
        {cols.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h3 className="mb-2 font-semibold text-white">{c.title}</h3>
            <ul className="space-y-1.5 text-sm">{c.links.map((l) => <li key={l}><a href="#" className="hover:underline">{l}</a></li>)}</ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} SaveAgri. All rights reserved. saveagri.org</div>
    </footer>
  );
}
