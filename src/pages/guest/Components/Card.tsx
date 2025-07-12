import React from 'react'

type Property = {
  id: number
  image: string
  title: string
  location: string
  tags: string[]
  price: string
}

type Props = {
  property: Property
}

const Card: React.FC<Props> = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-xs">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      <h3 className="text-lg font-semibold">{property.title}</h3>
      <p className="text-sm text-gray-500">{property.location}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 my-2">
        {property.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Price + Button */}
      <div className="flex justify-between items-center mt-4">
        <p className="font-bold text-gray-800">{property.price}</p>
        <button className="text-white text-sm bg-gradient-to-r from-red-500 to-blue-600 px-4 py-2 rounded-md">
          View Details
        </button>
      </div>
    </div>
  )
}

export default Card
