// App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <p style={{ padding: "20px" }}>Main Content</p>
      <Footer />
    </div>
  );
}

export default App;