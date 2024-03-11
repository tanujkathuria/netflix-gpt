// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnCYI7Prb46srP2FqnIS1F_dHuv26PnHs",
  authDomain: "netflix-gpt-c39f0.firebaseapp.com",
  projectId: "netflix-gpt-c39f0",
  storageBucket: "netflix-gpt-c39f0.appspot.com",
  messagingSenderId: "132514423152",
  appId: "1:132514423152:web:eb0ccc11abc677f5076fb5",
  measurementId: "G-4YC0FPZZKR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
