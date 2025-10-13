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
    <div className=\"bg-white rounded-lg shadow-md overflow-hidden\">\n      {product.imageUrl && (\n        <img\n          src={product.imageUrl}\n          alt={product.name}\n          className=\"w-full h-48 object-cover\"\n        />\n      )}\n      <div className=\"p-4\">\n        <h3 className=\"text-lg font-semibold text-gray-900\">{product.name}</h3>\n        <p className=\"text-sm text-gray-600 mb-2\">by {product.farmer.name}</p>\n        {product.description && (\n          <p className=\"text-gray-700 text-sm mb-3\">{product.description}</p>\n        )}\n        <div className=\"flex justify-between items-center mb-3\">\n          <span className=\"text-xl font-bold text-green-600\">\n            ${product.price}/{product.unit}\n          </span>\n          <span className=\"text-sm text-gray-500\">\n            {product.quantity} {product.unit} available\n          </span>\n        </div>\n        <div className=\"flex justify-between items-center\">\n          <span className=\"inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded\">\n            {product.category}\n          </span>\n          {onAddToCart && (\n            <button\n              onClick={() => onAddToCart(product.id)}\n              className=\"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700\"\n            >\n              Add to Cart\n            </button>\n          )}\n        </div>\n      </div>\n    </div>\n  )\n}