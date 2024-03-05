const Project = (props) => {
  return (
    <div className="card">
      <a href={props.url} className="project-link">
        <img src={props.img} alt="thumbnail" className="project-img" />
      </a>
      <div className="project-context">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Project;
