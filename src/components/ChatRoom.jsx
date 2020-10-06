import React, { useState, useRef, useContext } from "react";
import ChatMessage from "./ChatMessage";
import { firestore, timestamp } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ThemeContext } from "../context/ThemeContext";

export default function ChatRoom({ user }) {
  const [darkTheme] = useContext(ThemeContext);
  const space = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = user;
    await messagesRef.add({
      text: formValue,
      createdAt: timestamp,
      uid,
      photoURL,
    });
    setFormValue("");
    space.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className={darkTheme ? "main-dark" : ""}>
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} user={user} />
          ))}
        <span ref={space}></span>
      </main>

      <form className="form-send" onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message"
        />

        <button
          className={
            formValue
              ? darkTheme
                ? "button-send button-send-dark"
                : "button-send"
              : darkTheme
              ? "button-send-disabled button-send-disabled-dark"
              : "button-send-disabled"
          }
          type="submit"
          disabled={!formValue}
        >
          Send
        </button>
      </form>
    </>
  );
}
