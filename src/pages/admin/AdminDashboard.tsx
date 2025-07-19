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

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar: full width on small screens, fixed width on md and up */}
        <div className="w-full md:w-64 mb-4 md:mb-0">
          <Sidebar />
        </div>

        {/* PropertySection: full width on all screens, grows on md+ */}
        <div className="flex-1 px-4 md:px-8 mt-4 md:mt-6">
          <PropertySection />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
