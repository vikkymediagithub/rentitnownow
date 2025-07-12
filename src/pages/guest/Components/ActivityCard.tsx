import React from 'react'

type Activity = {
  title: string
  description: string
  date: string
  amount?: string
  status?: 'Confirmed' | 'Payment Successful' | 'Completed'
}

type Props = {
  activity: Activity
}

const statusStyles: Record<Activity['status'], string> = {
  Confirmed: 'bg-green-100 text-green-700',
  'Payment Successful': 'bg-teal-100 text-teal-700',
  Completed: 'bg-orange-100 text-orange-700',
}

const ActivityCard: React.FC<Props> = ({ activity }) => {
  const statusClass = activity.status ? statusStyles[activity.status] : ''

  return (
    <div className="border rounded-lg px-4 py-3 bg-white shadow-sm flex justify-between items-start">
      <div>
        <h4 className="font-semibold">{activity.title}</h4>
        <p className="text-sm text-gray-600">{activity.description}</p>
        <p className="text-xs text-gray-400 mt-1">{activity.date}</p>
      </div>

      <div className="text-right space-y-1">
        {activity.amount && (
          <p className="font-semibold text-gray-800">{activity.amount}</p>
        )}
        {activity.status && (
          <span className={`text-xs px-3 py-1 rounded-full inline-block font-medium ${statusClass}`}>
            {activity.status}
          </span>
        )}
      </div>
    </div>
  )
}

export default ActivityCard
