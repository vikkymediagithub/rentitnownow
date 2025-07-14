import React from 'react'
import { NavigationMenu } from '@radix-ui/react-navigation-menu'
import { Header } from '@radix-ui/react-accordion'
import Navbar from './Components/Navbar'
import Searchcomponent from './Components/Searchcomponent'
import CategoriesSection from './Components/CategoriesSection.tsx'
import PropertyList from './Components/PropertyList.tsx'
import ActivitySection from './Components/ActivitySection.tsx'
import Footer from './Components/Footer.tsx'


const GuestDashboard = () => {
  return (
    <div className='bg-purple-50 min-h-screen w-full '>
      <div className='mx-96'>
    <div><Navbar/></div>
    <div><Searchcomponent/></div>
    <div><CategoriesSection/></div>
    <div className='flex justify-between mx-10 mt-10'>
    <p className='text-black font-semibold text-3xl'>Featured Projects</p>
    <p className='text-black '>view all</p>
    </div>
    <div><PropertyList/></div>
    <ActivitySection/>
    </div>
    <Footer/>
  
    
    </div>
  )
}

export default GuestDashboard