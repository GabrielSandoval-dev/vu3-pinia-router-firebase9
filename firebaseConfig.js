// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpiCdzyxeMRZK_I5Sb6Bwt0RVIbRdxnSQ",
  authDomain: "vue-3-2022-3a09f.firebaseapp.com",
  projectId: "vue-3-2022-3a09f",
  storageBucket: "vue-3-2022-3a09f.appspot.com",
  messagingSenderId: "835397046805",
  appId: "1:835397046805:web:8398923421d9e78aecb41c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore(app)



export{auth, db}
