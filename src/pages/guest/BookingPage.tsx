import React from 'react'
import { Bookinginfo } from './Components/Bookinginfo'
import Navbar from './Components/Navbar'
import { ArrowLeft } from 'lucide-react'
import BookingDetailsCard from './Components/BookingDetailsCard'
import PriceSummaryCard from './Components/PriceSummaryCard'

const BookingPage = () => {
  return (
    <div>
         <div className="bg-purple-50 min-h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* Back button */}
      <div className="px-4 sm:px-10 mt-6">
        <button className="flex items-center space-x-2 text-sm text-black hover:underline">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
          <span className="text-xl font-semibold">Your Booking</span>
        </button>
      </div>

      <div className=' ml-9'>
        <Bookinginfo/>
        <BookingDetailsCard />
        <PriceSummaryCard/>
      </div>

      

   
    </div>
    </div>
  )
}

export default BookingPage