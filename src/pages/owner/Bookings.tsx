import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, BookOpen } from 'lucide-react';

const Bookings: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  // Sample bookings data
  const bookings = [
    { id: 1, name: 'Adedayo O.', property: 'Modern Shortlist Muse 2', date: 'Dec 10 - 11, 2025', status: 'Confirmed', price: 'NGN 10,000' },
    { id: 2, name: 'Ruth Omoowo', property: 'Modern Shortlist Muse 2', date: 'Dec 10 - 11, 2025', status: 'Pending', price: 'NGN 12,000' },
    { id: 3, name: 'Eleho Itazi', property: 'Modern Shortlist Muse 2', date: 'Dec 10 - 11, 2025', status: 'Completed', price: 'NGN 15,000' },
    { id: 4, name: 'Faith Omotoro', property: 'Modern Shortlist Muse 2', date: 'Dec 10 - 11, 2025', status: 'Pending', price: 'NGN 11,000' },
    { id: 5, name: 'Eleho Itazi', property: 'Modern Shortlist Muse 2', date: 'Dec 10 - 11, 2025', status: 'Completed', price: 'NGN 14,000' },
    { id: 6, name: 'Faith Omotoro', property: 'Modern Shortlist Muse 2', date: 'Dec 10 - 11, 2025', status: 'Pending', price: 'NGN 13,000' },
  ];

  // Filter bookings based on selected status
  const filteredBookings = filter === 'All' ? bookings : bookings.filter(booking => booking.status === filter);

  // Get status badge styles
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Initialize lucide-react icons
  useEffect(() => {
    import('lucide-react').then((lucide) => {
      lucide.createIcons();
    });
  }, []);

  return (
    <div className="bg-gray-100 p-4 min-h-screen sm:p-6 md:p-8">
      {/* First Header with Back Arrow, Bookings Title, and Icon */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 animate__animated animate__fadeIn">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 animate__animated animate__fadeIn"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold">Bookings</h1>
          </div>
          <span
            className="inline-flex items-center justify-center w-8 h-8"
            style={{
              background: 'linear-gradient(to right, #F85259, #3352A5)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            <BookOpen className="w-6 h-6" />
          </span>
        </div>
      </div>

      {/* Second Header with Filter Options */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 animate__animated animate__fadeIn">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">Bookings</h1>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {['All', 'Pending', 'Confirmed', 'Completed'].map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`text-sm font-medium px-3 py-1 rounded-full bg-gray-200 transition duration-300 animate__animated animate__pulse animate__delay-1s ${
                  filter === option
                    ? 'bg-gradient-to-r from-[#F85259] to-[#3352A5] text-transparent bg-clip-text'
                    : 'text-blue-500 hover:text-blue-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <div key={booking.id} className="bg-white p-4 sm:p-5 rounded-lg shadow-md border border-gray-200 animate__animated animate__fadeInUp">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-3">
                <div>
                  <h3 className="font-bold text-base sm:text-lg">{booking.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{booking.property}</p>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <p className="text-gray-600 text-sm sm:text-base">{booking.date}</p>
                  </div>
                </div>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto">
                <p className="text-gray-500 font-medium text-sm sm:text-base">{booking.price}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-sm mt-2 ${getStatusStyles(booking.status)}`}>
                  {booking.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;