import { useState } from "react";
import ErrorModal from "./ErrorModal"
import VideosListing from "./VideosListing"
import { SearchBar } from "./SearchBar";
import "./Home.css";

export default function Home() {

    // const [allVideos, setAllVideos] = useState([]);
    const [modal , setModal] = useState(false);
    const [resVideos, setResultVideos] = useState([]);

    function toggleModal () {
        setModal(!modal);
    }

   
  // Only for testing
    // useEffect(() => {
    // fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=ariana grande&key=${process.env.REACT_APP_API_KEY}`)
    // .then((results) => results.json())
    // .then(response => {
    //     setAllVideos(response.items);
    //     setModal(false);
    // })
    // .catch((error) => {
    //     console.log(error);
    //     setModal(true);
    // })},[])
// Only for testing


    return (
        <div>
            <SearchBar setResultVideos={setResultVideos} resVideos={resVideos} modal={modal} setModal={setModal} />
            <ErrorModal toggleModal={toggleModal} modal={modal}/>
            <section className="searchedvideos">
                 {resVideos ? 
                 resVideos.map((video) => <VideosListing video={video} key={video.id.videoId} />)
                : null}
            </section>
        </div>
    )
}