import firebase from "firebase/app";
import firebaseConfig from "./config";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

export const signOut = () => {
  auth.signOut();
};

export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
