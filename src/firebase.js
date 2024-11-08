// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYjHS9bWfAK7EsAK2ABq-PXKotDgqRmLc",
  authDomain: "firestore-db-c7223.firebaseapp.com",
  projectId: "firestore-db-c7223",
  storageBucket: "firestore-db-c7223.firebasestorage.app",
  messagingSenderId: "460437212561",
  appId: "1:460437212561:web:7c7a739f6716f019a71e30",
  measurementId: "G-P1ZQM06DSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);