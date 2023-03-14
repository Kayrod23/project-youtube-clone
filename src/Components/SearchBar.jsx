import { useState } from "react";

const key = process.env.REACT_APP_API_KEY;

export const SearchBar = ({ setResultVideos, resVideos, setModal, modal }) => {
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (val.length === 0) {
      setModal(true);
    } else {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${val}&key=${key}`
      )
        .then((results) => results.json())
        .then((response) => {
          setResultVideos(response.items);
          setModal(false);
          if (resVideos.length){
            setModal(true);
          }
        }).catch((error) => {
          console.log(error);
          setModal(true);
        })
    }
    setVal("")
  };

  const handleTextChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={val} onChange={handleTextChange}/>
        <input type="submit" value="Search" />
      </form>
    </div>

  );
};
