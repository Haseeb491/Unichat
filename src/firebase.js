import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyB-yq9JJCE9CQsguQxbLlxtTlBtRt48ih0",
    authDomain: "unichat-app-a3245.firebaseapp.com",
    projectId: "unichat-app-a3245",
    storageBucket: "unichat-app-a3245.appspot.com",
    messagingSenderId: "717580705678",
    appId: "1:717580705678:web:7951599ec37427729dcedf",
  })
  .auth();
