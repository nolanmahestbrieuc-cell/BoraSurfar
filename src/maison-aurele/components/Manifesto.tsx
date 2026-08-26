import atelierImage from '../assets/atelier.svg'
import detailImage from '../assets/detail-table.svg'
import SectionLabel from './SectionLabel'

export default function Manifesto() {
  return (
    <section id="maison" className="relative scroll-mt-20 bg-aurele-coal py-24 sm:py-32 lg:py-44">
      <div className="mx-auto max-w-editorial px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <figure className="lg:col-span-5">
            <div className="aurele-grain relative overflow-hidden">
              <img
                src={atelierImage}
                alt="Le passe de la cuisine pendant le dressage des assiettes"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-start gap-4 text-[11px] uppercase tracking-[0.24em] text-aurele-mist/70">
              <span className="text-aurele-gold">01</span>
              Le passe, 19h28
            </figcaption>
          </figure>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
            <SectionLabel index="I" title="La maison" />

            <h2 className="mt-8 font-display text-4xl font-light leading-[1.05] text-aurele-cream sm:text-5xl lg:text-[3.5rem]">
              Trois salles basses, une cheminée,
              <span className="italic text-aurele-amber"> et le silence du service.</span>
            </h2>

            <p className="mt-10 text-[15px] leading-[1.9] text-aurele-mist first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[4.5rem] first-letter:font-light first-letter:leading-[0.78] first-letter:text-aurele-gold">
              Rue des Orfèvres, derrière une porte cochère, la Maison Aurèle occupe l&rsquo;ancien
              atelier d&rsquo;un fondeur. Les murs de pierre ont été laissés nus, les nappes sont en
              lin lavé, et la lumière descend en cercles étroits sur chaque table. On y vient pour
              manger, pour parler bas, et pour rester tard.
            </p>

            <p className="mt-6 text-[15px] leading-[1.9] text-aurele-mist">
              Le menu change toutes les trois semaines. Les légumes arrivent d&rsquo;un potager
              d&rsquo;un hectare à Chevreuse, les poissons de la criée de Loctudy, le beurre
              d&rsquo;une baratte normande. Rien de plus, rien d&rsquo;ailleurs.
            </p>

            <blockquote className="mt-14 border-l border-aurele-gold/50 pl-8">
              <p className="font-display text-2xl font-light italic leading-snug text-aurele-cream sm:text-3xl">
                « Je ne cherche pas la surprise. Je cherche le goût exact d&rsquo;un produit, le jour
                où il est le meilleur. »
              </p>
              <footer className="mt-6 text-[11px] uppercase tracking-[0.3em] text-aurele-gold">
                Aurèle Vasseur — chef de cuisine
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:items-center">
          <figure className="lg:col-span-4 lg:col-start-2">
            <div className="aurele-grain relative overflow-hidden">
              <img
                src={detailImage}
                alt="Table dressée : bougie, verres en cristal et couverts dorés"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>

          <div className="lg:col-span-5 lg:col-start-7">
            <p className="font-display text-3xl font-light leading-snug text-aurele-cream sm:text-4xl">
              Le service commence à la bougie, à dix-neuf heures trente précises.
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-[1.9] text-aurele-mist">
              Une seule séance le soir : toutes les tables partent ensemble, au même rythme. La cave
              — trois cents vignerons, en majorité de la Loire et du Jura — s&rsquo;accorde au menu ou
              se choisit au verre, sans cérémonie.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
