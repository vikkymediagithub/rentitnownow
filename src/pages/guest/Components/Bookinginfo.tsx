import { BathIcon, BedIcon, HomeIcon, MapPin, Users } from 'lucide-react'
import React from 'react'

export const Bookinginfo = () => {
  return (
    <div>
        <div className='w-96  bg-white rounded-xl  shadow-sm px-4 md:px-8 py-6 mt-6 '>
      {/* Tags */}
      <div className='flex flex-wrap gap-2 mb-4'>
        <p className='px-3 py-1 rounded-xl text-orange-600 bg-orange-100 border text-sm font-medium'>Apartment</p>
        <p className='px-3 py-1 rounded-xl text-orange-600 bg-white border text-sm font-medium'>Short-let</p>
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
      </div>

    </div>
  )
}
