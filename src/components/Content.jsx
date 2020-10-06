import React, { useContext } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./Header";
import SignIn from "./SignIn";
import ChatRoom from "./ChatRoom";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [user] = useAuthState(auth);

  return (
    <div className={darkTheme ? "content content-dark" : "content"}>
      <Header user={user} />
      {user ? (
        <section>
          <ChatRoom user={user} />
        </section>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Content;
