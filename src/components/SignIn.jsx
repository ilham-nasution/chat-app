import React from "react";
import { signInWithGoogle } from "../firebase";

export default function SignIn() {
  return (
    <div className="center">
      <h3>Welcome, please sign in first.</h3>
      <button className="button-auth sign-in" onClick={signInWithGoogle}>
        Sign In <span className="fas fa-sign-in-alt"></span>
      </button>
    </div>
  );
}
