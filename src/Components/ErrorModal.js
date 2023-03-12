// import { useState } from "react"
import "./ErrorModal.css"
export default function ErrorModal ({ toggleModal, modal }) {
    //const [modal , setModal] = useState(false)

    // const toggleModal = () => {
    //     setModal(!modal)
    // }
    return (
        <>
        <button onClick={toggleModal}
        className="btn-modal">
            Open
        </button>
        {modal ? (<div className="modal">
            <div className="modal-content">
                <h2>Hello</h2>
                <p>here</p>
                <button onClick={toggleModal}
                className="close">Close</button>
            </div>
        </div>) : null}
        </>
    )
}