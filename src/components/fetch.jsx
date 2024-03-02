import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [message, setMessage] = useState(null)
    useEffect(()=>{
        const dataFetch = async ()=>{
            const res = await fetch("https://api.quotable.io/random");
            const data = await res.json();
            setMessage(data)
        }
        dataFetch();
    },[])
  return (
    <div>
        <h1>Welcome to fetch data</h1>
        <h3>{message?.content}</h3>
    </div>
  )
}

export default Fetch