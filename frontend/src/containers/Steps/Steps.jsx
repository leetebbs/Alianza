import React from 'react'
import './Steps.css'

const Steps = ({title, text, media, alt_media, btnLink}) => {
  return (
    <div className='webapp__steps section__margin'>
        <div className='webapp__steps-heading'>
            <h2 className='gradient__text'>{title}</h2>
        </div>
        <div className='webapp__steps-container'>
            <div className='webapp__steps-info'>
                <p><span>*</span> {text}</p>
                
            </div>
            <div className='webapp__steps-media'>
                <img src={media} alt={alt_media} />
            </div>
            
        </div>
        <div className='webapp__steps-btn'>
            {/* {btn} To pass as prop the <BtnLink component   */}
            {btnLink}
        </div>
    </div>
  )
}

export default Steps