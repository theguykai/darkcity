import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Video />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
