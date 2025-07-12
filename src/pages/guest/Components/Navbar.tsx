import React from 'react'
import { FiBell } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-7 border-b px-4 bg-white'>

      {/* Left side - logo and name */}
      <ul className='flex items-center space-x-3 font-bold'>
        <li><img src='src/assets/favicon.png' className='w-10' alt='logo' /></li>
        <li>Rentitnownow.com</li>
      </ul>

      {/* Right side - notifications, avatar, greeting */}
      <ul className='flex items-center space-x-4'>
        {/* Notification Icon */}
        <li className='rounded-full bg-gray-50 p-2'>
          <span className="material-icons-outlined text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">
            notifications
          </span>
        </li>

        {/* Avatar with gradient border */}
        <li>
          <div className="p-[9px] rounded-full ">
            <img
              src='src/assets/profile.png'
              className='w-10 h-10 rounded-lg bg-white'
              alt='avatar'
            />
          </div>
        </li>

        {/* Greeting Text */}
        <li className='flex flex-col leading-tight'>
          <span className='font-semibold text-xl'>Hello Osas</span>
          <span className='text-sm text-gray-500'>Good afternoon</span>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
