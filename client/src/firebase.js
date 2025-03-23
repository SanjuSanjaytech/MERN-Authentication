// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-feb12.firebaseapp.com",
  projectId: "mern-auth-feb12",
  storageBucket: "mern-auth-feb12.firebasestorage.app",
  messagingSenderId: "1072399460553",
  appId: "1:1072399460553:web:c3aa4382cabeaf21adc518"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);