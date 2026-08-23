import { Menu, Plus, MessageCircle, User } from 'lucide-react'

const tabs = [
  { id: 'menu', label: 'Menu', icon: Menu },
  { id: 'sell', label: 'Vendre', icon: Plus },
  { id: 'chat', label: 'Messages', icon: MessageCircle },
  { id: 'profile', label: 'Profil', icon: User },
] as const

type TabId = (typeof tabs)[number]['id']

interface Props {
  activeTab: TabId
  onSelect: (id: TabId) => void
}

export default function MobileBottomNavigation({ activeTab, onSelect }: Props) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white md:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              type="button"
              aria-label={tab.label}
              aria-pressed={isActive}
              onClick={() => onSelect(tab.id)}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                isActive ? 'text-brand-500' : 'text-navy-600 hover:text-brand-500'
              }`}
            >
              <Icon size={22} strokeWidth={1.75} />
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export type { TabId }
