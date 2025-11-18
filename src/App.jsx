import Navbar from './components/Navbar'
import CleaningHero from './components/CleaningHero'
import CleaningServices from './components/CleaningServices'
import AreasWeServe from './components/AreasWeServe'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <CleaningHero />
        <CleaningServices />
        <AreasWeServe />
        <section id="about" className="bg-slate-950 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h2 className="text-3xl font-bold text-white">Why choose S6 Cleaning</h2>
                <p className="mt-3 text-slate-300">
                  Professional cleaners, transparent pricing and a satisfaction guarantee. We bring our own eco‑friendly products and equipment.
                </p>
                <ul className="mt-6 space-y-2 text-slate-300 list-disc pl-5">
                  <li>Verified and insured cleaners</li>
                  <li>Flexible bookings and reminders</li>
                  <li>Custom checklists for every visit</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1612157777902-5382bc6e864b?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center min-h-[320px]" />
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
