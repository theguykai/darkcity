const Portfolio = (props) => {
  return (
    <div>
      <section
        id="portfolio-section"
        className="flex justify-center items-center flex-col"
      >
        <h1 className="my-3 text-3xl md:text-4xl uppercase font-extrabold tracking-tighter">
          Portfolio
        </h1>
        <div
          id="portfolio-container"
          className="flex justify-center items-center flex-col w-screen"
        >
          {props.projects}
        </div>
      </section>
    </div>
  );
};
export default Portfolio;
