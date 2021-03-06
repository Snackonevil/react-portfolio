import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    const location = useLocation();
    return (
        <>
            {location.pathname === "/contact" ? (
                <Navbar navbarOpacity={1} />
            ) : (
                ""
            )}
            <section>
                <div className="container">
                    <ContactForm />
                </div>
            </section>
        </>
    );
}
