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

    return (
        <div>
            <SearchBar setResultVideos={setResultVideos} resVideos={resVideos} modal={modal} setModal={setModal} />
            <ErrorModal toggleModal={toggleModal} modal={modal}/>
            <section className="searchedvideos">
                 {resVideos ? 
                 resVideos.map((video) => <VideosListing video={video} key={video.id.videoId} />)
                : null }
            </section>
        </div>
    )
}