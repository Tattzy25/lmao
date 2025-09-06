import Header from '@/components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ⭐ Trusted by 50,000+ happy customers
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-gray-900">Experience</span>
              <br />
              <span className="bg-gradient-to-r from-turo-blue to-purple-600 bg-clip-text text-transparent">
                Every Destination
              </span>
              <br />
              <span className="text-gray-900">Without Limits</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Premium mobility solutions delivered anywhere.</strong> From Disneyland to Las Vegas, Disney World to Universal Studios - we bring luxury comfort to your adventures. 
              <span className="text-turo-blue font-semibold">Because your experience matters more than walking.</span>
            </p>

            {/* Social Proof Numbers */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-turo-blue">50K+</div>
                <div className="text-sm text-gray-600">Premium Experiences</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-turo-blue">4.9⭐</div>
                <div className="text-sm text-gray-600">Luxury Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-turo-blue">200+</div>
                <div className="text-sm text-gray-600">Elite Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-turo-blue">24/7</div>
                <div className="text-sm text-gray-600">Concierge Support</div>
              </div>
            </div>
            
            {/* Enhanced Search Form */}
            <div className="bg-white rounded-2xl p-8 max-w-5xl mx-auto shadow-2xl border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Reserve Your Premium Experience</h3>
                <p className="text-gray-600">🏆 Luxury mobility • � Instant delivery • 🛡️ White-glove service</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    🎯 Select Your Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Disneyland • Universal Studios • Disney World • Las Vegas Strip • Hollywood • Orlando • Miami..."
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-turo-blue focus:ring-0 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    📅 Experience Start
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-turo-blue focus:ring-0 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    📅 Experience End
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-turo-blue focus:ring-0 text-lg"
                  />
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-gradient-to-r from-turo-blue to-purple-600 text-white py-4 px-8 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-bold text-lg">
                    🎪 Explore Premium
                  </button>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  ✨ Concierge delivery • 🏆 Premium equipment only • 🎯 Available at 200+ destinations
                </p>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/renters"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:shadow-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                🏆 Premium Mobility
              </Link>
              <Link
                href="/partners"
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-xl hover:shadow-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                � Luxury Strollers
              </Link>
              <Link
                href="/ask-scoovio"
                className="border-2 border-turo-blue text-turo-blue px-8 py-4 rounded-xl hover:bg-turo-blue hover:text-white font-bold text-lg"
              >
                🎯 Concierge Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories - Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Luxury Experiences, Delivered Perfectly
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Disneyland magic to Vegas glamour - see how we transform ordinary trips into extraordinary experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Mike Johnson",
                location: "Disneyland Resort, California",
                avatar: "�",
                rating: 5,
                text: "Absolutely game-changing! The premium mobility scooter was delivered to our Grand Californian suite within 30 minutes. My mother-in-law experienced every attraction without fatigue. The concierge service made our multi-generational Disney vacation flawless. This is how luxury travel should be.",
                experience: "5-Star Experience",
                highlight: "Concierge-level service at Disney"
              },
              {
                name: "Dr. Jessica Martinez",
                location: "Universal Studios Orlando",
                avatar: "✨",
                rating: 5,
                text: "Premium double stroller transformed our Universal experience with twin toddlers. Climate-controlled storage, premium cushioning, and smartphone integration - it's like having a luxury SUV for the parks. Worth every penny for the convenience and comfort it provided our family.",
                experience: "Luxury Comfort",
                highlight: "Technology meets family luxury"
              },
              {
                name: "Robert Chen, CEO",
                location: "Las Vegas Strip",
                avatar: "🏆",
                rating: 5,
                text: "High-end mobility scooter with GPS navigation and premium leather seating made my Vegas business trip seamless. From Bellagio to Caesar's, I covered every meeting and entertainment venue in style. The executive mobility service exceeded my expectations completely.",
                experience: "Executive Class",
                highlight: "Business-class mobility solutions"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-turo-blue font-medium">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-400">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                          <span key={i} className="text-lg">⭐</span>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">Verified Review</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.experience}
                  </div>
                  <div className="text-xs text-gray-500 max-w-32 text-right">
                    {testimonial.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Join thousands of happy customers</p>
            <Link
              href="/testimonials"
              className="inline-flex items-center text-turo-blue font-bold hover:text-blue-700"
            >
              Read More Success Stories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Perfect for Every Adventure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're planning a family vacation, dealing with temporary mobility issues, or just want to explore comfortably - we've got you covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Theme Parks */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <div className="text-4xl mb-4">🎢</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Theme Parks & Attractions</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Make the most of your Disney, Universal, Six Flags, or local theme park visit. Our equipment helps you enjoy every ride, show, and experience without the exhaustion.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      Experience every attraction in comfort
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      Skip long rental lines at the park
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      More energy for rides and entertainment
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      VIP-level convenience
                    </li>
                  </ul>
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-center font-bold">
                    Premium theme park experiences
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl h-48 flex items-center justify-center text-white text-6xl">🏰</div>
                <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded-xl h-32 flex items-center justify-center text-white text-4xl">🎡</div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-xl h-32 flex items-center justify-center text-white text-4xl">🎠</div>
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl h-48 flex items-center justify-center text-white text-6xl">🎢</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* City Exploration */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl h-48 flex items-center justify-center text-white text-6xl">🏙️</div>
                <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl h-32 flex items-center justify-center text-white text-4xl">🌉</div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl h-32 flex items-center justify-center text-white text-4xl">🏛️</div>
                <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl h-48 flex items-center justify-center text-white text-6xl">🎰</div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-1 rounded-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <div className="text-4xl mb-4">🌆</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">City Exploration & Tourism</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Explore Las Vegas Strip, NYC attractions, San Francisco hills, or any major city destination. Cover more ground and see more sights with our comfortable mobility solutions.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      Experience premium city exploration
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      Executive comfort for all ages
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      Navigate crowds and terrain effortlessly
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      Luxury storage for shopping and belongings
                    </li>
                  </ul>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-center font-bold">
                    Luxury city exploration redefined
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Medical & Recovery */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 p-1 rounded-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <div className="text-4xl mb-4">🏥</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Medical & Recovery Support</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Temporary injury, surgery recovery, or chronic conditions shouldn't stop you from enjoying life. Our medical-grade equipment helps you maintain independence and mobility.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      Doctor-recommended equipment
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      Insurance may cover rental costs
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      Flexible rental periods
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      24/7 emergency support
                    </li>
                  </ul>
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-center font-bold">
                    Your independence matters
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-xl h-48 flex items-center justify-center text-white text-6xl">❤️</div>
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl h-32 flex items-center justify-center text-white text-4xl">🦽</div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-xl h-32 flex items-center justify-center text-white text-4xl">⚕️</div>
                <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl h-48 flex items-center justify-center text-white text-6xl">🏥</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scroll Equipment Carousel */}
      <section className="py-20 bg-gradient-to-r from-turo-blue to-purple-600 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Premium Equipment Collection
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              From lightweight luxury scooters to executive wheelchairs, premium strollers to medical-grade equipment - we deliver excellence for every experience
            </p>
          </div>
        </div>
        
        {/* Carousel */}
        <div className="relative">
          <div className="flex animate-scroll space-x-6">
            {[
              { type: "Mobility Scooter", model: "Pride Victory 10", location: "Disneyland, CA", price: "$35", rating: "4.9", image: "🛴", features: "25 mile range • LED lights • Basket" },
              { type: "Baby Stroller", model: "BOB Revolution Flex", location: "Universal Studios, CA", price: "$25", rating: "4.8", image: "👶", features: "All-terrain • Jogger • Storage" },
              { type: "Mobility Scooter", model: "Drive Medical Scout", location: "Las Vegas, NV", price: "$45", rating: "5.0", image: "🛵", features: "Heavy duty • Comfort seat • Long battery" },
              { type: "Baby Stroller", model: "UPPAbaby VISTA", location: "Disney World, FL", price: "$30", rating: "4.9", image: "🍼", features: "Luxury • Expandable • Bassinet" },
              { type: "Wheelchair", model: "Quickie QRi", location: "San Diego, CA", price: "$20", rating: "4.7", image: "♿", features: "Ultra-light • Foldable • Comfortable" },
              { type: "Electric Scooter", model: "Golden Buzzaround", location: "Orlando, FL", price: "$40", rating: "4.8", image: "⚡", features: "Compact • Travel-ready • Reliable" },
              { type: "Double Stroller", model: "City Mini GT2", location: "Phoenix, AZ", price: "$35", rating: "4.9", image: "👯", features: "Side-by-side • All-terrain • Easy fold" },
              { type: "Mobility Scooter", model: "Pride Victory 10", location: "Disneyland, CA", price: "$35", rating: "4.9", image: "🛴", features: "25 mile range • LED lights • Basket" },
              { type: "Baby Stroller", model: "BOB Revolution Flex", location: "Universal Studios, CA", price: "$25", rating: "4.8", image: "👶", features: "All-terrain • Jogger • Storage" },
              { type: "Mobility Scooter", model: "Drive Medical Scout", location: "Las Vegas, NV", price: "$45", rating: "5.0", image: "🛵", features: "Heavy duty • Comfort seat • Long battery" }
            ].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-2">{item.image}</div>
                    <h3 className="text-xl font-bold text-gray-900">{item.model}</h3>
                    <p className="text-turo-blue font-medium">{item.type}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-2">{item.location}</p>
                    <p className="text-gray-700 text-sm">{item.features}</p>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-3xl font-bold text-turo-blue">{item.price}</span>
                      <span className="text-gray-600">/day</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end">
                        <span className="text-yellow-400 mr-1">⭐</span>
                        <span className="font-bold">{item.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">250+ reviews</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-turo-blue to-purple-600 text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/renters/search"
            className="inline-flex items-center bg-white text-turo-blue px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            View All Equipment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Social Proof & Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Trusted by Thousands, Loved by All
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the mobility revolution that's changing how people explore destinations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-turo-blue mb-2">50K+</div>
              <div className="text-gray-300">Happy Customers</div>
              <div className="text-sm text-gray-500 mt-1">And growing daily</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-green-400 mb-2">4.9</div>
              <div className="text-gray-300">Average Rating</div>
              <div className="text-sm text-gray-500 mt-1">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-purple-400 mb-2">100+</div>
              <div className="text-gray-300">Elite Destinations</div>
              <div className="text-sm text-gray-500 mt-1">Premium locations served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Concierge Support</div>
              <div className="text-sm text-gray-500 mt-1">White-glove service</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-turo-blue to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience Luxury Mobility?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't let mobility concerns limit your adventures. Experience premium comfort and convenience at the world's most exclusive destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/renters/search"
                className="bg-white text-turo-blue px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                🏆 Book Premium Experience
              </Link>
              <Link
                href="/ask-scoovio"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-turo-blue transition-all duration-200"
              >
                💬 Concierge Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://i.imgur.com/JQIz3Q6.png" 
                  alt="Scoovio" 
                  className="h-8 w-8 mr-3"
                />
                <h3 className="text-2xl font-bold">Scoovio</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Making destinations accessible for everyone. Rent premium mobility equipment at unbeatable prices from trusted local partners.
              </p>
              <div className="flex space-x-4">
                <div className="bg-turo-blue p-2 rounded-lg">
                  <span className="text-xl">📱</span>
                </div>
                <div className="bg-turo-blue p-2 rounded-lg">
                  <span className="text-xl">💬</span>
                </div>
                <div className="bg-turo-blue p-2 rounded-lg">
                  <span className="text-xl">📧</span>
                </div>
                <div className="bg-turo-blue p-2 rounded-lg">
                  <span className="text-xl">⭐</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">For Renters</h4>
              <ul className="space-y-3">
                <li><Link href="/renters" className="text-gray-300 hover:text-white transition-colors">🛴 Mobility Scooters</Link></li>
                <li><Link href="/renters" className="text-gray-300 hover:text-white transition-colors">👶 Baby Strollers</Link></li>
                <li><Link href="/renters" className="text-gray-300 hover:text-white transition-colors">♿ Wheelchairs</Link></li>
                <li><Link href="/renters/search" className="text-gray-300 hover:text-white transition-colors">🔍 Search Equipment</Link></li>
                <li><Link href="/renters/profile" className="text-gray-300 hover:text-white transition-colors">👤 My Account</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">For Partners</h4>
              <ul className="space-y-3">
                <li><Link href="/partners" className="text-gray-300 hover:text-white transition-colors">💰 Become Partner</Link></li>
                <li><Link href="/partners/equipment/upload" className="text-gray-300 hover:text-white transition-colors">📝 List Equipment</Link></li>
                <li><Link href="/partners/dashboard" className="text-gray-300 hover:text-white transition-colors">📊 Dashboard</Link></li>
                <li><Link href="/partners/equipment/manage" className="text-gray-300 hover:text-white transition-colors">⚙️ Manage Listings</Link></li>
                <li><Link href="/ask-scoovio" className="text-gray-300 hover:text-white transition-colors">❓ Partner Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Support & Info</h4>
              <ul className="space-y-3">
                <li><Link href="/ask-scoovio" className="text-gray-300 hover:text-white transition-colors">💬 Get Help</Link></li>
                <li><Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">❓ How It Works</Link></li>
                <li><Link href="/safety" className="text-gray-300 hover:text-white transition-colors">🛡️ Safety</Link></li>
                <li><Link href="/insurance" className="text-gray-300 hover:text-white transition-colors">🔒 Insurance</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">📄 Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 mb-4 md:mb-0">
                <p>&copy; 2024 Scoovio. All rights reserved. Making mobility accessible for everyone.</p>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-green-400 font-bold">✅ Trusted Platform</span>
                <span className="text-yellow-400 font-bold">⭐ 4.9/5 Rating</span>
                <span className="text-blue-400 font-bold">🛡️ Fully Insured</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
