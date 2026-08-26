import { contact, openingHours } from '../data/restaurant'

export default function Footer() {
  return (
    <>
      <section id="reserver" className="relative scroll-mt-20 bg-aurele-ember">
        <div className="mx-auto max-w-editorial px-6 py-24 text-center sm:px-10 sm:py-32">
          <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-aurele-gold">
            Réservation
          </p>
          <h2 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-light leading-[1.08] text-aurele-cream sm:text-5xl lg:text-[3.5rem]">
            Les tables du soir s&rsquo;ouvrent
            <span className="italic text-aurele-amber"> soixante jours à l&rsquo;avance.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-[1.9] text-aurele-mist">
            Une seule séance à 19h30, vingt-quatre couverts. Pour les groupes de plus de six
            personnes et les privatisations, écrivez-nous directement.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <a
              href={contact.phoneHref}
              className="group inline-flex items-center gap-4 bg-aurele-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-aurele-ink transition-colors duration-300 hover:bg-aurele-amber"
            >
              Réserver une table
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="border-b border-aurele-gold/40 pb-1 text-[11px] font-medium uppercase tracking-[0.32em] text-aurele-cream transition-colors duration-300 hover:border-aurele-gold hover:text-aurele-amber"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </section>

      <footer id="adresse" className="scroll-mt-20 bg-aurele-ink">
        <div className="mx-auto max-w-editorial px-6 py-20 sm:px-10 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="font-display text-3xl font-light leading-none tracking-[0.2em] text-aurele-cream">
                MAISON
              </p>
              <p className="font-display text-3xl font-light leading-none tracking-[0.2em] text-aurele-gold">
                AURÈLE
              </p>
              <p className="mt-8 max-w-xs text-[14px] leading-[1.9] text-aurele-mist">
                Table gastronomique française. Cuisine de saison au feu de bois, cave de vignerons,
                vingt-quatre couverts.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.36em] text-aurele-gold">
                Adresse
              </h3>
              <address className="mt-7 space-y-1 text-[15px] not-italic leading-[1.9] text-aurele-mist">
                <p className="text-aurele-cream">{contact.street}</p>
                <p className="text-aurele-cream">{contact.city}</p>
                <p className="pt-3">Métro Louvre — Rivoli, ligne 1</p>
                <p>
                  <a
                    href={contact.phoneHref}
                    className="transition-colors hover:text-aurele-amber"
                  >
                    {contact.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="transition-colors hover:text-aurele-amber"
                  >
                    {contact.email}
                  </a>
                </p>
              </address>
            </div>

            <div className="lg:col-span-5">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.36em] text-aurele-gold">
                Horaires d&rsquo;ouverture
              </h3>
              <dl className="mt-7 border-t border-aurele-cream/10">
                {openingHours.map((day) => (
                  <div
                    key={day.days}
                    className="grid grid-cols-2 gap-x-6 gap-y-3 border-b border-aurele-cream/10 py-5 sm:grid-cols-[1.2fr_1fr_1fr]"
                  >
                    <dt className="col-span-2 text-[15px] text-aurele-cream sm:col-span-1">
                      {day.days}
                    </dt>
                    <dd className="text-[14px] text-aurele-mist">
                      <span className="block text-[9px] uppercase tracking-[0.28em] text-aurele-mist/50">
                        Déjeuner
                      </span>
                      <span className="mt-1 block whitespace-nowrap">{day.lunch}</span>
                    </dd>
                    <dd className="text-[14px] text-aurele-mist">
                      <span className="block text-[9px] uppercase tracking-[0.28em] text-aurele-mist/50">
                        Dîner
                      </span>
                      <span className="mt-1 block whitespace-nowrap">{day.dinner}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[13px] leading-relaxed text-aurele-mist/70">
                Dernière commande trente minutes avant la fermeture. Fermeture annuelle du 1<sup>er</sup>{' '}
                au 21 août.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-aurele-cream/10 pt-8 text-[11px] uppercase tracking-[0.28em] text-aurele-mist/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Maison Aurèle</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="#maison" className="transition-colors hover:text-aurele-amber">
                La maison
              </a>
              <a href="#carte" className="transition-colors hover:text-aurele-amber">
                La carte
              </a>
              <a href="#reserver" className="transition-colors hover:text-aurele-amber">
                Réserver
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
