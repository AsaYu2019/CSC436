import React, { useState, useReducer} from 'react'
import Login from './user/Login'
import Logout from './user/Logout'
import Register from './user/Register'
import CreatePost from './CreatePost';

export default function UserBar() {
    //const user = ''
    //const [ user, setUser ] = useState('Asa')
    function userReducer(state, action){
        switch(action.type){
            case 'LOGIN':
            case 'REGISTER':
                return action.username
            case 'LOGOUT':
                return ''
            default:
                throw new Error()
        }
    }

    const [user, dispatchUser] = useReducer(userReducer, '')

    if (user) {
        return (
            <div>
            <Logout user={user} dispatchUser = {dispatchUser}/>
            <CreatePost user = {user} />
            </div>
        )
    } else {
        return (
            <>
              <Login dispatchUser = {dispatchUser}/>
              <Register dispatchUser = {dispatchUser}/>
            </>
        )
    }}
