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

export {
    firebaseapp,
    db,
    auth
}