import { ArrowRight, Play } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

export function Hero() {
  return (
    <section aria-label="Welcome" className="relative isolate overflow-hidden bg-brand-900">
      {/* Background photo: replace file at src/assets/hero-bg.jpg */}
      <img
        src={heroBg}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]"
      />
      {/* Light overlay so the left text stays readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/85 via-white/55 to-transparent lg:via-white/30" />

      <div className="mx-auto flex min-h-[380px] max-w-7xl items-center px-4 pb-20 pt-10 lg:pb-24 lg:pt-14">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-stone-800">
            India's all-in-one agriculture platform
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl">
            Better Farming Starts With
            <span className="block text-brand-600">Better Information.</span>
          </h1>
          <p className="mt-4 text-lg text-stone-800">
            Market prices, crop guidance, government schemes, farm tools, marketplace and expert support — all in one place.
          </p>
          {/* <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-6 py-3 font-medium text-white hover:bg-brand-900">
              Explore Platform <ArrowRight size={18} aria-hidden />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-stone-900 shadow-sm hover:bg-stone-100">
              <Play size={16} className="fill-stone-900" aria-hidden /> Watch How It Works
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}