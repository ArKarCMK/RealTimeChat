import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdlJjgiEoD7vUVoZuS2ZguA6iOvJm15Rg",
  authDomain: "real-time-chat-a5c97.firebaseapp.com",
  projectId: "real-time-chat-a5c97",
  storageBucket: "real-time-chat-a5c97.appspot.com",
  messagingSenderId: "757316183412",
  appId: "1:757316183412:web:159f71d5acacf679af3821",
  measurementId: "G-5X8S0DX2Q7"
};

firebase.initializeApp(firebaseConfig);

let db=firebase.firestore();
let auth = firebase.auth();
let timestamp= firebase.firestore.FieldValue.serverTimestamp;

export {db, timestamp, auth};