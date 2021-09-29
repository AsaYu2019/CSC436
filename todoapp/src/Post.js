import React from 'react'

export default function Post (props) {
    return (
         <div>
            <input type="checkbox" onChange={() => props.completedHandler(props.index)} />
            <h3>{props.title}</h3>
            <div>{props.content}</div>
            <br />
            <i>Written by <b>{props.author}</b></i>
            <br />
            <i>Date Created <b>{props.dateCreated}</b></i>
            <br />
            <i>Date Completed <b>{props.dateCompleted}</b></i>
        </div>        
        )
}