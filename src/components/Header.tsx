import { useState } from 'react'
import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react'

const navLinks = [
  { id: 'marketplace', label: 'Marché' },
  { id: 'experiences', label: 'Expériences' },
]

interface Props {
  searchQuery: string
  onSearchChange: (value: string) => void
  favoritesCount: number
  cartCount: number
}

export default function Header({ searchQuery, onSearchChange, favoritesCount, cartCount }: Props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="relative w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-desktop items-center gap-4 px-4 sm:px-6 lg:gap-8">
        <a href="#" className="shrink-0 text-xl font-extrabold tracking-tight text-brand-500">
          borasurfar
        </a>

        <nav className="hidden shrink-0 items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className="text-sm font-medium text-navy-700 transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden flex-1 md:block">
          <label className="relative block">
            <span className="sr-only">Rechercher</span>
            <Search
              size={18}
              strokeWidth={1.75}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Rechercher un produit, une marque..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-sm text-navy-900 placeholder:text-gray-400 transition-colors focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
          </label>
        </div>

        <div className="ml-auto hidden shrink-0 items-center gap-6 md:flex">
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-medium text-navy-700 transition-colors hover:text-brand-600"
          >
            <Heart size={19} strokeWidth={1.75} />
            <span>Favoris</span>
            {favoritesCount > 0 && (
              <span className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[10px] font-semibold text-white">
                {favoritesCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-medium text-navy-700 transition-colors hover:text-brand-600"
          >
            <User size={19} strokeWidth={1.75} />
            <span>Compte</span>
          </button>
          <button
            type="button"
            className="relative flex items-center gap-1.5 text-sm font-medium text-navy-700 transition-colors hover:text-brand-600"
          >
            <ShoppingBag size={19} strokeWidth={1.75} />
            <span>Panier</span>
            {cartCount > 0 && (
              <span className="absolute -right-2.5 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <div className="ml-auto flex items-center gap-1 md:hidden">
          <button
            type="button"
            aria-label="Favoris"
            className="relative flex h-9 w-9 items-center justify-center text-navy-700"
          >
            <Heart size={20} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Panier"
            className="relative flex h-9 w-9 items-center justify-center text-navy-700"
          >
            <ShoppingBag size={20} strokeWidth={1.75} />
            {cartCount > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-navy-700"
            aria-label={mobileNavOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className="border-t border-gray-100 px-4 py-3 sm:px-6 md:hidden">
        <label className="relative block">
          <span className="sr-only">Rechercher</span>
          <Search
            size={18}
            strokeWidth={1.75}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Rechercher un produit, une marque..."
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-sm text-navy-900 placeholder:text-gray-400 transition-colors focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </label>
      </div>

      {mobileNavOpen && (
        <nav className="absolute inset-x-0 top-full z-30 flex flex-col border-b border-gray-100 bg-white px-4 py-2 shadow-sm md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className="rounded-md px-2 py-3 text-sm font-medium text-navy-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
              onClick={() => setMobileNavOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-md px-2 py-3 text-sm font-medium text-navy-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
            onClick={() => setMobileNavOpen(false)}
          >
            Compte
          </a>
        </nav>
      )}
    </header>
  )
}
