import React from 'react'

const PersonalInformationCard = () => {
  return (
    <div className="bg-white p-4 sm:p-6 w-full max-w-md sm:max-w-2xl rounded-xl shadow-md mx-auto mt-6">
      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

      <div className="flex flex-col gap-4">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">First Name</label>
            <p className="p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50">Osas</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">Last Name</label>
            <p className="p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50">Fumilayo</p>
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">Email</label>
            <p className="p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50">osas@example.com</p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 mb-1">Phone Number</label>
            <p className="p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50">+234 806 123 4567</p>
          </div>
        </div>

        {/* Update Button */}
        <button className="bg-gradient-to-r from-red-500 to-blue-600 px-6 py-3 rounded-md text-white self-start sm:self-end mt-2">
          Update
        </button>
      </div>
    </div>
  )
}

export default PersonalInformationCard
