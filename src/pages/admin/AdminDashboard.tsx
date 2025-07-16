import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import SectionSwitch from './Components/SectionSwitch'
import FilterBar from './Components/FilterBar'
import PropertySection from './Components/PropertySection'

const AdminDashboard = () => {
  return (
    <div className="bg-purple-50 min-h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* Main Content: Sidebar + SectionSwitch */}
      <div className="flex">
        {/* Sidebar aligned to the left */}
        <div className="">
          <Sidebar />
        </div>

        {/* Main Section centered */}
        <div className="flex-1   items-start mt-6">
          <PropertySection/>
          
        </div>
       
      </div>
    </div>
  )
}

export default AdminDashboard
