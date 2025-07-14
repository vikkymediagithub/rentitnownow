import React from 'react'

type RecentBooking = {
  description: string
  date: string
  amount?: string
  status?: 'Confirmed' | 'Payment Successful' | 'Completed'
}

type Props = {
  RecentBooking: RecentBooking
}

const statusStyles: Record<RecentBooking['status'], string> = {
  Confirmed: 'bg-green-100 text-green-700',
  'Payment Successful': 'bg-teal-100 text-teal-700',
  Completed: 'bg-orange-100 text-orange-700',
}

const RecentBookingsCard: React.FC<Props> = ({ RecentBooking }) => {
  const statusClass = RecentBooking.status ? statusStyles[RecentBooking.status] : ''

  return (
    <div className="border rounded-lg px-4 py-3 bg-white shadow-sm flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-600">{RecentBooking.description}</p>
        <p className="text-xs text-gray-400 mt-1">{RecentBooking.date}</p>
      </div>

      <div className="text-right space-y-1">
        {RecentBooking.amount && (
          <p className="font-semibold text-gray-800">{RecentBooking.amount}</p>
        )}
        {RecentBooking.status && (
          <span className={`text-xs px-3 py-1 rounded-full inline-block font-medium ${statusClass}`}>
            {RecentBooking.status}
          </span>
        )}
      </div>
    </div>
  )
}

export default RecentBookingsCard
