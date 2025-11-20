import { useState } from 'react'
import { Menu, X, Medal, Trophy } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Practice', href: '#practice' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center shadow-sm">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <p className="font-bold text-slate-900">Horus University</p>
              <p className="text-xs text-slate-500">ICPC Team</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md shadow-sm hover:bg-slate-800 transition-colors">
              <Medal className="w-4 h-4" /> Join Us
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md border border-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 text-slate-700">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md shadow-sm">
              <Medal className="w-4 h-4" /> Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
