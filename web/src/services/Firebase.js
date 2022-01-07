// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBH5JVKTgPqkI9eMDpyQMh11jvfQPmfbP8",
    authDomain: "aplicacion-empresarial.firebaseapp.com",
    projectId: "aplicacion-empresarial",
    storageBucket: "aplicacion-empresarial.appspot.com",
    messagingSenderId: "295300895767",
    appId: "1:295300895767:web:c5ddb14829f5d8313e7852",
    measurementId: "G-ZL8DKTPSYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);