import "./ErrorModal.css"
export default function ErrorModal ({ toggleModal, modal }) {
    if(modal) {
        document.body.classList.add('limited')
      } else {
        document.body.classList.remove('limited')
      }

    return (
        <>
        {modal ? (
        <div className="modal">
            <div className="modalContent">
                <p>Please submit a search above</p>
                <button onClick={toggleModal}
                className="closeBtn">X</button>
            </div>
        </div>
        ) : null}
        </>
    )
}