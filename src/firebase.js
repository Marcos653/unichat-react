import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAuKv85KOJYnbh5f6pUsccLHABQxGTYSdg",
    authDomain: "unichat-846ad.firebaseapp.com",
    projectId: "unichat-846ad",
    storageBucket: "unichat-846ad.appspot.com",
    messagingSenderId: "135844545276",
    appId: "1:135844545276:web:6062b4eb6911abbf79cd79",
  })
  .auth();
