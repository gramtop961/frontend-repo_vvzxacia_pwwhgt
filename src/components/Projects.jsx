const projects = [
  {
    title: "Refinery shutdown delivery",
    desc: "Multi‑disciplinary crews delivering critical path works under tight timeframes.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Port infrastructure upgrade",
    desc: "Civil, structural and electrical upgrades with live operations maintained.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Power station maintenance",
    desc: "Predictive maintenance program reducing downtime and increasing reliability.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Recent projects</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            A snapshot of the kind of outcomes we deliver for clients across Australia.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
