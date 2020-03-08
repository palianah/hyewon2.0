import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    projectId: "hyewonshin-ab2ff",
    apiKey: "AIzaSyBi6RUpQuTR--G1DYNYHVY7c2scl2bzZZI",
    authDomain: "hyewonshin-ab2ff.firebaseapp.com",
    databaseURL: "https://hyewonshin-ab2ff.firebaseio.com",
    storageBucket: "hyewonshin-ab2ff.appspot.com",
    messagingSenderId: "311751220299",
    appId: "1:311751220299:web:fe03e0ae19c647b4b541ce",
    measurementId: "G-EVLG5GJC70"
  })
  .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };
