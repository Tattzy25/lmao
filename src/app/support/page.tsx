import Header from '@/components/Header'
import Link from 'next/link'

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-turo-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-xl mb-8">Get the support you need, when you need it</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 text-gray-900 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Booking a trip",
                icon: "🚗",
                topics: [
                  "How to book a car",
                  "Canceling a trip",
                  "Changing your booking",
                  "Payment and pricing"
                ]
              },
              {
                title: "During your trip",
                icon: "🗝️", 
                topics: [
                  "Getting the keys",
                  "Fuel and charging",
                  "Extending your trip",
                  "Emergency assistance"
                ]
              },
              {
                title: "Hosting",
                icon: "🏠",
                topics: [
                  "Getting started as a host",
                  "Pricing your car",
                  "Managing bookings",
                  "Host protection"
                ]
              },
              {
                title: "Account & billing",
                icon: "👤",
                topics: [
                  "Account settings",
                  "Payment methods",
                  "Billing questions",
                  "Security settings"
                ]
              },
              {
                title: "Insurance & safety",
                icon: "🛡️",
                topics: [
                  "Insurance coverage",
                  "Reporting damage",
                  "Safety guidelines",
                  "Claims process"
                ]
              },
              {
                title: "App & website",
                icon: "📱",
                topics: [
                  "Using the mobile app",
                  "Technical issues",
                  "Navigation help",
                  "Feature updates"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>
                      <Link href="#" className="text-turo-blue hover:underline">
                        {topic}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Still need help?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-turo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Live chat</h3>
              <p className="text-gray-600 mb-6">Get instant help from our support team</p>
              <button className="bg-turo-blue text-white px-6 py-3 rounded-md hover:bg-blue-700">
                Start chat
              </button>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Phone support</h3>
              <p className="text-gray-600 mb-6">Call us for urgent issues or complex questions</p>
              <p className="text-2xl font-bold text-green-500 mb-2">(415) 555-TURO</p>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Email support</h3>
              <p className="text-gray-600 mb-6">Send us a detailed message about your issue</p>
              <Link href="mailto:support@turo.com" className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 inline-block">
                Send email
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-red-900 mb-4">Emergency assistance</h2>
          <p className="text-red-700 mb-6">
            If you're experiencing an emergency during your trip, please call emergency services first (911), 
            then contact our 24/7 emergency line.
          </p>
          <div className="bg-white rounded-lg p-6 inline-block">
            <p className="text-lg font-semibold text-gray-900 mb-2">24/7 Emergency Line</p>
            <p className="text-3xl font-bold text-red-500">(415) 555-HELP</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What do I need to book a car?",
                answer: "You need to be at least 21 years old with a valid driver's license. You'll also need to verify your identity and add a payment method to your account."
              },
              {
                question: "Is insurance included?",
                answer: "Yes! Every trip includes liability insurance up to $1 million and varying levels of physical damage protection depending on the protection plan you choose."
              },
              {
                question: "What if I need to cancel my trip?",
                answer: "You can cancel your trip up to 1 hour before the trip start time. Cancellation policies vary by host, but many offer free cancellation up to 24 hours before."
              },
              {
                question: "Can I extend my trip?",
                answer: "Yes, you can request to extend your trip through the app or website. The extension is subject to the host's approval and car availability."
              },
              {
                question: "What happens if the car breaks down?",
                answer: "Every trip includes 24/7 roadside assistance. If you experience any issues, call our emergency line and we'll help get you back on the road or arrange alternative transportation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
