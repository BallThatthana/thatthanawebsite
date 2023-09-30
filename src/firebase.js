import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyADPoq8gLNve_5oge2RD5maQxs2GvSOnpU",
  authDomain: "vue-practise-project.firebaseapp.com",
  projectId: "vue-practise-project",
  storageBucket: "buckets/vue-practise-project.appspot.com",
  messagingSenderId: "467553637096",
  appId: "1:467553637096:web:184b88c809c3ee100b6f5d",
  measurementId: "G-R7MRZ49108"
  // apiKey: process.env.VUE_APP_APIKEY,
  // authDomain: process.env.VUE_APP_AUTHDOMAIN,
  // projectId: process.env.VUE_APP_PROJECTID,
  // storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  // appId: process.env.VUE_APP_APPID,
  // measurementId: process.env.VUE_APP_MEASUREID
};

const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
    firebaseapp,
    db,
    auth
}