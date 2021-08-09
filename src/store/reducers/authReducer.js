// const initState = {}

// const authReducer = (state = initState, action) => {
//     switch(action.type) {
//         case 'USER_SIGNUP_SUCCESS':
//                 return {
//                     ...state,
//                     auth: action.data,
//                     authError: action.error,
//             };

//         case 'USER_SIGNUP_ERROR':
//                 return {
//                     ...state,
//                     auth: action.data,
//                     authError: "Cannot sign up with the given email ID",
//                 };

//         case 'USER_SIGNIN_SUCCESS':
//                 return {
//                     ...state,
//                     auth: action.data,
//                     authError: action.error,
//                 };

//         case 'USER_SIGNIN_ERROR':
//                 return {
//                     ...state,
//                     auth: action.data,
//                     authError: action.error,
//                 };
          
//         case 'USER_SIGNOUT_SUCCESS':
//             return {
//                 ...state,
//                 auth: action.data,
//                 authReducer: action.error,
//             }        

//         case 'USER_SIGNOUT_ERROR':
//             return {
//                 ...state,
//                 auth: action.data,
//                 authReducer: action.error,
//             }

//         default:
//             return state;
//     }
// }

// export default authReducer;