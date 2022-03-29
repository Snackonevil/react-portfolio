import React from 'react';

export default function Project({ project }) {
  return (
    <>
      <h1>{project.name}</h1>
      <img
        style={{ objectFit: 'cover' }}
        src={project.image}
        alt={project.name}
      />
    </>
  );
}
