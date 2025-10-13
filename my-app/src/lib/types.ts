export interface User {
  id: string
  email: string
  name: string
  type: 'FARMER' | 'BUYER'
  phone?: string
  address?: string
}

export interface Product {
  id: string
  name: string
  description?: string
  price: number
  unit: string
  category: 'VEGETABLES' | 'FRUITS' | 'GRAINS' | 'LIVESTOCK' | 'DAIRY' | 'OTHER'
  quantity: number
  available: boolean
  imageUrl?: string
  farmerId: string
  farmer?: User
}

export interface Order {
  id: string
  buyerId: string
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED'
  total: number
  stripeId?: string
  items: OrderItem[]
  buyer?: User
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  quantity: number
  price: number
  product?: Product
}

export interface Message {
  id: string
  senderId: string
  receiverId: string
  content: string
  createdAt: string
  sender?: User
  receiver?: User
}