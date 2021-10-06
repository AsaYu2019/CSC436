import React, { useState} from 'react'
import Login from './user/Login'
import Logout from './user/Logout'
import Register from './user/Register'
import CreatePost from './CreatePost';

export default function UserBar() {
    //const user = ''
    const [ user, setUser ] = useState('Asa')
    if (user) {
        return (
            <div>
            <Logout user={user} setUser = {setUser}/>
            <CreatePost user = {user} />
            </div>
        )
    } else {
        return (
            <>
              <Login setUser = {setUser}/>
              <Register setUser = {setUser}/>
            </>
        )
    }}
