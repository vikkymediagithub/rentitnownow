import React from 'react';
import { ArrowLeft, Star, MapPin, Wifi, Car, Utensils, Tv, Wind, Waves } from 'lucide-react';

interface ViewPropertyProps {
  onNavigate: (page: string) => void;
}

const ViewProperty: React.FC<ViewPropertyProps> = ({ onNavigate }) => {
  const property = {
    title: "Luxury Apartment In Victoria Island",
    location: "Lagos • New York",
    price: "NGN50,000",
    rating: 4.5,
    reviews: 128,
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Experience luxury living in this stunning apartment located in the heart of Victoria Island. This modern property offers breathtaking views of the Lagos lagoon and features contemporary amenities perfect for both business and leisure travelers.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    amenities: [
      { name: "WiFi", icon: Wifi },
      { name: "Parking", icon: Car },
      { name: "Kitchen", icon: Utensils },
      { name: "TV", icon: Tv },
      { name: "AC", icon: Wind },
      { name: "Pool", icon: Waves }
    ]
  };

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="mr-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(property.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-base text-gray-700 font-medium">{property.rating}</span>
                  <span className="ml-1 text-base text-gray-500">({property.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-base text-gray-600">
                  <MapPin className="w-5 h-5 mr-1" />
                  <span>{property.location}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">{property.price}</p>
              <p className="text-base text-gray-600">per night</p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
            <div className="lg:col-span-2">
              <img 
                className="w-full h-96 object-cover rounded-xl" 
                src={property.images[0]} 
                alt="Main property image" 
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {property.images.slice(1, 3).map((image, index) => (
                <img 
                  key={index}
                  className="w-full h-44 lg:h-44 object-cover rounded-xl" 
                  src={image} 
                  alt={`Property image ${index + 2}`} 
                />
              ))}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <img 
                className="w-full h-44 lg:h-44 object-cover rounded-xl" 
                src={property.images[3]} 
                alt="Property image 4" 
              />
              <div className="w-full h-44 lg:h-44 bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-lg font-medium text-gray-600">+5 more photos</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
                <p className="text-base text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Property Features */}
              <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Features</h2>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-blue-600">{property.bedrooms}</span>
                    </div>
                    <p className="text-base font-medium text-gray-900">Bedrooms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-blue-600">{property.bathrooms}</span>
                    </div>
                    <p className="text-base font-medium text-gray-900">Bathrooms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-blue-600">{property.area}</span>
                    </div>
                    <p className="text-base font-medium text-gray-900">sq ft</p>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="text-base font-medium text-gray-900">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-8 sticky top-8">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-gray-900">{property.price}</p>
                  <p className="text-base text-gray-600">per night</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">Check-in</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">Check-out</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">Guests</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                    </select>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-lg text-base font-medium transition-all duration-200 shadow-lg mb-4">
                  Reserve Now
                </button>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base text-gray-600">NGN50,000 x 3 nights</span>
                    <span className="text-base text-gray-900">NGN150,000</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base text-gray-600">Service fee</span>
                    <span className="text-base text-gray-900">NGN7,500</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">NGN157,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewProperty;