import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_KB1_JMAtblcr5pxzFpJ5LpnR1ofr5B8",
  authDomain: "unbun-chat.firebaseapp.com",
  projectId: "unbun-chat",
  storageBucket: "unbun-chat.appspot.com",
  messagingSenderId: "70325897604",
  appId: "1:70325897604:web:94745ad5e089e0f40975d1",
  measurementId: "G-WZ0YDR8NHX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
