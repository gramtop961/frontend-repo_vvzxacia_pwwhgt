import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg" />
            <span className="font-semibold text-white text-lg tracking-tight">S6 Group</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white shadow hover:shadow-lg transition-all">
              <Phone className="h-4 w-4" />
              Get in touch
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 pt-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200 rounded px-3 py-2 hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white shadow">
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
