import firebase  from "firebase/app";
import  "firebase/firestore";
import  "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyCQLueS_w0UVjCWaPIn60uucyfcHPpJHdU",
authDomain: "react-apps-develop.firebaseapp.com",
projectId: "react-apps-develop",
storageBucket: "react-apps-develop.appspot.com",
messagingSenderId: "740314088018",
appId: "1:740314088018:web:4cd1f750c961df4d64958b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}