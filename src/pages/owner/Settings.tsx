import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, BookOpen } from 'lucide-react';
import 'animate.css';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  // Sample settings data
  const settings = [
    { id: 1, name: 'Profile Update', description: 'Update your name and email', date: 'Dec 10, 2025', category: 'Profile' },
    { id: 2, name: 'Notification Preferences', description: 'Enable email notifications', date: 'Dec 10, 2025', category: 'Notifications', enabled: true },
    { id: 3, name: 'Payment Methods', description: 'Add a new payment method', date: 'Dec 10, 2025', category: 'Account' },
    { id: 4, name: 'Password Change', description: 'Update your account password', date: 'Dec 10, 2025', category: 'Account' },
  ];

  // Filter settings based on selected category
  const filteredSettings = filter === 'all' ? settings : settings.filter(s => s.category === filter);

  // Get category badge styles
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'Profile':
        return 'bg-blue-100 text-blue-800';
      case 'Notifications':
        return 'bg-yellow-100 text-yellow-800';
      case 'Account':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Initialize lucide-react icons
  useEffect(() => {
    import('lucide-react').then((lucide) => {
      lucide.createIcons();
    });
  }, []);

  return (
    <div className="bg-white p-4 min-h-screen sm:p-6 md:p-8">
      {/* Header with Back Arrow, Settings Title, and Icon */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 animate__animated animate__fadeIn">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 animate__animated animate__fadeIn"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold">Settings</h1>
          </div>
          <span
            className="inline-flex items-center justify-center w-8 h-8"
            style={{
              background: 'linear-gradient(to right, #F85259, #3352A5)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            <BookOpen className="w-6 h-6" />
          </span>
        </div>
      </div>

      {/* Profile and Preferences Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
        {/* Profile Summary Card */}
        <div className="bg-gradient-to-r from-red-500 to-blue-700 text-white p-4 sm:p-6 rounded-lg shadow-lg animate__animated animate__bounceIn">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm">User Profile</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Adedayo O.</h2>
              <p className="text-xs sm:text-sm">adedayo@example.com</p>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto">
              <button className="mt-2 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Account Actions Card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg animate__animated animate__bounceIn">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Account Actions</h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition duration-300">
              Change Password
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition duration-300">
              Manage Payment Methods
            </button>
          </div>
        </div>
      </div>

      {/* Settings List */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md animate__animated animate__slideInUp">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <h2 className="text-lg sm:text-xl font-semibold">Settings</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {['all', 'Profile', 'Notifications', 'Account'].map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`text-sm font-medium px-3 py-1 rounded-full bg-gray-200 transition duration-300 animate__animated animate__pulse animate__delay-1s ${
                  filter === option
                    ? 'bg-gradient-to-r from-[#F85259] to-[#3352A5] text-transparent bg-clip-text'
                    : 'text-blue-500 hover:text-blue-700'
                }`}
              >
                {option === 'all' ? 'All' : option}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {filteredSettings.map((setting) => (
            <div key={setting.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-3">
                <div>
                  <p className="text-gray-700 text-sm sm:text-base font-medium">{setting.name}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{setting.description}</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-gray-500 text-sm sm:text-base">{setting.date}</p>
                    <Calendar className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto">
                {setting.enabled !== undefined ? (
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={setting.enabled}
                      onChange={() => {}}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">Enabled</span>
                  </label>
                ) : (
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition duration-300">
                    Edit
                  </button>
                )}
                <span className={`inline-block px-2 py-1 rounded-full text-sm mt-2 ${getCategoryStyles(setting.category)}`}>
                  {setting.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;