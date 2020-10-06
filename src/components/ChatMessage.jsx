import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ChatMessage({ message, user }) {
  const [darkTheme] = useContext(ThemeContext);
  const { text, uid, photoURL } = message;
  const messageClass = uid === user.uid ? "sent" : "received";

  return (
    <>
      <div
        className={
          darkTheme
            ? `message message-dark ${messageClass}`
            : `message ${messageClass}`
        }
      >
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
