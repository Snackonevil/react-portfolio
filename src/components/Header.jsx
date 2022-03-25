import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const [navbarOpacity, setNavbarOpacity] = useState(0);
    const handleScroll = () => {
        let opacity = window.pageYOffset / 800;
        setNavbarOpacity(opacity);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header style={{ opacity: `${navbarOpacity}` }}>
            <div className="container">
                <Link to="/">
                    <h1>KL</h1>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/work">WORK</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
