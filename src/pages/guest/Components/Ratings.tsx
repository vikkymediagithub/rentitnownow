import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ratingData = [
  { label: 'Electricity', value: 4.5 },
  { label: 'Parking space', value: 4.5 },
  { label: 'Access Road', value: 4.5 },
  { label: 'Security', value: 4.5 },
  { label: 'Cleanliness', value: 4.5 },
  { label: 'Serenity', value: 4.5 },
  { label: 'Wifi', value: 4.5 },
  { label: 'Customer service', value: 4.5 },
];

const reviews = [
  {
    name: 'Ubong',
    country: 'Canada',
    flag: 'https://flagcdn.com/ca.svg',
    content:
      '“The apartment was clean, modern, and well-furnished with all the amenities you’d expect for a comfortable stay. I especially loved the spacious living room and the serene balcony view of the city skyline at night.”',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
  {
    name: 'Ubong',
    country: 'Canada',
    flag: 'https://flagcdn.com/ca.svg',
    content:
      '“The apartment was clean, modern, and well-furnished with all the amenities you’d expect for a comfortable stay. I especially loved the spacious living room and the serene balcony view of the city skyline at night.”',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
  {
    name: 'Ubong',
    country: 'Canada',
    flag: 'https://flagcdn.com/ca.svg',
    content:
      '“The apartment was clean, modern, and well-furnished with all the amenities you’d expect for a comfortable stay. I especially loved the spacious living room and the serene balcony view of the city skyline at night.”',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
];

const Ratings = () => {
  return (
    <section className="bg-white px-6 py-10 md:px-20 mt-10">
      {/* Ratings Section */}
      <h2 className="text-xl font-semibold mb-4">Ratings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ratingData.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-blue-700 rounded-full"
                style={{ width: `${(item.value / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-200" />

      {/* Reviews Section */}
      <h2 className="text-xl font-semibold mb-6 ">Reviews</h2>
      <div className="relative flex items-center space-x-4 overflow-x-auto no-scrollbar">
        {/* Left arrow */}
        <button className="absolute left-0 z-10 bg-white shadow-md w-8 h-8 rounded-full flex items-center justify-center -ml-4">
         <ArrowLeft/>
        </button>

        {/* Review Cards */}
        <div className="flex space-x-6 pl-10 pr-10 ml-20">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 w-72 shrink-0 border"
            >
              <div className="flex items-center mb-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <img src={review.flag} alt={review.country} className="w-4 h-3" />
                    <span>{review.country}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{review.content}</p>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button className="absolute right-0 z-10 bg-white shadow-md w-8 h-8 rounded-full flex items-center justify-center -mr-4">
          <ArrowRight/>
        </button>
      </div>
    </section>
  );
};

export default Ratings;
