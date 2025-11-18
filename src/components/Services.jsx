import { Wrench, Factory, Cog, Zap, Shield, Truck } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Mechanical & Electrical",
    desc: "Shutdowns, installations, commissioning, and maintenance across heavy industry.",
  },
  {
    icon: Factory,
    title: "Civil & Structural",
    desc: "Concrete, steel fabrication, rigging and structural remediation.",
  },
  {
    icon: Cog,
    title: "Asset Management",
    desc: "Condition monitoring, predictive maintenance and reliability engineering.",
  },
  {
    icon: Zap,
    title: "Power & Instrumentation",
    desc: "HV/LV, controls, automation and instrumentation for industrial plants.",
  },
  {
    icon: Shield,
    title: "HSE & Compliance",
    desc: "Risk management, permits, confined space, work at heights and training.",
  },
  {
    icon: Truck,
    title: "Logistics & Mobilisation",
    desc: "Rapid deployment, shutdown support, and remote site operations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Practical, safe and reliable delivery across industrial environments. One partner, full capability.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-slate-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
