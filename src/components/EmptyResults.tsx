import { SearchX } from 'lucide-react'

interface Props {
  onReset: () => void
}

export default function EmptyResults({ onReset }: Props) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <SearchX size={40} strokeWidth={1.5} className="mb-4 text-gray-300" />
      <p className="text-sm font-medium text-gray-500">Aucun résultat disponible.</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-1 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
      >
        Réinitialiser les filtres&nbsp;?
      </button>
    </div>
  )
}
