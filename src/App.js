import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WindowWidthProvider } from "./context/WindowWidthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
    // const [navbarOpacity, setNavbarOpacity] = useState(0);
    // const handleScroll = () => {
    //     let opacity = window.pageYOffset / 800;
    //     setNavbarOpacity(opacity);
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    // }, []);

    return (
        <WindowWidthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </WindowWidthProvider>
    );
}

export default App;
