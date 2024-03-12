// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOl_qwE64ldruuZFA4FMqEzPFYJEFv300",
  authDomain: "netflixgpt-96a6b.firebaseapp.com",
  projectId: "netflixgpt-96a6b",
  storageBucket: "netflixgpt-96a6b.appspot.com",
  messagingSenderId: "288364218941",
  appId: "1:288364218941:web:5ca0a62506b38f1ada7854",
  measurementId: "G-F300BZMVFP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
