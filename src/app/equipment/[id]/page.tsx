import { SiteHeader as Header } from '@/components/site-header'

export default async function CarDetails({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Car Details */}
          <div className="lg:col-span-2">
            {/* Car Images */}
            <div className="mb-8">
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-2 h-80 bg-gray-300 rounded-lg"></div>
                <div className="h-40 bg-gray-300 rounded-lg"></div>
                <div className="h-40 bg-gray-300 rounded-lg"></div>
              </div>
            </div>

            {/* Car Info */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Equipment {id}</h1>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 mr-2">★★★★★</span>
                <span className="text-gray-600">4.9 (15 trips)</span>
                <span className="mx-2">•</span>
                <span className="text-gray-600">SUV</span>
                <span className="mx-2">•</span>
                <span className="text-gray-600">5 seats</span>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-4">What's included</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>200 miles included</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>$0.35/mile after</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>Delivery available</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>24/7 roadside assistance</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4">Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    'All-wheel drive', 'Android Auto', 'Apple CarPlay', 'Backup camera',
                    'Bluetooth', 'GPS Navigation', 'Heated seats', 'Keyless entry',
                    'Premium sound system', 'USB charger'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4">Description</h3>
                <p className="text-gray-700">
                  Experience the future of driving with this 2023 Tesla Model Y. This all-electric SUV 
                  combines luxury, performance, and sustainability. Perfect for city driving or road trips 
                  with its impressive range and advanced autopilot features. The spacious interior and 
                  minimalist design create a premium driving experience.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4">Guidelines</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• No smoking</p>
                  <p>• No pets (unless specified)</p>
                  <p>• Return with same fuel level</p>
                  <p>• Clean up after yourself</p>
                  <p>• Maximum 4 additional drivers</p>
                </div>
              </div>
            </div>

            {/* Host Info */}
            <div className="border-t pt-8">
              <h3 className="font-semibold mb-4">Hosted by Sarah</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-medium">Sarah</div>
                  <div className="text-sm text-gray-600">Host since 2021 • 47 trips</div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm">4.95 host rating</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Hi! I'm Sarah and I love sharing my cars with fellow travelers. 
                My Model Y is always kept in pristine condition and I'm always 
                available to help with any questions during your trip.
              </p>
              <button className="text-turo-blue hover:underline">
                Contact host
              </button>
            </div>

            {/* Reviews */}
            <div className="border-t pt-8 mt-8">
              <h3 className="font-semibold mb-4">Reviews (15)</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium text-sm">John D.</div>
                        <div className="text-xs text-gray-600">March 2024</div>
                      </div>
                      <div className="ml-auto">
                        <span className="text-yellow-400">★★★★★</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Amazing car! Sarah was very responsive and helpful. 
                      The Tesla was spotless and drove like a dream. Would definitely book again!
                    </p>
                  </div>
                ))}
              </div>
              <button className="text-turo-blue hover:underline mt-4">
                Show all reviews
              </button>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-turo-blue mb-1">$85<span className="text-lg font-normal text-gray-600">/day</span></div>
                  <div className="text-sm text-gray-600">$595 total</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="trip-start" className="block text-sm font-medium text-gray-700 mb-1">
                      Trip start
                    </label>
                    <input
                      id="trip-start"
                      name="tripStart"
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="trip-end" className="block text-sm font-medium text-gray-700 mb-1">
                      Trip end
                    </label>
                    <input
                      id="trip-end"
                      name="tripEnd"
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <button className="w-full bg-turo-blue text-white py-3 px-6 rounded-md hover:bg-blue-700 font-semibold mb-4">
                  Book instantly
                </button>

                <div className="text-center text-sm text-gray-600 mb-4">
                  You won't be charged yet
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>$85 x 7 days</span>
                    <span>$595</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Service fee</span>
                    <span>$35</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Total</span>
                    <span>$630</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Pickup & return</h3>
                <div className="mb-4">
                  <div className="font-medium text-sm">San Francisco, CA</div>
                  <div className="text-sm text-gray-600">Meet at a public location</div>
                </div>
                <div className="h-40 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
