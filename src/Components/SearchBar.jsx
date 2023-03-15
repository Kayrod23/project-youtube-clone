import { useState } from "react";
import "./SearchBar.css"

const key = process.env.REACT_APP_API_KEY;

 export const SearchBar = ({ setResultVideos }) => {
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${val}&key=${key}`
    )
      .then((results) => results.json())
      .then((response) => {
        console.log(response);
        setResultVideos(response.items);
      });
  };

  const handleTextChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} >
      <input type="text"   onChange={handleTextChange} className="searchinpt" ></input>
      <input type="submit"  value="Search"  className="searchSbmt"/>
    </form>
  );
};
