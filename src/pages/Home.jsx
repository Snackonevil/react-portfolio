import { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import ExternalLinks from "../components/ExternalLinks";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import WindowWidthContext from "../context/WindowWidthContext";

export default function Home() {
    const [navbarOpacity, setNavbarOpacity] = useState(0);
    const deviceWidth = useContext(WindowWidthContext);

    const handleScroll = () => {
        let opacity = window.pageYOffset / 800;
        setNavbarOpacity(opacity);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {deviceWidth === "desktop" ? (
                <Navbar navbarOpacity={navbarOpacity} />
            ) : (
                ""
            )}

            <Showcase />
            <ExternalLinks />
            <About />
            <Work />
            <Contact />
        </>
    );
}
