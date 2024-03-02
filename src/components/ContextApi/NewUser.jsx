import React, { useState } from 'react'

import { UseUsersContext } from '../hooks/useUsersContext'

const NewUser = () => {
    const {setUsers} = UseUsersContext()
    const [name, setName] = useState("")

    const handleSubmitUser = (e)=>{
        
        e.preventDefault();
        const newUser = {id:new Date().getTime().toString(), name : name}
        setUsers((prevUser)=>[...prevUser, newUser])
        setName("")
    }

    const handleChangeUser = (e)=>{
        setName(e.target.value);
    }
  return (
    <div>
        <h1>User Registraion</h1>
        <form onSubmit={handleSubmitUser} className='mb-10'> 
            <input className='border' type="text" placeholder='Enter user...' onChange={handleChangeUser} value={name} required name='name'/>
            <button className="bg-green-400 py-2 px-6 rounded-lg mt-3" type="submit">Add User</button>
        </form>
    </div>
  )
}

export default NewUser