import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import About from "./About";
import Work from "./Work";

export default function Home() {
    const [navbarOpacity, setNavbarOpacity] = useState(0);

    const handleScroll = () => {
        let opacity = window.pageYOffset / 800;
        setNavbarOpacity(opacity);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Navbar navbarOpacity={navbarOpacity} />
            <Showcase />
            <About />
            <Work />
        </>
    );
}
