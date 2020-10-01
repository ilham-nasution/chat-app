import React from "react";

export default function SignOut({ auth }) {
  return (
    auth.currentUser && (
      <button className="button-auth" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}
