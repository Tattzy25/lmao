'use client'

import { SiteHeader as Header } from '@/components/custom/site-header'
import Link from 'next/link'

const equipmentItems = [
  { id: 1, name: 'Pride Victory 10', type: 'Mobility Scooter', location: 'Disneyland, CA', price: 35, rating: 4.9, reviews: 127, icon: '🛴', features: '25 mile range • LED lights' },
  { id: 2, name: 'BOB Revolution Flex', type: 'Baby Stroller', location: 'Universal Studios, CA', price: 25, rating: 4.8, reviews: 89, icon: '👶', features: 'All-terrain • Jogger' },
  { id: 3, name: 'Drive Medical Scout', type: 'Mobility Scooter', location: 'Las Vegas, NV', price: 45, rating: 5.0, reviews: 156, icon: '🛵', features: 'Heavy duty • Long battery' },
  { id: 4, name: 'UPPAbaby VISTA', type: 'Baby Stroller', location: 'Disney World, FL', price: 30, rating: 4.9, reviews: 112, icon: '🍼', features: 'Luxury • Expandable' },
  { id: 5, name: 'Quickie QRi', type: 'Wheelchair', location: 'San Diego, CA', price: 20, rating: 4.7, reviews: 78, icon: '♿', features: 'Ultra-light • Foldable' },
  { id: 6, name: 'Golden Buzzaround', type: 'Electric Scooter', location: 'Orlando, FL', price: 40, rating: 4.8, reviews: 134, icon: '⚡', features: 'Compact • Travel-ready' },
  { id: 7, name: 'City Mini GT2', type: 'Double Stroller', location: 'Phoenix, AZ', price: 35, rating: 4.9, reviews: 95, icon: '👯', features: 'Side-by-side • All-terrain' },
  { id: 8, name: 'Invacare Pronto', type: 'Power Wheelchair', location: 'Las Vegas, NV', price: 55, rating: 4.6, reviews: 67, icon: '🦽', features: 'Power lift • Comfortable' },
  { id: 9, name: 'Baby Jogger Summit', type: 'Jogging Stroller', location: 'San Francisco, CA', price: 28, rating: 4.8, reviews: 103, icon: '🏃', features: 'Three wheels • Smooth ride' },
  { id: 10, name: 'Pride Go-Go Elite', type: 'Travel Scooter', location: 'Anaheim, CA', price: 38, rating: 4.9, reviews: 145, icon: '✈️', features: 'Airline approved • Lightweight' },
  { id: 11, name: 'Thule Urban Glide', type: 'Baby Stroller', location: 'Orlando, FL', price: 32, rating: 4.7, reviews: 88, icon: '👶', features: 'Jogging • Large wheels' },
  { id: 12, name: 'Karma Ergo Lite', type: 'Wheelchair', location: 'Las Vegas, NV', price: 22, rating: 4.8, reviews: 72, icon: '♿', features: 'Ergonomic • Lightweight' },
]

export default function BrowseEquipment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-4">Browse Mobility Equipment</h1>
          <p className="text-gray-600">Find the perfect mobility scooter, baby stroller, or wheelchair for your destination</p>
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
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Disneyland, Universal Studios..."
                  title="Enter your destination or theme park"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Date Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rental dates
                </label>
                <div className="space-y-2">
                  <input
                    type="date"
                    title="Select your pickup date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="date"
                    title="Select your return date"
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
                    min="15"
                    max="100"
                    title="Adjust the maximum price per day"
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$15</span>
                    <span>$100+</span>
                  </div>
                </div>
              </div>

              {/* Equipment Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Equipment type
                </label>
                <div className="space-y-2">
                  {['🛴 Mobility Scooter', '👶 Baby Stroller', '♿ Wheelchair', '⚡ Electric Scooter', '👯 Double Stroller', '🦽 Power Wheelchair'].map((type) => (
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
                  {['Foldable', 'Lightweight', 'All-terrain', 'Long battery', 'Delivery included', 'Insurance included'].map((feature) => (
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
              <p className="text-gray-600">Showing {equipmentItems.length} items</p>
              <div className="flex items-center space-x-4">
                <select title="Sort equipment by your preferred criteria" className="px-3 py-2 border border-gray-300 rounded-md">
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
              {equipmentItems.map((item) => (
                <Link key={item.id} href={`/equipment/${item.id}`}>
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg relative flex items-center justify-center">
                      <span className="text-6xl">{item.icon}</span>
                      <div className="absolute top-3 right-3">
                        <button className="bg-white rounded-full p-2 shadow hover:bg-gray-50" title="Add to favorites">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                          Available
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="text-sm text-gray-600">{item.rating} ({item.reviews})</span>
                        </div>
                      </div>
                      <p className="text-turo-blue text-sm font-medium mb-1">{item.type}</p>
                      <p className="text-gray-600 text-sm mb-2">📍 {item.location}</p>
                      <p className="text-gray-500 text-xs mb-3">{item.features}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-turo-blue">${item.price}</span>
                          <span className="text-gray-600">/day</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-green-600 font-medium">Free delivery</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button
                title="Load additional equipment"
                className="bg-turo-blue text-white px-8 py-3 rounded-md hover:bg-blue-700"
              >
                Load more equipment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
