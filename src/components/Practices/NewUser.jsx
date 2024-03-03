import React, { useContext, useState } from 'react'
import { UsersContext } from './UsersContext';

const NewUser = () => {
    const {users, setUsers} = useContext(UsersContext)
    const [name, setName] = useState("");
    const handleChangeUser = (e)=>{
        setName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newUser = {id:new Date().getTime().toString(), name : name}
        setUsers((prevUser)=>[...prevUser, newUser])
        setName("")
    }

  return (
    <div>
        <h1>User Registration</h1>
        <form onSubmit={handleSubmit}>
            <input className='border' type="text" name="name" id="name" required onChange={handleChangeUser} value={name}/>
            <button className='bg-blue-300 text-white py-2 px-5 rounded-lg text-xl mt-4' type='submit'>Add User</button>
        </form>
    </div>
  )
}

export default NewUser