import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
//import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './store/reducers/rootReducers';
//import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
//firebase imports
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import firebaseConfigInit from "./config/firebase";

// const rrfConfig = {
//   attachAuthIsReady: true
// }

//redux store
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reactReduxFirebase(firebaseConfigInit, rrfConfig),
//     reduxFirestore(firebaseConfigInit)
//   )
// );

// store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <React.StrictMode>
    
      <App />
      
    </React.StrictMode>,
    document.getElementById('root')
  );