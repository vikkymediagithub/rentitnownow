import React from 'react';
import ActivityCard from './ActivityCard';

type Activity = {
  title: string;
  description: string;
  date: string;
  amount?: string;
  status?: 'Confirmed' | 'Payment Successful' | 'Completed';
};

const activities: Activity[] = [
  {
    title: 'Booking Confirmed',
    description: 'Modern Luxury Apartment Shortlet in VI',
    date: 'Dec. 15 - 18, 2025',
    amount: 'NGN75,000',
    status: 'Confirmed',
  },
  {
    title: 'Payment processed',
    description: 'NGN75,000 for 3 Nights',
    date: 'Dec. 15 - 18, 2025',
    amount: 'NGN75,000',
    status: 'Payment Successful',
  },
  {
    title: 'Review Submitted',
    description: 'Modern Shortlet in Wuse 2',
    date: 'Feb. 15 - 18, 2024',
    status: 'Completed',
  },
];

const ActivitySection = () => {
  return (
    <section
      className="bg-white px-10 py-6 sm:p-6 rounded-xl shadow-md mx-10 md: mr-2 mt-6 "
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h3 className="text-lg sm:text-xl font-semibold">Recent Activities</h3>
        <a href="#" className="text-sm text-blue-600 hover:underline self-end sm:self-auto">
          View all
        </a>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      </div>
    </section>
  );
};

export default ActivitySection;
