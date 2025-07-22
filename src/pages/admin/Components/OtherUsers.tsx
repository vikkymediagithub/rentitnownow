import React from 'react'
import UserCard from './UserCard';
type User = {
  id:number
  img:string
  title: string;
  bookings: string;
  datejoined: string;
  ability:'Enabled'|'Disabled';
  status: 'unverified' | 'verified';
};

const users: User[] = [
  {
    id:1,
    img:"src/assets/profile.png",
    title: 'Alfred Babalola',
    bookings: '6 bookings',
    datejoined: 'Dec. 15 - 18, 2025',
    ability:'Enabled',
    status: 'verified',
  },
  {
    id:2,
    img:'src/assets/profile.png',
    title: 'Juliet Nicholas',
    bookings: '12 bookings',
    datejoined: 'Dec. 15 - 18, 2025',
    ability:'Enabled',
    status: 'verified',
  },
  {
    id:3,
    img:'src/assets/profile.png',
    title: 'Eyitayo aramide',
    bookings: '8 bookings',
    datejoined: 'Feb. 15 - 18, 2024',
     ability:'Disabled',
    status: 'verified',
  },
];


const OtherUsers = () => {
  return (
    <div>
         <section
              className="bg-white px-10 py-6 sm:p-6 rounded-xl shadow-md mx-10 md: mr-2 mt-6 "
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <h3 className="text-lg sm:text-xl text-gray-600 font-semibold">Other Users</h3>
                <a href="#" className="t text-blue-600 text-bold text-2xl hover:underline self-end sm:self-auto">
                  .
                </a>
              </div>
        
              <div className="space-y-4">
                {users.map((user, index) => (
                  <UserCard key={index} user={user} />
                ))}
              </div>
              <div className='flex justify-end mt-3'>view all</div>
            </section>
    </div>
  )
}

export default OtherUsers