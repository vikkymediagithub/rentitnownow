import React from 'react'

const PersonalInformationCard = () => {
  return (
    <div className="bg-white p-6 w-[60rem] rounded-xl shadow-md ml-3 h-fit">
      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

      <div className="flex flex-col gap-4">
        {/* First & Last Name */}
        <div className="flex gap-6">
          <div className="flex flex-col w-full">
            <label className="text-sm text-gray-500 mb-1">First Name</label>
            <p className="p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50">
              Osas
            </p>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm text-gray-500 mb-1">Last Name</label>
            <p className="p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50">
              Fumilayo
            </p>
          </div>
        </div>

        {/* Email & Phone - side by side */}
        <div className="flex gap-6">
          <div className="flex flex-col w-full">
            <label className="text-sm text-gray-500 mb-1">Email</label>
            <p className="p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50">
              osas@example.com
            </p>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm text-gray-500 mb-1">Phone Number</label>
            <p className="p-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50">
              +234 806 123 4567
            </p>
          </div>
        
        </div>
          <button className='bg-gradient-to-r from-red-500 to-blue-600 p-5 rounded-md text white'>Update</button>
      </div>
    </div>
  )
}

export default PersonalInformationCard
