export interface Category {
  id: string
  label: string
  icon: 'surfboard' | 'wetsuit' | 'gear'
}

export interface Listing {
  id: string
  categoryId: string
  title: string
  price: number
  location: string
  imageColor: string
}

export interface FilterState {
  categoryId: string | null
  maxPrice: number | null
}
