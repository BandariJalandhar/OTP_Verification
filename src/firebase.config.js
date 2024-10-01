// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG3UkAywZxcpPD-6bTZWqfdCq6fZpzL4o",
  authDomain: "hyderabad-66d5f.firebaseapp.com",
  projectId: "hyderabad-66d5f",
  storageBucket: "hyderabad-66d5f.appspot.com",
  messagingSenderId: "398855858265",
  appId: "1:398855858265:web:225702a2cfb07e4f0f6948",
  measurementId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
