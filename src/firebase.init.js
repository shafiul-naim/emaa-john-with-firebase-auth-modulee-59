// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEydkCmX2Pc1MU-mZJFdF7ne_3666CDJQ",
  authDomain: "ema-john-simple-401bb.firebaseapp.com",
  projectId: "ema-john-simple-401bb",
  storageBucket: "ema-john-simple-401bb.appspot.com",
  messagingSenderId: "991480903717",
  appId: "1:991480903717:web:32589f7a8bec8aedb8a7cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;