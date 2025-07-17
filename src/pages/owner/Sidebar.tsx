import React from 'react';
import { Home, Calendar, BarChart3, CreditCard, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentPage, onNavigate }) => {
  const menuItems = [
    { id: 'owner-dashboard', label: 'Dashboard', icon: Home },
    { id: 'my-properties', label: 'My Properties', icon: Home }, // Consider changing to another icon like Building2
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'wallets', label: 'Wallets', icon: CreditCard },
    { id: 'analytics', label: 'Analytics', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: CreditCard },
    { id: 'help', label: 'Help', icon: CreditCard },
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
          fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:static lg:inset-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[#F85259] to-[#3352A5] text-white rounded-md px-3 py-1 font-bold">
              R
            </div>  
              <p className="font-semibold text-sm">Rentitnownow.com</p>
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
                    w-full group flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-200
                    ${isActive
                      ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon
                    className={`
                      mr-4 h-6 w-6 transition-colors duration-200
                      ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}
                    `}
                  />
                  {label}
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
