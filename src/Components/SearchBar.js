import { useState } from "react";

const key = process.env.REACT_APP_API_KEY;

export const SearchBar = ({ setResultVideos }) => {
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=${val}&type=video`
    )
      .then((results) => results.json())
      .then((response) => {
        console.log(response);
        setResultVideos(response);
      });
  };

  const handleTextChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleTextChange}></input>
      <input type="submit" value="Search" />
    </form>
  );
};
