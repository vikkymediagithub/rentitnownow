import React from 'react'
import { MapPin, Users, BathIcon, BedIcon, HomeIcon } from 'lucide-react'


const PropertyDetails = () => {
  return (
    <div className='w-[47rem] bg-white rounded-xl shadow-sm ml-10 -mt-96 p-6'>
      {/* Tags */}
      <div className='flex gap-2 mb-4'>
        <p className='px-3 py-1 rounded-xl text-orange-600 bg-orange-100 border text-sm font-medium'>Apartment</p>
        <p className='px-3 py-1 rounded-xl text-orange-600 bg-orange-100 border text-sm font-medium'>Short-let</p>
      </div>

      {/* Title */}
      <h2 className='text-2xl font-semibold mb-2'>Luxury Apartment in Victoria Island</h2>

      {/* Location */}
      <div className='flex items-center text-sm text-gray-600 mb-3'>
        <MapPin size={18} />
        <p className='ml-2'>Victoria Island, Lagos State, Nigeria</p>
      </div>

      {/* Summary */}
      <div className='flex flex-wrap text-xs text-gray-500 gap-6 mb-4'>
        <div className='flex items-center gap-1'>
          <Users size={16} />
          <span>4 Guests</span>
        </div>
        <div className='flex items-center gap-1'>
          <BedIcon size={16} />
          <span>2 Bedrooms</span>
        </div>
        <div className='flex items-center gap-1'>
          <BathIcon size={16} />
          <span>2 Bathrooms</span>
        </div>
        <div className='flex items-center gap-1'>
          <HomeIcon size={16} />
          <span>85 sqm</span>
        </div>
      </div>

      {/* Price */}
      <div className='flex items-end mb-6 border-b border-gray-300 pb-4'>
        <p className='text-3xl font-bold text-gray-800'>₦25,000</p>
        <p className='text-lg text-gray-500 ml-2'>/Per Night</p>
      </div>

      {/* About */}
      <div className='mb-6 border-b border-gray-300 pb-4'>
        <h4 className='text-lg font-semibold mb-2'>About this place</h4>
        <p className='text-sm text-gray-600 leading-relaxed'>
          Experience luxury living in the heart of Victoria Island. This beautifully furnished
          2-bedroom apartment offers stunning city views, modern amenities, and is walking distance
          to major business districts, restaurants, and shopping centers. Perfect for business
          travelers and tourists alike.
        </p>
      </div>

      {/* Amenities */}
      <div className='mb-6 border-b border-gray-300 pb-6'>
        <h4 className='text-lg font-semibold mb-4'>Amenities</h4>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Amenity Item */}
          <div className='p-4 border rounded-xl'>
            <span className="material-icons-outlined text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 mb-1">
              wifi
            </span>
            <p className='text-sm text-gray-700'>Wi-Fi</p>
          </div>

          <div className='p-4 border rounded-xl'>
            <span className="material-icons-outlined text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 mb-1">
              local_parking
            </span>
            <p className='text-sm text-gray-700'>Free Parking</p>
          </div>

          <div className='p-4 border rounded-xl'>
            <span className="material-icons-outlined text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 mb-1">
              kitchen
            </span>
            <p className='text-sm text-gray-700'>Kitchen</p>
          </div>

          <div className='p-4 border rounded-xl'>
            <span className="material-icons-outlined text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 mb-1">
              tv
            </span>
            <p className='text-sm text-gray-700'>TV</p>
          </div>

          <div className='p-4 border rounded-xl'>
            <span className="material-icons-outlined text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 mb-1">
              coffee
            </span>
            <p className='text-sm text-gray-700'>Coffee Maker</p>
          </div>

          <div className='p-4 border rounded-xl'>
            <span className="material-icons-outlined text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 mb-1">
              pool
            </span>
            <p className='text-sm text-gray-700'>Swimming Pool</p>
          </div>
         

        </div>
      </div>

      {/* Location Map */}
      <div className='rounded-xl overflow-hidden'>
        <img src="src/assets/location.jpg" alt="map" className='w-full h-56 object-cover rounded-xl' />
      </div>
       
    </div>
  )
}

export default PropertyDetails
