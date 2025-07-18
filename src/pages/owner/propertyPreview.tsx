import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Bed, Bath, Wifi, Car, Utensils, Tv, Coffee, Waves } from 'lucide-react';
import anime from 'animejs';

const PropertyPreview: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  useEffect(() => {
    // Animate header
    anime({
      targets: '.header',
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 600,
      easing: 'easeOutQuad',
    });

    // Animate images
    anime({
      targets: '.property-image',
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 800,
      easing: 'easeOutQuad',
      delay: anime.stagger(100),
    });

    // Animate sections
    anime({
      targets: '.section',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeOutQuad',
      delay: anime.stagger(200, { start: 200 }),
    });

    // Animate buttons
    anime({
      targets: '.action-button',
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 500,
      easing: 'easeOutQuad',
      delay: anime.stagger(100, { start: 400 }),
    });
  }, []);

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
      pool: Waves,
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
      pool: 'Swimming Pool',
    };
    return labels[amenityId as keyof typeof labels] || amenityId;
  };

  const handleSubmitForReview = () => {
    anime({
      targets: '.submit-button',
      scale: [1, 0.95, 1],
      duration: 200,
      easing: 'easeInOutQuad',
      complete: () => {
        navigate('/owner/congratulations');
      },
    });
  };

  const handleSaveForLater = () => {
    anime({
      targets: '.save-button',
      scale: [1, 0.95, 1],
      duration: 200,
      easing: 'easeInOutQuad',
      complete: () => {
        console.log('Saving property for later:', formData);
        alert('Property saved for later!');
        navigate('/');
      },
    });
  };

  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none">
      <div className="min-h-screen py-4 sm:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 md:p-12">
          {/* Header */}
          <div className="header flex items-center mb-4 sm:mb-6">
            <Link
              to="/owner/add-property"
              className="mr-3 p-1 rounded text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <span className="text-gray-600 text-sm sm:text-base">Back</span>
            <span className="mx-3 text-gray-400">|</span>
            <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">Preview</h1>
          </div>

          {/* Property Images */}
          <div className="section mb-4 sm:mb-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
            {formData.propertyPhotos.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {formData.propertyPhotos.slice(0, 4).map((photo: File, index: number) => (
                  <div key={index} className="relative property-image">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Property ${index + 1}`}
                      className="w-full h-24 sm:h-32 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Property 1"
                  className="property-image w-full h-24 sm:h-32 object-cover rounded-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Property 2"
                  className="property-image w-full h-24 sm:h-32 object-cover rounded-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Property 3"
                  className="property-image w-full h-24 sm:h-32 object-cover rounded-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Property 4"
                  className="property-image w-full h-24 sm:h-32 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Featured Badge */}
          <div className="section mb-4">
            <span className="inline-block bg-orange-100 text-orange-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-lg">
              Apartment
            </span>
          </div>

          {/* Property Title and Location */}
          <div className="section mb-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">{formData.title}</h2>
            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              <span className="text-sm sm:text-base">{formData.cityTown}, {formData.state}, Nigeria</span>
            </div>

            {/* Property Details Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-600 mb-4">
              <div className="flex items-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                <span>{formData.maximumGuest} Guest{formData.maximumGuest > 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center">
                <Bed className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                <span>{formData.numberOfBedrooms} Bedroom{formData.numberOfBedrooms > 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
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
          <div className="section mb-6">
            <div className="flex items-baseline">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">NGN{formData.price}</span>
              <span className="text-sm sm:text-base text-gray-600 ml-1">/ Night</span>
            </div>
          </div>

          {/* About this place */}
          <div className="section mb-8">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3">About this place</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{formData.description}</p>
          </div>

          {/* Amenities */}
          {formData.selectedAmenities.length > 0 && (
            <div className="section mb-8">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-4">Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {formData.selectedAmenities.map((amenityId: string) => {
                  const Icon = getAmenityIcon(amenityId);
                  return (
                    <div
                      key={amenityId}
                      className="flex items-center p-3 border border-gray-200 rounded-lg"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mr-3" />
                      <span className="text-sm sm:text-base text-gray-900">{getAmenityLabel(amenityId)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Location */}
          <div className="section mb-8">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-4">Location</h3>
            <div className="bg-gray-200 rounded-lg h-48 sm:h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm sm:text-base text-gray-600">{formData.cityTown}, {formData.state}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{formData.detailedAddress}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={handleSaveForLater}
              className="action-button save-button flex-1 py-2 sm:py-3 px-4 sm:px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base"
            >
              Save for later
            </button>
            <button
              onClick={handleSubmitForReview}
              className="action-button submit-button flex-1 py-2 sm:py-3 px-4 sm:px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-medium text-sm sm:text-base"
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