import React, { useEffect, useState } from 'react';

type User = {
  first_name: string;
  last_name: string;
  user_type: string;
};

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Failed to parse user from localStorage", err);
      }
    }
  }, []);

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour > 12) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className='flex justify-between items-center py-7 border-b px-4 bg-white'>
      {/* Left Side */}
      <ul className='flex items-center space-x-3 font-bold'>
        <li><img src='src/assets/favicon.png' className='w-10' alt='logo' /></li>
        <li>Rentitnownow.com</li>
      </ul>

      {/* Right Side */}
      <ul className='flex items-center space-x-4'>
        <li className='rounded-full bg-gray-50 p-2'>
          <span className="material-icons-outlined text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">
            notifications
          </span>
        </li>

        <li>
          <div className="p-[9px] rounded-full ">
            <img
              src='src/assets/profile.png'
              className='w-10 h-10 rounded-lg bg-white'
              alt='avatar'
            />
          </div>
        </li>

        <li className='flex flex-col leading-tight'>
          <span className='font-semibold text-xl'>
            Hello {user ? user.first_name : 'Guest'}
          </span>
          <span className='text-sm text-gray-500'>{greeting()}</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
