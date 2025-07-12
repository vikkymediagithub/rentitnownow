import React from 'react'
import { ArrowLeft, Home, Bell, History, Wallet, BadgeInfo, HomeIcon } from 'lucide-react'

const ProfileSidebar = () => {
  return (
    <div className='p-20 bg-white mt-5'>
        <ul className='ml-7'>
            <li className='flex gap-2'><Home/>Home</li>
            <li className='flex gap-2'><Bell/>Notifications</li>
            <li className='flex gap-2'><History/>Booking History</li>
            <li className='flex gap-2'><BadgeInfo/>Help</li>
            <li className='flex gap-2'><BadgeInfo/>Dispute</li>

        </ul>
    </div>
  )
}

export default ProfileSidebar