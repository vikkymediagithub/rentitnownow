import React, { useState } from 'react'
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
  LogOutIcon,
  Menu,
  X
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white shadow-md">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <span className="text-xl font-bold">Menu</span>
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50 transition-transform duration-300 bg-white shadow-md p-6 w-64 md:static md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <ul className="space-y-7 pt-10 md:pt-0">
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

      {/* Overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar
