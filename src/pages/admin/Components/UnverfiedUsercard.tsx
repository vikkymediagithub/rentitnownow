import React from 'react'

type unverfieduser = {
  img: string
  title: string
  status: 'unverified' | 'verified'
}

type Props = {
  user: unverfieduser
}

const UnverfiedUserCard: React.FC<Props> = ({ user }) => {


  return (
    <div className="border rounded-lg px-6 py-5 bg-red-50 shadow-sm flex justify-between items-center gap-4">
      {/* Left: Image + Info */}
      <div className="flex items-start gap-4 w-1/3">
        <img
          src={user.img}
          alt={user.title}
          className="w-16 h-16 object-cover rounded-full"
        />

        <div>
          <h4 className="font-semibold">{user.title}</h4>
          
        </div>
      </div>

      {/* Center: View Info Button */}
      <div className="flex-1 flex justify-end">
        <button className="rounded-xl px-4 py-2 text-sm text-black bg-gray-300">
          View Info
        </button>
      </div>

      {/* Right: Ability Badge */}
       
    </div>
  )
}

export default UnverfiedUserCard
