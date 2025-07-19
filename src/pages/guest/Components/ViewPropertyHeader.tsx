import React from 'react'

const ViewPropertyHeader = () => {
  return (
    <div className="mt-10 px-4 lg:pl-10 lg:pr-4  ">
      <div className="bg-white rounded-xl shadow-md w-full p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Main Image */}
          <img
            src="src/assets/room-1.png"
            alt="Main Room"
            className="rounded-2xl w-full md:w-[54rem] h-48 object-cover"
          />

          {/* Secondary Image */}
          <img
            src="src/assets/room-2.png"
            alt="Secondary Room"
            className="rounded-2xl w-full md:w-52 h-48 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default ViewPropertyHeader
