import profilePic from "../img/ashprofile.jpg";

const About = () => {
  return (
    <div>
      <section
        id="about-section"
        className="flex justify-center items-center h-screen w-screen"
      >
        <article className="flex items-center h-3/4 w-10/12 rounded-lg shadow-[0_0_20px_10px_rgba(200,200,200,0.1)]">
          <img
            src={profilePic}
            alt="profilepic"
            id="profile-img"
            className="h-full w-1/2 object-cover rounded-lg"
          />
          <div className="context flex justify-center items-center w-1/2">
            <div className="flex flex-col gap-3 w-11/12 text-center">
              <h2 className="text-3xl font-bold">I'm Ashley Gecks</h2>
              <hr className="w-full" />
              <p className="text-md">
                A freelance cinematographer & camera operator located on the
                Gold Coast
              </p>
              <hr className="w-full" />
              <p className="text-sm"></p>
              <a
                href="#contact-section"
                id="contact-link"
                className=" bg-white text-black text-sm rounded-xl p-3 m-auto h-full min-w-min  hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out"
              >
                Contact Me
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
export default About;
