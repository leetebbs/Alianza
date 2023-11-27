import React from 'react'
import { Link } from 'react-router-dom';
import './PublicWorkList.css'
const PublicWorkList = ({ publicWorksData }) => {
    if (!publicWorksData) {
        return <div className=''>Loading LIst...</div>
    }
    return (
    <>
      <div className='webapp__PWL'>
      <h2>Ongoing Public Works</h2>  
      <div className="webapp__PWL-Container">
      
      <ul>
        {publicWorksData?.map((work) => (
          <li key={work.id} className="webapp__PWL-Item">
            <Link to={`/public-works/${work.id}`}>
              <h3>{work.title}</h3>
              <p>Description: {work.description}</p>
              <p>Progress: {work.progress}%</p>
              <p>Tokens for Financing: {work.tokens}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div> 
      </div>  
      
    
    </>
  )
}

export default PublicWorkList