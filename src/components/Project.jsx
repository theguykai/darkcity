import React, { useEffect, useRef } from "react";

const Project = (props) => {
  // project slide in animation

  const cardRef = useRef(null);

  useEffect(() => {
    const currentCard = cardRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  // chooses if card is sliding in from left or right

  const hiddenElement =
    props.num % 2 === 1 ? "hiddenElementLeft" : "hiddenElementRight";

  return (
    <div
      ref={cardRef}
      className={`card ${hiddenElement} flex justify-center items-center w-11/12 sm:w-9/12 my-8 rounded-3xl flex-col sm:flex-row shadow-[0_0_30px_1px_rgba(200,200,200,0.1)]  hover:shadow-gray-300 hover:w-10/12`}
    >
      {/* render pic different side each time */}
      <a href={props.url} className="project-link flex w-full rounded-3xl">
        {props.num % 2 === 1 ? (
          <img
            src={props.img}
            alt="thumbnail"
            className="project-img w-1/2 object-cover rounded-3xl"
          />
        ) : (
          <div className="project-context w-1/2 flex justify-center items-center flex-col text-center text-sm sm:text-lg md:text-xl lg:text-2xl bg-transparent">
            <h3 className="bg-transparent">{props.title}</h3>
          </div>
        )}
        {props.num % 2 === 0 ? (
          <img
            src={props.img}
            alt="thumbnail"
            className="project-img w-1/2 object-cover rounded-3xl"
          />
        ) : (
          <div className="project-context w-1/2 flex justify-center items-center flex-col text-center text-sm sm:text-lg md:text-xl lg:text-2xl bg-transparent">
            <h3 className="bg-transparent">{props.title}</h3>
          </div>
        )}
      </a>
    </div>
  );
};
export default Project;
