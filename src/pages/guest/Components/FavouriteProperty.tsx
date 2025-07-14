import React from 'react'
import PropertyList from './PropertyList'
import PropertyCard from './Card'

const FavouriteProperty = () => {
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

    
  return (
    <div className='bg-white w-[60rem] rounded-md ml-6'>
    <p className=' ml-10 font-semibold text-xl'>Favourite Property</p>
    <div className='  text-xl mx-10 mb-2 grid grid-cols-2 '>
        
     {properties.map((property) => (
             <PropertyCard key={property.id} property={property} />
           ))}

    </div>
    </div>
  )
}

export default FavouriteProperty