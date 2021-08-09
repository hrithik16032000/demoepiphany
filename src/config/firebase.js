import firebase from 'firebase';
import 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCSm6sjbLdh45qh95dk-2Gm8ZrY5mAISaQ",
    authDomain: "dev-epiphany.firebaseapp.com",
    databaseURL: "https://dev-epiphany.firebaseio.com",
    projectId: "dev-epiphany",
    storageBucket: "dev-epiphany.appspot.com",
    messagingSenderId: "486666329253",
    appId: "1:486666329253:web:f2fac67c8542f884dc414c",
    measurementId: "G-XF5K9E2SPD"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;