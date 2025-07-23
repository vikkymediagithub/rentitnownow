import React from 'react'
import { CalendarDays } from 'lucide-react'

const BookingDetailsCard = () => {
  return (
    <div className="w-96 bg-white rounded-xl shadow-sm p-6 space-y-4 mt-3">
      <h3 className="font-semibold text-lg">Your booking details</h3>

      <div className="flex justify-between text-sm text-gray-700">
        <div>
          <p className="text-gray-500">Check-in</p>
          <p className="font-medium">Thur 7 Jul, 2025</p>
          <p className="text-xs text-gray-400">12:00 - 01:30</p>
        </div>
        <div>
          <p className="text-gray-500">Check-out</p>
          <p className="font-medium">Sun 9 Jul, 2025</p>
          <p className="text-xs text-gray-400">12:00 - 01:30</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
        <CalendarDays size={16} />
        <span>Just 3 days away</span>
      </div>

      <div className="text-sm text-gray-700">
        <p className="text-gray-500">Total length of stay</p>
        <p className="font-semibold">3 Nights</p>
      </div>
    </div>
  )
}

export default BookingDetailsCard
