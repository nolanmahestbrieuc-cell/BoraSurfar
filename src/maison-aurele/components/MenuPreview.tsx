import { dishes, menus } from '../data/restaurant'
import DishCard from './DishCard'
import SectionLabel from './SectionLabel'

const offsets = ['', 'lg:mt-24', 'lg:mt-10']

export default function MenuPreview() {
  return (
    <section id="carte" className="relative scroll-mt-20 bg-aurele-ink py-24 sm:py-32 lg:py-44">
      <div className="mx-auto max-w-editorial px-6 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="II" title="Aperçu de la carte" />
            <h2 className="mt-8 font-display text-4xl font-light leading-[1.05] text-aurele-cream sm:text-5xl lg:text-[3.75rem]">
              Trois signatures,
              <span className="italic text-aurele-amber"> écrites cet automne.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.9] text-aurele-mist lg:col-span-4 lg:col-start-9">
            La carte complète compte neuf préparations, renouvelées toutes les trois semaines. En
            voici trois que la maison garde, saison après saison.
          </p>
        </div>

        <div className="aurele-rule mt-14" />

        <div className="mt-16 grid gap-14 sm:grid-cols-2 sm:gap-10 lg:mt-20 lg:grid-cols-3 lg:gap-14">
          {dishes.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} offsetClassName={offsets[i]} />
          ))}
        </div>

        <div className="mt-24 border-t border-aurele-cream/10 pt-14 lg:mt-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-aurele-gold">
                Les menus
              </p>
              <p className="mt-6 max-w-xs text-[15px] leading-[1.9] text-aurele-mist">
                Servis pour l&rsquo;ensemble de la table. Accord mets et vins proposé à partir de
                65 €.
              </p>
            </div>

            <dl className="lg:col-span-8">
              {menus.map((menu) => (
                <div
                  key={menu.name}
                  className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-aurele-cream/10 py-6 first:pt-0"
                >
                  <dt className="font-display text-2xl font-light text-aurele-cream sm:text-[1.75rem]">
                    {menu.name}
                  </dt>
                  <span
                    aria-hidden="true"
                    className="mx-2 hidden h-px flex-1 bg-aurele-cream/15 sm:block"
                  />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-aurele-mist/70">
                    {menu.detail}
                  </span>
                  <dd className="font-display text-2xl font-light text-aurele-amber">
                    {menu.price} €
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
