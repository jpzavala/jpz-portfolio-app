import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import background from "../src/images/bg-picture.webp";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
