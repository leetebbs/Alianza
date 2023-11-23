/*Intro Component: This component is to be use on each page.
The component prop are: title, text */

import React from 'react'
import './Intro.css';
const Intro = ({title, text}) => {
  return (
    <div className='webapp__intro section padding'>
      <div className='webapp__intro-container'>
        <h1 className='gradient__text'>{title}</h1>
        <p>{text}</p>
       </div>
    </div>
    
  )
}

export default Intro