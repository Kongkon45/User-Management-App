import React, { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from './UserContext'
import Component4 from './Component4';

const Component1 = () => {
    const [user, setUser] = useState({id:1, name : "Kongkon"});
    const [text, setText] = useState("I am kongkon jowarder")
  return (
    <UserContext.Provider value={{user, text}}>
        {/* <Component2/> */}
        <Component4/>
    </UserContext.Provider>
  )
}

export default Component1