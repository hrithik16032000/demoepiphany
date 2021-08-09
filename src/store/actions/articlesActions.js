
// export const fetchAllArticles = () => {
//     return(dispatch, getState, { getFirebase, getFirestore }) => {
//         console.log(getFirestore)
//         const firestore = getFirestore();
//         console.log(firestore)
//         firestore.firestore().collection('articles').get()
//         .then(querySnapshot => {
//             querySnapshot.docs.map(doc => {
//                 console.log(doc);
//             })
//         })
//         //dispatch({ type: 'ARTICLES_FETCHED', data: "data from action"})
//     }
// }