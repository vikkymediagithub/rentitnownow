import React from 'react';
import Card from './Card';

const FavouriteProperty = () => {
  const properties = [
    {
      id: "1",
      image: 'src/assets/room-1.png',
      title: 'Luxury Apartment in Victoria Island',
      location: 'Victoria Island, Lagos',
      tags: ['Wifi', 'Pool', 'Gym'],
      price: 'NGN35,000/Night',
    },
    {
      id: "2",
      image: 'src/assets/room-1.png',
      title: 'Luxury Apartment in Victoria IslandS',
      location: 'Victoria Island, Lagos',
      tags: ['Wifi', 'Pool', 'Gym'],
      price: 'NGN35,000/Night',
    },
    // Add more as needed
  ];

  return (
    <div className="bg-white mx-auto rounded-md px-7 py-6 md:mr-20">
      <p className="font-semibold text-lg sm:text-xl mb-4">Favourite Property</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteProperty;
