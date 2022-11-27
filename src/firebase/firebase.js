// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR21TKM25FCa2edZdseb6jaf0jaANl9U4",
  authDomain: "react-authentication-d8f34.firebaseapp.com",
  projectId: "react-authentication-d8f34",
  storageBucket: "react-authentication-d8f34.appspot.com",
  messagingSenderId: "906821599865",
  appId: "1:906821599865:web:4b651f4d0c601980c70aa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;