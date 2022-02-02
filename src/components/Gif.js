import React from 'react'
import './Gif.css'

export default function Gif ({ title, id, url }) {
    return (
        <a href={`#${id}`} className='gif'>
            <h1>{title}</h1>
            <img alt={title} src={url}/>
        </a>
    )
}