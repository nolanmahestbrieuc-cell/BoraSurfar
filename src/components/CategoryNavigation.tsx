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
    <nav className="w-full bg-white">
      <div className="no-scrollbar mx-auto flex max-w-desktop justify-start gap-8 overflow-x-auto px-4 py-5 sm:justify-center sm:px-6">
        {categories.map((category) => {
          const Icon = iconFor[category.icon]
          const isActive = category.id === selectedId

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              aria-pressed={isActive}
              className="group flex shrink-0 flex-col items-center gap-2"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                  isActive
                    ? 'border-brand-500 bg-brand-50 text-brand-600'
                    : 'border-gray-200 text-gray-600 group-hover:border-brand-300 group-hover:text-brand-500'
                }`}
              >
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span
                className={`whitespace-nowrap text-xs font-medium transition-colors ${
                  isActive ? 'text-brand-600' : 'text-gray-600 group-hover:text-brand-500'
                }`}
              >
                {category.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
