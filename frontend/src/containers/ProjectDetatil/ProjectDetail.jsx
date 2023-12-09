// ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import fakePublicWorksData from '../../data/fakeDataOnPW'
import './ProjectDetail.css'; // Import your CSS file

const ProjectDetail = () => {
  const { projectId } = useParams();

  // Replace this function with your actual function to fetch project details
  const getProjectDetails = (projectId) => {
    // Fetch project details based on projectId from your data source (e.g., API call, database query)
    // Return the project details object
    // For demonstration purposes, return a mock project details object
    return {
      id: projectId,
      title: `Project ${projectId}`,
      description: `Description for Project ${projectId}`,
      progress: Math.floor(Math.random() * 100), // Random progress for demonstration
      tokens: Math.floor(Math.random() * 200), // Random tokens for demonstration
      image: `./projectImages/project${projectId}.png`, // Replace with the actual image path
      alt_image: `Project ${projectId} Image`,
      // Add more details as needed
    };
  };

  // Fetch project details based on projectId from your data source
//   const projectDetails = getProjectDetails(projectId);

  const projectDetails = fakePublicWorksData

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  const { title, description, progress, tokens, image, alt_image } = projectDetails;
  console.log(projectDetails)
  return (
    <div className="project-detail-container">
      <img src={image} alt={alt_image} />
      <h2>{title}</h2>
      <p>Description: {description}</p>
      <p>Progress: {progress}%</p>
      <p>Tokens for Financing: {tokens}</p>
      
      {/* Add more details as needed */}
    </div>
  );
};

export default ProjectDetail;
