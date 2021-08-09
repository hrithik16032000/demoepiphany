// import config from '../../config/config.json';
// import axios from 'axios';

// //for fetching all Videos
// export const videosFetch = () => {
//     console.log("in video action")
//     return (dispatch, getState) => {
//         const axiosOptions = {};
//         const finalURL = `${config.youtube.searchURL}?channelId=${config.youtube.epiphanyChannelID}&key=${config.youtube.apiKey}&part=snippet,id&order=date&`
//         axios.get(finalURL, axiosOptions)
//         .then((response) => response.data)
//         .then((data) => {
//             const videoIdArray = data.items.map(obj => `${obj.id.videoId}`);
//             dispatch({ type: 'VIDEOS_FETCH_SUCCESS', data: videoIdArray, error: null })
//         })
//         .catch((err) => {
//             dispatch({ type: 'VIDEOS_FETCH_ERROR', data: null, error: `Video fetch error - ${err.code} - ${err.message}`})
//         })
//     }
// }

// //for fetching podcast playlist
// export const playlistFetch = () => {
//     console.log(" in playlist action")
//     return (dispatch, getState) => {
//         const axiosOptions = {};
//         const finalURL = `${config.youtube.playlistURL}?playlistId=${config.youtube.podcastPlaylistID}&key=${config.youtube.apiKey}&part=snippet,id`
//         console.log(`final URL`, finalURL)
//         axios.get(finalURL, axiosOptions)
//         .then((response) => response.data)
//         .then((data) => {
//             const videoIdArray = data.items.map(obj => `${obj.snippet.resourceId.videoId}`);
//             dispatch({ type: 'PLAYLIST_FETCH_SUCCESS', data: videoIdArray, error: null })
//         })
//         .catch((err) => {
//             dispatch({ type: 'PLAYLIST_FETCH_ERROR', data: null, error: `Playlist fetch error - ${err.code} - ${err.message}}`})
//         })
//     }
// }