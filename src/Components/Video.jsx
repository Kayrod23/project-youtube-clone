import { useParams } from "react-router-dom";
import YouTube from "react-youtube"

export default function Video () {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      let vidId = useParams();
      console.log(vidId)
    return <YouTube videoId={vidId.id} opts={opts} />
}