import Header from '@/components/Header'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-turo-blue to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Scoovio works
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Book cars from local hosts and go anywhere. Or become a host and earn money sharing your car.
          </p>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Booking a car</h2>
            <p className="text-xl text-gray-600">Get on the road in just a few steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-turo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Find the perfect car</h3>
              <p className="text-gray-600">
                Choose from hundreds of models. Filter by style, features, and price to find exactly what you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-turo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Book it</h3>
              <p className="text-gray-600">
                Book instantly or send a request. Message your host to coordinate pickup details.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-turo-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Hit the road</h3>
              <p className="text-gray-600">
                Pick up your car and start your adventure. Every trip includes insurance and 24/7 support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why choose Scoovio?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-turo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Trusted & safe</h3>
              <p className="text-sm text-gray-600">Every trip includes commercial insurance and 24/7 roadside assistance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-turo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Book instantly</h3>
              <p className="text-sm text-gray-600">Book immediately or request to book. Most trips are available instantly</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-turo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Convenient pickup</h3>
              <p className="text-sm text-gray-600">Meet your host or get the car delivered to you for an extra fee</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-turo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Fair pricing</h3>
              <p className="text-sm text-gray-600">Get more value than traditional car rentals. No hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Become a host</h2>
            <p className="text-xl text-gray-600">Turn your car into a money-making opportunity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">List your car</h3>
              <p className="text-gray-600">
                Take photos, set your price, and describe your car. It takes about 15 minutes to get started.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Set your schedule</h3>
              <p className="text-gray-600">
                Choose when your car is available. You're in complete control of your car and schedule.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Start earning</h3>
              <p className="text-gray-600">
                Approve trips, meet your guests, and start earning money. The average host makes $500+ per month.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/become-host"
              className="bg-green-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-600 inline-block"
            >
              Start hosting
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety first</h2>
            <p className="text-xl text-gray-600">We've got you covered every step of the way</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Protection & insurance</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-turo-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">$1M liability insurance</h4>
                    <p className="text-gray-600">Every trip is covered by commercial liability insurance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-turo-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">24/7 roadside assistance</h4>
                    <p className="text-gray-600">Get help anytime, anywhere with our roadside assistance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-turo-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Identity verification</h4>
                    <p className="text-gray-600">All users go through identity verification for safety</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-80 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-turo-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8">
            Join millions of people who use Scoovio for their transportation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/browse"
              className="bg-white text-turo-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100"
            >
              Find a car
            </Link>
            <Link 
              href="/become-host"
              className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-turo-blue"
            >
              Become a host
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
