// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW0r4B2RJcOAJGgNxIlSoi8b6nSCzXkJo",
  authDomain: "ruta-mental.firebaseapp.com",
  projectId: "ruta-mental",
  storageBucket: "ruta-mental.appspot.com",
  messagingSenderId: "971936466485",
  appId: "1:971936466485:web:c4eb28de1096af9ac9137c",
  measurementId: "G-F64BCPT283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
// const analytics = getAnalytics(app);