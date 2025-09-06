import Header from '@/components/Header'
import Link from 'next/link'
import { QuickMessageButton } from '@/components/messaging/StartConversationButton'

export default function RenterSearch() {
  // Mock search results
  const searchResults = [
    {
      id: 1,
      type: "Mobility Scooter",
      model: "Lightweight 3-Wheel",
      location: "0.5 miles from Disneyland",
      dailyRate: 35,
      rating: 4.9,
      reviews: 24,
      features: ["Cup Holder", "Storage Basket", "LED Lights"],
      partner: "John's Mobility Rentals",
      partnerId: "partner-1"
    },
    {
      id: 2,
      type: "Baby Stroller",
      model: "Double Jogger",
      location: "1.2 miles from Universal Studios",
      dailyRate: 25,
      rating: 4.8,
      reviews: 18,
      features: ["All-Terrain Wheels", "Rain Cover", "Cup Holder"],
      partner: "Family First Rentals",
      partnerId: "partner-2"
    },
    {
      id: 3,
      type: "Mobility Scooter",
      model: "Heavy Duty 4-Wheel",
      location: "0.8 miles from Las Vegas Strip",
      dailyRate: 45,
      rating: 5.0,
      reviews: 12,
      features: ["Heavy Duty", "Long Battery", "Comfortable Seat"],
      partner: "Vegas Mobility Solutions",
      partnerId: "partner-3"
    },
    {
      id: 4,
      type: "Baby Stroller",
      model: "Single Lightweight",
      location: "0.3 miles from Disney World",
      dailyRate: 20,
      rating: 4.7,
      reviews: 31,
      features: ["Lightweight", "Foldable", "Storage Basket"],
      partner: "Orlando Baby Gear",
      partnerId: "partner-4"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Equipment</h1>
          
          {/* Enhanced Search Form */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Where
                </label>
                <input
                  type="text"
                  defaultValue="Disneyland, CA"
                  placeholder="Enter destination"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Equipment Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue">
                  <option value="">All Types</option>
                  <option value="mobility-scooter">Mobility Scooters</option>
                  <option value="baby-stroller">Baby Strollers</option>
                  <option value="wheelchair">Wheelchairs</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Until
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full bg-turo-blue text-white py-3 px-6 rounded-md hover:bg-blue-700 font-semibold">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range (per day)</h4>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>

              {/* Distance */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Distance from destination</h4>
                <div className="space-y-2">
                  {['0.5 miles', '1 mile', '2 miles', '5 miles'].map((distance) => (
                    <label key={distance} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-turo-blue focus:ring-turo-blue" />
                      <span className="ml-2 text-sm text-gray-700">{distance}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Features</h4>
                <div className="space-y-2">
                  {['Cup Holder', 'Storage Basket', 'LED Lights', 'All-Terrain Wheels', 'Foldable', 'Rain Cover'].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-turo-blue focus:ring-turo-blue" />
                      <span className="ml-2 text-sm text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="radio" name="rating" className="text-turo-blue focus:ring-turo-blue" />
                      <span className="ml-2 text-sm text-gray-700">
                        {rating}+ ★
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200">
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{searchResults.length} equipment available in Disneyland, CA</p>
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Distance</option>
                <option>Rating</option>
              </select>
            </div>

            {/* Results Grid */}
            <div className="space-y-6">
              {searchResults.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-full bg-gray-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {item.model}
                          </h3>
                          <p className="text-gray-600 mb-2">{item.type}</p>
                          <p className="text-sm text-gray-500 mb-2">{item.location}</p>
                          <p className="text-sm text-gray-600">by {item.partner}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-turo-blue">${item.dailyRate}</div>
                          <div className="text-sm text-gray-500">per day</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {item.features.map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Rating and Actions */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <span className="text-yellow-400">★★★★★</span>
                            <span className="ml-1 text-sm text-gray-600">
                              {item.rating} ({item.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                          <button className="flex-1 text-turo-blue hover:text-blue-700 font-medium py-3 px-4 border border-turo-blue rounded-lg hover:bg-blue-50 transition-colors">
                            📋 View Details
                          </button>
                          <QuickMessageButton
                            partnerId={item.partnerId}
                            equipmentId={`equipment-${item.id}`}
                            equipmentName={`${item.model} - ${item.type}`}
                            renterId="renter-1"
                          />
                          <button className="flex-1 bg-turo-blue text-white py-3 px-4 rounded-lg hover:bg-blue-700 font-semibold transition-colors">
                            🎪 Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 font-medium">
                Load More Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
