'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<string>('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    router.push('/admin/login')
  }

  const stats = [
    { label: 'Total Products', value: '156', icon: '📦' },
    { label: 'Total Bookings', value: '324', icon: '📅' },
    { label: 'Gallery Images', value: '450+', icon: '🖼️' },
    { label: 'Revenue', value: '₹12.5L+', icon: '💰' }
  ]

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'products', label: 'Manage Products', icon: '📦' },
    { id: 'gallery', label: 'Manage Gallery', icon: '🖼️' },
    { id: 'services', label: 'Manage Services', icon: '⚙️' },
    { id: 'pricing', label: 'Manage Pricing', icon: '💰' },
    { id: 'bookings', label: 'Manage Bookings', icon: '📅' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#8B3A62] text-white p-2 rounded-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="flex">
        <aside className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:relative w-64 bg-[#8B3A62] text-white p-6 min-h-screen transition-transform z-40`}>
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#D66B7F] mb-2">Pahnawa</h1>
            <p className="text-gray-400 text-sm">Admin Panel</p>
          </div>

          <nav className="space-y-2">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-2 ${
                  activeTab === item.id
                    ? 'bg-[#D66B7F] text-white font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-12 pt-6 border-t border-gray-700">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-gray-800 transition-colors flex items-center space-x-2"
            >
              <span className="text-lg">🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        <main className="flex-1 p-4 sm:p-6 md:p-8 mt-12 md:mt-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B3A62]">Dashboard</h1>
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D66B7F] text-sm sm:text-base flex-1 sm:flex-none"
              />
            </div>
          </div>

          {activeTab === 'overview' && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#8B3A62] mb-6">Welcome to Admin Dashboard</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-xs sm:text-sm mb-1">{stat.label}</p>
                        <p className="text-2xl sm:text-3xl font-bold text-[#8B3A62]">{stat.value}</p>
                      </div>
                      <div className="text-3xl sm:text-4xl">{stat.icon}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-[#8B3A62] mb-4">Recent Bookings</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Priya Sharma', service: 'Bridal Lehenga', status: 'Pending' },
                      { name: 'Anjali Verma', service: 'Custom Tailoring', status: 'In Progress' },
                      { name: 'Neha Patel', service: 'Alterations', status: 'Completed' }
                    ].map((booking, idx) => (
                      <div key={idx} className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0">
                        <div>
                          <p className="font-semibold text-[#8B3A62]">{booking.name}</p>
                          <p className="text-sm text-gray-600">{booking.service}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-[#8B3A62] mb-4">Top Services</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Bridal Designing', count: 45 },
                      { name: 'Custom Tailoring', count: 38 },
                      { name: 'Alterations', count: 32 }
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <p className="text-gray-700">{service.name}</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-[#D66B7F] h-2 rounded-full"
                              style={{ width: `${(service.count / 45) * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-semibold text-[#8B3A62] w-8">{service.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#8B3A62]">Manage Products</h2>
                <button className="bg-[#D66B7F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#8B3A62] transition-colors">
                  + Add Product
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Product Name</th>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Category</th>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Status</th>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Royal Bridal Lehenga', category: 'Bridal', status: 'Active' },
                      { name: 'Designer Saree Blouse', category: 'Saree', status: 'Active' },
                      { name: 'Modern Fusion Suit', category: 'Suits', status: 'Inactive' }
                    ].map((product, idx) => (
                      <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-6 py-4">{product.name}</td>
                        <td className="px-6 py-4 text-gray-600">{product.category}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {product.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 space-x-2">
                          <button className="text-[#D66B7F] hover:text-[#8B3A62] font-semibold text-sm">Edit</button>
                          <button className="text-red-600 hover:text-red-800 font-semibold text-sm">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#8B3A62]">Manage Gallery</h2>
                <button className="bg-[#D66B7F] text-white px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#8B3A62] transition-colors">
                  + Upload Image
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
                {[...Array(8)].map((_, idx) => (
                  <div key={idx} className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center group relative">
                    <div className="text-3xl sm:text-4xl">🖼️</div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-lg transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                      <button className="text-white text-xs sm:text-sm font-semibold">Edit</button>
                      <button className="text-red-400 text-xs sm:text-sm font-semibold">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#8B3A62]">Manage Services</h2>
                <button className="bg-[#D66B7F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#8B3A62] transition-colors">
                  + Add Service
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Bridal Designing', price: 'Custom' },
                  { name: 'Custom Tailoring', price: '₹3,000+' },
                  { name: 'Alterations', price: '₹500+' }
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div>
                      <p className="font-semibold text-[#8B3A62]">{service.name}</p>
                      <p className="text-sm text-gray-600">{service.price}</p>
                    </div>
                    <div className="space-x-2">
                      <button className="text-[#D66B7F] hover:text-[#8B3A62] font-semibold text-sm">Edit</button>
                      <button className="text-red-600 hover:text-red-800 font-semibold text-sm">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-[#8B3A62] mb-6">Manage Pricing</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Package Name</th>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Price</th>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Status</th>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Basic Package', price: '₹2,999', status: 'Active' },
                      { name: 'Premium Package', price: '₹8,999', status: 'Active' },
                      { name: 'Designer Package', price: '₹18,999+', status: 'Active' }
                    ].map((pkg, idx) => (
                      <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold">{pkg.name}</td>
                        <td className="px-6 py-4 text-[#D66B7F]">{pkg.price}</td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                            {pkg.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 space-x-2">
                          <button className="text-[#D66B7F] hover:text-[#8B3A62] font-semibold text-sm">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-[#8B3A62] mb-6">Manage Bookings</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Customer Name</th>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Service</th>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Date</th>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Status</th>
                      <th className="px-6 py-3 font-semibold text-[#8B3A62]">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Priya Sharma', service: 'Bridal Lehenga', date: '2024-01-15', status: 'Pending' },
                      { name: 'Anjali Verma', service: 'Custom Tailoring', date: '2024-01-12', status: 'In Progress' },
                      { name: 'Neha Patel', service: 'Alterations', date: '2024-01-10', status: 'Completed' }
                    ].map((booking, idx) => (
                      <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-6 py-4">{booking.name}</td>
                        <td className="px-6 py-4">{booking.service}</td>
                        <td className="px-6 py-4 text-gray-600">{booking.date}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            booking.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-[#D66B7F] hover:text-[#8B3A62] font-semibold text-sm">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
