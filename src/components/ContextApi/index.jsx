import React, { useState } from 'react'
import Users from './Users'
import NewUser from './NewUser'
import { UsersContext } from '../Context/UsersContext'

const Index = () => {
    const [users, setUsers] = useState([{id: 1, name: "Kongkon"}, {id:2, name : "Dalim"}])

  return (
    <UsersContext.Provider value={{users, setUsers}}>
      <div>
        <NewUser/>
        <Users/>
    </div>
    </UsersContext.Provider>
  )
}

export default Index