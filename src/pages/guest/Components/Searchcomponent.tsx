import React from 'react'

const Searchcomponent = () => {
  return (
    <div className="p-10 bg-white mt-20 mx-20 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-1">Welcome Back Osas</h2>
      <p className="text-gray-500 mb-6">Find Your perferct stay</p>

      <div className="border border-gray-300 rounded-lg p-6">
        {/* Parent flex container with justify-between */}
        <div className="flex justify-between items-center space-x-4 flex-wrap gap-4">
          
          {/* Left: Search Inputs */}
          <div className="flex items-center space-x-4 p-10">
            <select
              className="border border-gray-300 rounded-md px-20 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="" disabled selected hidden>Where</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
            </select>

            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-6 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center space-x-4">
            {/* Notification Button */}
            <div className="p-[2px] rounded-md bg-gradient-to-r from-red-500 to-blue-600 inline-block">
              <button className="bg-white rounded-md flex items-center px-4 py-2 space-x-2">
                <span className="material-icons-outlined text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">
                  notifications
                </span>
                <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">
                  All
                </span>
              </button>
            </div>

            {/* Search Button */}
            <button className="bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-md px-5 py-2 flex items-center space-x-2">
              <span className="material-icons-outlined text-2xl">search</span>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searchcomponent
