import React from 'react';
import {
  Search,
  Bell,
  Settings,
  Home,
  Calendar,
  BarChart3,
  CreditCard,
  Star,
  MapPin,
  Eye,
  Heart,
  MoreHorizontal,
  ArrowRight,
  Plus,
  Edit3,
  ExternalLink,
} from 'lucide-react';

function App() {
  const onNavigate = (page: string) => {
    console.log('Navigate to:', page);
  };

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow rounded-lg border border-gray-200">
              <div className="p-5 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div className="ml-5">
                  <p className="text-2xl font-semibold text-gray-900">250,000</p>
                  <p className="text-sm text-gray-600">Total Properties</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg border border-gray-200">
              <div className="p-5 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="ml-5">
                  <p className="text-2xl font-semibold text-gray-900">25</p>
                  <p className="text-sm text-gray-600">Total Bookings</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg border border-gray-200">
              <div className="p-5 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="ml-5">
                  <p className="text-2xl font-semibold text-gray-900">4.45</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* My Properties Section */}
          <div className="bg-white shadow rounded-lg border border-gray-200 mb-8">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">My properties</h3>
              <div className="flex space-x-3">
                <button
                  onClick={() => onNavigate('all-properties')}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  View all <ArrowRight className="w-4 h-4 ml-1" />
                </button>
                <button
                  onClick={() => onNavigate('/src/pages/owner/AddProperty.tsx')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Property
                </button>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Property Card 1 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Luxury Apartment"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Luxury Apartment In Victoria Island
                  </h4>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Lagos • New York</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-700">4.5</span>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">NGN50,000</p>
                      <p className="text-xs text-gray-600">per night</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onNavigate('view-property')}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded text-sm font-medium flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> View
                    </button>
                    <button
                      onClick={() => onNavigate('edit-property')}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium flex items-center justify-center"
                    >
                      <Edit3 className="w-4 h-4 mr-1" /> Edit
                    </button>
                  </div>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Modern Duplex"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Modern Duplex In Wuse 2
                  </h4>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Abuja • New York</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-700">4.5</span>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">NGN100,000</p>
                      <p className="text-xs text-gray-600">per night</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onNavigate('view-property')}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded text-sm font-medium flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> View
                    </button>
                    <button
                      onClick={() => onNavigate('edit-property')}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium flex items-center justify-center"
                    >
                      <Edit3 className="w-4 h-4 mr-1" /> Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Bookings Section */}
          <div className="bg-white shadow rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
              <button
                onClick={() => onNavigate('all-bookings')}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                View all <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              {/* Booking Item 1 */}
              <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Abalayo O."
                    />
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">Abalayo O.</p>
                      <p className="text-sm text-gray-600">Modern Duplex In Wuse 2</p>
                      <p className="text-xs text-gray-500">Oct 17 • 3 days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm font-semibold text-gray-900">NGN75,000</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  </div>
                </div>
              </div>

              {/* Booking Item 2 */}
              <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Ruth Osonwanne"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">Ruth Osonwanne</p>
                      <p className="text-sm text-gray-600">Modern Duplex In Wuse 2</p>
                      <p className="text-xs text-gray-500">Oct 17 • 3 days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm font-semibold text-gray-900">NGN75,000</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      Pending
                    </span>
                  </div>
                </div>
              </div>

              {/* Booking Item 3 */}
              <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="John Smith"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">John Smith</p>
                      <p className="text-sm text-gray-600">
                        Luxury Apartment In Victoria Island
                      </p>
                      <p className="text-xs text-gray-500">Oct 15 • 5 days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm font-semibold text-gray-900">NGN125,000</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;
