import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Component4 = () => {
    const {user, text} = useContext(UserContext)
  return (
    <div>
        <h1>{text}</h1>
        <p>{user.id}</p>
        <h3>{user.name}</h3>
    </div>
  )
}

export default Component4