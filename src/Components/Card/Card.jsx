import React from 'react'
import './Card.css'

export default function Card({
    title,
    info,
    btnText,
    link
}) {
  return (
    <div className='card-container'>
        <h1 className='card-title'>{title}</h1>
        <p className='card-info'>{info}</p>
        <a href={link} className='card-btn'>{btnText}</a>
    </div>
  )
}
