import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Member from "./Components/Member";
import Video from "./Components/Video";
import "./App.css";

import { teamData } from "./data/team.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About teamData={teamData} />} />
          <Route path="/about/:id" element={<Member teamData={teamData} />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
