import React from "react";

export default function ChatMessage({ message, user }) {
  const { text, uid, photoURL } = message;
  const messageClass = uid === user.uid ? "sent" : "received";

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
