import salleImage from '../assets/salle.svg'

const facts = [
  { label: 'Table', value: 'Vingt-quatre couverts' },
  { label: 'Cuisine', value: 'De saison, en cinq services' },
  { label: 'Cave', value: 'Trois cents vignerons' },
]

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-aurele-ink">
      <div className="aurele-grain absolute inset-0">
        <img
          src={salleImage}
          alt="La salle de la Maison Aurèle éclairée à la bougie au moment du service"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-aurele-ink via-aurele-ink/45 to-aurele-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-aurele-ink/85 via-transparent to-aurele-ink/60" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-editorial flex-col justify-end px-6 pb-16 pt-36 sm:px-10 sm:pb-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="aurele-rise lg:col-span-7 xl:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-aurele-gold">
              Restaurant gastronomique — depuis 1998
            </p>

            <h1 className="mt-7 font-display text-[3.25rem] font-light leading-[0.92] text-aurele-cream sm:text-7xl lg:text-[5.5rem]">
              Une cuisine
              <br />
              de mémoire
              <br />
              <span className="italic text-aurele-amber">et de saison.</span>
            </h1>

            <div className="aurele-rule mt-10 max-w-xs" />

            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-aurele-mist sm:text-base">
              Vingt-quatre couverts, une cheminée, un potager en Île-de-France. Aurèle Vasseur
              compose chaque jour un menu court, dicté par les arrivages et par le feu de bois.
            </p>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="#reserver"
                className="group inline-flex items-center gap-4 bg-aurele-gold px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-aurele-ink transition-colors duration-300 hover:bg-aurele-amber"
              >
                Réserver une table
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#carte"
                className="border-b border-aurele-gold/40 pb-1 text-[11px] font-medium uppercase tracking-[0.32em] text-aurele-cream transition-colors duration-300 hover:border-aurele-gold hover:text-aurele-amber"
              >
                Découvrir la carte
              </a>
            </div>
          </div>

          <aside className="aurele-rise lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-aurele-cream/10 border-t border-aurele-cream/10">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="text-[10px] font-medium uppercase tracking-[0.34em] text-aurele-gold">
                    {fact.label}
                  </dt>
                  <dd className="font-display text-lg font-light text-aurele-cream sm:text-xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
