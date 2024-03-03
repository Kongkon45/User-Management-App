import React, { useContext } from 'react'
import { UsersContext } from './UsersContext';

const User = ({user}) => {
    const {users, setUsers} = useContext(UsersContext)
    const {id, name} = user;

    const handleDelete = (id)=>{
        const filterUser = users.filter((user)=> user.id !==id);
        setUsers(filterUser)
    }
  return (
    <div className='bg-orange-400 text-white rounded-lg p-10 text-center'>
        <p>{id}</p>
        <h1>{name}</h1>
        <button onClick={()=>{handleDelete(id)}} className='bg-blue-300 text-white py-2 px-5 rounded-lg text-xl mt-4'>Delete</button>
    </div>
  )
}

export default User