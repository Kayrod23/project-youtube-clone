import {Link} from 'react-router-dom'
import "./VideosListing.css";

export default function VideosListing({ video }) {
  return (
    <article className="video">
        
        <Link to={`/video/${video.id.videoId}`}>
            <img src={video.snippet.thumbnails.medium.url} alt="video img" />
        </Link>
        <h4>{video.snippet.title}</h4>
     
    </article>
  );
}
