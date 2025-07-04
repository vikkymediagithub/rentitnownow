import React from 'react';
import {
  Plus,
  Star,
  MapPin,
  ExternalLink,
  Edit3,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom'; // Make sure you're using react-router-dom

function OwnerDashboard() {
  const onNavigate = (page: string) => {
    console.log('Navigate to:', page);
  };

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none bg-gray-50 min-h-screen">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-white shadow rounded-lg border border-gray-200 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 mb-3 flex items-center justify-center bg-gray-100 rounded-full">
                <img src="/currency.png" alt="Currency Icon" className="w-6 h-6" />
              </div>
              <p className="text-2xl font-bold text-gray-900">250,000</p>
              <p className="text-sm text-gray-600 mt-1">Total Properties</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow rounded-lg border border-gray-200 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 mb-3 flex items-center justify-center bg-gray-100 rounded-full">
                <img src="/calender.png" alt="Calendar Icon" className="w-6 h-6" />
              </div>
              <p className="text-2xl font-bold text-gray-900">25</p>
              <p className="text-sm text-gray-600 mt-1">Total Bookings</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow rounded-lg border border-gray-200 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 mb-3 flex items-center justify-center bg-gray-100 rounded-full">
                <img src="/rate.png" alt="Rating Icon" className="w-6 h-6" />
              </div>
              <p className="text-2xl font-bold text-gray-900">4.45</p>
              <p className="text-sm text-gray-600 mt-1">Average Rating</p>
            </div>
          </div>

          {/* My Properties */}
          <div className="bg-white shadow rounded-lg border border-gray-200 mb-8">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-700">My properties</h3>
              <div className="flex space-x-3">
                <button onClick={() => onNavigate('all-properties')} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  View all
                </button>
                <button
                  onClick={() => onNavigate('/src/pages/owner/AddProperty.tsx')}
                  className="bg-[#004c61] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Property
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {/* Property Card 1 */}
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      className="h-16 w-20 object-cover rounded-lg"
                      src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Luxury Apartment"
                    />
                    <div className="absolute -top-1 -right-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">Luxury Apartment In Victoria Island</h4>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Victoria Island, Lagos</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">NGN35,000/Night</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Total bookings</p>
                    <p className="text-lg font-bold text-gray-900">10</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Average rating</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-lg font-bold text-gray-900">4.5</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Revenue generated</p>
                    <p className="text-lg font-bold text-gray-900">NGN300.00</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">Active</span>
                    <Link to="/property/1" className="text-gray-600 hover:text-gray-800 p-1">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    <Link to="/edit-property/1" className="text-gray-600 hover:text-gray-800 p-1">
                      <Edit3 className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      className="h-16 w-20 object-cover rounded-lg"
                      src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Modern Duplex"
                    />
                    <div className="absolute -top-1 -right-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">Modern Shortlet in Wuse 2</h4>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Wuse 2, Abuja</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">NGN35,000/Night</p>
                    <div className="flex items-center space-x-2">
                    <Link to="/property/2" className="text-gray-600 hover:text-gray-800 p-1">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    <Link to="/edit-property/2" className="text-gray-600 hover:text-gray-800 p-1">
                      <Edit3 className="w-4 h-4" />
                    </Link>
                  </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Total bookings</p>
                    <p className="text-lg font-bold text-gray-900">10</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Average rating</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-lg font-bold text-gray-900">4.5</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">Active</span>
                    <p className="text-sm text-gray-600">Revenue generated</p>
                    <p className="text-lg font-bold text-gray-900">NGN300.00</p>
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
            <div className="p-6 text-gray-600 text-sm">
              No recent bookings yet.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OwnerDashboard;
