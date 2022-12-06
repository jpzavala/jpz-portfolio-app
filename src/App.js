import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contactme" element={<ContactMe />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
