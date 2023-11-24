import React from 'react'
import './BtnLink.css'
const BtnLink = ({btn_link, btn_text}) => {
  return (
    <>
        <button onClick={() => window.location.href = btn_link} type='button'>
                {btn_text}
            </button>
    </>
  )
}

export default BtnLink