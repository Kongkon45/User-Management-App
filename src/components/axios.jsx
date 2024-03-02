import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = () => {
    const [message, setMessage] = useState("")
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get("https://api.quotable.io/random");
            setMessage(res.data)
        }
        fetchData();
    },[])
  return (
    <div>axios
        <h1>{message?.content}</h1>
    </div>
    
  )
}

export default Axios