// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBvVL-Qd6wZ3gKqECanqq2fp7mTCHzsHik",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "faryon-f2e22.firebaseapp.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "faryon-f2e22",
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "faryon-f2e22.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "313608543480",
    appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:313608543480:web:48b438f82259b2cddbaf0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;