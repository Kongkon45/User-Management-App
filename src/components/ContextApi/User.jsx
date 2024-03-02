import React, { useContext } from "react";
import { UsersContext } from "../Context/UsersContext";

const User = ({ user }) => {
  const {users, setUsers} = useContext(UsersContext)
  const { id, name } = user;

  const handleDelete = (id)=>{
    const filterUser = users.filter(user=> user.id !== id)
        setUsers(filterUser)
  }
  return (

    <div>
      <article className="bg-orange-400 text-white p-10 text-center rounded-lg">
        <p>{id}</p>
        <h1>{name}</h1>
        <button onClick={()=>{handleDelete(id)}} className="bg-green-400 py-2 px-6 rounded-lg mt-3">Delete</button>
      </article>
    </div>
  );
};

export default User;
