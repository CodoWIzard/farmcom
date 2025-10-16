'use client'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Leaves */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
      </div>

      {/* Header */}
      <header className="glass fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-green-700 glow">🌱 FarmCom</h1>
            </div>
            <nav className="flex items-center space-x-8">
              <a href="#" className="text-green-700 hover:text-green-800 transition-colors">Products</a>
              <a href="#" className="text-green-700 hover:text-green-800 transition-colors">Login</a>
              <button className="btn-primary">Sign Up</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 mb-12">
            <h2 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Connect Local
              <span className="block text-gradient animate-bounce-slow">Farmers & Buyers</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Fresh produce directly from farm to table. Support local agriculture with our modern marketplace.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="btn-primary text-lg px-8 py-4">
                🛒 Browse Products
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                🚜 Become a Farmer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-800 text-center mb-16">Why Choose FarmCom?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group">
              <div className="w-20 h-20 glass rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">🌱</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Fresh Products</h4>
              <p className="text-gray-600 leading-relaxed">Direct from local farms to your table with guaranteed freshness</p>
            </div>
            <div className="card text-center group">
              <div className="w-20 h-20 glass rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">💬</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Direct Chat</h4>
              <p className="text-gray-600 leading-relaxed">Real-time messaging with farmers for custom orders</p>
            </div>
            <div className="card text-center group">
              <div className="w-20 h-20 glass rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-4xl">💳</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Secure Payments</h4>
              <p className="text-gray-600 leading-relaxed">Safe transactions powered by Stripe technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-green-700 mb-2">500+</div>
                <div className="text-gray-600">Active Farmers</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-700 mb-2">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-700 mb-2">50K+</div>
                <div className="text-gray-600">Products Sold</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass mt-20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">🌱 FarmCom</h2>
          <p className="text-gray-600">Connecting communities through fresh, local produce</p>
        </div>
      </footer>
    </div>
  );
}
