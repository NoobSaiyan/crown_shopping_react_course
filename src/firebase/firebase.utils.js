import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBQR46HOywA2LwdbY2n2Y8LWLLhqPampe8",
  authDomain: "crwn-db-1eb95.firebaseapp.com",
  databaseURL: "https://crwn-db-1eb95.firebaseio.com",
  projectId: "crwn-db-1eb95",
  storageBucket: "crwn-db-1eb95.appspot.com",
  messagingSenderId: "318520901935",
  appId: "1:318520901935:web:01cfd4caa8b0fe49d4e1da",
  measurementId: "G-R3VZNMDNVQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
