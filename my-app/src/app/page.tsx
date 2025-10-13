export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">FarmCom</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Login</a>
              <a href="#" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Sign Up</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect Local Farmers with Buyers
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Fresh produce directly from farm to table. Support local agriculture.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
              Browse Products
            </button>
            <button className="border border-green-600 text-green-600 px-6 py-3 rounded-md hover:bg-green-50">
              Become a Farmer
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fresh Products</h3>
              <p className="text-gray-600">Direct from local farms to your table</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct Communication</h3>
              <p className="text-gray-600">Chat directly with farmers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 text-xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Safe and secure transactions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
