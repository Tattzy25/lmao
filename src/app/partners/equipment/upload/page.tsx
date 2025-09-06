import Header from '@/components/Header'
import Link from 'next/link'

export default function EquipmentUpload() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/partners/dashboard" className="text-turo-blue hover:underline mb-4 inline-block">
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Add New Equipment</h1>
          <p className="text-gray-600 mt-2">List your mobility equipment for rent on Scoovio</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <form className="space-y-6">
            {/* Equipment Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Equipment Type *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue">
                <option value="">Select equipment type</option>
                <option value="mobility-scooter">Mobility Scooter</option>
                <option value="baby-stroller">Baby Stroller</option>
                <option value="wheelchair">Wheelchair</option>
                <option value="walker">Walker</option>
              </select>
            </div>

            {/* Equipment Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Pride Mobility, UPPAbaby"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Model *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Victory 10, VISTA V2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                rows={4}
                placeholder="Describe your equipment, its features, and condition..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
              />
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight Capacity (lbs)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 300"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Battery Life (hours)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Location *
              </label>
              <input
                type="text"
                placeholder="e.g., Disneyland, Universal Studios, Las Vegas Strip"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
              />
            </div>

            {/* Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Rate *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="35"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weekly Rate
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="210"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Security Deposit
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                  />
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Features & Accessories
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Adjustable Seat',
                  'Cup Holder',
                  'Storage Basket',
                  'LED Lights',
                  'Horn/Bell',
                  'Removable Battery',
                  'Foldable',
                  'All-Terrain Wheels',
                  'Rain Cover',
                  'Phone Holder',
                  'USB Charging Port',
                  'Anti-Tip Wheels'
                ].map((feature) => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-turo-blue focus:ring-turo-blue"
                    />
                    <span className="ml-2 text-sm text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Photos */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photos *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                  <button type="button" className="font-medium text-turo-blue hover:text-blue-500">
                    Upload photos
                  </button>
                  {' '}or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Availability
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Available From</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Available Until</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Min Rental (days)</label>
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Max Rental (days)</label>
                  <input
                    type="number"
                    defaultValue="30"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-turo-blue focus:border-turo-blue"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Delivery & Pickup Options
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-turo-blue focus:ring-turo-blue"
                  />
                  <span className="ml-2 text-sm text-gray-700">Pick up at my location</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-turo-blue focus:ring-turo-blue"
                  />
                  <span className="ml-2 text-sm text-gray-700">Delivery to venue (additional fee may apply)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-turo-blue focus:ring-turo-blue"
                  />
                  <span className="ml-2 text-sm text-gray-700">Meet at venue entrance</span>
                </label>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <Link 
                href="/partners/dashboard"
                className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-6 py-3 bg-turo-blue text-white rounded-md hover:bg-blue-700 font-semibold"
              >
                List Equipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
