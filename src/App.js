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
          <h2>Chat App</h2>
          {user ? <SignOut auth={auth} /> : <SignIn auth={auth} />}
        </header>

        {user ? (
          <section>
            <ChatRoom firestore={firestore} auth={auth} />
          </section>
        ) : (
          <h3>Welcome, please sign in first.</h3>
        )}
      </div>
    </div>
  );
}

export default App;
