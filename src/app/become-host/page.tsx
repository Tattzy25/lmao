import { SiteHeader as Header } from '@/components/site-header'
import Link from 'next/link'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

export default function BecomeHost() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Turn your car into a money-making opportunity
              </h1>
              <p className="text-xl mb-8">
                Join thousands of hosts who earn an average of $500+ per month sharing their car on Scoovio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/host/signup"
                  className="bg-white text-green-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 text-center"
                >
                  Get started
                </Link>
                <Link 
                  href="/carculator"
                  className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-500 text-center"
                >
                  Calculate earnings
                </Link>
              </div>
            </div>
            <div className="h-80 bg-white bg-opacity-20 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">See how much you could earn</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="car-make" className="block text-sm font-medium text-gray-700 mb-2">
                      What's your car?
                    </Label>
                    <Select>
                      <SelectTrigger id="car-make" className="w-full px-4 py-3 border border-gray-300 rounded-md">
                        <SelectValue placeholder="Select make" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="ford">Ford</SelectItem>
                        <SelectItem value="tesla">Tesla</SelectItem>
                        <SelectItem value="bmw">BMW</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="car-year" className="block text-sm font-medium text-gray-700 mb-2">
                      Year
                    </Label>
                    <Select>
                      <SelectTrigger id="car-year" className="w-full px-4 py-3 border border-gray-300 rounded-md">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Where is your car located?
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Your estimated earnings</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">$742</div>
                  <div className="text-gray-600 mb-4">per month</div>
                  <div className="text-sm text-gray-500">
                    Based on similar cars in your area being booked 12 days per month
                  </div>
                </div>
                
                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Daily rate</span>
                    <span>$78</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly bookings</span>
                    <span>12 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scoovio fee (25%)</span>
                    <span>-$234</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Your earnings</span>
                    <span>$742</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works for Hosts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How hosting works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">List your car for free</h3>
              <p className="text-gray-600">
                Take photos, write a description, and set your price. It takes about 15 minutes to get started.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose your schedule</h3>
              <p className="text-gray-600">
                You're in control. Choose when your car is available and approve trips that work for you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get paid</h3>
              <p className="text-gray-600">
                Earn money while your car sits in the driveway. Get paid within 3 hours of trip completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why host with Scoovio?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Extra income</h3>
              <p className="text-gray-600">
                Make money from your car when you're not using it. The average host earns $500+ per month.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">You're covered</h3>
              <p className="text-gray-600">
                $1M liability insurance and 24/7 roadside assistance included with every trip.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Total control</h3>
              <p className="text-gray-600">
                Set your own price, availability, and house rules. Approve trips that work for you.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Local marketplace</h3>
              <p className="text-gray-600">
                Connect with people in your community and provide a valuable service.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Support team</h3>
              <p className="text-gray-600">
                Get help from our support team whenever you need it, 24/7.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick setup</h3>
              <p className="text-gray-600">
                Get your car listed and start earning in less than 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Host success stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "San Francisco, CA",
                car: "2022 Tesla Model 3",
                earnings: "$847/month",
                quote: "Hosting on Scoovio has been amazing! It helps pay for my car payment and then some."
              },
              {
                name: "Mike L.",
                location: "Austin, TX", 
                car: "2021 Jeep Wrangler",
                earnings: "$623/month",
                quote: "I love meeting new people and my Jeep is perfect for weekend adventurers."
              },
              {
                name: "Jessica R.",
                location: "Miami, FL",
                car: "2023 BMW 330i",
                earnings: "$912/month", 
                quote: "The extra income from hosting helps me afford my dream car!"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.location}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-medium">{story.car}</div>
                  <div className="text-green-500 font-semibold">{story.earnings}</div>
                </div>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How much money can I make?",
                answer: "Host earnings vary based on your car, location, and how often you rent it out. The average host earns $500+ per month, with some earning over $1,000."
              },
              {
                question: "What if my car gets damaged?",
                answer: "Every trip includes up to $1M in liability insurance and physical damage protection. Guests are responsible for damage they cause to your car."
              },
              {
                question: "Who can rent my car?",
                answer: "All guests must be at least 21 years old (18 in select states), pass identity verification, and meet our eligibility requirements."
              },
              {
                question: "When do I get paid?",
                answer: "You get paid within 3 hours of your trip ending. Payments are automatically deposited to your bank account or debit card."
              },
              {
                question: "Can I decline trip requests?",
                answer: "Yes! You have complete control over who rents your car. You can approve or decline any trip request."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start earning?</h2>
          <p className="text-xl mb-8">
            Join thousands of hosts making money with their cars
          </p>
          <Link 
            href="/host/signup"
            className="bg-white text-green-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 inline-block"
          >
            List your car for free
          </Link>
        </div>
      </section>
    </div>
  )
}
