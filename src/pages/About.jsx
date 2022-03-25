import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function About() {
    const location = useLocation();
    return (
        <>
            {location.pathname === "/about" ? <Navbar navbarOpacity={1} /> : ""}
            <section id="about">
                <div className="container">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis consequuntur quod voluptate distinctio et
                        amet mollitia sequi eius, dolorum cumque harum. Nam,
                        blanditiis quisquam aut et, magnam earum quia distinctio
                        repudiandae eos quod, adipisci tempore dicta at officia
                        soluta ut!
                    </p>
                </div>
            </section>
        </>
    );
}
