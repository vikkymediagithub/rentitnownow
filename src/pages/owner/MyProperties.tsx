import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import roomImageOne from '../../assets/room-1.png';
import { Link } from 'react-router-dom';
import {
  Plus,
  Star,
  MapPin,
  ExternalLink,
  Edit3,
  ArrowRight,
  Eye,
  Calendar,
} from 'lucide-react';

const MyRentables: React.FC = () => {
  const navigate = useNavigate();

  const rentables = [
    { id: 1, name: 'Luxury Apartment in Victoria Island', location: 'Victoria Island, Lagos', price: 'NGN35,000/Night', totalBookings: 10, averageRating: 4.5, revenue: 'NGN300,000' },
    { id: 2, name: 'Luxury Apartment in Victoria Island', location: 'Victoria Island, Lagos', price: 'NGN35,000/Night', totalBookings: 10, averageRating: 4.5, revenue: 'NGN300,000' },
    { id: 3, name: 'Luxury Apartment in Victoria Island', location: 'Victoria Island, Lagos', price: 'NGN35,000/Night', totalBookings: 10, averageRating: 4.5, revenue: 'NGN300,000' },
    { id: 4, name: 'Luxury Apartment in Victoria Island', location: 'Victoria Island, Lagos', price: 'NGN35,000/Night', totalBookings: 10, averageRating: 4.5, revenue: 'NGN300,000' },
    { id: 5, name: 'Luxury Apartment in Victoria Island', location: 'Victoria Island, Lagos', price: 'NGN35,000/Night', totalBookings: 10, averageRating: 4.5, revenue: 'NGN300,000' },
  ];

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none bg-gray-50">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <button
                onClick={() => navigate(-1)}
                className="mr-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Rentables</h1>
            </div>
            <div className="flex items-center space-x-2">
              <select className="border border-gray-300 rounded px-2 py-1 text-sm sm:text-base">
                <option>All</option>
              </select>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-green-600">
                Add Rentable
              </button>
            </div>
          </div>
          {/* Rentables List */}
          <div className="space-y-4">
            {rentables.map((rentable) => (
              <div key={rentable.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={roomImageOne} alt="Property" className="w-20 h-20 rounded object-cover" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{rentable.name}</h3>
                    <p className="text-gray-500 font-normal text-sm sm:text-base">{rentable.location}</p>
                    <p className="text-black font-semibold text-sm sm:text-base">{rentable.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm sm:text-base text-gray-500">Total bookings</p>
                    <p className="text-sm sm:text-base font-medium">{rentable.totalBookings}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm sm:text-base text-gray-500">Average rating</p>
                    <p className="text-sm sm:text-base font-medium">★ {rentable.averageRating}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm sm:text-base text-gray-500">Revenue generated</p>
                    <p className="text-sm sm:text-base font-medium">{rentable.revenue}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600 text-sm sm:text-base">View</button>
                    <button className="text-gray-400 hover:text-gray-600 text-sm sm:text-base">Edit</button>
                    <button className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm">Active</button>
                    <button className="text-gray-400 hover:text-gray-600 text-sm sm:text-base">⋮</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyRentables;