// //User Sign Up on Firebase 
// export const userSignUpAction = (userDetails) => {
    
//     return(dispatch, getState, { getFirebase, getFirestore }) => {
//         const firebase = getFirebase();
//         firebase.auth().createUserWithEmailAndPassword(
//             userDetails.email,
//             userDetails.password
//         )
//         .then((resp) => {
//             dispatch({ type: 'USER_SIGNUP_SUCCESS', data: resp, error: null })
//         })
//         .catch((err) => {
//             dispatch({ type: 'USER_SIGNUP_ERROR', data: null, error: err })
//         })
//     }
// }

// //User Sign in on Firebase 
// export const userSignInAction = ({ email, password }) => {
    
//     return(dispatch, getState, { getFirebase, getFirestore }) => {
//         const firebase = getFirebase();
//         firebase.auth().signInWithEmailAndPassword(
//             email,
//             password
//         )
//         .then((resp) => {
//             dispatch({ type: 'USER_SIGNIN_SUCCESS', data: resp, error: null })
//         })
//         .catch((err) => {
//             console.log(err)
//             dispatch({ type: 'USER_SIGNIN_ERROR', data: null, error: err })
//         })
//     }
// }

// //Signout function
// export const userSignOut = () => {
//     console.log("in sign out")
//     return (dispatch, getState, { getFirebase }) => {
//         const firebase = getFirebase();

//         // firebase.auth().signOut()
//         firebase.logout()
//         .then((resp) => {
//             dispatch({ type: 'USER_SIGNOUT_SUCCESS', data: resp, error: null })
//         })
//         .catch((err) => {
//             dispatch({ type: 'USER_SIGNOUT_ERROR', data: null, error: err })
//         })
//     }
// }