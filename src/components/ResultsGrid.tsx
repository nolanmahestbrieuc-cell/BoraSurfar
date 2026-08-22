import type { Listing } from '../types'

interface Props {
  listings: Listing[]
}

export default function ResultsGrid({ listings }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 py-5 sm:grid-cols-3 sm:px-6 lg:grid-cols-4">
      {listings.map((listing) => (
        <article key={listing.id} className="group cursor-pointer">
          <div
            className="mb-2 aspect-square w-full rounded-xl"
            style={{ backgroundColor: listing.imageColor }}
          />
          <h3 className="line-clamp-2 text-sm font-medium text-gray-900 group-hover:text-brand-600">
            {listing.title}
          </h3>
          <p className="mt-0.5 text-sm font-bold text-gray-900">{listing.price} €</p>
          <p className="text-xs text-gray-500">{listing.location}</p>
        </article>
      ))}
    </div>
  )
}
