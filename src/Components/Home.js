import { SearchBar } from "./SearchBar";
import { useState } from "react";
export default function Home() {
  const [resVideos, setResultVideos] = useState([]);
  return (
    <div>
      <SearchBar setResultVideos={setResultVideos} />
      {/* {allVideos.items.map((video) => {return (
                <h1>{video.etag}</h1>
            )})} */}
    </div>
  );
}
