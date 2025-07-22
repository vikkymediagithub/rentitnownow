import React from 'react'
import { useNavigate } from 'react-router-dom'

type User = {
  id: number
  img: string
  title: string
  bookings: string
  datejoined: string
  ability: 'Enabled' | 'Disabled'
  status: 'unverified' | 'verified'
}

type Props = {
  user: User
}

const UserCard: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate()

  const abilityStyle =
    user.ability === 'Enabled'
      ? 'bg-green-50 text-green-800'
      : 'bg-red-100 text-red-800'

  const handleViewClick = () => {
    navigate(`userdetails/${user.id}`)
  }

  return (
    <div
      className="border rounded-lg px-4 py-5 bg-white shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-gray-50 cursor-pointer"
      onClick={handleViewClick} // Optionally, make the whole card clickable
    >
      {/* Left: Image + Info */}
      <div className="flex items-start gap-4">
        <img
          src={user.img}
          alt={user.title}
          className="w-16 h-16 object-cover rounded-full"
        />

        <div>
          <h4 className="font-semibold">{user.title}</h4>
          <p className="text-sm text-gray-600">{user.bookings}</p>
          <div className="flex gap-2 text-xs text-gray-400 mt-1">
            <p>Joined:</p>
            <p>{user.datejoined}</p>
          </div>
        </div>
      </div>

      {/* Center: View Info Button */}
      <div className="md:flex-1 md:flex md:justify-center">
        <button
          onClick={(e) => {
            e.stopPropagation() // Prevent parent onClick from triggering
            handleViewClick()
          }}
          className="rounded-xl px-4 py-2 text-sm text-black bg-gray-300 w-full md:w-auto"
        >
          View Info
        </button>
      </div>

      {/* Right: Ability Badge */}
      <div className="flex justify-end md:justify-end w-full md:w-auto">
        <span className={`px-3 py-1 text-sm rounded-full ${abilityStyle}`}>
          {user.ability}
        </span>
      </div>
    </div>
  )
}

export default UserCard
