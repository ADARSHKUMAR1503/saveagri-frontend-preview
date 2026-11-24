import { ArrowRight, Star } from "lucide-react";

export const Card = ({ className = "", children, id }) => (
  <div id={id} className={`rounded-xl border border-stone-200 bg-white p-4 ${className}`}>{children}</div>
);

// export const SampleTag = () => (
//   <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-800">Sample data</span>
// );

export const SectionHeader = ({ title, href = "#", sample = false }) => (
  <div className="mb-3 flex items-center justify-between gap-2">
    <h2 className="flex items-center gap-2 text-lg font-semibold text-brand-900">{title} </h2>
    <a href={href} className="flex items-center gap-1 text-sm font-medium text-brand-700 hover:underline">
      View all <ArrowRight size={14} aria-hidden />
    </a>
  </div>
);

// Reserved Google AdSense slot. Replace inner content with the <ins class="adsbygoogle"> tag after approval.
export const AdSlot = ({ label = "Advertisement", className = "min-h-[90px]" }) => (
  <aside aria-label="Advertisement" className={`flex items-center justify-center rounded-lg border border-dashed border-stone-300 bg-stone-100 text-xs text-stone-500 ${className}`}>
    {label} (AdSense placeholder)
  </aside>
);

export const Rating = ({ value }) => (
  <span className="flex items-center gap-1 text-xs text-stone-600">
    <Star size={12} className="fill-harvest text-harvest" aria-hidden /> {value}
  </span>
);
