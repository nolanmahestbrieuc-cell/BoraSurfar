const priceOptions = [
  { label: 'Moins de 50 €', value: 50 },
  { label: 'Moins de 150 €', value: 150 },
  { label: 'Moins de 300 €', value: 300 },
  { label: 'Moins de 500 €', value: 500 },
]

interface Props {
  open: boolean
  maxPrice: number | null
  onChangeMaxPrice: (value: number | null) => void
  onReset: () => void
}

export default function FilterPanel({ open, maxPrice, onChangeMaxPrice, onReset }: Props) {
  if (!open) return null

  return (
    <div className="mt-2 rounded-2xl border border-gray-200 bg-white p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Prix maximum</p>
      <div className="mb-5 flex flex-wrap gap-2">
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
                  : 'border-gray-200 text-navy-700 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={onReset}
        className="text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
      >
        Réinitialiser les filtres
      </button>
    </div>
  )
}
