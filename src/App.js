import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home"
import Nav from "./components/Nav"
import About from "./components/About"
import {getVideos} from "./api/fetch.js"
import './App.css';

import { teamData } from "./data/team.js";

function App() {
const [allVideos, setAllVideos] = useState([])
  
useEffect(() => {
    getVideos().then(response => {
      setAllVideos(response)
    }).catch((error) => console.log(error))
  }, [])

  return (
    <div className="App">
     <Router>
        <Nav />
      <Routes>
        <Route path="/" element={<Home allVideos={allVideos}/>} />
        <Route path="/about" element={<About teamData={teamData}/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
