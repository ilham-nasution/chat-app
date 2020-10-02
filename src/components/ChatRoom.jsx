import React, { useState, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { firestore, timestamp } from "../firebase";

import { useCollectionData } from "react-firebase-hooks/firestore";

export default function ChatRoom({ user }) {
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
      <main>
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
          className={formValue ? "button-send" : "button-send-disabled"}
          type="submit"
          disabled={!formValue}
        >
          Send
        </button>
      </form>
    </>
  );
}
