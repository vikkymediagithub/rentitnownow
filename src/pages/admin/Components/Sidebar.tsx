import React from 'react'
import {
  Home,
  Bell,
  History,
  Wallet,
  BadgeInfo,
  LayoutDashboardIcon,
  Percent,
  ArrowRightLeft,
  TrendingUp,
  Settings,
  LogOutIcon

} from 'lucide-react'

const menuItems = [
  { icon: <LayoutDashboardIcon className="w-5 h-5" />, label: 'Dashboard' },
  { icon: <Home className="w-5 h-5" />, label: 'User & Properties' },
  { icon: <Percent className="w-5 h-5" />, label: 'Commissions' },
   { icon: <BadgeInfo className="w-5 h-5" />, label: 'Dispute' },
   { icon: <ArrowRightLeft className="w-5 h-5" />, label: 'Transactions' },
  { icon: <TrendingUp className="w-5 h-5" />, label: 'Reports' },
   { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  { icon: <LogOutIcon className="w-5 h-5" />, label: 'Logout' },
 
]

const Sidebar = () => {
  return (
    <div className="bg-white w-64 pb-10 p-6 rounded-xl shadow-md ">
      <ul className="space-y-7">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-gray-700 px-3 py-2 rounded-md cursor-pointer transition-all hover:bg-purple-50 hover:rounded-lg"
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
