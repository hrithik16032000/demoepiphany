
// const galleryReducer = (state = {}, action) => {
//     switch(action.type) {
//         case 'INSTAGRAM_FETCHED':
//             return {
//                 ...state,
//                 instagramImages: action.data,
//                 fetchError : null
//             }

//         case 'INSTAGRAM_FETCH_FAILED':
//             return {
//                 ...state,
//                 instagramImages: null,
//                 fetchError: 'Failed to load instagram images'
//             }
        
//         default:
//             return {
//                 ...state,
//                 instagramImages: null,
//                 fetchError: 'Inavlid case to fetch instagram images'
//             }
//     }
// }

// export default galleryReducer;