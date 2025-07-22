import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { ArrowLeft, Calendar1Icon, PersonStandingIcon, SquareUser } from 'lucide-react'

const UserDetails = () => {
  return (
   <div className="bg-purple-50 min-h-screen w-full">
         <Navbar />
   
         <div className="flex flex-col md:flex-row">
           <div className="w-full md:w-64 mb-4 md:mb-0">
             <Sidebar />
           </div>
   
           <div className="flex-1 px-4 md:px-8 mt-4 md:mt-6">
            <div className='flex justify-between'>
                <span className='flex justify-start mt'>
                <ArrowLeft/>
                back
                </span>
                <span className='flex justify-end '>
                    <p>status:</p>
                    <p className='text-blue-500'>verfied</p>
                </span>
                </div>
                <div>
                <div className='flex items-center justify-center'>
                    <img src='src/assets/profile.png' className='w-42 h-36 ' alt='logo' />
                    
                </div>
                <h4 className='items-center justify-center flex text-3xl font-bold'>juliet nichols</h4>
                <span className='text-red-600 flex items-center justify-center gap-2'>
                    <SquareUser/>
                    <p className='p-1 px-6 bg-red-100 rounded-2xl'>Guest</p>
                    
                </span>

                <span className='flex gap-1 justify-center items-center'>
                    <Calendar1Icon/>
                    <p className='text-gray-500'>joined on 12th of june, 2025</p>
                </span>
                </div>
                <div className='bg-white mt-5 items-center grid grid-cols-1 md:grid-cols-2 justify-center p-10 mx-10 gap-10 text-gray-500 '>
                    <div className='' >
                        <p>Email address</p>
                        <p className='py-1 px-5  border border-gray rounded-lg'>alfredbabalola@gmail</p>

                    </div>
                     <div >
                        <p>Email address</p>
                        <p className='py-1 px-5 border border-gray rounded-lg'>alfredbabalola@gmail</p>

                    </div>
                     <div >
                        <p>Email address</p>
                        <p className='py-1 px-5 border border-gray rounded-lg'>alfredbabalola@gmail</p>

                    </div>
                     <div >
                        <p>Email address</p>
                        <p className='py-1 px-5 border border-gray rounded-lg'>alfredbabalola@gmail</p>

                    </div>

                </div>
                
            

             
           </div>
         </div>
       </div>
  )
}

export default UserDetails