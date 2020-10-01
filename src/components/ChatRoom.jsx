import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import firebase from "firebase/app";

import { useCollectionData } from "react-firebase-hooks/firestore";

export default function ChatRoom({ firestore, auth }) {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(10);
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
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} auth={auth} />
          ))}
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </>
  );
}