import Header from '@/components/Header'
import Link from 'next/link'

export default function AskScoovio() {
  const faqs = [
    {
      category: "Booking & Rentals",
      questions: [
        {
          q: "How do I book mobility equipment?",
          a: "Simply search for your destination, select your dates, choose your equipment, and complete the booking with our secure payment system. You'll receive confirmation and partner contact details immediately."
        },
        {
          q: "Can I cancel or modify my booking?",
          a: "Yes! You can cancel or modify your booking up to 24 hours before your rental start time for a full refund. Contact your partner directly or use our support system."
        },
        {
          q: "What if the equipment breaks down during my rental?",
          a: "All rentals include 24/7 support. Contact the partner immediately or use our emergency support line. Partners are required to provide replacement equipment or full refunds."
        }
      ]
    },
    {
      category: "Payments & Pricing",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, debit cards, and PayPal. Payment is processed securely through our platform when you confirm your booking."
        },
        {
          q: "Are there any hidden fees?",
          a: "No hidden fees! The price you see includes the rental cost. Partners may charge additional fees for delivery or special services, which will be clearly stated upfront."
        },
        {
          q: "How do security deposits work?",
          a: "Security deposits vary by partner and equipment type. The deposit is temporarily held on your card and released within 3-5 business days after the rental ends, provided there's no damage."
        }
      ]
    },
    {
      category: "Partners",
      questions: [
        {
          q: "How do I become a Scoovio partner?",
          a: "Apply through our partner program! You'll need to provide equipment details, photos, and pass our safety verification. Once approved, you can start listing your equipment and earning money."
        },
        {
          q: "What are the requirements for equipment?",
          a: "All equipment must be clean, safe, and in good working condition. We require photos, maintenance records, and compliance with local safety standards. Each piece is verified before listing."
        },
        {
          q: "How much can I earn as a partner?",
          a: "Earnings vary by location, equipment type, and demand. Our partners typically earn $20-60 per day per item. Popular locations during peak seasons see the highest returns."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ask Scoovio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get help with bookings, equipment, payments, and more. We're here to make your mobility rental experience smooth and stress-free.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
            <div className="p-3 bg-turo-blue bg-opacity-10 rounded-lg inline-flex mb-4">
              <svg className="w-8 h-8 text-turo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.863-.462c-.169-.092-.278-.292-.278-.508V18.5c0-.828-.672-1.5-1.5-1.5H5a2 2 0 01-2-2v-5c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">Live Chat</h3>
            <p className="text-gray-600 mb-4">Get instant help from our support team</p>
            <button className="bg-turo-blue text-white px-6 py-2 rounded-md hover:bg-blue-700 font-semibold">
              Start Chat
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
            <div className="p-3 bg-green-500 bg-opacity-10 rounded-lg inline-flex mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">Call Support</h3>
            <p className="text-gray-600 mb-4">Speak directly with our team</p>
            <p className="font-semibold text-gray-900 mb-2">1-800-SCOOVIO</p>
            <p className="text-sm text-gray-500">24/7 Emergency Support</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
            <div className="p-3 bg-purple-500 bg-opacity-10 rounded-lg inline-flex mb-4">
              <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us a detailed message</p>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 font-semibold">
              Send Email
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-lg shadow">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {category.questions.map((item, index) => (
                        <div key={index}>
                          <h4 className="text-lg font-medium text-gray-900 mb-2">{item.q}</h4>
                          <p className="text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue">
                    <option value="">Select a topic</option>
                    <option value="booking">Booking Issue</option>
                    <option value="payment">Payment Problem</option>
                    <option value="equipment">Equipment Issue</option>
                    <option value="partner">Partner Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                    placeholder="Describe your issue or question..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-turo-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  href="/how-it-works"
                  className="block text-turo-blue hover:text-blue-700 font-medium"
                >
                  How Scoovio Works
                </Link>
                <Link
                  href="/safety"
                  className="block text-turo-blue hover:text-blue-700 font-medium"
                >
                  Safety Guidelines
                </Link>
                <Link
                  href="/terms"
                  className="block text-turo-blue hover:text-blue-700 font-medium"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="block text-turo-blue hover:text-blue-700 font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/become-host"
                  className="block text-turo-blue hover:text-blue-700 font-medium"
                >
                  Become a Partner
                </Link>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency?</h3>
              <p className="text-red-700 mb-4">
                If you have an urgent issue during your rental, call our 24/7 emergency line:
              </p>
              <p className="text-xl font-bold text-red-800">1-800-EMERGENCY</p>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Support Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Chat & Email:</span>
                  <span className="text-gray-900">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone Support:</span>
                  <span className="text-gray-900">6 AM - 10 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Emergency Line:</span>
                  <span className="text-gray-900">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
