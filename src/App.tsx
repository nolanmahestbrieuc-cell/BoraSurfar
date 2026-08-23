import { useMemo, useState } from 'react'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import CategoryNavigation from './components/CategoryNavigation'
import FilterBar from './components/FilterBar'
import FilterPanel from './components/FilterPanel'
import HeroBanner from './components/HeroBanner'
import EmptyResults from './components/EmptyResults'
import ResultsGrid from './components/ResultsGrid'
import SurfBoardsSection from './components/SurfBoardsSection'
import MobileBottomNavigation, { type TabId } from './components/MobileBottomNavigation'
import { categories } from './data/categories'
import { listings } from './data/listings'

const sectionTitles: Record<string, string> = {
  surfboards: 'Planches de surf à la une',
  wetsuits: 'Combinaisons à la une',
  gear: 'Équipement à la une',
}

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>('surfboards')
  const [maxPrice, setMaxPrice] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<TabId>('menu')
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set())
  const [cartCount, setCartCount] = useState(0)

  const activeFilterCount = (selectedCategoryId ? 1 : 0) + (maxPrice !== null ? 1 : 0)

  const filteredListings = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return listings.filter((listing) => {
      const matchesCategory = !selectedCategoryId || listing.categoryId === selectedCategoryId
      const matchesPrice = maxPrice === null || listing.price <= maxPrice
      const matchesQuery = !query || listing.title.toLowerCase().includes(query)
      return matchesCategory && matchesPrice && matchesQuery
    })
  }, [selectedCategoryId, maxPrice, searchQuery])

  const sectionTitle = selectedCategoryId
    ? (sectionTitles[selectedCategoryId] ?? 'Produits à la une')
    : 'Toutes nos annonces'

  const resetFilters = () => {
    setSelectedCategoryId(null)
    setMaxPrice(null)
    setSearchQuery('')
  }

  const toggleCategory = (id: string) => {
    setSelectedCategoryId((current) => (current === id ? null : id))
  }

  const toggleFavorite = (id: string) => {
    setFavoriteIds((current) => {
      const next = new Set(current)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const addToCart = () => {
    setCartCount((count) => count + 1)
  }

  const focusSurfboards = () => {
    setSelectedCategoryId('surfboards')
    setMaxPrice(null)
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <PromoBanner />

      <div className="sticky top-0 z-30">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          favoritesCount={favoriteIds.size}
          cartCount={cartCount}
        />
      </div>

      <CategoryNavigation
        categories={categories}
        selectedId={selectedCategoryId}
        onSelect={toggleCategory}
      />

      <div className="mx-auto max-w-desktop px-4 py-3 sm:px-6">
        <FilterBar activeCount={activeFilterCount} open={filterOpen} onToggle={() => setFilterOpen((o) => !o)} />
        <FilterPanel open={filterOpen} maxPrice={maxPrice} onChangeMaxPrice={setMaxPrice} onReset={resetFilters} />
      </div>

      <div className="mx-auto max-w-desktop px-4 sm:px-6">
        <HeroBanner onViewBoards={focusSurfboards} />
      </div>

      {filteredListings.length === 0 ? (
        <EmptyResults onReset={resetFilters} />
      ) : (
        <div className="mx-auto max-w-desktop">
          <ResultsGrid
            title={sectionTitle}
            listings={filteredListings}
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite}
            onAddToCart={addToCart}
            onViewAll={resetFilters}
          />
        </div>
      )}

      <SurfBoardsSection />

      <MobileBottomNavigation activeTab={activeTab} onSelect={setActiveTab} />
    </div>
  )
}

export default App
