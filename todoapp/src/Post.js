import React, {useState, useContext} from 'react'
import {ThemeContext} from './Contexts'

export default function Post (props) {
    const {secondaryColor} = useContext(ThemeContext)
    return (
         <div>
            <h3 style = {{color: secondaryColor}}>{props.title}</h3>
            <div>{props.content}</div>
            <br />
            <i>Written by <b>{props.author}</b></i>
            <br />
            <i>Date Created <b>{props.dateCreated}</b></i>
            <br />
            <i>Date Completed <b>{props.dateCompleted}</b></i>
            <div>
                <i>Click here to complete</i>
                <input type="checkbox" onChange={() => props.completedHandler(props.index)} value = "Completed"/>
            </div>
        </div>        
        )
}