import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";
import Experience from "./pages/Experience";
import Awards from "./pages/Awards";
import Media from "./pages/Media";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Papers from "./pages/Papers";
import PaperDisplay from "./pages/PaperDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/paper/:id" element={<PaperDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/media" element={<Media />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
