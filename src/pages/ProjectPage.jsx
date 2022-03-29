import { FaArrowLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '../projectData/index';
import { motion } from 'framer-motion';

export default function ProjectPage() {
  const { projectId } = useParams();
  const { name, description, image, codeLink, appLink } =
    projectData[projectId - 1];
  const navigate = useNavigate();

  const cardVariant = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
        type: 'spring',
        stiffness: 120,
      },
    },
  };
  const contentVariant = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
        type: 'spring',
        stiffness: 120,
      },
    },
  };

  return (
    <section id="project-page" className="container">
      <motion.div
        variants={cardVariant}
        initial="hidden"
        animate="visible"
        className="card"
      >
        <h1>{name}</h1>
        <img src={image} alt={name} />
      </motion.div>
      <motion.div
        variants={contentVariant}
        initial="hidden"
        animate="visible"
        className="content"
      >
        <p>{description}</p>
        <a href={codeLink}>CODE</a>
        <a href={appLink}>APP</a>
      </motion.div>
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
    </section>
  );
}
