/* eslint-disable */

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADPoq8gLNve_5oge2RD5maQxs2GvSOnpU",
  authDomain: "vue-practise-project.firebaseapp.com",
  projectId: "vue-practise-project",
  storageBucket: "vue-practise-project.appspot.com",
  messagingSenderId: "467553637096",
  appId: "1:467553637096:web:184b88c809c3ee100b6f5d",
  measurementId: "G-R7MRZ49108"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


// setPersistence(auth, browserSessionPersistence)
//   .then(() => {
//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.
//     console.log('sign in persistence')
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     console.log(error)
//   });

export {
    firebaseapp,
    db,
    auth
}