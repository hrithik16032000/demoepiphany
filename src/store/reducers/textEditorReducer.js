// const initState = {}

// const textEditorReducer = (state = initState, action) => {
//     switch(action.type) {
//         case 'CONTENT_FETCHED':
//                 console.log(`Content Fetched From Firebase...`);
//                 return state;

//         case 'SUBMIT_CONTENT':
//                 return {
//                         ...state,
//                         submittedContent: action.data,
//                         submitError: null,
//                 };

//         case 'SUBMIT_CONTENT_ERROR':
//                 return {
//                         ...state,
//                         submittedContent: null,
//                         submitError: action.error,
//                 };

//         case 'UPLOAD_IMAGE':
//                 return {
//                         ...state,
//                         uploadedImage: action.data,
//                 }

//         case 'USER_ARTICLES_FETCH':
//                 return {
//                         ...state,
//                         userArticles: action.data,
//                         userArticlesError: action.err,
//                 }

//         case 'USER_ARTICLES_FETCH_ERROR': 
//                 return {
//                         ...state,
//                         userArticles: action.data,
//                         userArticlesError: action.err,
//                 }

//         default:
//             return state;
//     }
// }

// export default textEditorReducer;