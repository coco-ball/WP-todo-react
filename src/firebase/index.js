// firebase에 필요한 모듈들 import

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfe-G1luO2DqzqgEJC8JON9lQFXnpPoq4",
  authDomain: "wp-da3ce.firebaseapp.com",
  projectId: "wp-da3ce",
  storageBucket: "wp-da3ce.appspot.com",
  messagingSenderId: "221997193224",
  appId: "1:221997193224:web:f582824a3acce3daa9d9bd",
  measurementId: "G-63RJGW4FWN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
