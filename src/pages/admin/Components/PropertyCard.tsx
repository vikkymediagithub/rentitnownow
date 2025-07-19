import { Edit, View } from 'lucide-react';
import React from 'react';

type Property = {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  update: string;
  status: 'Booked' | 'Available';
};

type Props = {
  property: Property;
};

const PropertyCard = ({ property }: Props) => {
  const statusStyle =
    property.status === 'Booked'
      ? 'bg-gray-300 text-black'
      : 'bg-blue-500 text-black';

  return (
    <div className="bg-white px-3 py-3 rounded-xl border shadow-sm space-y-3">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-xl"
      />
      <h4 className="text-lg font-semibold">{property.title}</h4>
      <p className="text-gray-600">{property.location}</p>
      <div className="flex justify-between items-center  border-b-2 b-slate-900 pb-2">
        <p className="font-bold text-xl text-green-700  ">{property.price}</p>
        <p className="text-sm text-blue-400">{property.update}</p>
      </div>

      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 text-sm rounded-full ${statusStyle}`}>
          {property.status}
        </span>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-4 py-2 border rounded-xl shadow-sm">
            <View size={16} />
            View
          </button>
          <button className="flex items-center gap-1 px-4 py-2 border rounded-xl shadow-sm">
            <Edit size={16} />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
