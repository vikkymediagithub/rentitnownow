import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Users, Bed, Bath, Wifi, Car, Shield, Award, TrendingUp, CheckCircle, Menu, X } from 'lucide-react';
import propertyImage from '../assets/pics.png'

const Landing: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Apartment In Victoria Island",
      location: "Victoria Island, Lagos",
      price: "NGN50,000",
      rating: 4.5,
      image: propertyImage,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2
    },
    {
      id: 2,
      title: "Modern Duplex In Wuse 2",
      location: "Wuse 2, Abuja",
      price: "NGN75,000",
      rating: 4.8,
      image: propertyImage,
      guests: 6,
      bedrooms: 3,
      bathrooms: 3
    },
    {
      id: 3,
      title: "Cozy Studio in Ikeja",
      location: "Ikeja, Lagos",
      price: "NGN25,000",
      rating: 4.2,
      image: propertyImage,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1
    },
    {
      id: 4,
      title: "Executive Suite in Maitama",
      location: "Maitama, Abuja",
      price: "NGN120,000",
      rating: 4.9,
      image: propertyImage,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2
    },
    {
      id: 5,
      title: "Beachfront Villa in Lekki",
      location: "Lekki, Lagos",
      price: "NGN200,000",
      rating: 4.7,
      image: propertyImage,
      guests: 8,
      bedrooms: 4,
      bathrooms: 4
    },
    {
      id: 6,
      title: "Penthouse in Ikoyi",
      location: "Ikoyi, Lagos",
      price: "NGN300,000",
      rating: 4.6,
      image: propertyImage,
      guests: 6,
      bedrooms: 3,
      bathrooms: 3
    },
    {
      id: 7,
      title: "Garden Apartment in Garki",
      location: "Garki, Abuja",
      price: "NGN45,000",
      rating: 4.3,
      image: propertyImage,
      guests: 3,
      bedrooms: 2,
      bathrooms: 1
    },
    {
      id: 8,
      title: "Luxury Condo in VI",
      location: "Victoria Island, Lagos",
      price: "NGN180,000",
      rating: 4.8,
      image: propertyImage,
      guests: 5,
      bedrooms: 3,
      bathrooms: 2
    }
  ];

  return (
    <div className="min-h-screen bg-white">
         <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white rounded-md px-3 py-1 font-bold">
              R
            </div>
            <p className="font-semibold text-sm">Rentitnownow.com</p>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <button className="px-6 py-2 rounded-lg bg-white text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 font-bold border border-gray-200 hover:bg-gray-100 transition-colors">
                List Your Property
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-blue-600 text-white font-bold transition-colors hover:opacity-90">
                Sign In
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
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/login">
                <button className="px-6 py-2 rounded-lg bg-white text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 font-bold border border-gray-200 hover:bg-gray-100 transition-colors">
                  List Your Property
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-blue-600 text-white font-bold transition-colors hover:opacity-90">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Stay in Nigeria
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-red-100">
              Discover amazing places to stay from local hosts in cities across Nigeria
            </p>

            {/* Search Form */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2  text-gray-900"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-900"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2  text-gray-900"
                  />
                </div>
                <div className="md:col-span-1 flex items-end">
                  <button className="w-full bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">25k+</div>
              <div className="text-gray-600">Happy Guests</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600">Handpicked accommodations for your perfect stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    className="w-full h-48 object-cover" 
                    src={property.image} 
                    alt={property.title} 
                  />
                  <div className="absolute top-4 right-4">
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{property.guests}</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-900">{property.price}</span>
                      <span className="text-gray-600 text-sm ml-1">/ night</span>
                    </div>
                    <button className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to find your perfect accommodation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Search & Discover</h3>
              <p className="text-gray-600">Browse through thousands of verified properties across Nigeria and find the perfect match for your needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book & Pay</h3>
              <p className="text-gray-600">Secure your booking with our safe payment system and get instant confirmation from your host.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stay & Enjoy</h3>
              <p className="text-gray-600">Check-in to your accommodation and enjoy a comfortable stay with 24/7 customer support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earn with RealEstate */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Earn with RealEstate</h2>
            <p className="text-xl text-gray-600">Turn your property into a profitable investment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">List Your Property</h3>
              <p className="text-gray-600">Create a listing for your property in minutes with our easy-to-use platform and professional photography tips.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Attract Guests</h3>
              <p className="text-gray-600">Reach millions of travelers looking for unique places to stay and grow your business with our marketing tools.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">₦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Earning</h3>
              <p className="text-gray-600">Get paid securely and on time. Set your own prices and availability to maximize your earnings potential.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/add-property"
              className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center"
            >
              Start Hosting Today →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="ml-2 text-xl font-bold">Rentitnownow.com</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted platform for short-term rentals across Nigeria.
              </p>
            </div>

            {/* For Guests */}
            <div>
              <h3 className="text-lg font-semibold mb-6">For Guests</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Search Properties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How to book</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guest Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            {/* For Hosts */}
            <div>
              <h3 className="text-lg font-semibold mb-6">For Hosts</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">List Your Property</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Host Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Host Support</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm text-center">
              © 2024 rentitnownow.com. All rights reserved.
            </p>
          </div>
        </div>

        </div>
      </footer>
    </div>
  );
};

export default Landing;