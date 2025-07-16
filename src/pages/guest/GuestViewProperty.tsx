import React from 'react'
import Navbar from './Components/Navbar'
import { ArrowLeft } from 'lucide-react'
import ViewPropertyHeader from './Components/ViewPropertyHeader'
import PropertyDetails from './Components/PropertyDetails'
import Ratings from './Components/Ratings'
import ScheduleBookingCard from './Components/ScheduleBookingCard'

const GuestViewProperty = () => {
  return (
    <div className='bg-purple-50 min-h-screen w-full '>
        <Navbar/>
        <div className="mx-10 mt-6">
                <button className="flex items-center space-x-2 text-sm text-black hover:underline">
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                  <span className='text-xl font-semibold'>View Property</span>
                </button>
              </div>
              <div className='flex justify-between'>
            <ViewPropertyHeader/>
             <ScheduleBookingCard/>

              </div>
               <PropertyDetails/>
              <Ratings/>
             
             
             
              
   </div>
  )
}

export default GuestViewProperty