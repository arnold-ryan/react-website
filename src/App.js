import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
