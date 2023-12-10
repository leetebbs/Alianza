// ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ work }) => {
  return (
    <div className='webapp__PC-Item'>
      <Link to={`/public-works/${work.id}`}>
        <img src={work.image} alt={work.alt_image} />
        <h3>{work.title}</h3>
        <p>Description: {work.description}</p>
        <p>Progress: {work.progress}%</p>
        <p>Tokens for Financing: {work.tokens}</p>
      </Link>
    </div>
  );
};

export default ProjectCard;
