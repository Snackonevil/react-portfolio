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
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const nameVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        delay: 0.2,
        staggerChildren: 0.08,
      },
    },
  };
  const letterVariant = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: -50,
      opacity: 1,
    },
  };
  console.log(inView);
  return (
    <div ref={ref}>
      <AnimatePresence>
        {inView ? (
          <motion.div
            variants={nameVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="links"
          >
            <motion.a
              variants={letterVariant}
              alt="resume"
              href="/ResumeLacson2022.pdf"
              download
            >
              <FaFile />
            </motion.a>
            <motion.a
              variants={letterVariant}
              alt="email"
              href="mailto:lacsonky@gmail.com"
            >
              <FaEnvelope />
            </motion.a>
            <motion.a variants={letterVariant} alt="linkedin" href="">
              <FaLinkedin />
            </motion.a>
            <motion.a variants={letterVariant} alt="github" href="">
              <FaGithub />
            </motion.a>
            <motion.a variants={letterVariant} alt="instagram" href="">
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
