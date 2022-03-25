import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Contact() {
    const location = useLocation();
    return (
        <>
            {location.pathname === "/contact" ? (
                <Navbar navbarOpacity={1} />
            ) : (
                ""
            )}
        </>
    );
}
