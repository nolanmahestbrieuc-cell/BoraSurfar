import { Heart, ShoppingBag, Shirt, Backpack } from 'lucide-react'
import type { ComponentType } from 'react'
import type { Listing } from '../types'
import SurfboardIcon from './icons/SurfboardIcon'

const iconFor: Record<string, ComponentType<any>> = {
  surfboards: SurfboardIcon,
  wetsuits: Shirt,
  gear: Backpack,
}

interface Props {
  listing: Listing
  isFavorite: boolean
  onToggleFavorite: (id: string) => void
  onAddToCart: (id: string) => void
}

export default function ProductCard({ listing, isFavorite, onToggleFavorite, onAddToCart }: Props) {
  const Icon = iconFor[listing.categoryId] ?? SurfboardIcon

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow hover:shadow-lg hover:shadow-navy-900/5">
      <div
        className="relative flex aspect-[4/3] items-center justify-center"
        style={{ backgroundColor: `${listing.imageColor}33` }}
      >
        <Icon size={56} strokeWidth={1.25} style={{ color: listing.imageColor }} />

        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white ${
            listing.condition === 'new' ? 'bg-brand-500' : 'bg-amber-500'
          }`}
        >
          {listing.condition === 'new' ? 'Neuf' : 'Occasion'}
        </span>

        <button
          type="button"
          onClick={() => onToggleFavorite(listing.id)}
          aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          aria-pressed={isFavorite}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy-700 shadow-sm backdrop-blur transition-colors hover:text-brand-600"
        >
          <Heart size={16} strokeWidth={2} fill={isFavorite ? '#2DBDB5' : 'none'} className={isFavorite ? 'text-brand-500' : ''} />
        </button>
      </div>

      <div className="p-3.5">
        <h3 className="line-clamp-1 text-sm font-semibold text-navy-900">{listing.title}</h3>
        <p className="mt-0.5 text-xs text-gray-500">{listing.location}</p>

        <div className="mt-2.5 flex items-center justify-between">
          <p className="text-base font-extrabold text-navy-900">{listing.price} €</p>
          <button
            type="button"
            onClick={() => onAddToCart(listing.id)}
            aria-label="Ajouter au panier"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors hover:bg-brand-500 hover:text-white"
          >
            <ShoppingBag size={15} strokeWidth={2} />
          </button>
        </div>
      </div>
    </article>
  )
}
