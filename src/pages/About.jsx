import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function About() {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/about' ? <Navbar navbarOpacity={1} /> : ''}
      <section id="about">
        <div className="container">
          <p>
            Software Developer with a background in healthcare chaplaincy and
            academic research in philosophy and religion. Devoted to learning,
            driven by creativity, and dedicated to compassion. Focused on
            analytical precision and productive communication within
            interpersonal relationships. Known to employers and colleagues for
            collaborative focus and humor.
          </p>
        </div>
      </section>
    </>
  );
}
