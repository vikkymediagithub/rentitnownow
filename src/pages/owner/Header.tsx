import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Menu, User } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onNavigate }) => {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setNotificationOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: 'New booking received', message: 'Abalayo O. booked Modern Duplex', time: '2 min ago', unread: true },
    { id: 2, title: 'Payment confirmed', message: 'NGN75,000 payment received', time: '1 hour ago', unread: true },
    { id: 3, title: 'Property review', message: 'New 5-star review for Luxury Apartment', time: '3 hours ago', unread: false },
    { id: 4, title: 'Booking cancelled', message: 'John Doe cancelled booking', time: '1 day ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="sticky top-0 z-30 flex h-20 bg-white shadow-sm border-b border-gray-200">
      <div className="flex-1 px-6 flex justify-between items-center">
        {/* Left - Menu and Greeting */}
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 mr-4"
            aria-label="Open sidebar menu"
          >
            <Menu className="h-7 w-7" />
          </button>
          <div className="hidden sm:flex items-center">
            <img
              className="h-12 w-12 rounded-full object-cover border-2 border-gray-200"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="User profile"
            />
            <div className="ml-4">
              <p className="text-lg font-bold text-gray-900">Hello Osas,</p>
              <p className="text-base text-gray-600">Good afternoon</p>
            </div>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 flex justify-center px-4 lg:ml-8 max-w-2xl">
          <div className="w-full lg:max-w-lg relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl bg-white placeholder-gray-500 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search properties, bookings, or anything..."
              type="search"
            />
          </div>
        </div>

        {/* Right - Icons */}
        <div className="ml-6 flex items-center space-x-4">
          {/* Notification Icon */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setNotificationOpen(!isNotificationOpen)}
              className="relative bg-white p-3 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition"
              aria-label="Notifications"
            >
              <Bell className="h-6 w-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{unreadCount}</span>
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notification => (
                    <div
                      key={notification.id}
                      className={`px-6 py-4 hover:bg-gray-50 cursor-pointer ${notification.unread ? 'bg-blue-50' : ''}`}
                    >
                      <div className="flex items-start">
                        <div className={`w-3 h-3 rounded-full mt-2 mr-3 ${notification.unread ? 'bg-blue-500' : 'bg-gray-300'}`} />
                        <div className="flex-1">
                          <p className="text-base font-medium text-gray-900">{notification.title}</p>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 border-t border-gray-100">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Icon */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!isProfileOpen)}
              className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="User Profile"
            >
              <img
                className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Profile"
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                <div className="px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full object-cover border-2 border-gray-200"
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Profile"
                    />
                    <div className="ml-3">
                      <p className="text-base font-bold text-gray-900">Osas</p>
                      <p className="text-sm text-gray-600">Property Manager</p>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <button
                    onClick={() => {
                      onNavigate('profile');
                      setProfileOpen(false);
                    }}
                    className="w-full px-6 py-3 text-left text-base text-gray-700 hover:bg-gray-50 flex items-center"
                  >
                    <User className="w-5 h-5 mr-3" />
                    View Profile
                  </button>
                  <button className="w-full px-6 py-3 text-left text-base text-gray-700 hover:bg-gray-50">
                    Account Settings
                  </button>
                  <button className="w-full px-6 py-3 text-left text-base text-red-600 hover:bg-red-50">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
