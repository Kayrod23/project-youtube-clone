import ErrorModal from "./ErrorModal"

export default function Home({allVideos, modal, setModal}) {
    function toggleModal () {
        setModal(!modal)
    }


    return (
        <div>
            <SearchBar />
            <ErrorModal toggleModal={toggleModal} modal={modal}/>
            {/* {allVideos.items.map((video) => {return (
                <h1>{video.etag}</h1>
            )})} */}
        </div>
    )
}