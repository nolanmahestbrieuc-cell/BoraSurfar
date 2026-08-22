import { SlidersHorizontal } from 'lucide-react'

interface Props {
  activeCount: number
  onClick: () => void
}

export default function FilterBar({ activeCount, onClick }: Props) {
  return (
    <div className="w-full bg-gray-50 px-4 py-3 sm:px-6">
      <button
        type="button"
        onClick={onClick}
        className="relative mx-auto flex w-full max-w-desktop items-center justify-center rounded-xl border border-gray-200 bg-white py-3.5 text-sm font-medium text-gray-700 transition-colors hover:border-brand-300 hover:text-brand-600"
      >
        <span className="flex items-center gap-2">
          <SlidersHorizontal size={16} strokeWidth={1.75} />
          <span>Filtrer les résultats</span>
        </span>
        {activeCount > 0 && (
          <span className="absolute right-4 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
            {activeCount}
          </span>
        )}
      </button>
    </div>
  )
}
