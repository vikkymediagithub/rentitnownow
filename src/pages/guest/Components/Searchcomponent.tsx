import React from 'react'

const Searchcomponent = () => {
  return (
    <div className="bg-white mt-10 p5 md:p-5 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-1">Welcome Back Osas</h2>
      <p className="text-gray-500 mb-6">Find your perfect stay in Nigeria</p>

      <div className="border border-gray-300 rounded-lg p-4  md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 p-10 ">

          {/* Left: Search Inputs */}
          <div className="flex flex-col sm:flex-row items-stretch gap-4  w-296 md:w-2/3">
            <select
              className="border border-gray-300 rounded-md px-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-1/2"
            >
              <option value="" disabled selected hidden>Where</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
            </select>

            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-1/2"
            />
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
            {/* Notification Button */}
            <div className="p-[2px] rounded-md bg-gradient-to-r from-red-500 to-blue-600 inline-block">
              <button className="bg-white rounded-md flex items-center px-4 py-2 space-x-2 w-full md:w-auto">
                <span className="material-icons-outlined text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">
                  notifications
                </span>
                <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">
                  All
                </span>
              </button>
            </div>

            {/* Search Button */}
            <button className="bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-md px-5 py-2 flex items-center space-x-2 w-full md:w-auto">
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
