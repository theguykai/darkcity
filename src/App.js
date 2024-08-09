import React from "react";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import images from "./data/images.js";

export default function App() {
  const projects = images.map((image) => {
    return (
      <Project
        key={image.id}
        num={image.id}
        title={image.title}
        description={image.description}
        img={image.img}
        url={image.url}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Video />
      <About />
      <Portfolio projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}
