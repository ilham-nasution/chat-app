import React from "react";
import { signOut } from "../firebase";

export default function SignOut({ user }) {
  return (
    user && (
      <button className="button-auth" onClick={signOut}>
        Sign Out
      </button>
    )
  );
}
