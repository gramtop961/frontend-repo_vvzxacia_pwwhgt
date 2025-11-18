export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-500 to-cyan-400" />
            <p className="text-slate-300">© {new Date().getFullYear()} S6 Group. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
