import langoustineImage from '../assets/plat-langoustine.svg'
import pigeonImage from '../assets/plat-pigeon.svg'
import souffleImage from '../assets/plat-souffle.svg'

export interface Dish {
  id: string
  index: string
  service: string
  name: string
  producer: string
  description: string
  price: number
  image: string
  imageAlt: string
}

export interface OpeningDay {
  days: string
  lunch: string
  dinner: string
}

export const dishes: Dish[] = [
  {
    id: 'langoustine',
    index: 'I',
    service: 'Entrée',
    name: 'Langoustine de Loctudy',
    producer: 'Pêche du jour — Finistère Sud',
    description:
      'Juste raidie au beurre noisette, bouillon de carapaces infusé au sarrasin torréfié, agrumes confits et pointe de livèche.',
    price: 68,
    image: langoustineImage,
    imageAlt: 'Langoustine dressée sur une assiette claire, sauce ambrée et herbes fraîches',
  },
  {
    id: 'pigeon',
    index: 'II',
    service: 'Plat',
    name: 'Pigeon de Racan',
    producer: 'Maison Mesléard — Touraine',
    description:
      'Cuit sur le coffre puis reposé, betteraves de plein champ rôties au sel, jus court réduit au vin de Chinon et baies de genièvre.',
    price: 74,
    image: pigeonImage,
    imageAlt: 'Filets de pigeon et betteraves sur une assiette sombre, jus rouge profond',
  },
  {
    id: 'souffle',
    index: 'III',
    service: 'Dessert',
    name: 'Soufflé grand cru',
    producer: 'Fève de Chuao — Venezuela',
    description:
      'Soufflé minute au chocolat noir 72 %, glace au lait fumé au foin et éclats de cacao caramélisés au sucre muscovado.',
    price: 26,
    image: souffleImage,
    imageAlt: 'Soufflé au chocolat sorti du four, sucre glace et quenelle de glace',
  },
]

export const openingHours: OpeningDay[] = [
  { days: 'Mardi — Vendredi', lunch: '12h00 — 14h00', dinner: '19h30 — 22h00' },
  { days: 'Samedi', lunch: 'Fermé', dinner: '19h00 — 22h30' },
  { days: 'Dimanche & Lundi', lunch: 'Fermé', dinner: 'Fermé' },
]

export const contact = {
  street: '14, rue des Orfèvres',
  city: '75001 Paris',
  phone: '+33 1 42 60 18 07',
  phoneHref: 'tel:+33142601807',
  email: 'reservation@maison-aurele.fr',
}

export const menus = [
  { name: 'Déjeuner du marché', detail: '3 services', price: 85 },
  { name: 'Menu Aurèle', detail: '5 services', price: 145 },
  { name: 'Menu Grande Table', detail: '8 services', price: 215 },
]
