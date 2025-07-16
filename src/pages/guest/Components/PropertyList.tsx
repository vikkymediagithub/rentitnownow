// src/components/PropertyList.tsx
import React from 'react';
import PropertyCard from './Card';
import {useProperties} from '../Hooks/GetProperties'

const PropertyList = () => {
  const { Properties, Loading, Error } = useProperties();

  if (Loading) return <p className="text-center py-4">Loading properties...</p>;
  if (Error) return <p className="text-center text-red-500 py-4">{Error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mx-5">
      {Properties?.map((property) => (
        <PropertyCard
          key={property.id}
          property={{
            id: property.id,
            image: property.image || 'src/assets/room-1.png', // fallback image
            title: property.title,
            location: property.location,
            tags: property.tags || ['Wifi', 'Pool'], // fallback tags
            price:
              typeof property.price === 'number'
                ? `NGN${property.price}/Night`
                : property.price,
          }}
        />
      ))}
    </div>
  );
};

export default PropertyList;
