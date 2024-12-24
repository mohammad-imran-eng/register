// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_fqSCzNVn0Z71oSQmzTaAxy7UEQR7nz4",
  authDomain: "register-b4486.firebaseapp.com",
  projectId: "register-b4486",
  storageBucket: "register-b4486.firebasestorage.app",
  messagingSenderId: "392386007783",
  appId: "1:392386007783:web:f66530921f4ba78381c842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;