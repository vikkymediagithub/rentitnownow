import React, { useState } from 'react'
import { FiBell, FiMenu } from 'react-icons/fi'
import { Search } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='relative'>
      {/* Main Navbar */}
      <div className='flex justify-between items-center py-4 px-4 border-b bg-white'>
        {/* Left: Logo + Brand */}
        <div className='flex items-center gap-3'>
          <img src='src/assets/favicon.png' className='w-10' alt='logo' />
          <span className='font-bold text-lg'>Rentitnownow.com</span>
        </div>

        {/* Search Bar - hidden on small screens */}
        <div className='hidden md:flex items-center gap-2 bg-gray-100 rounded-xl px-2 py-1 w-96'>
          <Search className='text-gray-500' size={18} />
          <input
            type='search'
            className='bg-gray-100 outline-none w-full text-sm'
            placeholder='Search for anything...'
          />
        </div>

        {/* Right: Icons and Greeting */}
        <div className='flex items-center gap-4'>
          {/* Notification */}
          <div className='rounded-full bg-gray-50 p-2'>
            <FiBell className='text-blue-500 text-xl' />
          </div>

          {/* Avatar */}
          <img
            src='src/assets/profile.png'
            className='w-10 h-10 rounded-lg'
            alt='avatar'
          />

          {/* Greeting - hidden on mobile */}
          <div className='hidden md:flex flex-col leading-tight'>
            <span className='font-semibold text-sm'>Hello Osas</span>
            <span className='text-xs text-gray-500'>Good afternoon</span>
          </div>

          {/* Hamburger Menu - shown only on mobile */}
          <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FiMenu className='text-2xl' />
          </button>
        </div>
      </div>

      {/* Dropdown Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t px-4 py-4 space-y-4 shadow-md absolute w-full z-50'>
          {/* Search input */}
          <div className='flex items-center gap-2 bg-gray-100 rounded-xl px-2 py-1'>
            <Search className='text-gray-500' size={18} />
            <input
              type='search'
              className='bg-gray-100 outline-none w-full text-sm'
              placeholder='Search for anything...'
            />
          </div>

          {/* Greeting */}
          <div className='flex flex-col'>
            <span className='font-semibold text-sm'>Hello Osas</span>
            <span className='text-xs text-gray-500'>Good afternoon</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
