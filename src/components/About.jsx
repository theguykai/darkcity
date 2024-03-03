import profilePic from "../img/ashprofile.jpg";

const About = () => {
  return (
    <div>
      <section id="about-section">
        <article>
          <img src={profilePic} alt="profilepic" id="profile-img" />
          <div id="about-text">
            <h2>I'm Ashley Gecks</h2>
            <p>A freelance cinematographer located on the Gold Coast.</p>
            <p>
              I have been a camera and steadicam operator on multiple
              productions.
            </p>
            <p>
              I also edit videos and have worked in the industry for over 10
              years.
            </p>
            <p>
              <a href="" id="contact-link">
                Contact Me
              </a>{" "}
              for any inquiries or bookings.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};
export default About;
