
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Shield, Star, Users, MapPin, Calendar, Search, DollarSign, CheckCircle } from "lucide-react";

const Index = () => {
  const featuredProperties = [
    {
      id: 1,
      image: "/pics.png",
      title: "Luxury Apartment in Victoria Island",
      location: "Victoria Island, Lagos",
      price: "₦25,000",
      period: "night"
    },
    {
      id: 2,
      image: "/pics.png",
      title: "Modern Studio in Lekki",
      location: "Lekki, Lagos",
      price: "₦18,000",
      period: "night"
    },
    {
      id: 3,
      image: "/pics.png",
      title: "Cozy Apartment in Ikoyi",
      location: "Ikoyi, Lagos",
      price: "₦22,000",
      period: "night"
    },
    {
      id: 4,
      image: "/pics.png",
      title: "Spacious Home in Surulere",
      location: "Surulere, Lagos",
      price: "₦15,000",
      period: "night"
    },
    {
      id: 5,
      image: "/pics.png",
      title: "Executive Suite in Abuja",
      location: "Wuse, Abuja",
      price: "₦30,000",
      period: "night"
    },
    {
      id: 6,
      image: "/pics.png",
      title: "Family Home in Ikeja",
      location: "Ikeja, Lagos",
      price: "₦20,000",
      period: "night"
    },
    {
      id: 7,
      image: "/pics.png",
      title: "Penthouse in Banana Island",
      location: "Banana Island, Lagos",
      price: "₦45,000",
      period: "night"
    },
    {
      id: 8,
      image: "/pics.png",
      title: "Beachfront Villa in Ajah",
      location: "Ajah, Lagos",
      price: "₦35,000",
      period: "night"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <img src="/public/favicon.png" alt="" />
              </div>
              <span className="text-xl font-bold text-gray-900">Rentitnownow.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
               <div className="p-[2px] rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                 <Button variant="ghost" className="hidden sm:inline-flex px-6 py-2 rounded-lg bg-white text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 font-bold">List Your Property</Button>
               </div>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-red-500 to-blue-600 text-white">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Perfect Stay in Nigeria
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Discover amazing properties for short-term rentals across Lagos, Abuja, and beyond
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-2 flex items-center shadow-lg">
            <input
              type="text"
              placeholder="Where?"
              className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 border-none outline-none rounded-l-lg"
            />
            <Button className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-8 py-3 rounded-lg">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">Happy Guests</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-2">{property.title}</h3>
                  <p className="text-gray-600 text-sm mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-red-500">
                      {property.price}/{property.period}
                    </span>
                    <Button size="sm" className="bg-gradient-to-r from-red-500 to-blue-600 text-white">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 mb-12">Simple steps to find your perfect stay</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search & Discover</h3>
              <p className="text-gray-600">Browse through thousands of verified properties across Nigeria</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Safely</h3>
              <p className="text-gray-600">Secure your reservation with our trusted payment system</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Your Stay</h3>
              <p className="text-gray-600">Check in seamlessly and enjoy your perfect accommodation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earn with Rentable */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Earn with Rentable</h2>
          <p className="text-center text-gray-600 mb-12">Join thousands of property owners earning with RentItNowNow</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn More</h3>
              <p className="text-gray-600">Higher earnings compared to traditional long-term rentals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guests</h3>
              <p className="text-gray-600">All guests are verified and reviewed by our community</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow Your Business</h3>
              <p className="text-gray-600">Expand your reach and grow your rental business with us</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/login">
              <Button className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-8 py-3 text-lg">
                Start Hosting Today →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <img src="/public/favicon.png" alt="" />
                </div>
                <span className="text-xl font-bold">Rentitnownow.com</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for short-term rentals across Nigeria.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Guests</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Search Properties</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trust & Safety</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Hosts</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">List your Property</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Host Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Host Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Responsible Hosting</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RentItNowNow.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
