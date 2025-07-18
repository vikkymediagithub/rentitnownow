import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import roomImageOne from '../../assets/room-1.png';
import roomImageTwo from '../../assets/room-2.png';
import roomImageThree from '../../assets/pics.png';
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

const MyProperties: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  const rentables = [
    { id: 1, name: 'Luxury Apartment in Victoria Island', location: 'Victoria Island, Lagos', price: 'NGN35,000/Night', totalBookings: 10, averageRating: 4.5, revenue: 'NGN300,000', status: 'Active', image: roomImageOne },
    { id: 2, name: 'Cozy Villa in Ikeja', location: 'Ikeja, Lagos', price: 'NGN25,000/Night', totalBookings: 5, averageRating: 4.2, revenue: 'NGN150,000', status: 'Pending', image: roomImageTwo },
    { id: 3, name: 'Penthouse in Lekki', location: 'Lekki, Lagos', price: 'NGN50,000/Night', totalBookings: 15, averageRating: 4.7, revenue: 'NGN500,000', status: 'Active', image: roomImageThree },
    { id: 4, name: 'Beach House in Eko', location: 'Eko Atlantic, Lagos', price: 'NGN40,000/Night', totalBookings: 8, averageRating: 4.3, revenue: 'NGN320,000', status: 'Inactive', image: roomImageOne },
    { id: 5, name: 'Studio in Surulere', location: 'Surulere, Lagos', price: 'NGN20,000/Night', totalBookings: 3, averageRating: 4.0, revenue: 'NGN90,000', status: 'Active', image: roomImageTwo },
  ];

  const filteredRentables = rentables.filter(rentable => {
    if (filter === 'All') return true;
    if (filter === 'Active') return rentable.status === 'Active';
    if (filter === 'Pending') return rentable.status === 'Pending';
    if (filter === 'Inactive') return rentable.status === 'Inactive';
    return true;
  });

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none bg-gray-50">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <button
                  onClick={() => navigate(-1)}
                  className="mr-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 animate__animated animate__fadeIn"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 animate__animated animate__fadeIn animate__delay-1s">My Rentables</h1>
              </div>
              <div className="flex items-center space-x-2">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm sm:text-base animate__animated animate__fadeIn"
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <button className="bg-[#004C61] text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-[#003a4a] animate__animated animate__fadeIn animate__delay-2s">
                  Add Rentable
                </button>
              </div>
            </div>
          </div>
          {/* Rentables List */}
          <div className="space-y-4 mt-8">
            {filteredRentables.map((rentable) => (
              <div key={rentable.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between relative animate__animated animate__zoomIn">
                <div className="flex items-center space-x-4">
                  <img src={rentable.image} alt="Property" className="w-20 h-20 rounded object-cover" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{rentable.name}</h3>
                    <p className="text-gray-500 font-normal text-sm sm:text-base">{rentable.location}</p>
                    <p className="text-black font-semibold text-sm sm:text-base">{rentable.price}</p>
                    <div className="flex space-x-4 mt-2">
                      <button className="text-blue-500 hover:text-blue-700 flex items-center text-sm sm:text-base">
                        <Eye className="w-4 h-4 mr-1" /> View
                      </button>
                      <button className="text-green-500 hover:text-green-700 flex items-center text-sm sm:text-base">
                        <Edit3 className="w-4 h-4 mr-1" /> Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center flex-1">
                    <p className="text-sm sm:text-base text-gray-500">Total bookings</p>
                    <p className="text-sm sm:text-base font-medium">{rentable.totalBookings}</p>
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-sm sm:text-base text-gray-500">Average rating</p>
                    <p className="text-sm sm:text-base font-medium">★ {rentable.averageRating}</p>
                  </div>
                  <div className="text-center">
                    <button
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm mb-1 ${
                        rentable.status === 'Active' ? 'bg-blue-200 text-blue-800' :
                        rentable.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                        'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {rentable.status}
                    </button>
                    <p className="text-sm sm:text-base text-gray-500">Revenue generated</p>
                    <p className="text-sm sm:text-base font-medium">{rentable.revenue}</p>
                  </div>
                </div>
                {/* Three-dot removed as per new layout */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyProperties;