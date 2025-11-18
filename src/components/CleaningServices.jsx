import { Home, Building2, Vacuum, Bath, GlassWater, Refrigerator, Sprout, Sparkles } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    desc: "Regular, one‑off and deep cleans for apartments and houses. Kitchens, bathrooms, living, bedrooms and more.",
    bullets: ["Dusting & vacuuming", "Kitchen & bathrooms", "Mop hard floors"],
  },
  {
    icon: Building2,
    title: "Commercial & Office",
    desc: "Spotless offices and retail spaces with flexible schedules. After‑hours options and key‑holding available.",
    bullets: ["Desks & meeting rooms", "Bins & sanitisation", "Reception & common areas"],
  },
  {
    icon: Vacuum,
    title: "End‑of‑Lease / Deep Clean",
    desc: "Bond‑back focused deep cleaning including oven, rangehood, skirting, tiles and more.",
    bullets: ["Oven & rangehood", "Skirting & detail", "Bathrooms descaled"],
  },
];

export default function CleaningServices() {
  return (
    <section id="services" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our cleaning services</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Sparkling‑clean results across homes, offices and move‑outs. Custom checklists to suit your space.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded bg-gradient-to-br from-cyan-600 to-emerald-500 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-slate-400 text-sm">{desc}</p>
              <ul className="mt-4 space-y-1 text-slate-300 text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-emerald-400" /> {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
