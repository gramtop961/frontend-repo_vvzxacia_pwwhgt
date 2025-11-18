import { ArrowRight, ShieldCheck, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950 pt-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              ISO-certified construction and maintenance
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Integrated services for infrastructure and industry
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 max-w-xl">
              S6 Group delivers end‑to‑end solutions across structural, civil, mechanical and electrical disciplines. From shutdowns to major projects, we help you deliver safely, on time, and on budget.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-medium shadow hover:shadow-lg transition-all">
                Speak to our team
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="text-slate-300 hover:text-white">Explore services</a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div>
                <dt className="text-3xl font-semibold text-white">200+</dt>
                <dd className="text-slate-400 text-sm">Specialist staff</dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold text-white">24/7</dt>
                <dd className="text-slate-400 text-sm">Rapid response</dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold text-white">100%</dt>
                <dd className="text-slate-400 text-sm">Safety focused</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-white/10 p-4">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-slate-900/80 border border-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded bg-gradient-to-br from-blue-500 to-cyan-400" />
                <div>
                  <p className="text-white font-medium leading-tight">Multi‑disciplinary delivery</p>
                  <p className="text-slate-400 text-sm">Single contractor simplicity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
