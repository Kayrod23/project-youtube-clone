import { useParams } from "react-router-dom";
import YouTube from "react-youtube"
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp, deleteDoc, doc, updateDoc } from "firebase/firestore"; 
import { db } from "./firebase/firebase"
import { useState, useEffect } from "react";
import { async } from "@firebase/util";
// import { async } from "@firebase/util";
import "./Video.css"

export default function Video () {
const [ comment, setComment ] = useState("");
const [ name , setName ] = useState("");
const [ allComments, setAllComments ] = useState([]);

  function handleSubmit(event) {
    getComments();
    event.preventDefault();
    try {
      const docRef = addDoc(collection(db, "comments"), {
        Name: name,
        Comment: comment,
        videoId: vidId.id,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
    setName("");
    setComment("");
  }

  async function getComments () {
    let placeholder = []
    const querySnapshot = await getDocs(query(collection(db, "comments"), orderBy("timestamp", "asc")));
    querySnapshot.forEach((doc) => {
    let data = doc.data();
    placeholder.push({data: data, id: doc.id});
    });
    setAllComments(placeholder)
  }
console.log(allComments)
  useEffect(() => {
    getComments();
  }, [])

  async function deleteComment (id) {
    await deleteDoc(doc(db, "comments", id))
    getComments();
  }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
      let vidId = useParams();

    return (
      <div className="playvideo">
    <YouTube videoId={vidId.id} opts={opts} />
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} required onChange={(event) => setName(event.target.value)}/>
      </label>
      <label>
        Comment:
        <input name="comment" value={comment} required onChange={(event) => setComment(event.target.value)}/>
      </label>
      <button type="submit">Submit</button>
    </form>
    <h3>Comments</h3>
    { allComments ? allComments.map((ytComments, index) => {
      return (
         ytComments.data.videoId === vidId.id ?
          <div key={index}>
          <p><strong>{ytComments.data.Name}</strong></p>
          <p>{ytComments.data.Comment}</p>
          <button onClick={() => deleteComment(ytComments.id)}>Delete</button>
        </div> : null 
      )
    }) : null }
      </div>
    )
}