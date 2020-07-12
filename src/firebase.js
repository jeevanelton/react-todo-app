import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzCBUtxCfwC13wP5CVCaIPps1BjqHHOWw",
  authDomain: "todo-app-3a0d1.firebaseapp.com",
  databaseURL: "https://todo-app-3a0d1.firebaseio.com",
  projectId: "todo-app-3a0d1",
  storageBucket: "todo-app-3a0d1.appspot.com",
  messagingSenderId: "1061344326681",
  appId: "1:1061344326681:web:d370ef81fef26799002688",
  measurementId: "G-100VRNGW6D",
});

const db = firebaseApp.firestore();

export default db;
