import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";
import SignOut from "./components/SignOut";

import firebase from "firebase/app";
import firebaseConfig from "./config";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <div className="content">
        <header>
          <h1>Chat App</h1>
          <SignOut auth={auth} />
        </header>
        <section>
          {user ? (
            <ChatRoom firestore={firestore} auth={auth} />
          ) : (
            <SignIn auth={auth} />
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
