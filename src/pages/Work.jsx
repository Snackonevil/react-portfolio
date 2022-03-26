import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Work() {
    const location = useLocation();

    const nameVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                delay: 0.3,
                staggerChildren: 0.08,
            },
        },
    };
    const letterVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };
    return (
        <>
            {location.pathname === "/work" ? <Navbar navbarOpacity={1} /> : ""}{" "}
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
