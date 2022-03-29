import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../projectData/index';

export default function ProjectPage({ match, location }) {
  const { projectId } = useParams();
  console.log(projectData);
  const { name, description, image } = projectData[projectId - 1];

  return (
    <section id="project-page" className="container">
      <div className="card">
        <h1>{name}</h1>
        <img src={image} alt={name} />
      </div>
      <p>{description}</p>
    </section>
  );
}
