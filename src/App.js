import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { WindowWidthProvider } from "./context/WindowWidthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";

function App() {
    return (
        <WindowWidthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/projects/:projectId"
                        element={<ProjectPage />}
                    />
                </Routes>
            </Router>
        </WindowWidthProvider>
    );
}

export default App;
