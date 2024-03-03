import React, { useState } from 'react'
import Users from './Users'
import NewUser from './NewUser'
import { UsersContext } from './UsersContext'

const data = [{id:1, name:"Mehedi"}, {id:2, name:"Dalim"}, {id:3, name:"Kongkon"}]

const Index = () => {
    const [users, setUsers] = useState(data)

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