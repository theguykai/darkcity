import React, { useEffect, useRef, useState } from "react";
import profilePic from "../img/ashprofile.jpg";

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const contactRef = useRef(null);
  const hrRef1 = useRef(null);
  const hrRef2 = useRef(null);
  const [animateHr, setAnimateHr] = useState(false);

  // check if the about section is in view then start animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("showAbout");
            setTimeout(() => setAnimateHr(true), 1500);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    if (contactRef.current) {
      setTimeout(() => observer.observe(contactRef.current), 1000);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (animateHr && hrRef1.current) {
      hrRef1.current.classList.add("hr-full-width");
    }
  }, [animateHr]);

  useEffect(() => {
    if (animateHr && hrRef2.current) {
      hrRef2.current.classList.add("hr-full-width");
    }
  }, [animateHr]);

  return (
    <div>
      <section
        id="about"
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
              <h2 ref={headingRef} className="hiddenAbout text-3xl font-bold">
                I'm Ashley Gecks
              </h2>
              <hr ref={hrRef1} />
              <p ref={paragraphRef} className="hiddenAbout text-md">
                A freelance cinematographer & camera operator located on the
                Gold Coast
              </p>
              <hr ref={hrRef2} />
              <a
                href="#contact-section"
                ref={contactRef}
                id="contact-link"
                className="hiddenContact glowing-shadow bg-white text-black text-md rounded-xl p-3 mx-auto my-4 h-full min-w-min  hover:bg-blue-500 hover:text-white transition duration-400 ease-in-out"
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
