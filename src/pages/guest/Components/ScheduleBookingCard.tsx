import React from 'react'

const ScheduleBookingCard = () => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <div className="bg-white rounded-2xl px-8 py-10 w-full max-w-[32rem] shadow-md border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Schedule Booking</h3>
        <span className="text-sm text-red-500 font-semibold">● Booked</span>
      </div>

      {/* Calendar */}
      <div className="bg-gray-100 rounded-xl p-6 text-center mb-8">
        {/* Month Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 cursor-pointer">
            ‹
          </span>
          <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">
            July
          </p>
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 cursor-pointer">
            ›
          </span>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 gap-4 text-gray-500 font-medium mb-3 text-lg">
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-4 text-lg">
          {/* First Week: Prev Month */}
          <span className="text-gray-400">28</span>
          <span className="text-gray-400">29</span>
          <span className="text-gray-400">30</span>
          <span className="text-gray-400">1</span>
          <span className="text-gray-400">2</span>
          <span className="text-gray-400">3</span>
          <span className="text-gray-400">4</span>

          {/* Current Month Days */}
          {days.map((day) => (
            <span
              key={day}
              className={`w-10 h-10 flex items-center justify-center rounded-full mx-auto
                ${
                  day === 7
                    ? 'bg-blue-800 text-white font-bold'
                    : day >= 10
                    ? 'text-gray-400'
                    : 'text-gray-700'
                }`}
            >
              {day}
            </span>
          ))}
        </div>
      </div>

      {/* Time Select */}
      <div className="flex justify-between gap-6 mb-6">
        <div className="flex flex-col w-full">
          <label className="text-sm text-gray-500 mb-2">Check-In</label>
          <div className="p-3 border border-gray-300 rounded-md text-base text-gray-800 bg-white text-center">
            07:10 AM
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="text-sm text-gray-500 mb-2">Check-Out</label>
          <div className="p-3 border border-gray-300 rounded-md text-base text-gray-800 bg-white text-center">
            07:10 AM
          </div>
        </div>
      </div>

      {/* Book Button */}
      <button className="w-full py-4 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-red-500 to-blue-600">
        Book
      </button>
    </div>
  )
}

export default ScheduleBookingCard
