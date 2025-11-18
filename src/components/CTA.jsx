export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 p-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s talk about your next project</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Need support for an upcoming shutdown or capital works? Our team can mobilise quickly and safely.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:info@s6group.com.au" className="rounded-lg bg-white px-5 py-3 font-medium text-slate-900 hover:bg-slate-100">info@s6group.com.au</a>
            <a href="tel:+611300000000" className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-medium text-white">Call 1300 000 000</a>
          </div>
        </div>
      </div>
    </section>
  );
}
