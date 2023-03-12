import { useState } from "react";
import ErrorModal from "./ErrorModal"

export default function Home({allVideos, modal, setModal}) {
    //const [modal , setModal] = useState(false);
    //setModal(true)
    function toggleModal () {
        setModal(!modal)
    }

    //console.log(modal);
    return (
        <div>
            <form>
                <input type="text" />
            </form>
            <ErrorModal toggleModal={toggleModal} modal={modal}/>
            {/* {allVideos.items.map((video) => {return (
                <h1>{video.etag}</h1>
            )})} */}
        </div>
    )
}