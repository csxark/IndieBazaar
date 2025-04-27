import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiUser, FiPackage, FiLogOut } from 'react-icons/fi'
import { useAuth } from '../../context/AuthContext'

function ProfilePage() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('profile')

  // Mock order data
  const orders = [
    {
      id: 'ORD123456',
      date: '2024-02-15',
      status: 'Delivered',
      total: 4500,
      items: [
        { name: 'Khadi Cotton Kurta', quantity: 1, price: 2500 },
        { name: 'Block Print Dupatta', quantity: 1, price: 2000 }
      ]
    },
    {
      id: 'ORD123457',
      date: '2024-02-10',
      status: 'Processing',
      total: 3200,
      items: [
        { name: 'Handwoven Scarf', quantity: 2, price: 1600 }
      ]
    }
  ]

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  if (!currentUser) {
    navigate('/login')
    return null
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              {/* Sidebar */}
              <div className="md:w-64 bg-gray-50 p-6 border-r border-gray-200">
                <div className="flex items-center space-x-4 mb-8">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
                  />
                  <div>
                    <h2 className="font-bold text-gray-900">{currentUser.name}</h2>
                    <p className="text-sm text-gray-500">{currentUser.email}</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition ${
                      activeTab === 'profile'
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <FiUser />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition ${
                      activeTab === 'orders'
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <FiPackage />
                    <span>Orders</span>
                  </button>
                  {/* <Link
                    to="/wishlist"
                    className="flex items-center space-x-2 w-full px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
                  >
                    <FiHeart />
                    <span>Wishlist</span>
                  </Link> */}
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 w-full px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition"
                  >
                    <FiLogOut />
                    <span>Logout</span>
                  </button>
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                {activeTab === 'profile' ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-6">Profile Information</h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={currentUser.name}
                            className="input"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            value={currentUser.email}
                            className="input"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            placeholder="Add phone number"
                            className="input"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            placeholder="Add your location"
                            className="input"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        <textarea
                          placeholder="Add your address"
                          rows={3}
                          className="input"
                        />
                      </div>

                      <div>
                        <button className="btn btn-primary px-6">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-6">Order History</h3>
                    <div className="space-y-6">
                      {orders.map(order => (
                        <div
                          key={order.id}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex flex-wrap items-center justify-between mb-4">
                            <div>
                              <p className="font-medium text-gray-900">
                                Order #{order.id}
                              </p>
                              <p className="text-sm text-gray-500">
                                Placed on {new Date(order.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">
                                ₹{order.total.toLocaleString()}
                              </p>
                              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                order.status === 'Delivered'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 pt-4">
                            {order.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-center text-sm"
                              >
                                <span className="text-gray-600">
                                  {item.quantity}x {item.name}
                                </span>
                                <span className="text-gray-900">
                                  ₹{item.price.toLocaleString()}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage