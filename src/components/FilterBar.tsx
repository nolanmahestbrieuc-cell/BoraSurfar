import { ChevronDown, SlidersHorizontal } from 'lucide-react'

interface Props {
  activeCount: number
  open: boolean
  onToggle: () => void
}

export default function FilterBar({ activeCount, open, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className="relative flex w-full items-center justify-center rounded-2xl border border-gray-200 bg-white py-3.5 text-sm font-semibold text-navy-800 transition-colors hover:border-brand-300"
    >
      <span className="flex items-center gap-2">
        <SlidersHorizontal size={16} strokeWidth={1.75} />
        <span>Filtrer les résultats</span>
      </span>
      <span className="absolute right-4 flex items-center gap-2">
        {activeCount > 0 && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
            {activeCount}
          </span>
        )}
        <ChevronDown
          size={18}
          strokeWidth={2}
          className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </span>
    </button>
  )
}
