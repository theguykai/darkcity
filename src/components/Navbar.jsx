import React, { useState } from "react";

const Navbar = () => {
  //Expand navbar button on mobile
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="w-screen z-5 flex items-center justify-between md:justify-center p-2">
        <h4 className="mx-1 py-0 px-2 text-lg text-center font-bold uppercase tracking-tighter border-r-2 border-l-2 border-current">
          Dark City Productions
        </h4>
        <button
          className="nav-button md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
        <ul
          className={`flex-col md:flex-row md:flex ${
            isOpen ? "flex" : "hidden"
          } absolute md:relative top-12 left-0 md:top-auto w-full md:w-auto md:bg-transparent z-10`}
        >
          <li className="nav-link my-2 mx-2 p-0.5 list-none border-b-2 border-hidden md:border-solid  border-transparent">
            <a href="#home-section" className="no-underline z-10 ">
              Home
            </a>
          </li>
          <li className="nav-link my-2 mx-2 p-0.5 list-none border-b-2 border-hidden md:border-solid border-transparent">
            <a href="#about-section" className="no-underline">
              About
            </a>
          </li>
          <li className="nav-link my-2 mx-2 p-0.5 list-none border-b-2 border-hidden md:border-solid  border-transparent">
            <a href="#portfolio-section" className=" no-underline">
              Portfolio
            </a>
          </li>
          <li className="nav-link my-2 mx-2 p-0.5 list-none border-b-2 border-hidden md:border-solid  border-transparent">
            <a href="#contact-section" className=" no-underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
