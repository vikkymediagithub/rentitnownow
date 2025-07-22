import React from 'react'
import UserList from './Components/UserList'
import OtherUsers from './Components/OtherUsers'
import UnverifiedUsers from './Components/UnverifiedUsers'

const UserPage = () => {
  return (
    <div >
        <UserList/>
        <OtherUsers/>
        <UnverifiedUsers/>
        
        
    </div>
  )
}

export default UserPage