import React from 'react'


const Profilecard = () => {
  return (
    <div className="flex justify-left  ">
      <div className="bg-white p-8 w-80 rounded-xl shadow-md text-center">
        {/* Profile Image */}
        <img
          src="src/assets/profile.png"
          className="w-20 h-20 rounded-full mx-auto mb-4"
          alt="profile"
        />

        {/* Name and Info */}
        <p className="font-semibold text-xl">Osas Fumilayo</p>
        <p className="text-gray-500 text-sm mb-4">Member since Dec 2023</p>

        {/* Stats */}
        <div className="flex justify-around text-sm text-gray-700 mt-4">
          <div>
            <p className="font-semibold">12</p>
            <p className="text-gray-500">Bookings</p>
          </div>
          <div>
            <p className="font-semibold">4.5</p>
            <p className="text-gray-500">Ratings</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profilecard
