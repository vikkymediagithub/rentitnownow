import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import 'animate.css';

const GuestDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white rounded-md px-3 py-1 font-bold animate__animated animate__fadeIn">
                R
              </div>
              <p className="font-semibold text-base sm:text-base">Rentitnownow.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">
                Welcome, {user.email || "Guest"}
              </span>
              <Button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-blue-600 text-white font-medium rounded-md h-10 px-4 animate__animated animate__fadeIn"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl rounded-lg bg-white shadow-md p-8 animate__animated animate__fadeInUp">
          <h1 className="text-2xl font-bold text-gray-700 mb-6">Guest Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Browse Properties</h2>
              <p className="text-gray-600 mb-4">
                Explore available properties for rent in your area.
              </p>
              <Link to="/properties">
                <Button className="bg-gradient-to-r from-red-500 to-blue-600 text-white">
                  View Properties
                </Button>
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Your Bookings</h2>
              <p className="text-gray-600 mb-4">
                View and manage your rental bookings and inquiries.
              </p>
              <Link to="/bookings">
                <Button className="bg-gradient-to-r from-red-500 to-blue-600 text-white">
                  Manage Bookings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestDashboard;