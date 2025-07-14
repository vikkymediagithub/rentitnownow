import React from 'react'
import Navbar from './Components/Navbar'
import { ArrowLeft } from 'lucide-react'
import Profilecard from './Components/Profilecard'
import ProfileSidebar from './Components/ProfileSidebar'
import PersonalInformationCard from './Components/PersonalInformationCard'
import RecentBookingSection from './Components/RecentBookingSection'
import FavouriteProperty from './Components/FavouriteProperty'
import Footer from './Components/Footer'

const GuestProfile = () => {
  return (
    <div className="bg-purple-50 min-h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* Back button */}
      <div className="mx-10 mt-6">
        <button className="flex items-center space-x-2 text-sm text-black hover:underline">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
          <span className='text-xl font-semibold'>Profile</span>
        </button>
      </div>

      {/* Profile Info and Sidebar grouped */}
      <div className="flex flex-wrap gap-6 mx-10 mt-10">
        {/* Left Group: Profile Card & Sidebar */}
        <div className="flex flex-col gap-6">
          <Profilecard />
          <ProfileSidebar />
        </div>

        {/* Right Group: Personal Info and Bookings */}
        <div className="flex flex-col gap-6 flex-1">
          <PersonalInformationCard />
          <RecentBookingSection />
          <FavouriteProperty/>
        </div>
      </div>
    <Footer/>
    </div>
    
  )
}

export default GuestProfile
