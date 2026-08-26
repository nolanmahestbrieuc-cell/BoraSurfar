import { useEffect, useState } from 'react'

const links = [
  { href: '#maison', label: 'La maison' },
  { href: '#carte', label: 'La carte' },
  { href: '#adresse', label: 'Adresse & horaires' },
]

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-aurele-ink/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-editorial items-center justify-between gap-6 px-6 transition-all duration-500 sm:px-10 ${
          scrolled ? 'py-4' : 'py-6 sm:py-8'
        }`}
      >
        <nav className="hidden flex-1 items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.3em] text-aurele-mist transition-colors hover:text-aurele-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#top" className="flex flex-1 flex-col items-start lg:items-center">
          <span className="font-display text-2xl font-medium leading-none tracking-[0.22em] text-aurele-cream sm:text-[1.75rem]">
            MAISON
          </span>
          <span className="font-display text-2xl font-medium leading-none tracking-[0.22em] text-aurele-gold sm:text-[1.75rem]">
            AURÈLE
          </span>
        </a>

        <div className="flex flex-1 items-center justify-end gap-6">
          <span className="hidden text-[11px] uppercase tracking-[0.3em] text-aurele-mist xl:inline">
            Paris I<sup className="tracking-normal">er</sup>
          </span>
          <a
            href="#reserver"
            className="border border-aurele-gold/60 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.3em] text-aurele-amber transition-colors duration-300 hover:bg-aurele-gold hover:text-aurele-ink sm:px-7"
          >
            Réserver
          </a>
        </div>
      </div>
    </header>
  )
}
