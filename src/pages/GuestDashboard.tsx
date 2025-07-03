
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Home, 
  Search, 
  Calendar, 
  MapPin, 
  Star, 
  Heart, 
  User, 
  Bell,
  Settings,
  LogOut
} from "lucide-react";

const GuestDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const recentBookings = [
    {
      id: 1,
      property: "Cozy Downtown Apartment",
      location: "New York, NY",
      checkIn: "Dec 15, 2024",
      checkOut: "Dec 18, 2024",
      status: "confirmed",
      rating: 4.8,
      image: "🏢"
    },
    {
      id: 2,
      property: "Beach House Retreat",
      location: "Miami, FL", 
      checkIn: "Nov 22, 2024",
      checkOut: "Nov 25, 2024",
      status: "completed",
      rating: 4.9,
      image: "🏖️"
    }
  ];

  const savedProperties = [
    {
      id: 1,
      name: "Modern Loft in SoHo",
      location: "New York, NY",
      price: "$200/night",
      rating: 4.7,
      image: "🏙️"
    },
    {
      id: 2,
      name: "Mountain Cabin Getaway",
      location: "Aspen, CO",
      price: "$150/night", 
      rating: 4.9,
      image: "🏔️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">RentItNowNow</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Ready for your next adventure?</p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Where do you want to go?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="h-12">
                  <Calendar className="h-5 w-5 mr-2" />
                  Dates
                </Button>
                <Button className="h-12 bg-blue-600 hover:bg-blue-700">
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Bookings */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Bookings</h2>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <Card key={booking.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl">{booking.image}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-900">
                              {booking.property}
                            </h3>
                            <p className="text-gray-600 flex items-center mt-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              {booking.location}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                              {booking.checkIn} - {booking.checkOut}
                            </p>
                            <div className="flex items-center mt-2">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600 ml-1">{booking.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant={booking.status === "confirmed" ? "default" : "secondary"}
                          className={booking.status === "confirmed" ? "bg-green-100 text-green-800" : ""}
                        >
                          {booking.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Find Rentals</h3>
                    <p className="text-gray-600 text-sm">Discover amazing places to stay</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">My Trips</h3>
                    <p className="text-gray-600 text-sm">View all your bookings</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarFallback className="text-lg">JD</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-600">john@example.com</p>
                  <Badge className="mt-2 bg-green-100 text-green-800">Verified</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Saved Properties */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Saved Properties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {savedProperties.map((property) => (
                  <div key={property.id} className="flex items-start space-x-3">
                    <div className="text-2xl">{property.image}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{property.name}</h4>
                      <p className="text-xs text-gray-600">{property.location}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm font-semibold text-blue-600">{property.price}</span>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600 ml-1">{property.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestDashboard;
