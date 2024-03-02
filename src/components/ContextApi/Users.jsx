import React from 'react'
import User from './User'

const Users = ({users, handleDeleteUser}) => {
  return (
    <div>
        <section className='grid grid-cols-2 gap-10'>
        {
            users?.map(user=><User key={user.id} user={user} handleDeleteUser={handleDeleteUser}/>)
        }
        </section>
    </div>
  )
}

export default Users