import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Work() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/work' ? <Navbar navbarOpacity={1} /> : ''}{' '}
      <section id="work">
        <div class="container">
          <div class="project-list">
            <div class="project"></div>
            <div class="project"></div>
            <div class="project"></div>
            <div class="project"></div>
            <div class="project"></div>
            <div class="project"></div>
          </div>
        </div>
      </section>
    </>
  );
}
