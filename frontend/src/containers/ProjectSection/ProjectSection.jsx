// ProjectSection.jsx
import React from 'react';
import './ProjectSection.css';

const ProjectSection = ({ title, text, gridDetails, btnLink }) => {
  return (
    <div className='webapp__PS'>
      <div className='webapp__PS-heading'>
        <h2 className='gradient__text'>{title}</h2>
      </div>
      <div className='webapp__PS-info'>
          <p>{text}</p>
        </div>
      <div className='webapp__PS-container'>
        
        <div className='webapp__PS-grid'>
          {/* Area to display <ProjectCard /> components */}
          <div className='webapp__PS-cards-container'>{gridDetails}</div>
        </div>
      </div>
      <div className='webapp__PS-btn'>
        {/* {btn} To pass as prop the <BtnLink component   */}
        {btnLink}
      </div>
    </div>
  );
};

export default ProjectSection;
