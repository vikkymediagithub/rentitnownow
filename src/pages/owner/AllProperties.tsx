import React from 'react';
import { ArrowLeft, Plus, ExternalLink, Edit3, Star, MapPin, Search, Filter } from 'lucide-react';

interface AllPropertiesProps {
  onNavigate: (page: string) => void;
}

const AllProperties: React.FC<AllPropertiesProps> = ({ onNavigate }) => {
  const properties = [
    {
      id: 1,
      title: "Luxury Apartment In Victoria Island",
      location: "Lagos • New York",
      price: "NGN50,000",
      rating: 4.5,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      active: true
    },
    {
      id: 2,
      title: "Modern Duplex In Wuse 2",
      location: "Abuja • New York",
      price: "NGN100,000",
      rating: 4.5,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      active: true
    },
    {
      id: 3,
      title: "Cozy Studio in Ikeja",
      location: "Lagos • Nigeria",
      price: "NGN25,000",
      rating: 4.2,
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      active: true
    },
    {
      id: 4,
      title: "Executive Suite in Maitama",
      location: "Abuja • Nigeria",
      price: "NGN150,000",
      rating: 4.8,
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      active: false
    }
  ];

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="mr-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-3xl font-bold text-gray-900">All Properties</h1>
            </div>
            <button 
              onClick={() => onNavigate('add-property')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg text-base font-medium flex items-center shadow-lg transition-all duration-200"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Property
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="Search properties..."
                  type="search"
                />
              </div>
            </div>
            <button className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img className="h-56 w-full object-cover" src={property.image} alt={property.title} />
                  <div className="absolute top-4 right-4">
                    <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${property.active ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  </div>
                  {property.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">Featured</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{property.title}</h4>
                  </div>
                  <div className="flex items-center text-base text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(property.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="ml-3 text-base text-gray-700 font-medium">{property.rating}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{property.price}</p>
                      <p className="text-base text-gray-600">per night</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => onNavigate('view-property')}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg text-base font-medium transition-colors duration-200 flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View
                    </button>
                    <button 
                      onClick={() => onNavigate('edit-property')}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 flex items-center justify-center shadow-lg"
                    >
                      <Edit3 className="w-5 h-5 mr-2" />
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllProperties;