import { X } from 'lucide-react'

const priceOptions = [
  { label: 'Moins de 15 €', value: 15 },
  { label: 'Moins de 50 €', value: 50 },
  { label: 'Moins de 150 €', value: 150 },
  { label: 'Moins de 500 €', value: 500 },
]

interface Props {
  open: boolean
  maxPrice: number | null
  onChangeMaxPrice: (value: number | null) => void
  onReset: () => void
  onClose: () => void
}

export default function FilterPanel({ open, maxPrice, onChangeMaxPrice, onReset, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Fermer les filtres"
        onClick={onClose}
        className="absolute inset-0 bg-black/30"
      />

      <div className="relative w-full max-w-md rounded-t-2xl bg-white p-5 shadow-xl sm:rounded-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900">Filtrer les résultats</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Prix maximum</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {priceOptions.map((option) => {
            const isActive = maxPrice === option.value
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onChangeMaxPrice(isActive ? null : option.value)}
                className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-brand-500 bg-brand-500 text-white'
                    : 'border-gray-200 text-gray-700 hover:border-brand-300 hover:text-brand-600'
                }`}
              >
                {option.label}
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-300 hover:text-brand-600"
          >
            Réinitialiser
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Appliquer
          </button>
        </div>
      </div>
    </div>
  )
}
