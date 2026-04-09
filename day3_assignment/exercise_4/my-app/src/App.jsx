import React from "react";
import NavLink from "./components/NavLink";

function App() {
  return (
    <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </nav>
  );
}

export default App;