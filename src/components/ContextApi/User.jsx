import React from "react";

const User = ({ user, handleDeleteUser }) => {
  const { id, name } = user;

  const handleDelete = (id)=>{
    handleDeleteUser(id)
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
