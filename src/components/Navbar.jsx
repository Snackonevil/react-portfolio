import { Link } from "react-router-dom";

export default function Navbar({ navbarOpacity }) {
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
