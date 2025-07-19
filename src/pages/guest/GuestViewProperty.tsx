import React from 'react'
import Navbar from './Components/Navbar'
import { ArrowLeft } from 'lucide-react'
import ViewPropertyHeader from './Components/ViewPropertyHeader'
import PropertyDetails from './Components/PropertyDetails'
import Ratings from './Components/Ratings'
import ScheduleBookingCard from './Components/ScheduleBookingCard'

const GuestViewProperty = () => {
  return (
    <div className='bg-purple-50 min-h-screen w-full'>
      {/* Navbar */}
      <Navbar />

      {/* Back Button and Title */}
      <div className="mx-10 mt-6">
        <button className="flex items-center space-x-2 text-sm text-black hover:underline">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
          <span className='text-xl font-semibold'>View Property</span>
        </button>
      </div>

      {/* View Header + Booking Card */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mt-6 mr-0 md:mr-5">
        <ViewPropertyHeader />
        <ScheduleBookingCard />
      </div>

      {/* Property Details */}
      <div className="md:mx-10 mx-2 mt-6">
        <PropertyDetails />
      </div>

      {/* Ratings */}
      <div className="md:mx-10 mx-2 mt-6 pb-10">
        <Ratings />
      </div>
    </div>
  )
}

export default GuestViewProperty
