const Project = (props) => {
  return (
    <div className="card flex justify-center items-center w-full my-8">
      <a href={props.url} className="project-link flex">
        {/* render pic different side each time */}

        {props.num % 2 === 1 ? (
          <img
            src={props.img}
            alt="thumbnail"
            className="project-img w-full object-cover rounded-3xl"
          />
        ) : (
          <div className="project-context flex justify-center items-center flex-col lg:hidden">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        )}
        {props.num % 2 === 0 ? (
          <img
            src={props.img}
            alt="thumbnail"
            className="project-img w-full object-cover rounded-3xl"
          />
        ) : (
          <div className="project-context flex justify-center items-center flex-col text-center lg:hidden">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        )}
      </a>
    </div>
  );
};
export default Project;
