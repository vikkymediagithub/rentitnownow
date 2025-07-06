import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Menu, User } from 'lucide-react';
import profileImage from '../../assets/profile.png';

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
              src={profileImage}
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
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="searchGradientUnique"
                    x1="0"
                    y1="0"
                    x2="24"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ec4899" /> {/* pink-500 */}
                    <stop offset="1" stopColor="#6366f1" /> {/* indigo-500 */}
                  </linearGradient>
                </defs>
                <path
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                  stroke="url(#searchGradientUnique)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Input Field */}
            <input
              type="search"
              placeholder="Search anything..."
              className="w-full pl-14 pr-4 py-4 border border-gray-300 rounded-3xl bg-[#f0f0f0] placeholder:text-[#c9c9c9] text-base shadow-sm focus:outline-none"
            />
          </div>
       </div>

       {/* Notification Icon */}
      <div className="relative" ref={notificationRef}>
        <button
          onClick={() => setNotificationOpen(!isNotificationOpen)}
          className="relative bg-[#F2F2F2] p-2.5 rounded-full hover:bg-gray-200 transition"
          aria-label="Notifications"
        >
          {/* Gradient Bell Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="url(#gradient)"
            strokeWidth={2}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF4D4D" />
                <stop offset="100%" stopColor="#4D5DFF" />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3.001 3.001 0 01-6 0m6 0H9"
            />
          </svg>

          {/* Notification Count Badge */}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[10px] font-semibold flex items-center justify-center rounded-full shadow-sm">
              {unreadCount}
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
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`px-6 py-4 hover:bg-gray-50 cursor-pointer ${
                    notification.unread ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`w-3 h-3 rounded-full mt-2 mr-3 ${
                        notification.unread ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-base font-medium text-gray-900">
                        {notification.title}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
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

      </div>
    </header>
  );
};

export default Header;
