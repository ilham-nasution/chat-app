import React, { useContext } from "react";
import SignOut from "./SignOut";
import { ThemeContext } from "../context/ThemeContext";

const Header = ({ user }) => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);

  return (
    <header className={darkTheme ? "header-dark" : ""}>
      <h2>Chat App</h2>
      <div className="row">
        <label className="switch">
          <input type="checkbox" />
          <span
            onClick={() => {
              setDarkTheme(!darkTheme);
            }}
            className="slider round"
          ></span>
        </label>
        <span className="fas fa-adjust"></span>
        {user && <SignOut />}
      </div>
    </header>
  );
};

export default Header;
