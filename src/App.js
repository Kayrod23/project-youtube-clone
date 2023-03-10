import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home"
import {getVideos} from "./api/fetch.js"
import './App.css';


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
      <Routes>
        <Route path="/" element={<Home allVideos={allVideos}/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
