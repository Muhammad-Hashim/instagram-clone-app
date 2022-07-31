// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
// import { getfirestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh55xVag3bDorC705Z7VKJq3t3X2k43_c",
  authDomain: "instagram-app-5e389.firebaseapp.com",
  projectId: "instagram-app-5e389",
  storageBucket: "instagram-app-5e389.appspot.com",
  messagingSenderId: "508020782597",
  appId: "1:508020782597:web:d07dc521cea46f25ad8e6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

export default db;