import React from 'react';
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
import { Link } from 'react-router-dom';

function OwnerDashboard() {
  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none bg-gray-50 min-h-screen">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard icon="/currency.png" title="Total Properties" value="250,000" />
            <StatCard icon="/calender.png" title="Total Bookings" value="25" />
            <StatCard icon="/rate.png" title="Average Rating" value="4.45" />
          </div>

          {/* My Properties */}
          <div className="bg-white shadow rounded-lg border border-gray-200 mb-8">
            <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h3 className="text-xl font-bold text-gray-700">My properties</h3>
              <div className="flex space-x-3">
                <Link
                  to="/all-properties"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
                >
                  View all
                </Link>
                <Link
                  to="/owner/add-property"
                  className="bg-[#004c61] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Property
                </Link>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {[1, 2].map((id) => (
                <PropertyCard key={id} id={id} />
              ))}
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white shadow rounded-lg border border-gray-200 mt-8">
            <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
              <Link
                to="/all-bookings"
                className="inline-flex items-center text-sm font-medium text-white bg-[#004c61] px-4 py-2 rounded-lg hover:bg-[#003744] transition"
              >
                View all
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="divide-y divide-gray-100">
              {/* Booking 1 - Confirmed */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 space-y-4 sm:space-y-0">
                {/* Left */}
                <div>
                  <p className="text-base font-semibold text-gray-800">Adebayo O.</p>
                  <p className="text-sm text-gray-600">Luxury Apartment In VI</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>June 25, 2025</span>
                  </div>
                </div>
                {/* Right */}
                <div className="text-right sm:text-left">
                  <p className="text-base font-bold text-gray-800">NGN35,000</p>
                  <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Confirmed
                  </span>
                </div>
              </div>

              {/* Booking 2 - Pending */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 space-y-4 sm:space-y-0">
                {/* Left */}
                <div>
                  <p className="text-base font-semibold text-gray-800">Ruth Omoowoso</p>
                  <p className="text-sm text-gray-600">Modern Shortlet in Wuse 2</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>July 10, 2025</span>
                  </div>
                </div>
                {/* Right */}
                <div className="text-right sm:text-left">
                  <p className="text-base font-bold text-gray-800">NGN75,000</p>
                  <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-red-300 text-red-800 rounded-full">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

const StatCard = ({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) => (
  <div className="bg-white shadow rounded-lg border border-gray-200 p-6 flex flex-col items-center justify-center text-center">
    <div className="w-14 h-14 mb-3 flex items-center justify-center bg-gray-100 rounded-full">
      <img src={icon} alt={`${title} Icon`} className="w-6 h-6" />
    </div>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    <p className="text-sm text-gray-600 mt-1">{title}</p>
  </div>
);

const PropertyCard = ({ id }: { id: number }) => {
  const isFirst = id === 1;
  const image = isFirst
    ? 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
    : 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400';
  const title = isFirst
    ? 'Luxury Apartment In Victoria Island'
    : 'Modern Shortlet in Wuse 2';
  const location = isFirst
    ? 'Victoria Island, Lagos'
    : 'Wuse 2, Abuja';

  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-100 rounded-lg space-y-4 sm:space-y-0 sm:space-x-4">
      {/* Absolute Active Badge */}
      <div className="absolute top-4 right-4">
        <span className="bg-[#47c2e7] text-white px-3 py-1 rounded-full text-xs font-medium">
          Active
        </span>
      </div>

      {/* Image and Details */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 w-full sm:w-[40%]">
        <div>
          <img
            className="h-20 w-28 object-cover rounded-lg"
            src={image}
            alt={title}
          />
        </div>
        <div className="mt-2 sm:mt-0">
          <h4 className="text-base font-semibold text-gray-900 mb-1">{title}</h4>
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{location}</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-2 pt-4">NGN35,000/Night</p>
          <div className="flex space-x-2">
            <Link
              to={`/property/${id}`}
              className="flex items-center text-sm text-gray-700 hover:text-gray-900 px-3 py-1 border border-black rounded-lg"
            >
              <Eye className="w-4 h-4 mr-1" />
              View
            </Link>
            <Link
              to={`/edit-property/${id}`}
              className="flex items-center text-sm text-gray-700 hover:text-gray-900 px-3 py-1 border border-black rounded-lg"
            >
              <Edit3 className="w-4 h-4 mr-1" />
              Edit
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col gap-3 sm:items-end text-right sm:text-right w-full sm:w-auto pt-8 sm:pt-0">
        <div className="flex flex-row gap-6 justify-between sm:justify-end">
          <div>
            <p className="text-sm text-gray-600">Total bookings</p>
            <p className="text-lg font-bold text-gray-900">10</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Average rating</p>
            <div className="flex items-center justify-end">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span className="text-lg font-bold text-gray-900">4.5</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">Revenue generated</p>
            <p className="text-lg font-bold text-gray-900">NGN300.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
