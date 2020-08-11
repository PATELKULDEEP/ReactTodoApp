import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAFTNnjLq8VEvfqZ13sS6jtgYm_6ePRF-s",
    authDomain: "daily-shopping-list-d2ee9.firebaseapp.com",
    databaseURL: "https://daily-shopping-list-d2ee9.firebaseio.com",
    projectId: "daily-shopping-list-d2ee9",
    storageBucket: "daily-shopping-list-d2ee9.appspot.com",
    messagingSenderId: "762670967186",
    appId: "1:762670967186:web:cc851e22bec2ceee3db94b",
    measurementId: "G-X9VDJ1J3VL"  
});

const db = firebaseApp.firestore();

export default db ;