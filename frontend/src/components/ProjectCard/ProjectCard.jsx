import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ id, image, alt_image, title, description, progress, benefit }) => {
  return (
    <div className='webapp__PC-Item'>
      
      <Link to={`/public-works/${id}`} state={{ id, image, alt_image, title, description, progress, benefit }}>
        <img src={image} alt={alt_image} />
        <h3>{title}</h3>
        <p>Description: {description}</p>
        <p>Progress: {progress}%</p>
        <p>Project benefit: {benefit}</p>
      </Link>
    </div>
  );
};

export default ProjectCard;
