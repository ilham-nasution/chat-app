import React from "react";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Header = ({ user }) => {
  return (
    <header>
      <h2>Chat App</h2>
      {user ? <SignOut user={user} /> : <SignIn />}
    </header>
  );
};

export default Header;
