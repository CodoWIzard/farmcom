'use client'

interface Product {
  id: string
  name: string
  description?: string
  price: number
  unit: string
  category: string
  quantity: number
  imageUrl?: string
  farmer: {
    name: string
    phone?: string
  }
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="card group hover:scale-105 transition-all duration-300">
      {product.imageUrl && (
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-gray-600 text-sm">🌾 by {product.farmer.name}</p>
        </div>
        
        {product.description && (
          <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
        )}
        
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-700">
            ${product.price}
            <span className="text-sm text-gray-600">/{product.unit}</span>
          </div>
          <div className="text-sm text-gray-600">
            📦 {product.quantity} {product.unit}
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
            {product.category.toLowerCase()}
          </span>
          {onAddToCart && (
            <button
              onClick={() => onAddToCart(product.id)}
              className="btn-primary px-6 py-2 text-sm"
            >
              🛒 Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}