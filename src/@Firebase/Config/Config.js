// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpzbbBPGR7Caq8EMbLBLe3wb-Yy0kM1ro",
  authDomain: "layder-edu.firebaseapp.com",
  databaseURL: "https://layder-edu-default-rtdb.firebaseio.com",
  projectId: "layder-edu",
  storageBucket: "layder-edu.appspot.com",
  messagingSenderId: "268030809069",
  appId: "1:268030809069:web:fe6dc4a26db67e1a998de4",
  measurementId: "G-SQ3TG4CEG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore_db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider(app);
export const realtime_db = getDatabase(app);
export const storage = getStorage(app);
