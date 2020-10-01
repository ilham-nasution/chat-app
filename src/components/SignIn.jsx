import React from "react";
import firebase from "firebase/app";

export default function SignIn({ auth }) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button className="button-auth" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}
