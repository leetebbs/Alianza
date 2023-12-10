// ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ work }) => {
  return (
    <div className='webapp__PC-Item'>
      <Link to={`/public-works/${work.project_id}`}>
        <img src={work.image} alt={work.alt_image} />
        <h3>{work.project_title}</h3>
        <p>Description: {work.project_description}</p>
        <p>Progress: {work.project_progress}%</p>
        <p>Project benefit: {work.project_benefit}</p>
      </Link>
    </div>
  );
};

export default ProjectCard;
