// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhtVPKwF-u7KnfS2cfernr9A3fS7c4a3Y",
  authDomain: "pantry-tracker-27d4c.firebaseapp.com",
  projectId: "pantry-tracker-27d4c",
  storageBucket: "pantry-tracker-27d4c.appspot.com",
  messagingSenderId: "207446559675",
  appId: "1:207446559675:web:e7d06a07bbc0ca6ac3529e",
  measurementId: "G-6J2TVEEKGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}