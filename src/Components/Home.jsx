import { useState } from "react";
import ErrorModal from "./ErrorModal"

export default function Home() {
    const [allVideos, setAllVideos] = useState([]);
    const [modal , setModal] = useState(false);

    function toggleModal () {
        setModal(!modal)
    }
    
    // fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=${process.env.REACT_APP_API_KEY}`)
    // .then((results) => results.json())
    // .then(response => {
    //     setAllVideos(response.items);
    //     setModal(false);
    // })
    // .catch((error) => {
    //     console.log(error);
    //     setModal(true);
    // })

    return (
        <div>
            {/* <SearchBar /> */}
            <ErrorModal toggleModal={toggleModal} modal={modal}/>
            {/* {allVideos.items.map((video) => {return (
                <h1>{video.etag}</h1>
            )})} */}
        </div>
    )
}