import React from 'react'
import { NavigationMenu } from '@radix-ui/react-navigation-menu'
import { Header } from '@radix-ui/react-accordion'
import Navbar from './Components/Navbar'
import Searchcomponent from './Components/Searchcomponent'

const GuestDashboard = () => {
  return (
    <div className='bg-purple-50 min-h-screen w-full'>
    <div><Navbar/></div>
    <div><Searchcomponent/></div>
    
    </div>
  )
}

export default GuestDashboard