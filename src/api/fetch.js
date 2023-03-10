const key = process.env.REACT_APP_API_KEY
console.log(process.env.REACT_APP_API_KEY)
export function getVideos() {
    return fetch (`https://youtube.googleapis.com/youtube/v3/search?key=${key}`
    ).then((results) => results.json())
}