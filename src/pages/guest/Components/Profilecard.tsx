import React from 'react'

const Profilecard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  // Extract name and date
  const fullName = user?.full_name || 'No Name'
  const createdAt = user?.created_at ? new Date(user.created_at) : null
  const joinDate = createdAt ? createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  }) : 'N/A'

  return (
    <div className="bg-white p-6 px-8 md:px-24 rounded-xl shadow-md w-full max-w-md text-center">

      <div className="bg-white p-8 px-32 rounded-xl shadow-md text-center">
        {/* Profile Image */}
        <img
          src="src/assets/profile.png"
          className="w-20 h-20 rounded-full mx-auto mb-4"
          alt="profile"
        />

        {/* Name and Info */}
        <p className="font-semibold text-xl capitalize">{fullName}</p>
        <p className="text-gray-500 text-sm mb-4">Member since {joinDate}</p>

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
