import type { Dish } from '../data/restaurant'

interface Props {
  dish: Dish
  /** Décalage vertical façon chemin de fer de magazine (desktop uniquement). */
  offsetClassName?: string
}

export default function DishCard({ dish, offsetClassName = '' }: Props) {
  return (
    <article className={`group ${offsetClassName}`}>
      <div className="aurele-grain relative overflow-hidden bg-aurele-ember">
        <img
          src={dish.image}
          alt={dish.imageAlt}
          className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute left-5 top-4 font-display text-3xl font-light text-aurele-amber/90">
          {dish.index}
        </span>
      </div>

      <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.36em] text-aurele-gold">
        {dish.service}
      </p>

      <h3 className="mt-4 font-display text-[1.75rem] font-light leading-tight text-aurele-cream sm:text-3xl">
        {dish.name}
      </h3>

      <p className="mt-2 font-display text-base italic text-aurele-mist/80">{dish.producer}</p>

      <p className="mt-5 text-[14px] leading-[1.85] text-aurele-mist">{dish.description}</p>

      <div className="mt-7 flex items-baseline justify-between border-t border-aurele-cream/10 pt-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-aurele-mist/60">À la carte</span>
        <span className="font-display text-2xl font-light text-aurele-amber">{dish.price} €</span>
      </div>
    </article>
  )
}
