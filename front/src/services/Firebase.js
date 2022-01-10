import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    "projectId": "sofka-petprojectqa",
    "appId": "1:143306099312:web:6a44b824943bbee4d802b5",
    "storageBucket": "sofka-petprojectqa.appspot.com",
    "apiKey": "AIzaSyBx3DHfZm8gVU59Tvn0rxZDWj6_yIdqhoM",
    "authDomain": "sofka-petprojectqa.firebaseapp.com",
    "messagingSenderId": "143306099312",
    "measurementId": "G-K1G50VTL1Q"
});
export const auth = firebase.auth();
