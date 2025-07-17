import React from 'react';
import {
  Home,
  Building2,
  Calendar,
  BarChart3,
  Wallet,
  Bell,
  Settings,
  HelpCircle,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentPage, onNavigate }) => {
  const menuItems = [
    { id: 'owner-dashboard', label: 'Dashboard', icon: Home },
    { id: 'my-properties', label: 'My Properties', icon: Building2 },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'wallets', label: 'Wallets', icon: Wallet },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          lg:translate-x-0 lg:opacity-100 lg:static
        `}
      >
        <div className="flex flex-col h-full animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white rounded-md px-3 py-1 font-bold">
                R
              </div>
              <p className="text-base font-semibold bg-gradient-to-r from-[#F85259] to-[#3352A5] text-transparent bg-clip-text">
                Rentitnownow.com
              </p>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-label="Close sidebar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {menuItems.map(({ id, label, icon: Icon }) => {
              const isActive = currentPage === id;

              return (
                <button
                  key={id}
                  onClick={() => {
                    onNavigate(id);
                    if (isOpen) onClose();
                  }}
                  className={`
                    w-full flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-200
                    ${isActive ? 'bg-gray-100 shadow-sm' : 'hover:bg-gray-100'}
                  `}
                >
                  {/* Icon */}
                  <Icon
                    className={`mr-4 h-6 w-6 transition-colors duration-200`}
                    style={{
                      backgroundImage: isActive
                        ? 'linear-gradient(to right, #F85259, #3352A5)'
                        : '',
                      WebkitBackgroundClip: isActive ? 'text' : undefined,
                      WebkitTextFillColor: isActive ? 'transparent' : undefined,
                      color: isActive ? undefined : '#6B7280', // gray-500 for inactive
                    }}
                  />
                  {/* Label */}
                  <span
                    className={`transition-colors duration-200`}
                    style={{
                      backgroundImage: isActive
                        ? 'linear-gradient(to right, #F85259, #3352A5)'
                        : '',
                      WebkitBackgroundClip: isActive ? 'text' : undefined,
                      WebkitTextFillColor: isActive ? 'transparent' : undefined,
                      color: isActive ? undefined : '#374151', // gray-700 for inactive
                    }}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
