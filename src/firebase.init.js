// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYtH37aEKW8sYmKlm6r9YZdJmhY8gkfcM",
    authDomain: "super-grocery-store.firebaseapp.com",
    projectId: "super-grocery-store",
    storageBucket: "super-grocery-store.appspot.com",
    messagingSenderId: "130042813595",
    appId: "1:130042813595:web:2964263cbd05687f74ba3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;