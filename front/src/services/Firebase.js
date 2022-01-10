import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp ({
    apiKey: "AIzaSyBx3DHfZm8gVU59Tvn0rxZDWj6_yIdqhoM",
    authDomain: "sofka-petprojectqa.firebaseapp.com",
    projectId: "sofka-petprojectqa",
    storageBucket: "sofka-petprojectqa.appspot.com",
    messagingSenderId: "143306099312",
    appId: "1:143306099312:web:b7695d1e62036647d802b5",
    measurementId: "G-8BWY5ZDB7P"});

export const auth = firebase.auth();
