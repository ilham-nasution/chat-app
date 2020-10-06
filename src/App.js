import React from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Content from "./components/Content";

function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
