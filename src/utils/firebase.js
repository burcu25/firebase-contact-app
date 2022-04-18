

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOg3ykT7B47zThed_1WxXghFUGH37YWXw",
  authDomain: "fir-contact-app-c43d3.firebaseapp.com",
  databaseURL: "https://fir-contact-app-c43d3-default-rtdb.firebaseio.com",
  projectId: "fir-contact-app-c43d3",
  storageBucket: "fir-contact-app-c43d3.appspot.com",
  messagingSenderId: "298247354226",
  appId: "1:298247354226:web:05e08d203dc2f9e7124feb",
  measurementId: "G-PZSBB85WQN"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;