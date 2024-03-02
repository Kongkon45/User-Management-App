import React  from 'react'
import User from './User'
import { UseUsersContext } from '../hooks/useUsersContext'

const Users = () => {
  const {users} = UseUsersContext()
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