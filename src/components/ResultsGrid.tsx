import { ArrowRight } from 'lucide-react'
import type { Listing } from '../types'
import ProductCard from './ProductCard'

interface Props {
  title: string
  listings: Listing[]
  favoriteIds: Set<string>
  onToggleFavorite: (id: string) => void
  onAddToCart: (id: string) => void
  onViewAll: () => void
}

export default function ResultsGrid({
  title,
  listings,
  favoriteIds,
  onToggleFavorite,
  onAddToCart,
  onViewAll,
}: Props) {
  return (
    <div className="px-4 py-8 sm:px-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-navy-900 sm:text-2xl">{title}</h2>
        <button
          type="button"
          onClick={onViewAll}
          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
        >
          Voir tout
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {listings.map((listing) => (
          <ProductCard
            key={listing.id}
            listing={listing}
            isFavorite={favoriteIds.has(listing.id)}
            onToggleFavorite={onToggleFavorite}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  )
}
