import React from 'react'
import './PublicWorkSection.css'
const PublicWorkSection = ({title, text, gridDetails, btnLink}) => {
    return (
      <div className='webapp__PWS section__margin'>
          <div className='webapp__PWS-heading'>
              <h2 className='gradient__text'>{title}</h2>
          </div>
          <div className='webapp__PWS-container'>
              {/* <div className='webapp__PWS-info'>
                  <p>{text}</p>
                  
              </div> */}
              <div className='webapp__PWS-grid'>
                  {/* Area to display <PublicWorkDetails />
                  component  */}
                  {gridDetails}
              </div>
              
          </div>
          <div className='webapp__PWS-btn'>
              {/* {btn} To pass as prop the <BtnLink component   */}
              {btnLink}
          </div>
      </div>
  )
}

export default PublicWorkSection