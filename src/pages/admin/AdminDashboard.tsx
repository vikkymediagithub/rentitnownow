import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import SectionSwitch from './Components/SectionSwitch'
import PropertySection from './PropertySection'

import UserPage from './UserPage'

const AdminDashboard = () => {
  const [selected, setSelected] = useState<'User' | 'Properties'>('Properties')

  return (
    <div className="bg-purple-50 min-h-screen w-full">
      <Navbar />

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-64 mb-4 md:mb-0">
          <Sidebar />
        </div>

        <div className="flex-1 px-4 md:px-8 mt-4 md:mt-6">
          <SectionSwitch selected={selected} setSelected={setSelected} />

          {/* Show selected section */}
          {selected === 'Properties' ? <PropertySection /> : <UserPage/>}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
