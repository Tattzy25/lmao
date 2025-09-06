import Header from '@/components/Header'
import Link from 'next/link'

export default function BrowseEquipment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-4">Browse Equipment</h1>
          <p className="text-gray-600">Find the perfect mobility equipment for your destination</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter city or zip code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Date Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trip dates
                </label>
                <div className="space-y-2">
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price per day
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="20"
                    max="500"
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$20</span>
                    <span>$500+</span>
                  </div>
                </div>
              </div>

              {/* Car Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Car type
                </label>
                <div className="space-y-2">
                  {['Convertible', 'Coupe', 'Hatchback', 'Minivan', 'Pickup', 'Sedan', 'SUV', 'Wagon'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Features
                </label>
                <div className="space-y-2">
                  {['All-wheel drive', 'Android Auto', 'Apple CarPlay', 'Backup camera', 'Bluetooth', 'GPS', 'Heated seats', 'Pet friendly'].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="lg:w-3/4">
            {/* Sort and View Options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing 240 mobility equipment items</p>
              <div className="flex items-center space-x-4">
                <select className="px-3 py-2 border border-gray-300 rounded-md">
                  <option>Sort by: Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Distance</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            {/* Equipment Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({length: 12}).map((_, index) => (
                <Link key={index} href={`/equipment/${index + 1}`}>
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="h-48 bg-gray-300 rounded-t-lg relative">
                      {/* Placeholder for equipment image */}
                      <div className="absolute top-3 right-3">
                        <button className="bg-white rounded-full p-2 shadow hover:bg-gray-50">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                          Instant
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">2023 Tesla Model Y</h3>
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="text-sm text-gray-600">4.9 (15)</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">SUV • San Francisco, CA</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-turo-blue">$85</span>
                          <span className="text-gray-600">/day</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">$595 total</div>
                          <div className="text-xs text-gray-500">Dec 15-22</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-turo-blue text-white px-8 py-3 rounded-md hover:bg-blue-700">
                Load more equipment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
