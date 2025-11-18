import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section id="about" className="bg-slate-950 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h2 className="text-3xl font-bold text-white">About S6 Group</h2>
                <p className="mt-3 text-slate-300">
                  We’re a multi‑disciplinary team delivering practical solutions across industrial sectors. Our crews combine mechanical, electrical, civil and structural capability with a relentless focus on safety and schedule.
                </p>
                <ul className="mt-6 space-y-2 text-slate-300 list-disc pl-5">
                  <li>Full lifecycle delivery – plan, mobilise, execute, demobilise</li>
                  <li>24/7 coverage and rapid response teams</li>
                  <li>ISO‑aligned systems and procedures</li>
                  <li>Proven performance in live operating environments</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center min-h-[320px]" />
            </div>
          </div>
        </section>
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
