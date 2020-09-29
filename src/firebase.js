import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCG_jyRQFnTPghv4pKDHpSISZ0f6Tlgit8",
  authDomain: "facebook-messenger-clone-ceeb9.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-ceeb9.firebaseio.com",
  projectId: "facebook-messenger-clone-ceeb9",
  storageBucket: "facebook-messenger-clone-ceeb9.appspot.com",
  messagingSenderId: "664623314855",
  appId: "1:664623314855:web:ee6f85b5c758698fe56882",
});

const db = firebaseApp.firestore();

export default db;
