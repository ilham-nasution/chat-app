import React from "react";
import { signOut } from "../firebase";

export default function SignOut() {
  return (
    <button className="button-auth sign-out" onClick={signOut}>
      <span className="fas fa-sign-out-alt"></span>
    </button>
  );
}
