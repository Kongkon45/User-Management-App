import React, { useContext } from 'react'
import User from './User'
import { UsersContext } from '../Context/UsersContext'

const Users = () => {
  const {users} = useContext(UsersContext)
  return (
    <div>
        <section className='grid grid-cols-2 gap-10'>
        {
            users?.map(user=><User key={user.id} user={user}/>)
        }
        </section>
    </div>
  )
}

export default Users