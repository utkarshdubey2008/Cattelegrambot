export interface Book {
  id: number
  title: string
  author: string
  description: string
  originalPrice: number
  currentPrice: number
  image: string
  backCover?: string
  additionalImage?: string
  type: string
  rating?: number
  reviews?: number
  features?: string[]
  specialOffer?: string
  paymentLink?: string
}

