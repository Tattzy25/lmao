import Header from '@/components/Header'
import Link from 'next/link'

export default function Renters() {
  const rentalTypes = [
    {
      icon: "🛴",
      title: "Mobility Scooters",
      description: "Navigate theme parks and attractions with ease. Perfect for seniors, people with disabilities, or anyone who needs a comfortable ride.",
      features: ["3-wheel & 4-wheel options", "Long battery life", "Comfortable seating", "Storage baskets"],
      priceRange: "$25-60/day"
    },
    {
      icon: "👶",
      title: "Baby Strollers",
      description: "Keep your little ones comfortable during long days at attractions. Single and double strollers available.",
      features: ["Single & double options", "All-terrain wheels", "Storage compartments", "Rain covers included"],
      priceRange: "$15-35/day"
    },
    {
      icon: "♿",
      title: "Wheelchairs",
      description: "Manual and electric wheelchairs for temporary or ongoing mobility assistance during your visit.",
      features: ["Manual & electric", "Lightweight options", "Easy folding", "Comfortable cushions"],
      priceRange: "$20-45/day"
    }
  ]

  const popularDestinations = [
    {
      name: "Disneyland, CA",
      equipment: "850+ items",
      image: "🏰",
      avgPrice: "$35/day"
    },
    {
      name: "Universal Studios, CA",
      equipment: "620+ items",
      image: "🎬", 
      avgPrice: "$32/day"
    },
    {
      name: "Disney World, FL",
      equipment: "1,200+ items",
      image: "🎭",
      avgPrice: "$30/day"
    },
    {
      name: "Las Vegas Strip, NV",
      equipment: "450+ items",
      image: "🎰",
      avgPrice: "$40/day"
    }
  ]

  const benefits = [
    {
      icon: "💳",
      title: "Save Money",
      description: "Rent equipment for 60-80% less than theme park rental prices. Book for multiple days and save even more."
    },
    {
      icon: "📍",
      title: "Convenient Pickup",
      description: "Meet partners at your hotel, the venue entrance, or arrange delivery. No waiting in long rental lines."
    },
    {
      icon: "🛡️",
      title: "Fully Insured",
      description: "Every rental includes comprehensive insurance coverage and 24/7 emergency support for peace of mind."
    },
    {
      icon: "⭐",
      title: "Quality Guaranteed",
      description: "All equipment is verified, cleaned, and maintained by trusted local partners. Read reviews before you book."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-turo-blue to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Destinations Comfortably
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Rent mobility scooters, baby strollers, and wheelchairs from local partners. 
              Make your theme park and attraction visits more enjoyable for the whole family.
            </p>
            
            {/* Quick Search */}
            <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900"
                  />
                </div>
                <div className="flex items-end">
                  <Link 
                    href="/renters/search"
                    className="w-full bg-turo-blue text-white py-3 px-6 rounded-md hover:bg-blue-700 font-semibold text-center"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Equipment
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect mobility solution for your destination
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rentalTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="text-6xl mb-4 text-center">{type.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {type.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-turo-blue mb-4">
                      {type.priceRange}
                    </div>
                    <Link
                      href="/renters/search"
                      className="bg-turo-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 font-semibold"
                    >
                      View Options
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Quick Access
            </h2>
            <p className="text-gray-600">
              Manage your rentals and communications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/renters/search"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-lg font-semibold mb-2">Search Equipment</h3>
                <p className="text-blue-100">Find mobility equipment for your destination</p>
              </div>
            </Link>
            
            <Link 
              href="/renters/messages"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-lg shadow hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="text-lg font-semibold mb-2">Messages</h3>
                <p className="text-purple-100">Chat with equipment providers</p>
                <div className="mt-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">2 new</span>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/renters/profile"
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg shadow hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-3xl mb-3">👤</div>
                <h3 className="text-lg font-semibold mb-2">My Profile</h3>
                <p className="text-green-100">Manage account and rental history</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Equipment available at top theme parks and attractions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{destination.image}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{destination.equipment}</p>
                  <p className="text-turo-blue font-semibold mb-4">
                    from {destination.avgPrice}
                  </p>
                  <Link
                    href="/renters/search"
                    className="text-turo-blue hover:text-blue-700 font-medium"
                  >
                    View Equipment →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Scoovio?
            </h2>
            <p className="text-xl text-gray-600">
              The smart way to rent mobility equipment for your adventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="text-4xl mr-6 mt-2">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Book your equipment in 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-turo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Search & Book</h3>
              <p className="text-gray-600">
                Find equipment near your destination, compare options, read reviews, and book securely online.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-turo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Meet Your Partner</h3>
              <p className="text-gray-600">
                Coordinate pickup with your local partner. Meet at your hotel, the venue, or arrange delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-turo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Enjoy Your Visit</h3>
              <p className="text-gray-600">
                Explore comfortably with your rental equipment. Return it at the end of your visit and rate your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-turo-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let mobility concerns limit your exploration. Find the perfect equipment for your destination and make every moment count.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/renters/search"
              className="bg-white text-turo-blue px-8 py-4 rounded-md font-semibold hover:bg-gray-100 text-lg"
            >
              Find Equipment
            </Link>
            <Link
              href="/renters/profile"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-turo-blue text-lg"
            >
              My Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
