import { Shirt, Backpack } from 'lucide-react'
import type { Category } from '../types'
import SurfboardIcon from './icons/SurfboardIcon'

interface Props {
  categories: Category[]
  selectedId: string | null
  onSelect: (id: string) => void
}

const iconFor = {
  surfboard: SurfboardIcon,
  wetsuit: Shirt,
  gear: Backpack,
} as const

export default function CategoryNavigation({ categories, selectedId, onSelect }: Props) {
  return (
    <nav className="w-full bg-white px-4 pb-2 pt-4 sm:px-6">
      <div className="mx-auto max-w-desktop">
        <div className="no-scrollbar flex gap-3 overflow-x-auto rounded-2xl border border-gray-100 p-2 sm:grid sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-gray-100 sm:overflow-visible sm:p-1">
          {categories.map((category) => {
            const Icon = iconFor[category.icon]
            const isActive = category.id === selectedId

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelect(category.id)}
                aria-pressed={isActive}
                className="group flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-gray-50 sm:shrink"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    isActive
                      ? 'border-brand-500 bg-brand-50 text-brand-600'
                      : 'border-gray-200 text-gray-500 group-hover:border-brand-300 group-hover:text-brand-500'
                  }`}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="min-w-0">
                  <span
                    className={`block whitespace-nowrap text-sm font-bold ${
                      isActive ? 'text-brand-600' : 'text-navy-800'
                    }`}
                  >
                    {category.label}
                  </span>
                  <span className="block truncate text-xs text-gray-500">{category.description}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
