import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { id: 'marketplace', label: 'Marché' },
  { id: 'experiences', label: 'Expériences' },
]

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="relative w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-desktop items-center justify-between px-4 sm:px-6">
        <a href="#" className="text-xl font-extrabold tracking-tight text-brand-500">
          borasurfar
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center text-gray-700 md:hidden"
          aria-label={mobileNavOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileNavOpen && (
        <nav className="absolute inset-x-0 top-full z-30 flex flex-col border-b border-gray-100 bg-white px-4 py-2 shadow-sm md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className="rounded-md px-2 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
              onClick={() => setMobileNavOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
