import React from 'react'
import Navbar from './Components/Navbar'
import { ArrowLeft } from 'lucide-react'
import Profilecard from './Components/Profilecard'
import ProfileSidebar from './Components/ProfileSidebar'



const GuestProfile = () => {
  return (
    <div className='bg-purple-50 min-h-screen w-full m'>
        <div ></div>
        <Navbar/>
        <div className='mx-10 mt-10'>
        <button className="flex items-center space-x-2 text-sm text-black hover:underline">
       <ArrowLeft className="w-5 h-5" />
       <span>Back</span>
    </button>
        </div>
        <Profilecard/>
       <ProfileSidebar/>
    </div>
  )
}

export default GuestProfile