const firebase = require('firebase');
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC00CP1JdQM05crm2USw6HkfE_L4riXzL8",
  authDomain: "newsletter-3ccb1.firebaseapp.com",
  projectId: "newsletter-3ccb1",
  storageBucket: "newsletter-3ccb1.appspot.com",
  messagingSenderId: "278511932519",
  appId: "1:278511932519:web:d9b0585679328d8e0af0c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app