import React, { Component } from 'react'
import Post from './Post'

export default function PostList (props) {
    console.log('awefaewf')
    return (
    <div>
    {props.posts.map((p, i) => <Post {...p} index={i} key={i} completedHandler={props.completedHandler} />)}
    </div> )
}