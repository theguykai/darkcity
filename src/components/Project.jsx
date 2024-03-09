const Project = (props) => {
  return (
    <div className="card flex justify-center items-center w-10/12 my-8 rounded-3xl flex-col sm:flex-row shadow-[0_0_30px_1px_rgba(200,200,200,0.1)]  hover:shadow-gray-300  duration-300 transition">
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
            {/* <p className="bg-transparent">{props.description}</p> */}
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
            {/* <p className="bg-transparent">{props.description}</p> */}
          </div>
        )}
      </a>
    </div>
  );
};
export default Project;
