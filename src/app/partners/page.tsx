import Header from '@/components/Header'
import Link from 'next/link'

export default function Partners() {
  const partnerBenefits = [
    {
      icon: "💰",
      title: "Earn Extra Income",
      description: "Turn your unused mobility equipment into a steady income stream. Our partners earn $50-200+ per day during peak seasons."
    },
    {
      icon: "🌍",
      title: "Help Others Explore",
      description: "Make destinations more accessible for families and individuals with mobility needs. Your equipment helps create magical experiences."
    },
    {
      icon: "🛡️",
      title: "Full Protection",
      description: "Every rental includes comprehensive insurance coverage and 24/7 support. Your equipment and earnings are protected."
    },
    {
      icon: "📱",
      title: "Easy Management",
      description: "List equipment, manage bookings, and track earnings through our simple partner dashboard. Everything you need in one place."
    }
  ]

  const stats = [
    { number: "5,000+", label: "Active Partners" },
    { number: "50,000+", label: "Successful Rentals" },
    { number: "$2.5M+", label: "Partner Earnings" },
    { number: "99%", label: "Partner Satisfaction" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-turo-blue to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Become a Scoovio Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Turn your mobility equipment into income. Help travelers explore theme parks and destinations while earning money from equipment you're not using.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/partners/dashboard"
                className="bg-white text-turo-blue px-8 py-4 rounded-md font-semibold hover:bg-gray-100 text-lg"
              >
                Partner Dashboard
              </Link>
              <Link
                href="/partners/equipment/upload"
                className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-turo-blue text-lg"
              >
                List Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-turo-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Scoovio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of partners who are earning money while making destinations more accessible for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>
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
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600">
              Start earning in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-turo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">List Your Equipment</h3>
              <p className="text-gray-600">
                Upload photos and details of your mobility scooters, baby strollers, or wheelchairs. Set your prices and availability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-turo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Get Bookings</h3>
              <p className="text-gray-600">
                Travelers discover your equipment and book directly through our platform. You'll get instant notifications for new bookings.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-turo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Earn Money</h3>
              <p className="text-gray-600">
                Meet renters or arrange pickup/delivery. Get paid automatically after each rental with weekly payouts to your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Partner Requirements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Equipment Standards</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Clean and well-maintained condition
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Less than 5 years old (or excellent condition)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    All safety features functional
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Includes charger (for electric equipment)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Clear photos from multiple angles
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Partner Qualifications</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    18+ years old with valid ID
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Located near popular destinations
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Responsive communication (under 2 hours)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Bank account for automatic payments
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Commitment to excellent customer service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-turo-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of partners making destinations more accessible while earning extra income. List your first piece of equipment today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partners/equipment/upload"
              className="bg-white text-turo-blue px-8 py-4 rounded-md font-semibold hover:bg-gray-100 text-lg"
            >
              List Equipment Now
            </Link>
            <Link
              href="/ask-scoovio"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-turo-blue text-lg"
            >
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
