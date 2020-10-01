import React, { useState, useRef } from "react";
import ChatMessage from "./ChatMessage";
import firebase from "firebase/app";

import { useCollectionData } from "react-firebase-hooks/firestore";

export default function ChatRoom({ firestore, auth }) {
  const space = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
            <ChatMessage key={message.id} message={message} auth={auth} />
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
