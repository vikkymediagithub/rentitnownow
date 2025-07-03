
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { 
//   Home, 
//   Plus, 
//   DollarSign, 
//   Calendar, 
//   Users, 
//   Star, 
//   TrendingUp,
//   Bell,
//   Settings,
//   LogOut,
//   Eye,
//   Edit,
//   MessageCircle
// } from "lucide-react";

// const OwnerDashboard = () => {
//   const [selectedPeriod, setSelectedPeriod] = useState("month");

//   const properties = [
//     {
//       id: 1,
//       name: "Cozy Downtown Apartment",
//       location: "New York, NY", 
//       price: "$180/night",
//       rating: 4.8,
//       reviews: 24,
//       bookings: 8,
//       revenue: "$2,160",
//       status: "active",
//       image: "🏢"
//     },
//     {
//       id: 2,
//       name: "Beach House Retreat",
//       location: "Miami, FL",
//       price: "$250/night", 
//       rating: 4.9,
//       reviews: 18,
//       bookings: 6,
//       revenue: "$1,500",
//       status: "active",
//       image: "🏖️"
//     }
//   ];

//   const recentBookings = [
//     {
//       id: 1,
//       property: "Cozy Downtown Apartment",
//       guest: "Sarah Johnson",
//       checkIn: "Dec 20, 2024",
//       checkOut: "Dec 23, 2024",
//       total: "$540",
//       status: "confirmed"
//     },
//     {
//       id: 2,
//       property: "Beach House Retreat", 
//       guest: "Mike Chen",
//       checkIn: "Dec 15, 2024",
//       checkOut: "Dec 18, 2024",
//       total: "$750",
//       status: "completed"
//     }
//   ];

//   const stats = {
//     totalRevenue: "$3,660",
//     totalBookings: 14,
//     occupancyRate: "68%",
//     avgRating: 4.85
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white border-b sticky top-0 z-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <Link to="/" className="flex items-center space-x-2">
//               <Home className="h-8 w-8 text-blue-600" />
//               <span className="text-2xl font-bold text-gray-900">RentItNowNow</span>
//             </Link>
            
//             <div className="flex items-center space-x-4">
//               <Button className="bg-blue-600 hover:bg-blue-700">
//                 <Plus className="h-4 w-4 mr-2" />
//                 Add Property
//               </Button>
//               <Button variant="ghost" size="sm">
//                 <Bell className="h-5 w-5" />
//               </Button>
//               <Button variant="ghost" size="sm">
//                 <Settings className="h-5 w-5" />
//               </Button>
//               <Avatar>
//                 <AvatarFallback>MC</AvatarFallback>
//               </Avatar>
//               <Link to="/">
//                 <Button variant="ghost" size="sm">
//                   <LogOut className="h-5 w-5" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Welcome Section */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Mary!</h1>
//           <p className="text-gray-600">Here's how your properties are performing</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <Card>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
//                   <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue}</p>
//                   <p className="text-sm text-green-600 flex items-center mt-1">
//                     <TrendingUp className="h-4 w-4 mr-1" />
//                     +12% from last month
//                   </p>
//                 </div>
//                 <div className="bg-green-100 p-3 rounded-full">
//                   <DollarSign className="h-6 w-6 text-green-600" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-600 mb-1">Total Bookings</p>
//                   <p className="text-2xl font-bold text-gray-900">{stats.totalBookings}</p>
//                   <p className="text-sm text-blue-600 flex items-center mt-1">
//                     <TrendingUp className="h-4 w-4 mr-1" />
//                     +8% from last month
//                   </p>
//                 </div>
//                 <div className="bg-blue-100 p-3 rounded-full">
//                   <Calendar className="h-6 w-6 text-blue-600" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-600 mb-1">Occupancy Rate</p>
//                   <p className="text-2xl font-bold text-gray-900">{stats.occupancyRate}</p>
//                   <p className="text-sm text-green-600 flex items-center mt-1">
//                     <TrendingUp className="h-4 w-4 mr-1" />
//                     +5% from last month
//                   </p>
//                 </div>
//                 <div className="bg-purple-100 p-3 rounded-full">
//                   <Users className="h-6 w-6 text-purple-600" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-600 mb-1">Avg Rating</p>
//                   <p className="text-2xl font-bold text-gray-900">{stats.avgRating}</p>
//                   <p className="text-sm text-yellow-600 flex items-center mt-1">
//                     <Star className="h-4 w-4 mr-1 fill-current" />
//                     Excellent rating
//                   </p>
//                 </div>
//                 <div className="bg-yellow-100 p-3 rounded-full">
//                   <Star className="h-6 w-6 text-yellow-600" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Properties */}
//             <div>
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Your Properties</h2>
//                 <Button className="bg-blue-600 hover:bg-blue-700">
//                   <Plus className="h-4 w-4 mr-2" />
//                   Add New Property
//                 </Button>
//               </div>
              
//               <div className="space-y-4">
//                 {properties.map((property) => (
//                   <Card key={property.id} className="hover:shadow-md transition-shadow">
//                     <CardContent className="p-6">
//                       <div className="flex items-start justify-between">
//                         <div className="flex items-start space-x-4">
//                           <div className="text-4xl">{property.image}</div>
//                           <div className="flex-1">
//                             <div className="flex items-center justify-between mb-2">
//                               <h3 className="font-semibold text-lg text-gray-900">
//                                 {property.name}
//                               </h3>
//                               <Badge className="bg-green-100 text-green-800">
//                                 {property.status}
//                               </Badge>
//                             </div>
//                             <p className="text-gray-600 mb-2">{property.location}</p>
//                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
//                               <div>
//                                 <p className="text-gray-500">Price</p>
//                                 <p className="font-semibold">{property.price}</p>
//                               </div>
//                               <div>
//                                 <p className="text-gray-500">Rating</p>
//                                 <div className="flex items-center">
//                                   <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
//                                   <span className="font-semibold">{property.rating}</span>
//                                 </div>
//                               </div>
//                               <div>
//                                 <p className="text-gray-500">Bookings</p>
//                                 <p className="font-semibold">{property.bookings}</p>
//                               </div>
//                               <div>
//                                 <p className="text-gray-500">Revenue</p>
//                                 <p className="font-semibold text-green-600">{property.revenue}</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex gap-2 mt-4">
//                         <Button size="sm" variant="outline">
//                           <Eye className="h-4 w-4 mr-1" />
//                           View
//                         </Button>
//                         <Button size="sm" variant="outline">
//                           <Edit className="h-4 w-4 mr-1" />
//                           Edit
//                         </Button>
//                         <Button size="sm" variant="outline">
//                           <MessageCircle className="h-4 w-4 mr-1" />
//                           Messages
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Recent Bookings */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Recent Bookings</CardTitle>
//                 <CardDescription>Latest reservations</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 {recentBookings.map((booking) => (
//                   <div key={booking.id} className="border-b pb-4 last:border-b-0 last:pb-0">
//                     <div className="flex items-center justify-between mb-2">
//                       <h4 className="font-medium text-sm">{booking.guest}</h4>
//                       <Badge
//                         variant={booking.status === "confirmed" ? "default" : "secondary"}
//                         className={booking.status === "confirmed" ? "bg-green-100 text-green-800" : ""}
//                       >
//                         {booking.status}
//                       </Badge>
//                     </div>
//                     <p className="text-xs text-gray-600 mb-1">{booking.property}</p>
//                     <p className="text-xs text-gray-500">
//                       {booking.checkIn} - {booking.checkOut}
//                     </p>
//                     <p className="text-sm font-semibold text-green-600 mt-1">
//                       {booking.total}
//                     </p>
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>

//             {/* Quick Actions */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Quick Actions</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <Button variant="outline" className="w-full justify-start">
//                   <Plus className="h-4 w-4 mr-2" />
//                   Add New Property
//                 </Button>
//                 <Button variant="outline" className="w-full justify-start">
//                   <Calendar className="h-4 w-4 mr-2" />
//                   Manage Calendar
//                 </Button>
//                 <Button variant="outline" className="w-full justify-start">
//                   <MessageCircle className="h-4 w-4 mr-2" />
//                   Guest Messages
//                 </Button>
//                 <Button variant="outline" className="w-full justify-start">
//                   <TrendingUp className="h-4 w-4 mr-2" />
//                   View Analytics
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OwnerDashboard;
