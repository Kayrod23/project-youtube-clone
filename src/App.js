import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home"
import Nav from "./Components/Nav"
import About from "./Components/About"
import Member from  "./Components/Member"
import Video from "./Components/Video";
import './App.css';

import { teamData } from "./data/team.js";

function App() {
const [allVideos, setAllVideos] = useState([]);
const [modal , setModal] = useState(false);

  return (
    <div className="App">
     <Router>
        <Nav />
      <Routes>
        <Route path="/" element={<Home allVideos={allVideos} modal={modal} setModal={setModal}/>} />
        <Route path="/about" element={<About teamData={teamData}/>} />
        <Route path="/about/:id" element={<Member  teamData={teamData} />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
