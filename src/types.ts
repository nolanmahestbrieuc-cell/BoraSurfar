export interface Category {
  id: string
  label: string
  description: string
  icon: 'surfboard' | 'wetsuit' | 'gear'
}

export type Condition = 'new' | 'used'

export interface Listing {
  id: string
  categoryId: string
  title: string
  price: number
  location: string
  condition: Condition
  imageColor: string
}

export interface FilterState {
  categoryId: string | null
  maxPrice: number | null
}
