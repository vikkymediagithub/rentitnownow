import React from 'react'
import UserCard from './UserCard';
import UnverfiedUserCard from './UnverfiedUsercard';
type User = {
  img:string
  title: string;
  status: 'unverified' | 'verified';
};

const users: User[] = [
  {
    img:"src/assets/profile.png",
    title: 'Alfred Babalola',
    status: 'verified',
  },
  {
    img:'src/assets/profile.png',
    title: 'Juliet Nicholas',
   
    status: 'verified',
  },
  {
    img:'src/assets/profile.png',
    title: 'Eyitayo aramide',
    status: 'verified',
  },
];


const UnverifiedUsers = () => {
  return (
    <div>
         <section
              className="bg-red-50 px-10 py-6 sm:p-6 rounded-xl shadow-md mx-10 md: mr-2 mt-6 "
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <h3 className="text-lg sm:text-xl text-gray-600 font-semibold">Other Users</h3>
                <a href="#" className="t text-blue-600 text-bold text-2xl hover:underline self-end sm:self-auto">
                  .
                </a>
              </div>
        
              <div className="space-y-4">
                {users.map((user, index) => (
                  <UnverfiedUserCard key={index} user={user} />
                ))}
              </div>
            </section>
    </div>
  )
}

export default UnverifiedUsers