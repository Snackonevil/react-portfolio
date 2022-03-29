import React from 'react';
import { useParams } from 'react-router-dom';
import { projectData } from './Work';

export default function ProjectPage({ match, location }) {
  const { projectId } = useParams();
  console.log(projectData);
  const { name, description, image } = projectData[projectId - 1];

  return (
    <div className="container">
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
}
