// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJx8CRtwkuaoIM5wvPOg_c3rB7wFVqJRk",
  authDomain: "firegram-7fc05.firebaseapp.com",
  projectId: "firegram-7fc05",
  storageBucket: "firegram-7fc05.appspot.com",
  messagingSenderId: "36064511573",
  appId: "1:36064511573:web:f1950ce2d2a314e599b6dc",
  measurementId: "G-3TTFEQC3K6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
