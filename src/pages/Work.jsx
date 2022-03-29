import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import ProjectPage from './ProjectPage';

export const projectData = [
  {
    id: 1,
    name: 'MeteoMelodies',
    description: 'This is a description of MeteoMelodies',
    appLink: '',
    codeLink: '',
    image: '',
  },
  {
    id: 2,
    name: 'Modular',
    description: 'This is a description of Modular',
    appLink: '',
    codeLink: '',
    image: '',
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: 'This is a description of Weather Dashboard',
    appLink: '',
    codeLink: '',
    image: '',
  },
  {
    id: 4,
    name: 'Elder Raven',
    description: '',
    appLink: '',
    codeLink: '',
    image: '',
  },
];
export default function Work() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/work' ? <Navbar navbarOpacity={1} /> : ''}{' '}
      <section id="work">
        <div className="container">
          <div className="project-list">
            {projectData.map(project => (
              <div key={project.id} className="project">
                <Link to={`projects/${project.id}`} element={<ProjectPage />}>
                  <Project project={project} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
