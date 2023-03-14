import { useState } from "react";

const key = process.env.REACT_APP_API_KEY;

export const SearchBar = ({ setResultVideos, setModal }) => {
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setVal("")
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${val}&key=${key}`
    )
      .then((results) => results.json())
      .then((response) => {
        console.log(response);
        setResultVideos(response.items);
        setModal(false);
      })
      .catch((error) => {
        console.log(error);
        setModal(true);
      })
  };

  const handleTextChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={val} onChange={handleTextChange}/>
      <input type="submit" value="Search" />
    </form>
  );
};
