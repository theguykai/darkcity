const Navbar = () => {
  return (
    <div>
      <nav className="z-5 flex justify-center items-center p-2">
        <ul className="flex justify-between items-center">
          <li className="my-0 mx-2 p-0.5 list-none border-b-2 border-current  border-transparent">
            <a href="#home-section" className="nav-link no-underline">
              Home
            </a>
          </li>
          <li className="my-0 mx-2 p-0.5 list-none border-b-2 border-current  border-transparent">
            <a href="#about-section" className="nav-link no-underline">
              About
            </a>
          </li>
          <h4 className="my-0 mx-1 py-0 px-2 text-lg text-center font-bold uppercase tracking-tighter border-r-2 border-l-2 border-current">
            Dark City Productions
          </h4>
          <li className="my-0 mx-2 p-0.5 list-none border-b-2 border-current  border-transparent">
            <a href="#portfolio-section" className="nav-link no-underline">
              Portfolio
            </a>
          </li>
          <li className="my-0 mx-2 p-0.5 list-none border-b-2 border-current  border-transparent">
            <a href="#contact-section" className="nav-link no-underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
