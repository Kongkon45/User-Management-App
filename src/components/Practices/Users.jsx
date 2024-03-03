import React, { useContext } from 'react'
import User from './User'
import { UsersContext } from './UsersContext'

const Users = () => {
    const {users, setUsers} = useContext(UsersContext)
  return (
    <>
        <section className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
            {
                users?.map((user)=><User key={user.id} user={user} />)
            }
        </section>
    </>
  )
}

export default Users