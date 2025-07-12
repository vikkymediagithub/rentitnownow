import React from 'react'
import ActivityCard from './ActivityCard'

type Activity = {
  title: string
  description: string
  date: string
  amount?: string
  status?: 'Confirmed' | 'Payment Successful' | 'Completed'
}

const activities: Activity[] = [
  {
    title: 'Booking Confirmed',
    description: 'Modern Luxury Apartment Shortlet in VI',
    date: 'Dec. 15 - 18, 2025',
    amount: 'NGN75,000',
    status: 'Confirmed' as const,
  },
  {
    title: 'Payment processed',
    description: 'NGN75,000 for 3 Nights',
    date: 'Dec. 15 - 18, 2025',
    amount: 'NGN75,000',
    status: 'Payment Successful' as const,
  },
  {
    title: 'Review Submitted',
    description: 'Modern Shortlet in Wuse 2',
    date: 'Feb. 15 - 18, 2024',
    status: 'Completed' as const,
  },
]

const ActivitySection = () => {
  return (
    <section className="bg-white rounded-xl p-6 my-12 mx-4 md:mx-10">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Recent Activities</h3>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View all
        </a>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      </div>
    </section>
  )
}

export default ActivitySection
