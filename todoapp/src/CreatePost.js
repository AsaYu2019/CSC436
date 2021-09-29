import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import PostList from './PostList'

export default function CreatePost ({user}) {
    const [ post, setPost ] = useState([])
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const contentHandler = (e) => {
        setContent(e.target.value);
    }

    const completedHandler = (index) => {
       const newPost = [...post]
       newPost[index].complete = !newPost[index].complete
        if (newPost[index].complete) {
            newPost[index].dateCompleted = Date.now()
        }
        else {
            newPost[index].dateCompleted = ''
        }
       setPost(newPost)
    }

    const createPost = () => {
        setPost(post => post.concat({"title": title, "content": content, "complete": false, "dateCompleted": '', "dateCreated": Date.now()}));
        //console.log(content);
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <div>Author: <b>{user}</b></div>
                <div>
                    <label htmlFor="create-title">Title:</label>
                    <input type="title" name="create-title" id="create-title" onChange={titleHandler} />
                </div>
                <textarea type="content" name="create-tod" id="create-todo" onChange={contentHandler} />
                <br></br>
                <input type="submit" onClick={() => createPost()} value="Create"/>
            </form>
            <PostList posts={post} completedHandler={completedHandler} />
        </> 
    )
}