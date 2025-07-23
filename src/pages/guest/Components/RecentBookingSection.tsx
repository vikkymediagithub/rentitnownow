import React from 'react'
import RecentBookingsCard from './RecentBookingsCard'

type RecentBookings = {
  description: string
  date: string
  amount?: string
  status?: 'Confirmed' | 'Payment Successful' | 'Completed'
}

const RecentBooking: RecentBookings[] = [
  {
    description: 'Modern Luxury Apartment Shortlet in VI',
    date: 'Dec. 15 - 18, 2025',
    amount: 'NGN75,000',
    status: 'Confirmed' as const,
  },
  {

    description: 'NGN75,000 for 3 Nights',
    date: 'Dec. 15 - 18, 2025',
    amount: 'NGN75,000',
    status: 'Payment Successful' as const,
  },
  {
    description: 'Modern Shortlet in Wuse 2',
    date: 'Feb. 15 - 18, 2024',
    status: 'Completed' as const,
  },
]

const RecentBookingSection = () => {
  return (
    <section className="bg-white md:w-[670px] shadow-md rounded-xl p-6 px-2 my-12    ">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Recent Bookings</h3>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View all
        </a>
      </div>

      <div className="space-y-4">
        {RecentBooking.map((RecentBooking, index) => (
          <RecentBookingsCard key={index} RecentBooking={RecentBooking} />
        ))}
      </div>
    </section>
  )
}

export default RecentBookingSection;
