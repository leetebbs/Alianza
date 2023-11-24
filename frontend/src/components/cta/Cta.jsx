// Collect To Action
import React from 'react';
import './cta.css'
/*Props
cta_title: Title of the banner
cta_text: Text on the banner
cta_btn_link:URL to be redirect 
cta_btn_text:Text of the button
*/ 
const Cta = ({cta_title, cta_text, cta_btn_link, cta_btn_text}) => {
  return (
    <div className='webapp__cta section__padding'>
      <div className='webapp__cta-content'>
        <p>{cta_text}</p>
        <h3>{cta_title}</h3>
      </div>
        <div className='webapp__cta-btn'>
          <button onClick={() => window.location.href = cta_btn_link} type='button'>
          {cta_btn_text}
          </button>
        </div>
    </div>
  )
}

export default Cta