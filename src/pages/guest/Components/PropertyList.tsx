import React from 'react'
import PropertyCard from './Card'

const properties = [
  {
    id: 1,
    image: 'src/assets/room-1.png',
    title: 'Luxury Apartment in Victoria Island',
    location: 'Victoria Island, Lagos',
    tags: ['Wifi', 'Pool', 'Gym'],
    price: 'NGN35,000/Night',
  },
  {
    id: 2,
    image: 'src/assets/room-1.png',
    title: 'Luxury Apartment in Victoria Island',
    location: 'Victoria Island, Lagos',
    tags: ['Wifi', 'Pool', 'Gym'],
    price: 'NGN35,000/Night',
  },
  // add more as needed
]

const PropertyList = () => {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mx-5">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}

export default PropertyList
