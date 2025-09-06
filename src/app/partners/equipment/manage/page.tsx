import Header from '@/components/Header'
import Link from 'next/link'

export default function EquipmentManage() {
  // Mock data for demonstration
  const equipment = [
    {
      id: 1,
      type: "Mobility Scooter",
      model: "Lightweight 3-Wheel",
      location: "Disneyland, CA",
      dailyRate: 35,
      status: "Available",
      bookings: 8,
      earnings: 1250
    },
    {
      id: 2,
      type: "Baby Stroller",
      model: "Double Jogger",
      location: "Universal Studios, CA",
      dailyRate: 25,
      status: "Rented",
      bookings: 12,
      earnings: 980
    },
    {
      id: 3,
      type: "Mobility Scooter",
      model: "Heavy Duty 4-Wheel",
      location: "Las Vegas, NV",
      dailyRate: 45,
      status: "Available",
      bookings: 6,
      earnings: 1680
    },
    {
      id: 4,
      type: "Baby Stroller",
      model: "Single Lightweight",
      location: "Disney World, FL",
      dailyRate: 20,
      status: "Maintenance",
      bookings: 15,
      earnings: 750
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800'
      case 'Rented':
        return 'bg-blue-100 text-blue-800'
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <Link href="/partners/dashboard" className="text-turo-blue hover:underline mb-4 inline-block">
              ← Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Manage Equipment</h1>
            <p className="text-gray-600 mt-2">View and manage your mobility equipment listings</p>
          </div>
          <Link
            href="/partners/equipment/upload"
            className="bg-turo-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 font-semibold"
          >
            Add New Equipment
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Equipment Type
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option value="">All Types</option>
                <option value="mobility-scooter">Mobility Scooters</option>
                <option value="baby-stroller">Baby Strollers</option>
                <option value="wheelchair">Wheelchairs</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option value="">All Status</option>
                <option value="available">Available</option>
                <option value="rented">Currently Rented</option>
                <option value="maintenance">In Maintenance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option value="">All Locations</option>
                <option value="disneyland">Disneyland, CA</option>
                <option value="universal">Universal Studios, CA</option>
                <option value="vegas">Las Vegas, NV</option>
                <option value="disney-world">Disney World, FL</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Equipment List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Your Equipment ({equipment.length})</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Equipment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Daily Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bookings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Earnings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {equipment.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.model}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.type}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${item.dailyRate}/day
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.bookings} trips
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                      ${item.earnings}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-turo-blue hover:text-blue-700">
                          Edit
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          View
                        </button>
                        <button className="text-red-400 hover:text-red-600">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Available</p>
                <p className="text-2xl font-bold text-gray-900">
                  {equipment.filter(item => item.status === 'Available').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Currently Rented</p>
                <p className="text-2xl font-bold text-gray-900">
                  {equipment.filter(item => item.status === 'Rented').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.966-.833-2.736 0L3.077 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">In Maintenance</p>
                <p className="text-2xl font-bold text-gray-900">
                  {equipment.filter(item => item.status === 'Maintenance').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Avg. Daily Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${Math.round(equipment.reduce((sum, item) => sum + item.dailyRate, 0) / equipment.length)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
