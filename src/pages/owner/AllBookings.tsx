import React from 'react';
import { ArrowLeft, Search, Filter, Calendar, MapPin } from 'lucide-react';

interface AllBookingsProps {
  onNavigate: (page: string) => void;
}

const AllBookings: React.FC<AllBookingsProps> = ({ onNavigate }) => {
  const bookings = [
    {
      id: 1,
      guestName: "Abalayo O.",
      guestImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      propertyName: "Modern Duplex In Wuse 2",
      propertyImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      checkIn: "Oct 17, 2024",
      checkOut: "Oct 20, 2024",
      duration: "3 days",
      amount: "NGN75,000",
      status: "Confirmed",
      location: "Abuja, Nigeria"
    },
    {
      id: 2,
      guestName: "Ruth Osonwanne",
      guestImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      propertyName: "Luxury Apartment In Victoria Island",
      propertyImage: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      checkIn: "Oct 15, 2024",
      checkOut: "Oct 18, 2024",
      duration: "3 days",
      amount: "NGN150,000",
      status: "Pending",
      location: "Lagos, Nigeria"
    },
    {
      id: 3,
      guestName: "John Smith",
      guestImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      propertyName: "Luxury Apartment In Victoria Island",
      propertyImage: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      checkIn: "Oct 10, 2024",
      checkOut: "Oct 15, 2024",
      duration: "5 days",
      amount: "NGN250,000",
      status: "Completed",
      location: "Lagos, Nigeria"
    },
    {
      id: 4,
      guestName: "Sarah Johnson",
      guestImage: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      propertyName: "Modern Duplex In Wuse 2",
      propertyImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      checkIn: "Oct 8, 2024",
      checkOut: "Oct 10, 2024",
      duration: "2 days",
      amount: "NGN200,000",
      status: "Cancelled",
      location: "Abuja, Nigeria"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="mr-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-3xl font-bold text-gray-900">All Bookings</h1>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="Search bookings..."
                  type="search"
                />
              </div>
            </div>
            <button className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
          </div>

          {/* Bookings List */}
          <div className="bg-white shadow-lg rounded-xl border border-gray-100">
            <div className="divide-y divide-gray-100">
              {bookings.map((booking) => (
                <div key={booking.id} className="p-8 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                    {/* Guest and Property Info */}
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        <img className="h-16 w-16 rounded-full object-cover border-2 border-gray-200" src={booking.guestImage} alt={booking.guestName} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xl font-bold text-gray-900">{booking.guestName}</p>
                        <div className="flex items-center mt-2">
                          <img className="h-12 w-12 rounded-lg object-cover border border-gray-200 mr-3" src={booking.propertyImage} alt={booking.propertyName} />
                          <div>
                            <p className="text-base font-medium text-gray-900">{booking.propertyName}</p>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{booking.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Booking Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0">
                      <div className="text-center sm:text-left">
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar className="w-5 h-5 mr-2" />
                          <span className="text-base font-medium">Check-in</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{booking.checkIn}</p>
                      </div>
                      
                      <div className="text-center sm:text-left">
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar className="w-5 h-5 mr-2" />
                          <span className="text-base font-medium">Check-out</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{booking.checkOut}</p>
                      </div>

                      <div className="text-center sm:text-left">
                        <p className="text-base text-gray-600 mb-2">Duration</p>
                        <p className="text-lg font-bold text-gray-900">{booking.duration}</p>
                      </div>

                      <div className="text-center sm:text-left">
                        <p className="text-base text-gray-600 mb-2">Amount</p>
                        <p className="text-2xl font-bold text-gray-900">{booking.amount}</p>
                      </div>

                      <div className="text-center sm:text-left">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllBookings;