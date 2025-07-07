import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Bed, Bath, Wifi, Car, Utensils, Tv, Coffee, Waves, Star } from 'lucide-react';

const PropertyPreview: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  if (!formData) {
    navigate('/add-property');
    return null;
  }

  const getAmenityIcon = (amenityId: string) => {
    const icons = {
      wifi: Wifi,
      parking: Car,
      kitchen: Utensils,
      tv: Tv,
      coffee: Coffee,
      pool: Waves
    };
    return icons[amenityId as keyof typeof icons] || Wifi;
  };

  const getAmenityLabel = (amenityId: string) => {
    const labels = {
      wifi: 'Wi-Fi',
      parking: 'Free Parking',
      kitchen: 'Kitchen',
      tv: 'TV',
      coffee: 'Coffee Maker',
      pool: 'Swimming Pool'
    };
    return labels[amenityId as keyof typeof labels] || amenityId;
  };

  const handleSubmitForReview = () => {
    // Navigate to congratulations page
    navigate('/owner/congratulations');
  };

  const handleSaveForLater = () => {
    console.log('Saving property for later:', formData);
    alert('Property saved for later!');
    navigate('/');
  };

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="min-h-screen py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center mb-6">
            <Link 
              to="/owner/add-property"
              className="mr-3 p-1 rounded text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="text-gray-600 text-sm">Back</span>
            <span className="mx-3 text-gray-400">|</span>
            <h1 className="text-lg font-semibold text-gray-900">Preview</h1>
          </div>

          {/* Property Images */}
          <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
            {formData.propertyPhotos.length > 0 ? (
              <div className="grid grid-cols-4 gap-3">
                {formData.propertyPhotos.slice(0, 4).map((photo: File, index: number) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Property ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-3">
                <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Property 1" className="w-full h-32 object-cover rounded-lg" />
                <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Property 2" className="w-full h-32 object-cover rounded-lg" />
                <img src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Property 3" className="w-full h-32 object-cover rounded-lg" />
                <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Property 4" className="w-full h-32 object-cover rounded-lg" />
              </div>
            )}
          </div>

          {/* Featured Badge */}
          <div className="mb-4">
            <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-lg">
              Apartment
            </span>
          </div>

          {/* Property Title and Location */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{formData.title}</h2>
            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{formData.cityTown}, {formData.state}, Nigeria</span>
            </div>
            
            {/* Property Details Row */}
            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{formData.maximumGuest} Guests</span>
              </div>
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span>{formData.numberOfBedrooms} Bedroom{formData.numberOfBedrooms > 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span>{formData.numberOfBathrooms} Bathroom{formData.numberOfBathrooms > 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center">
                <span>Free Parking</span>
              </div>
              <div className="flex items-center">
                <span>Cancellation Offer</span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">NGN{formData.price}</span>
              <span className="text-gray-600 ml-1">/ Night</span>
            </div>
          </div>

          {/* About this place */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">About this place</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {formData.description}
            </p>
          </div>

          {/* Amenities */}
          {formData.selectedAmenities.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Amenities</h3>
              <div className="grid grid-cols-3 gap-4">
                {formData.selectedAmenities.map((amenityId: string) => {
                  const Icon = getAmenityIcon(amenityId);
                  return (
                    <div key={amenityId} className="flex items-center p-3 border border-gray-200 rounded-lg">
                      <Icon className="w-5 h-5 text-gray-600 mr-3" />
                      <span className="text-sm text-gray-900">{getAmenityLabel(amenityId)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Location */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 text-sm">Map showing {formData.cityTown}, {formData.state}</p>
                <p className="text-xs text-gray-500 mt-1">{formData.detailedAddress}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleSaveForLater}
              className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Save for later
            </button>
            <button
              onClick={handleSubmitForReview}
              className="flex-1 py-3 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-medium"
            >
              Submit for review
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertyPreview;