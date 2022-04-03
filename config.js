import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBEDXLJe0QGmBTh28WoclR16HKgXMEwAfY",
  authDomain: "e-ride-d922d.firebaseapp.com",
  projectId: "e-ride-d922d",
  storageBucket: "e-ride-d922d.appspot.com",
  messagingSenderId: "866073168065",
  appId: "1:866073168065:web:e28fb1b52c4b92ee036c40"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
