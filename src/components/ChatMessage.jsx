import React from "react";

export default function ChatMessage({ message, auth }) {
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL ||
            "https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg"
          }
          alt="profile"
        />
        <p>{text}</p>
      </div>
    </>
  );
}
