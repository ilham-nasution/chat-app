import React from "react";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./components/Header";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <div className="content">
        <Header user={user} />
        {user ? (
          <section>
            <ChatRoom user={user} />
          </section>
        ) : (
          <h3>Welcome, please sign in first.</h3>
        )}
      </div>
    </div>
  );
}

export default App;
