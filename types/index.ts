export interface PropertyCard {
  id: string
  title: string
  description: string
  image: string
  category: string
  features: string[]
}

export interface StatItem {
  value: string
  label: string
  icon: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface FormData {
  fullName: string
  phone: string
  email: string
  propertyInterest: string
  investmentBudget: string
  message: string
}

export interface LocationCard {
  id: string
  title: string
  description: string
  icon: string
  highlights: string[]
}
