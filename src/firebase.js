import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAIy0G8m1jwv-FucPPRYryZlDRk4t0V9Zs",
  authDomain: "todoapp-4c932.firebaseapp.com",
  projectId: "todoapp-4c932",
  storageBucket: "todoapp-4c932.appspot.com",
  messagingSenderId: "191250086334",
  appId: "1:191250086334:web:6f873192d3070965b5e1ef",
  measurementId: "G-89B620Z4ET",
});

const db = firebaseApp.firestore();

export default db;
