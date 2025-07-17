import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Users, Bed, Bath, Shield, Award, TrendingUp, CheckCircle, Menu, X, ChevronDown, Filter, ArrowUp } from 'lucide-react';
import propertyImage from '../assets/pics.png';
import currencyImage from '../assets/currency.png';
import guestImage from '../assets/guest.png';
import businessImage from '../assets/business.png';
import 'animate.css';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showAllLocations, setShowAllLocations] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const locations = [
    'Lagos, Nigeria',
    'Ibadan, Nigeria', 
    'Osogbo, Nigeria',
    'Abuja, Nigeria',
    'Port Harcourt, Nigeria',
    'Olorin, Kware state Nigeria',
    'Offa, Kware state Nigeria',
    'Kano, Nigeria',
    'Kaduna, Nigeria'
  ];

  // Filter locations based on user input
  const filteredLocations = showAllLocations
  ? locations
  : locations.filter((location) =>
      location.toLowerCase().includes(selectedLocation.toLowerCase())
    );

  // Handle location selection
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsLocationDropdownOpen(false);
    setShowAllLocations(false);
  };

  // Handle "All" filter button
  const handleAllFilter = () => {
    setShowAllLocations(true);
    setSelectedLocation('');
    setIsLocationDropdownOpen(true);
  };

  // Feature properties data
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Apartment In Victoria Island",
      location: "Victoria Island, Lagos",
      price: "NGN50,000",
      rating: 4.5,
      image: propertyImage,
      guests: "Wifi",
      bedrooms: "Pool",
      bathrooms: "Gym"
    },
    {
      id: 2,
      title: "Modern Duplex In Wuse 2",
      location: "Wuse 2, Abuja",
      price: "NGN75,000",
      rating: 4.8,
      image: propertyImage,
      guests: "Wifi",
      bedrooms: "Pool",
      bathrooms: "Gym"
    },
    {
      id: 3,
      title: "Cozy Studio in Ikeja",
      location: "Ikeja, Lagos",
      price: "NGN25,000",
      rating: 4.2,
      image: propertyImage,
      guests: "Wifi",
      bedrooms: "Pool",
      bathrooms: "Gym"
    },
    {
      id: 4,
      title: "Executive Suite in Maitama",
      location: "Maitama, Abuja",
      price: "NGN120,000",
      rating: 4.9,
      image: propertyImage,
      guests: "Wifi",
      bedrooms: "Pool",
      bathrooms: "Gym"
    },
    {
      id: 5,
      title: "Beachfront Villa in Lekki",
      location: "Lekki, Lagos",
      price: "NGN200,000",
      rating: 4.7,
      image: propertyImage,
       guests: "Wifi",
      bedrooms: "Pool",
      bathrooms: "Gym"
    },
    {
      id: 6,
      title: "Penthouse in Ikoyi",
      location: "Ikoyi, Lagos",
      price: "NGN300,000",
      rating: 4.6,
      image: propertyImage,
       guests: "Wifi",
      bedrooms: "Pool",
      bathrooms: "Gym"
    },
    {
      id: 7,
      title: "Garden Apartment in Garki",
      location: "Garki, Abuja",
      price: "NGN45,000",
      rating: 4.3,
      image: propertyImage,
       guests: "Wifi",
      bedrooms: "Pool",
      bathrooms: "Gym"
    },
    {
      id: 8,
      title: "Luxury Condo in VI",
      location: "Victoria Island, Lagos",
      price: "NGN180,000",
      rating: 4.8,
      image: propertyImage,
       guests: "Wifi",
      bedrooms: "Pool",
      bathrooms: "Gym"
    }
  ];

    // Scroll-to-top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

   // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white rounded-md px-3 py-1 font-bold">
              R
            </div>
            <p className="font-semibold text-sm sm:text-base">Rentitnownow.com</p>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <button className="px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-white text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 font-bold border border-gray-200 hover:bg-gray-100 transition-colors">
                List Your Property
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-gradient-to-r from-red-500 to-blue-600 text-white font-bold transition-colors hover:opacity-90">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate__animated animate__fadeIn">
            <div className="flex flex-col space-y-4">
              <Link to="/login">
                <button className="px-4 py-2 rounded-lg bg-white text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 font-bold border border-gray-200 hover:bg-gray-100 transition-colors">
                  List Your Property
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-blue-600 text-white font-bold transition-colors hover:opacity-90">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>


      {/* Hero Section */}
       <section className="relative bg-gradient-to-r from-red-500 to-purple-600 text-white py-20 mt-16 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
              Find Your Perfect Stay in Nigeria
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-12 text-red-100">
              Discover amazing properties for short-term rentals across Lagos, Abuja, and beyond
            </p>

            {/* Search Dropdown */}
            <div className="max-w-2xl mx-auto relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-4 sm:p-8">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="flex-1 relative">
                      <div className="relative">
                        <input
                          type="text"
                          value={selectedLocation}
                          onChange={(e) => {
                            setSelectedLocation(e.target.value);
                            setIsLocationDropdownOpen(true);
                            setShowAllLocations(false);
                          }}
                          onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                          placeholder="Where?"
                          className="w-full pl-4 pr-20 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 text-sm sm:text-lg transition-all duration-300"
                        />

                        {/* All button inside input */}
                        <button
                          onClick={handleAllFilter}
                          className={`absolute right-12 top-1/2 transform -translate-y-1/2 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border transition-colors flex items-center bg-gradient-to-r from-red-500 to-purple-600 text-white hover:opacity-90`}
                        >
                          <Filter className="w-3 h-3 mr-1" />
                          All
                        </button>

                        <ChevronDown
                          className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-300 ${
                            isLocationDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>

                    <button
                      className="px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-xl flex items-center hover:from-red-600 hover:to-purple-700 transition-all duration-300 shadow-lg text-sm sm:text-lg font-medium"
                    >
                      <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Search
                    </button>
                  </div>
                </div>

                {isLocationDropdownOpen && (
                  <div className="border-t border-gray-100 py-2 max-h-64 overflow-y-auto animate__animated animate__fadeIn">
                    {filteredLocations.length > 0 ? (
                      filteredLocations.map((location, index) => (
                        <button
                          key={index}
                          onClick={() => handleLocationSelect(location)}
                          className="w-full px-4 sm:px-8 py-3 sm:py-4 text-left hover:bg-gray-50 text-gray-700 text-sm sm:text-lg transition-colors duration-200 border-l-4 border-transparent hover:border-red-500"
                        >
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 inline mr-3 text-gray-400" />
                          {location}
                        </button>
                      ))
                    ) : (
                      <div className="px-4 sm:px-8 py-3 sm:py-4 text-gray-500 text-sm sm:text-lg">
                        No locations found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>



          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">25k+</div>
              <div className="text-gray-600">Happy Guests</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Handpicked accommodations for your perfect stay</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full animate__animated animate__fadeInUp"
          >
            <div className="relative">
              <img
                className="w-full h-48 sm:h-60 object-cover"
                src={property.image}
                alt={property.title}
              />
              <div className="absolute top-4 right-4"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {property.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm sm:text-base">{property.location}</span>
              </div>
              <div className="flex items-center justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
              <div className="flex items-center gap-1 bg-blue-100 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                <Users className="w-4 h-4" />
                <span>{property.guests}</span>
              </div>
              <div className="flex items-center gap-1 bg-blue-100 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                <Bed className="w-4 h-4" />
                <span>{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1 bg-blue-100 px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                <Bath className="w-4 h-4" />
                <span>{property.bathrooms}</span>
              </div>
            </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg sm:text-xl font-bold text-gray-900">
                    {property.price}
                  </span>
                  <span className="text-gray-900 text-sm sm:text-xl font-bold ml-1">/Night</span>
                </div>
                <button className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors hover:opacity-90">
                  View Details
                </button>
              </div>
            </div>
          </div>
          ))}
          </div>

          {/* <div className="mt-8 flex justify-center">
            <Link to="/properties">
              <button className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors hover:opacity-90">
                Show More Properties
              </button>
            </Link>
          </div> */}

        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Simple steps to find your perfect accommodation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Search & Discover</h3>
              <p className="text-sm sm:text-base text-gray-600">Browse through thousands of verified properties across Nigeria and find the perfect match for your needs.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Book & Pay</h3>
              <p className="text-sm sm:text-base text-gray-600">Secure your booking with our safe payment system and get instant confirmation from your host.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Stay & Enjoy</h3>
              <p className="text-sm sm:text-base text-gray-600">Check-in to your accommodation and enjoy a comfortable stay with 24/7 customer support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earn with Rentable */}
      <section className="py-20 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Earn with Rentable</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">List your property and start earning from day one. Join thousands of successful hosts across Nigeria.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={currencyImage} className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Earn More</h3>
              <p className="text-sm sm:text-base text-gray-600">Higher earnings compared to traditional rentals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={guestImage} className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Guests</h3>
              <p className="text-sm sm:text-base text-gray-600">Verified guests with reviews and ratings.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={businessImage} className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Grow Your Business</h3>
              <p className="text-sm sm:text-base text-gray-600">Analytics and tools to optimize your listings</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/add-property"
              className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-lg font-medium transition-colors inline-flex items-center hover:opacity-90"
            >
              Start Hosting Today →
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="ml-2 text-lg sm:text-xl font-bold">Rentitnownow.com</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Your trusted platform for short-term rentals across Nigeria.
              </p>
            </div>

            {/* For Guests */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-6">For Guests</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Search Properties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">How to book</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Guest Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Support</a></li>
              </ul>
            </div>

            {/* For Hosts */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-6">For Hosts</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">List Your Property</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Host Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Pricing Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Host Support</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm sm:text-base text-center">
              © 2024 rentitnownow.com. All rights reserved.
            </p>
          </div>
        </div>
        </div>
      </footer>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-red-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 animate__animated animate__fadeIn"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}