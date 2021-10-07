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
    function postReducer(state, action){
        switch (action.type){
            case "CREATE_POST":
                const newPost = {
                    title: action.title,
                    content: action.content,
                    author: action.author,
                    dateCreated: action.dateCreated
                }
                return [newPost, ...state]
            default:
                throw new Error()
        }
    }

    const [user, dispatchUser] = useReducer(userReducer, '')
    const [post, dispatchPost] = useReducer(postReducer, [])
    if (user) {
        return (
            <div>
            <Logout user={user} dispatchUser = {dispatchUser}/>
            <CreatePost user = {user} dispatchPost = {dispatchPost}/>
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
