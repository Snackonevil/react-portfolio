import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import ProjectPage from "./ProjectPage";
import projectData from "../projectData/index";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

export default function Work() {
    const location = useLocation();
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const listVariant = {
        hidden: { y: 150, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                when: "beforeChildren",
                delay: 0.2,
                staggerChildren: 0.1,
                duration: 0.2,
            },
        },
    };
    const projectVariant = {
        hidden: {
            y: 150,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    };
    return (
        <>
            {location.pathname === "/work" ? <Navbar navbarOpacity={1} /> : ""}{" "}
            <section ref={ref} id="work">
                <div className="container">
                    <AnimatePresence>
                        {inView ? (
                            <motion.div
                                variants={listVariant}
                                initial="hidden"
                                animate="visible"
                                className="project-list"
                            >
                                {projectData.map(project => (
                                    <motion.div
                                        variants={projectVariant}
                                        key={project.id}
                                        className="project"
                                    >
                                        <Link
                                            to={`/projects/${project.id}`}
                                            element={<ProjectPage />}
                                        >
                                            <Project project={project} />
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            ""
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </>
    );
}
