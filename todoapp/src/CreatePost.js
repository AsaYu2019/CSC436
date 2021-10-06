import React, { useState} from 'react'
import PostList from './PostList'

export default function CreatePost ({user}) {
    const [ post, setPost ] = useState([])
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const [author, setAuthor] = useState('')

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
        const newPost = {title, content, author:user, dateCreated: Date.now().toLocaleString()}
        setPost([newPost, ...post])
        //setPost(post => post.concat({"title": title, "content": content, "author": author, "complete": false, "dateCompleted": '', "dateCreated": Date.now()}));
        //console.log({user});
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <div>Author: <b>{user}</b></div>
                <div>
                    <label htmlFor="create-title">Title:</label>
                    <input type="title" name="create-title" id="create-title" onChange={titleHandler} />
                </div>
                <textarea type="content" name="create-todo" id="create-todo" onChange={contentHandler} />
                <br></br>
                <input type="submit" onClick={() => createPost()} value="Create"/>
            </form>
            <PostList posts={post} completedHandler={completedHandler} />
        </> 
    )
}