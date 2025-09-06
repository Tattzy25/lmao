import Header from '@/components/Header'
import Link from 'next/link'

export default function RenterProfile() {
  // Mock user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    memberSince: "March 2024",
    totalRentals: 8,
    rating: 4.9
  }

  const currentRentals = [
    {
      id: 1,
      equipment: "Lightweight 3-Wheel Scooter",
      partner: "John's Mobility Rentals",
      location: "Disneyland, CA",
      startDate: "Dec 20, 2024",
      endDate: "Dec 22, 2024",
      totalCost: "$105",
      status: "Active"
    }
  ]

  const pastRentals = [
    {
      id: 2,
      equipment: "Double Jogger Stroller",
      partner: "Family First Rentals",
      location: "Universal Studios, CA",
      startDate: "Nov 15, 2024",
      endDate: "Nov 17, 2024",
      totalCost: "$75",
      status: "Completed",
      rating: 5
    },
    {
      id: 3,
      equipment: "Single Lightweight Stroller",
      partner: "Orlando Baby Gear",
      location: "Disney World, FL",
      startDate: "Oct 8, 2024",
      endDate: "Oct 12, 2024",
      totalCost: "$80",
      status: "Completed",
      rating: 4
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="h-24 w-24 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">SJ</span>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">Member since {user.memberSince}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-2 text-gray-600">{user.rating} rating</span>
                <span className="ml-4 text-gray-600">{user.totalRentals} rentals completed</span>
              </div>
            </div>
            <button className="bg-turo-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 font-semibold">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Rentals */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Current Rentals</h2>
              </div>
              <div className="p-6">
                {currentRentals.length > 0 ? (
                  <div className="space-y-4">
                    {currentRentals.map((rental) => (
                      <div key={rental.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{rental.equipment}</h3>
                            <p className="text-sm text-gray-600">by {rental.partner}</p>
                            <p className="text-sm text-gray-500">{rental.location}</p>
                          </div>
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            {rental.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Start:</span>
                            <span className="ml-2 text-gray-900">{rental.startDate}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">End:</span>
                            <span className="ml-2 text-gray-900">{rental.endDate}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <span className="font-semibold text-lg text-gray-900">{rental.totalCost}</span>
                          <div className="flex space-x-2">
                            <button className="text-turo-blue hover:text-blue-700 font-medium">
                              Contact Partner
                            </button>
                            <button className="text-turo-blue hover:text-blue-700 font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">No current rentals</p>
                    <Link
                      href="/renters/search"
                      className="bg-turo-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 font-semibold"
                    >
                      Find Equipment
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Past Rentals */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Rental History</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {pastRentals.map((rental) => (
                    <div key={rental.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{rental.equipment}</h3>
                          <p className="text-sm text-gray-600">by {rental.partner}</p>
                          <p className="text-sm text-gray-500">{rental.location}</p>
                        </div>
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                          {rental.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <span className="text-gray-500">Dates:</span>
                          <span className="ml-2 text-gray-900">{rental.startDate} - {rental.endDate}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Total:</span>
                          <span className="ml-2 text-gray-900">{rental.totalCost}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-2">Your rating:</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-sm ${i < rental.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-turo-blue hover:text-blue-700 font-medium">
                            Book Again
                          </button>
                          <button className="text-gray-600 hover:text-gray-800 font-medium">
                            View Receipt
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Rentals</span>
                  <span className="font-semibold">{user.totalRentals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-semibold">{user.rating} ★</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Money Saved</span>
                  <span className="font-semibold text-green-600">$340</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Favorite Location</span>
                  <span className="font-semibold">Disneyland</span>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Account</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Phone</label>
                  <p className="font-medium">{user.phone}</p>
                </div>
                <button className="w-full text-left text-turo-blue hover:text-blue-700 font-medium">
                  Update Payment Methods
                </button>
                <button className="w-full text-left text-turo-blue hover:text-blue-700 font-medium">
                  Notification Settings
                </button>
                <button className="w-full text-left text-turo-blue hover:text-blue-700 font-medium">
                  Privacy Settings
                </button>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <div className="space-y-3">
                <Link
                  href="/ask-scoovio"
                  className="block text-turo-blue hover:text-blue-700 font-medium"
                >
                  Contact Support
                </Link>
                <Link
                  href="/how-it-works"
                  className="block text-turo-blue hover:text-blue-700 font-medium"
                >
                  How It Works
                </Link>
                <Link
                  href="/safety"
                  className="block text-turo-blue hover:text-blue-700 font-medium"
                >
                  Safety Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
