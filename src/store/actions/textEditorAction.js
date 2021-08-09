// import { getFirebase } from "react-redux-firebase";

// export const submitContent = (contentInHTML) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//         const firestore = getFirestore();
//         firestore.collection('articles').add({
//             ...contentInHTML
//         })
//         .then(() => {
//             dispatch({
//                 type: 'SUBMIT_CONTENT',
//                 data: contentInHTML,
//                 error: null
//             })
//         })
//         .catch((err) => {
//             dispatch({
//                 type: 'SUBMIT_CONTENT_ERROR',
//                 data: null,
//                 error: err
//             })
//         })
//     }
// }

// export const uploadImage = (image) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//         const firebase = getFirebase();

//         const storage = firebase.storage();

//         console.log(`Storage ${storage}`)
//         const uploadTask = storage.ref(`/articles_image/${image.name}`).put(image);

//         uploadTask.on('state_changed',
//             (snapshot) => {
//                 console.log(snapshot)
//             },
//             (err) => {
//                 console.log(err)
//             },
//             () => {
//                 storage.ref('articles_image').child(image.name).getDownloadURL()
//                 .then(firebaseURL => {
//                     dispatch({ type: 'UPLOAD_IMAGE', data: firebaseURL })
//                 })
//             }
//         )
//     }
// }

// export const userAllArticlesFetch = (userId) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//         const firestore = getFirestore();

//         console.log(userId)
//         firestore.collection('articles').where("isDeleted", "==", false)
//         .get()
//         .then((querySnapshot) => {
//             dispatch({
//                 type: 'USER_ARTICLES_FETCH',
//                 data: querySnapshot,
//                 error: null
//             })
//         })
//         .catch((err) => {
//             dispatch({
//                 type: 'USER_ARTICLES_FETCH_ERROR',
//                 data: null,
//                 error: err
//             })
//         })

//     }
// }