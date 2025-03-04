// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "bootcamp-practice-fsab.firebaseapp.com",
  projectId: "bootcamp-practice-fsab",
  storageBucket: "bootcamp-practice-fsab.appspot.com",
  messagingSenderId: "79788544633",
  appId: "1:79788544633:web:abc63e0b7647f69ee7baa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);