import Spline from "@splinetool/react-spline";
import { Sparkles, ShieldCheck, Leaf, ArrowRight } from "lucide-react";

export default function CleaningHero() {
  const sceneUrl = import.meta.env.VITE_SPLINE_SCENE || "https://prod.spline.design/qvQy8m6wU2I4I9a0/scene.splinecode";

  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950 pt-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              Sparkling‑clean spaces, zero hassle
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Premium Cleaning Services in Sydney
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 max-w-xl">
              Residential, commercial and end‑of‑lease deep cleans by vetted pros. Eco‑friendly products, insured, and a 48‑hour reclean guarantee.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-emerald-500 px-5 py-3 text-white font-medium shadow hover:shadow-lg transition-all">
                Book a clean
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="text-slate-300 hover:text-white">See services</a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div>
                <dt className="text-3xl font-semibold text-white">4.9★</dt>
                <dd className="text-slate-400 text-sm">Client rating</dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold text-white">48h</dt>
                <dd className="text-slate-400 text-sm">Reclean guarantee</dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold text-white">Eco</dt>
                <dd className="text-slate-400 text-sm">Non‑toxic products</dd>
              </div>
            </dl>
            <ul className="mt-6 flex flex-wrap gap-3 text-slate-300">
              <li className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> Fully insured & vetted
              </li>
              <li className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs">
                <Leaf className="h-4 w-4 text-emerald-400" /> Eco‑friendly supplies
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/30">
              <Spline scene={sceneUrl} />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 rounded-xl bg-slate-900/80 border border-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded bg-gradient-to-br from-cyan-500 to-emerald-400" />
                <div>
                  <p className="text-white font-medium leading-tight">Interactive 3D preview</p>
                  <p className="text-slate-400 text-sm">Move, pan and explore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
