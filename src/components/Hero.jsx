import { useEffect, useState } from "react";

// Picks src/assets/hero-bg.* (slide 1), hero-bg2.* (slide 2), hero-bg3.* (slide 3)
const bgFiles = import.meta.glob("../assets/hero-bg*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });
const bgImage = (n) => Object.entries(bgFiles).find(([path]) => new RegExp(`/hero-bg${n === 1 ? "" : n}\\.`).test(path))?.[1];

const INTERVAL = 5000; // ms between slides. Keep in sync with the 3s in .hero-zoom (index.css)

// EDIT THE TEXT HERE: one object per image
const allSlides = [
  {
    n: 1,
    eyebrow: "India's all-in-one agriculture platform",
    title: "Better Farming Starts With",
    accent: "Better Information.",
    text: "Market prices, crop guidance, government schemes, farm tools, marketplace and expert support — all in one place.",
  },
  {
    n: 2,
    eyebrow: "Mandi prices",
    title: "Know Today's Mandi Price",
    accent: "Before You Sell.",
    text: "Compare minimum, maximum and modal prices for your crops across markets near you.",
  },
  {
    n: 3,
    eyebrow: "Schemes and expert help",
    title: "Government Schemes And Expert Advice,",
    accent: "One Tap Away.",
    text: "Find schemes you are eligible for and get answers to your farming questions from experts.",
  },
];

// Only slides that have an image file; if none found, show slide 1 on the plain green background
const withImages = allSlides.map((s) => ({ ...s, img: bgImage(s.n) })).filter((s) => s.img);
const slides = withImages.length ? withImages : [allSlides[0]];

export function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  const s = slides[i];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Welcome"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative isolate overflow-hidden bg-brand-900"
    >
      {/* Background photos: stacked, the active one fades in and slowly zooms */}
      {slides.map((sl, n) =>
        sl.img ? (
          <img
            key={sl.n}
            src={sl.img}
            alt=""
            fetchPriority={n === 0 ? "high" : "auto"}
            className={`absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center] transition-opacity duration-1000 ${
              n === i ? "hero-zoom opacity-100" : "scale-[1.08] opacity-0"
            }`}
          />
        ) : null
      )}

      {/* Light overlay so the left text stays readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/85 via-white/55 to-transparent lg:via-white/30" />

      <div className="mx-auto flex min-h-[380px] max-w-7xl items-center px-4 pb-20 pt-10 lg:pb-24 lg:pt-14">
        {/* key={i} restarts the text animation on every slide change */}
        <div key={i} className="hero-text-in max-w-xl" aria-live="polite">
          <p className="text-sm font-semibold uppercase tracking-wide text-stone-800">{s.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl">
            {s.title}
            <span className="block text-brand-600">{s.accent}</span>
          </h1>
          <p className="mt-4 text-lg text-stone-800">{s.text}</p>

          {slides.length > 1 && (
            <div className="mt-6 flex items-center gap-2">
              {slides.map((sl, n) => (
                <button
                  key={sl.n}
                  onClick={() => setI(n)}
                  aria-label={`Show slide ${n + 1}`}
                  aria-current={n === i}
                  className={`h-2.5 rounded-full transition-all duration-300 ${n === i ? "w-8 bg-brand-700" : "w-2.5 bg-stone-700/40 hover:bg-stone-700/70"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}