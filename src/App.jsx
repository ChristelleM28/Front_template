import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Template Front-End</header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
