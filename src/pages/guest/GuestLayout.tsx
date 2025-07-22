import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import 'animate.css';

const GuestLayout = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // Define guest navigation links
  const navLinks = [
    { path: "/guest/guest-dashboard", label: "Dashboard" },
    { path: "/guest/properties", label: "Properties" },
    { path: "/guest/bookings", label: "Bookings" },
  ];

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">

      {/* Main content with sidebar and outlet */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-sm p-6 hidden md:block">
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 animate__animated animate__fadeIn ${
                  location.pathname === link.path
                    ? "bg-gradient-to-r from-red-500 to-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="w-full max-w-4xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuestLayout;