import React from 'react'
import {
  Home,
  Bell,
  History,
  Wallet,
  BadgeInfo,
} from 'lucide-react'

const menuItems = [
  { icon: <Home className="w-5 h-5" />, label: 'Home' },
  { icon: <Bell className="w-5 h-5" />, label: 'Notifications' },
  { icon: <History className="w-5 h-5" />, label: 'Booking History' },
  { icon: <BadgeInfo className="w-5 h-5" />, label: 'Help' },
  { icon: <BadgeInfo className="w-5 h-5" />, label: 'Dispute' },
]

const ProfileSidebar = () => {
  return (
    <div className="bg-white w-80 p-6 rounded-xl shadow-md">
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-gray-700 hover:bg-purple-50 px-3 py-2 rounded-md cursor-pointer transition-all"
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileSidebar
