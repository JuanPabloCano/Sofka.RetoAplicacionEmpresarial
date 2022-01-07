import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp ({
    apiKey: "AIzaSyBH5JVKTgPqkI9eMDpyQMh11jvfQPmfbP8",
    authDomain: "aplicacion-empresarial.firebaseapp.com",
    projectId: "aplicacion-empresarial",
    storageBucket: "aplicacion-empresarial.appspot.com",
    messagingSenderId: "295300895767",
    appId: "1:295300895767:web:c5ddb14829f5d8313e7852",
    measurementId: "G-ZL8DKTPSYE"
});

export const auth = firebase.auth();
