import { useMemo, useState } from 'react'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import CategoryNavigation from './components/CategoryNavigation'
import FilterBar from './components/FilterBar'
import FilterPanel from './components/FilterPanel'
import EmptyResults from './components/EmptyResults'
import ResultsGrid from './components/ResultsGrid'
import SurfBoardsSection from './components/SurfBoardsSection'
import MobileBottomNavigation, { type TabId } from './components/MobileBottomNavigation'
import { categories } from './data/categories'
import { listings } from './data/listings'

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>('surfboards')
  const [maxPrice, setMaxPrice] = useState<number | null>(15)
  const [filterOpen, setFilterOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<TabId>('menu')

  const activeFilterCount = maxPrice !== null ? 1 : 0

  const filteredListings = useMemo(
    () =>
      listings.filter((listing) => {
        const matchesCategory = !selectedCategoryId || listing.categoryId === selectedCategoryId
        const matchesPrice = maxPrice === null || listing.price <= maxPrice
        return matchesCategory && matchesPrice
      }),
    [selectedCategoryId, maxPrice],
  )

  const resetFilters = () => {
    setMaxPrice(null)
    setFilterOpen(false)
  }

  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <PromoBanner />

      <div className="sticky top-0 z-30">
        <Header />
      </div>

      <CategoryNavigation
        categories={categories}
        selectedId={selectedCategoryId}
        onSelect={setSelectedCategoryId}
      />

      <FilterBar activeCount={activeFilterCount} onClick={() => setFilterOpen(true)} />

      {filteredListings.length === 0 ? (
        <EmptyResults onReset={resetFilters} />
      ) : (
        <ResultsGrid listings={filteredListings} />
      )}

      <SurfBoardsSection />

      <MobileBottomNavigation activeTab={activeTab} onSelect={setActiveTab} />

      <FilterPanel
        open={filterOpen}
        maxPrice={maxPrice}
        onChangeMaxPrice={setMaxPrice}
        onReset={resetFilters}
        onClose={() => setFilterOpen(false)}
      />
    </div>
  )
}

export default App
