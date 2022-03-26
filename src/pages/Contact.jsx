import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/contact' ? <Navbar navbarOpacity={1} /> : ''}
      <div className="container">
        <h1>Contact me</h1>
        <ContactForm />
      </div>
    </>
  );
}
