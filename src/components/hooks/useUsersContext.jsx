import React, { useContext } from 'react'
import { UsersContext } from '../Context/UsersContext'

export const UseUsersContext = ()=>{
    return useContext(UsersContext)
}