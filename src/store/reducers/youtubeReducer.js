// const initState = {};

// const youtubeReducer = (state = initState, action) => {
//     switch(action.type) {
//         case 'VIDEOS_FETCH_SUCCESS': 
//             return {
//                 ...state,
//                 videoData: action.data,
//                 videoError: null,
//             };

//         case 'VIDEOS_FETCH_ERROR': 
//             return {
//                 ...state,
//                 videoData: null,
//                 videoError: action.error,
//             };

//         case 'PLAYLIST_FETCH_SUCCESS': 
//             return {
//                 ...state,
//                 playlistData: action.data,
//                 playlistError: null,
//             };
    
//         case 'PLAYLIST_FETCH_ERROR': 
//             return {
//                 ...state,
//                 playlistData: null,
//                 playlistError: action.error,
//             };

//         default: 
//             return {
//                 ...state,
//                 data: null,
//                 error: 'INVALID CASE',
//             }
//     }
// }

// export default youtubeReducer;