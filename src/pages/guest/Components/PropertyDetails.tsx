import React from 'react'
import { MapPin, Users, BathIcon, BedIcon, HomeIcon } from 'lucide-react'

const PropertyDetails = () => {
  return (
    <div className='w-full max-w-4xl  bg-white rounded-xl  shadow-sm px-4 md:px-8 py-6 mt-6 md:-mt-[500px]'>
      {/* Tags */}
      <div className='flex flex-wrap gap-2 mb-4'>
        <p className='px-3 py-1 rounded-xl text-orange-600 bg-orange-100 border text-sm font-medium'>Apartment</p>
        <p className='px-3 py-1 rounded-xl text-orange-600 bg-orange-100 border text-sm font-medium'>Short-let</p>
      </div>

      {/* Title */}
      <h2 className='text-xl md:text-2xl font-semibold mb-2'>Luxury Apartment in Victoria Island</h2>

      {/* Location */}
      <div className='flex items-center text-sm text-gray-600 mb-3 flex-wrap'>
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
      <div className='flex flex-wrap items-end mb-6 border-b border-gray-300 pb-4'>
        <p className='text-2xl md:text-3xl font-bold text-gray-800'>₦25,000</p>
        <p className='text-base md:text-lg text-gray-500 ml-2'>/Per Night</p>
      </div>

      {/* About */}
      <div className='mb-6 border-b border-gray-300 pb-4'>
        <h4 className='text-base md:text-lg font-semibold mb-2'>About this place</h4>
        <p className='text-sm text-gray-600 leading-relaxed'>
          Experience luxury living in the heart of Victoria Island. This beautifully furnished
          2-bedroom apartment offers stunning city views, modern amenities, and is walking distance
          to major business districts, restaurants, and shopping centers. Perfect for business
          travelers and tourists alike.
        </p>
      </div>

      {/* Amenities */}
      <div className='mb-6 border-b border-gray-300 pb-6'>
        <h4 className='text-base md:text-lg font-semibold mb-4'>Amenities</h4>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          {[
            { icon: 'wifi', label: 'Wi-Fi' },
            { icon: 'local_parking', label: 'Free Parking' },
            { icon: 'kitchen', label: 'Kitchen' },
            { icon: 'tv', label: 'TV' },
            { icon: 'coffee', label: 'Coffee Maker' },
            { icon: 'pool', label: 'Swimming Pool' },
          ].map((item, idx) => (
            <div key={idx} className='p-4 border rounded-xl'>
              <span className="material-icons-outlined text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 mb-1">
                {item.icon}
              </span>
              <p className='text-sm text-gray-700'>{item.label}</p>
            </div>
          ))}
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
