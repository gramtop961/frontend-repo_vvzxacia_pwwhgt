import { MapPin } from "lucide-react";

const areas = [
  "Sydney CBD",
  "Inner West",
  "Eastern Suburbs",
  "Northern Beaches",
  "North Shore",
  "Parramatta & surrounds",
];

export default function AreasWeServe() {
  return (
    <section id="areas" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Areas we serve</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Fast, reliable cleaning teams across Sydney.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((a) => (
            <div key={a} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="h-9 w-9 rounded bg-gradient-to-br from-cyan-600 to-emerald-500 text-white flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-white">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
