import {
    FaFile,
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
    FaGithub,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Resume = require("../projectData/ResumeLacson2022.pdf");

export default function ExternalLinks() {
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const linksVariant = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
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
        <div className="container" ref={ref}>
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
                            title="resume"
                            href={Resume}
                            download
                        >
                            <FaFile />
                        </motion.a>
                        <motion.a
                            variants={iconVariant}
                            title="email"
                            href="mailto:lacsonky@gmail.com"
                        >
                            <FaEnvelope />
                        </motion.a>
                        <motion.a
                            variants={iconVariant}
                            title="linkedin"
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/kevin-lacson/"
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            variants={iconVariant}
                            title="github"
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Snackonevil"
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            variants={iconVariant}
                            title="instagram"
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/dev.kev_/"
                        >
                            <FaInstagram />
                        </motion.a>
                    </motion.div>
                ) : (
                    ""
                )}
            </AnimatePresence>
        </div>
    );
}
