// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLg7DEb2s3lYqeEqjJTP_svoTzjN-1hrg",
  authDomain: "react-e-commerce-auth.firebaseapp.com",
  projectId: "react-e-commerce-auth",
  storageBucket: "react-e-commerce-auth.appspot.com",
  messagingSenderId: "250958166509",
  appId: "1:250958166509:web:8d0393f30b0e9c23738fe4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
