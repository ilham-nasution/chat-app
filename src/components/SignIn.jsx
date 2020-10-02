import React from "react";
import { signInWithGoogle } from "../firebase";

export default function SignIn() {
  return (
    <button className="button-auth" onClick={signInWithGoogle}>
      Sign In
    </button>
  );
}
