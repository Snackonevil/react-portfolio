import {
  FaFile,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaGithub,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ExternalLinks() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const linksVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: -50,
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        delay: 0,
        staggerChildren: 0.08,
      },
    },
  };
  const iconVariant = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div ref={ref}>
      <AnimatePresence>
        {inView ? (
          <motion.div
            variants={linksVariant}
            initial="hidden"
            animate="visible"
            className="links"
          >
            <motion.a
              variants={iconVariant}
              alt="resume"
              href="/ResumeLacson2022.pdf"
              download
            >
              <FaFile />
            </motion.a>
            <motion.a
              variants={iconVariant}
              alt="email"
              href="mailto:lacsonky@gmail.com"
            >
              <FaEnvelope />
            </motion.a>
            <motion.a variants={iconVariant} alt="linkedin" href="">
              <FaLinkedin />
            </motion.a>
            <motion.a variants={iconVariant} alt="github" href="">
              <FaGithub />
            </motion.a>
            <motion.a variants={iconVariant} alt="instagram" href="">
              <FaInstagram />
            </motion.a>
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </div>
  );
}
